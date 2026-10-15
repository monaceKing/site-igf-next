"use client";
import { LedgerDivider } from "@/components/ui/ledger-divider";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactCta() {

  return (
    <>
      <LedgerDivider id="contact" index="06" label="Contact" />
      <section>
        <div className="overflow-hidden rounded-[20px] border border-line bg-ink p-9 text-paper md:p-12 lg:p-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-[28px] text-paper md:text-[34px]">
              Discutons de votre projet.
            </h2>

            <p className="mt-3.5 max-w-xl text-[14.5px] leading-[1.7] text-paper/70">
              Un besoin de migration, une question sur nos formations ou
              une demande de devis ? Notre équipe est à votre écoute pour
              vous accompagner dans vos projets.
            </p>
          </div>

          <div className="mt-8 grid gap-5 border-t border-paper/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs text-paper/50">Téléphone</p>
              <p className="font-mono text-sm text-paper/90">
                {CONTACT_INFO.phone}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs text-paper/50">Email</p>
              <p className="break-words font-mono text-sm text-paper/90">
                {CONTACT_INFO.email}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs text-paper/50">Localisation</p>
              <p className="font-mono text-sm text-paper/90">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}