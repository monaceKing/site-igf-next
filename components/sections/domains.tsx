import { LedgerDivider } from "@/components/ui/ledger-divider";
import { DOMAINS } from "@/lib/constants";

export function Domains() {
  return (
    <>
      <LedgerDivider id="services" index="03" label="Nos domaines d'intervention" />
      <section>
        <div className="mb-11 max-w-[640px]">
          <div className="font-mono text-xs uppercase tracking-[.14em] text-accent">Ce que nous faisons</div>
          <h2 className="mt-3.5 font-display text-[26px] md:text-[38px]">
            Quatre domaines, une seule promesse : la fiabilité.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-[18px] md:grid-cols-4">
          {DOMAINS.map((domain) => (
            <div
              key={domain.title}
              className="rounded-2xl border border-line bg-paper-2 p-6 transition-transform hover:-translate-y-1 hover:border-accent"
            >
              <div className="mb-4 font-mono text-[11px] text-accent">{domain.index}</div>
              <h4 className="font-display text-lg font-semibold">{domain.title}</h4>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-soft">{domain.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
