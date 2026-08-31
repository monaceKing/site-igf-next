import { Button } from "@/components/ui/button";
import { KPIS, LEDGER_PREVIEW } from "@/lib/constants";

export function Hero() {
  return (
    <section id="apropos" className="py-16 md:py-[88px]">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-[60px]">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[.14em] text-accent before:h-px before:w-[22px] before:bg-accent">
            Partenaire agréé Sage100 · Odoo
          </div>
          <h1 className="mt-[18px] font-display text-[34px] leading-[1.08] tracking-[-0.01em] md:text-[54px]">
            L&apos;ERP qui tient vos comptes, <em className="text-accent not-italic">votre stock</em> et vos
            équipes au même rythme.
          </h1>
          <p className="mt-[22px] max-w-[480px] text-[17px] leading-[1.65] text-ink-soft">
            IGF accompagne les entreprises sénégalaises dans leur transformation digitale : comptabilité, gestion
            RH, paie et cloud — sur des systèmes éprouvés, déployés et suivis par une équipe locale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="#contact">Demander un devis →</Button>
            <Button href="#services" variant="ghost">
              Voir nos services
            </Button>
          </div>
        </div>

        <div className="relative rounded-[18px] border border-line bg-paper-2 p-6 shadow-[0_30px_60px_-30px_rgba(11,21,58,0.35)]">
          <div className="mb-[18px] flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[.1em] text-ink-soft">
              Journal — Aperçu
            </span>
            <span className="font-mono text-[11px] text-accent">● Actif</span>
          </div>
          {LEDGER_PREVIEW.map((line) => (
            <div
              key={line.label}
              className="flex items-center justify-between border-b border-dashed border-line py-[13px] text-[13.5px] last:border-none"
            >
              <span>{line.label}</span>
              <span className="font-mono font-medium text-accent">{line.status}</span>
            </div>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3.5">
            {KPIS.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-line bg-paper px-4 py-3.5">
                <div className="font-display text-[26px] font-semibold text-accent">{kpi.value}</div>
                <div className="mt-0.5 text-[11.5px] text-ink-soft">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
