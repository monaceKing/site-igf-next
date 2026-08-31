"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success: boolean;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "Merci de remplir tous les champs." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: "Merci de renseigner une adresse email valide.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "IGF SARL <onboarding@resend.dev>",
      // to: ["contacts@igf-sn.com"],
      to: ["igfdev0@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return {
        success: false,
        message:
          "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler directement.",
      };
    }

    return {
      success: true,
      message:
        "Votre demande a bien été envoyée. Nous revenons vers vous sous 24h.",
    };
  } catch (err) {
    console.error("Erreur envoi email :", err);
    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler directement.",
    };
  }
}
