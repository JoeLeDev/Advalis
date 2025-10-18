"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PortalButtonProps {
  customerId?: string;
}

export function PortalButton({ customerId }: PortalButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePortal = async () => {
    try {
      setLoading(true);

      // Dans une vraie application, vous récupéreriez le customerId depuis la session ou la BD
      const stripeCustomerId = customerId || "cus_example123";

      const response = await fetch("/api/portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: stripeCustomerId,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Portal error:", data.error);
        alert("Erreur lors de l'accès au portail client");
        return;
      }

      // Rediriger vers le portail client Stripe
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Une erreur s'est produite");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePortal}
      disabled={loading}
      variant="outline"
      size="lg"
    >
      {loading ? "Chargement..." : "Gérer mon abonnement"}
    </Button>
  );
}

