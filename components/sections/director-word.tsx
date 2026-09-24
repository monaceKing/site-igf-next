import Image from "next/image";
import { LedgerDivider } from "@/components/ui/ledger-divider";

export function DirectorWord() {
  return (
    <>
      <LedgerDivider index="01" label="Le mot du directeur" />
      <section>
        <div className="grid gap-10 rounded-[20px] border border-line bg-paper-2 p-10 md:grid-cols-[220px_1fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
            <Image
              src="/team/Diop1.jpeg"
              alt="Doudou Diop"
              fill
              sizes="220px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <blockquote className="font-display text-xl italic leading-[1.5]">
              « Depuis plus de 15 ans, nous aidons les entreprises sénégalaises à professionnaliser leur gestion —
              sans complexité inutile, avec des outils qui grandissent avec elles. »
            </blockquote>
            <div className="mt-[18px] text-sm font-semibold">Doudou Diop</div>
            <div className="text-[13px] text-ink-soft">Directeur Général, IGF SARL</div>
          </div>
        </div>
      </section>
    </>
  );
}