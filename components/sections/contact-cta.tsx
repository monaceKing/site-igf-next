"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/lib/actions";
import { LedgerDivider } from "@/components/ui/ledger-divider";
import { CONTACT_INFO } from "@/lib/constants";

const initialState: ContactState = { success: false, message: "" };

export function ContactCta() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  return (
    <>
      <LedgerDivider id="contact" index="06" label="Contact" />
      <section>
        <div className="grid overflow-hidden rounded-[20px] border border-line md:grid-cols-2">
          <div className="flex flex-col justify-center bg-ink p-9 text-paper md:p-11">
            <h2 className="font-display text-[28px] text-paper">Discutons de votre projet.</h2>
            <p className="mt-3.5 text-[14.5px] leading-[1.6] text-paper/70">
              Un besoin de migration, une question sur nos formations, ou juste un devis — notre équipe répond sous
              24h ouvrées.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 font-mono text-sm text-paper/85">
              <span>{CONTACT_INFO.phone}</span>
              <span>{CONTACT_INFO.email}</span>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>

          <div className="bg-paper-2 p-9 md:p-11">
            <form action={formAction}>
              <div className="mb-4">
                <label className="mb-1.5 block text-[12.5px] font-semibold" htmlFor="name">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-[9px] border border-line bg-paper px-3.5 py-[11px] text-sm text-ink"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1.5 block text-[12.5px] font-semibold" htmlFor="email">
                  Email professionnel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@entreprise.sn"
                  className="w-full rounded-[9px] border border-line bg-paper px-3.5 py-[11px] text-sm text-ink"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1.5 block text-[12.5px] font-semibold" htmlFor="message">
                  Votre besoin
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet en quelques mots..."
                  className="h-20 w-full resize-none rounded-[9px] border border-line bg-paper px-3.5 py-[11px] text-sm text-ink"
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="w-full justify-center rounded-[10px] bg-accent px-5 py-[11px] text-sm font-semibold text-accent-ink transition hover:brightness-[1.06] disabled:opacity-60"
              >
                {pending ? "Envoi en cours..." : "Envoyer la demande"}
              </button>
              {state.message && (
                <p className={`mt-3 text-[13px] ${state.success ? "text-accent" : "text-red-500"}`}>
                  {state.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}