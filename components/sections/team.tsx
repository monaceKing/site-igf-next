import { LedgerDivider } from "@/components/ui/ledger-divider";
import { TEAM } from "@/lib/constants";

export function Team() {
  return (
    <>
      <LedgerDivider id="equipe" index="04" label="L'équipe" />
      <section>
        <div className="mb-11 max-w-[640px]">
          <div className="font-mono text-xs uppercase tracking-[.14em] text-accent">Qui vous accompagne</div>
          <h2 className="mt-3.5 font-display text-[26px] md:text-[38px]">
            Une équipe locale, disponible et impliquée.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name}>
              <div className="mb-3.5 flex aspect-square items-center justify-center rounded-2xl border border-line bg-paper-2 font-display text-[26px] text-ink-soft">
                {member.initials}
              </div>
              <h4 className="text-[15px] font-semibold">{member.name}</h4>
              <div className="font-mono text-[12.5px] text-accent">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
