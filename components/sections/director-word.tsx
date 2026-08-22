import { LedgerDivider } from "@/components/ui/ledger-divider";

export function DirectorWord() {
  return (
    <>
      <LedgerDivider index="01" label="Le mot du directeur" />
      <section>
        <div className="grid gap-10 rounded-[20px] border border-line bg-paper-2 p-10 md:grid-cols-[220px_1fr]">
          <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-accent/35 to-gold/35 font-display text-4xl text-accent">
            DD
          </div>
          <div>
            <blockquote className="font-display text-xl italic leading-[1.5]">
              « Depuis plus de 15 ans, nous aidons les entreprises sénégalaises à professionnaliser leur gestion —
              sans complexité inutile, avec des outils qui grandissent avec elles. »
            </blockquote>
            <div className="mt-[18px] text-sm font-semibold">Doudou Diop</div>
            <div className="text-[13px] text-ink-soft">Directeur Général, IGF-SARL</div>
          </div>
        </div>
      </section>
    </>
  );
}
