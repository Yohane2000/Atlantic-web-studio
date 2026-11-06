import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATION_EMAIL = "yohanewagra94@gmail.com";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "La configuration de l'envoi d'e-mails est manquante." },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const budget = String(body.budget || "Non précisé").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 },
      );
    }

    if (
      name.length > 120 ||
      email.length > 254 ||
      phone.length > 40 ||
      service.length > 100 ||
      budget.length > 100 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Certains champs sont trop longs." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Veuillez saisir une adresse e-mail valide." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Non renseigné");
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: "Atlantic Web Studio <onboarding@resend.dev>",
      to: [DESTINATION_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; color: #101828;">
          <div style="background: #101828; padding: 28px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0;">Atlantic Web Studio</h1>
            <p style="color: #93c5fd; margin-bottom: 0;">Nouvelle demande de contact</p>
          </div>

          <div style="padding: 28px; border: 1px solid #e2e8f0;">
            <h2>Informations du prospect</h2>

            <p><strong>Nom :</strong> ${safeName}</p>
            <p><strong>E-mail :</strong> ${safeEmail}</p>
            <p><strong>Téléphone :</strong> ${safePhone}</p>
            <p><strong>Service :</strong> ${safeService}</p>
            <p><strong>Budget :</strong> ${safeBudget}</p>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

            <h2>Description du projet</h2>
            <p style="line-height: 1.7;">${safeMessage}</p>
          </div>

          <p style="color: #64748b; font-size: 12px; padding: 12px;">
            Message envoyé depuis le formulaire de contact du site Atlantic Web Studio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        { error: "Impossible d'envoyer votre demande pour le moment." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a bien été envoyée.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Erreur API Contact :", error);

    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 },
    );
  }
}