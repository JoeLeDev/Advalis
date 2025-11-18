import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialiser Resend avec la clé API depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, sector, expertise, message } = body

    // Validation des champs requis
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs marqués d\'un astérisque (*) sont obligatoires.' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'L\'adresse email n\'est pas valide.' },
        { status: 400 }
      )
    }

    // Vérifier que la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY n\'est pas configurée')
      // En développement, on peut continuer sans envoyer l'email
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { error: 'Configuration serveur manquante. Veuillez contacter le support.' },
          { status: 500 }
        )
      }
    }

    // Préparer le contenu de l'email
    const emailSubject = `Nouveau message de contact - ${firstName} ${lastName}`
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; margin-top: 5px; }
            .message-box { background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 10px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: #1a1a1a;">Nouveau message de contact</h2>
              <p style="margin: 5px 0 0 0; color: #666;">Reçu le ${new Date().toLocaleString('fr-FR')}</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Nom complet :</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email :</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">Entreprise / Organisation :</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              ${sector ? `
              <div class="field">
                <div class="label">Secteur d'activité :</div>
                <div class="value">${sector}</div>
              </div>
              ` : ''}
              
              ${expertise ? `
              <div class="field">
                <div class="label">Domaine d'expertise d'intérêt :</div>
                <div class="value">${expertise}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message :</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact du site Advalis.</p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
Nouveau message de contact

Reçu le ${new Date().toLocaleString('fr-FR')}

Nom complet : ${firstName} ${lastName}
Email : ${email}
${company ? `Entreprise / Organisation : ${company}` : ''}
${sector ? `Secteur d'activité : ${sector}` : ''}
${expertise ? `Domaine d'expertise d'intérêt : ${expertise}` : ''}

Message :
${message}
    `.trim()

    // Envoyer l'email uniquement si la clé API est configurée
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev', // À remplacer par votre domaine vérifié
          to: process.env.RESEND_TO_EMAIL || 'contact@advalis.fr',
          replyTo: email, // Permet de répondre directement au client
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
        })
      } catch (emailError) {
        console.error('Erreur lors de l\'envoi de l\'email:', emailError)
        // On continue quand même pour ne pas bloquer l'utilisateur
        // En production, vous pourriez vouloir logger cette erreur dans un service de monitoring
      }
    } else {
      // En développement, on log juste les données
      console.log('Nouveau message de contact (email non envoyé - RESEND_API_KEY manquante):', {
        firstName,
        lastName,
        email,
        company: company || 'Non renseigné',
        sector: sector || 'Non renseigné',
        expertise: expertise || 'Non renseigné',
        message,
        date: new Date().toISOString()
      })
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les 24h.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

