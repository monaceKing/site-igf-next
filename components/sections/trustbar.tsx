import Image from "next/image";
import { LedgerDivider } from "@/components/ui/ledger-divider";
import { TRUSTED_BY } from "@/lib/constants";

export function TrustBar() {
  const doubled = [...TRUSTED_BY, ...TRUSTED_BY];

return (
  <>
    <LedgerDivider index="00" label="Ils nous font confiance" />
    <div className="overflow-hidden pb-10">
      <div className="animate-marquee flex w-max items-center gap-12 md:gap-16">
        {doubled.map((company, i) => (
          <div
            key={`${company.name}-${i}`}
            className="flex h-14 w-[160px] flex-shrink-0 items-center justify-center sm:h-20 sm:w-[200px]"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={400} // Haute définition pour la netteté sur mobile Retina
              height={160}
              quality={90}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </>
);
}