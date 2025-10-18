import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error("Webhook signature verification failed:", error.message);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  // Gérer les différents types d'événements Stripe
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log("Checkout session completed:", session.id);
        
        // Récupérer les détails de la subscription
        if (session.subscription && session.customer) {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          );

          // Enregistrer ou mettre à jour l'abonnement dans la base de données
          await db.subscription.upsert({
            where: {
              stripeSubId: subscription.id,
            },
            create: {
              stripeSubId: subscription.id,
              status: subscription.status,
              planPriceId: subscription.items.data[0].price.id,
              userId: session.metadata?.userId || "guest",
              currentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
            update: {
              status: subscription.status,
              planPriceId: subscription.items.data[0].price.id,
              currentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
          });

          // Mettre à jour le stripeId dans User si nécessaire
          if (session.metadata?.userId) {
            await db.user.update({
              where: { id: session.metadata.userId },
              data: { stripeId: session.customer as string },
            });
          }
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        console.log("Subscription updated:", subscription.id);

        await db.subscription.update({
          where: {
            stripeSubId: subscription.id,
          },
          data: {
            status: subscription.status,
            planPriceId: subscription.items.data[0].price.id,
            currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          },
        });
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        console.log("Subscription deleted:", subscription.id);

        await db.subscription.update({
          where: {
            stripeSubId: subscription.id,
          },
          data: {
            status: "canceled",
          },
        });
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        console.log("Invoice payment succeeded:", invoice.id);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object;
        console.log("Invoice payment failed:", invoice.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: `Webhook handler failed: ${error.message}` },
      { status: 500 }
    );
  }
}

