import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-11">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-6 px-6 text-[13.5px] text-ink-soft">
        <div className="flex items-center gap-2.5 font-display text-[17px]">
          <span className="h-[9px] w-[9px] rounded-full bg-accent" />
          IGF-SARL
        </div>
        <div className="flex flex-wrap gap-14">
          <div>
            <h5 className="mb-3 font-mono text-xs uppercase tracking-[.08em] text-ink">Navigation</h5>
            <a href="#apropos" className="mb-2 block opacity-80 hover:opacity-100">À propos</a>
            <a href="#services" className="mb-2 block opacity-80 hover:opacity-100">Services</a>
            <a href="#equipe" className="mb-2 block opacity-80 hover:opacity-100">Équipe</a>
          </div>
          <div>
            <h5 className="mb-3 font-mono text-xs uppercase tracking-[.08em] text-ink">Partenaires</h5>
            <a href="#partenaires" className="mb-2 block opacity-80 hover:opacity-100">Sage 100</a>
            <a href="#partenaires" className="mb-2 block opacity-80 hover:opacity-100">Odoo</a>
          </div>
          <div>
            <h5 className="mb-3 font-mono text-xs uppercase tracking-[.08em] text-ink">Contact</h5>
            <a href="#contact" className="mb-2 block opacity-80 hover:opacity-100">Demander un devis</a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="mb-2 block opacity-80 hover:opacity-100">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-9 flex max-w-[1180px] flex-wrap justify-between gap-2.5 border-t border-line px-6 pt-5 text-[12.5px] text-ink-soft">
        <span>© {year} IGF-SARL. Tous droits réservés.</span>
        <span className="flex gap-4">
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-ink">Politique de confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
