"use server";

export type ContactState = {
  success: boolean;
  message: string;
};

// Server Action appelée par le formulaire de contact.
// À brancher sur un vrai service d'envoi (Resend, SendGrid, etc.)
// ou sur une API interne, selon ce que vous utilisez.
export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "Merci de remplir tous les champs." };
  }

  // TODO: brancher l'envoi réel (email, CRM, webhook...)
  console.log("Nouvelle demande de contact :", { name, email, message });

  return { success: true, message: "Votre demande a bien été envoyée. Nous revenons vers vous sous 24h." };
}
