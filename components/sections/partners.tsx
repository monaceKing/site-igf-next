import { LedgerDivider } from "@/components/ui/ledger-divider";
import { PARTNERS } from "@/lib/constants";

export function Partners() {
  return (
    <>
      <LedgerDivider id="partenaires" index="02" label="Nos partenariats" />
      <section>
        <div className="mb-11 max-w-[640px]">
          <div className="font-mono text-xs uppercase tracking-[.14em] text-accent">Certifiés &amp; agréés</div>
          <h2 className="mt-3.5 font-display text-[26px] md:text-[38px]">
            Deux écosystèmes, une seule équipe pour les déployer.
          </h2>
        </div>
        <div className="grid gap-[22px] md:grid-cols-2">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-line bg-paper-2 p-7 transition-colors hover:border-accent"
            >
              <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">
                Partenaire agréé
              </span>
              <h3 className="mt-3.5 font-display text-[21px]">{partner.name}</h3>
              <p className="mt-2.5 text-sm text-ink-soft">{partner.tagline}</p>
              <ul className="mt-4 text-sm text-ink-soft">
                {partner.items.map((item) => (
                  <li key={item} className="flex gap-2.5 border-t border-dashed border-line py-2">
                    <span className="text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
