import { LedgerDivider } from "@/components/ui/ledger-divider";
import { TRUSTED_BY } from "@/lib/constants";

export function TrustBar() {
  const doubled = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <>
      <LedgerDivider index="00" label="Ils nous font confiance" />
      <div className="overflow-hidden pb-10">
        <div className="animate-marquee flex w-max gap-[70px]">
          {doubled.map((name, i) => (
            <span key={`${name}-${i}`} className="whitespace-nowrap font-display text-xl opacity-55">
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
