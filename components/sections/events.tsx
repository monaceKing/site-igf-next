import { LedgerDivider } from "@/components/ui/ledger-divider";
import { EVENTS } from "@/lib/constants";

export function Events() {
  return (
    <>
      <LedgerDivider id="evenements" index="05" label="Vie de l'entreprise" />
      <section>
        <div className="mb-11 max-w-[640px]">
          <div className="font-mono text-xs uppercase tracking-[.14em] text-accent">Sur le terrain</div>
          <h2 className="mt-3.5 font-display text-[26px] md:text-[38px]">
            Formations, séminaires et moments forts.
          </h2>
          <p className="mt-3.5 text-[15.5px] leading-[1.6] text-ink-soft">
            Un aperçu de nos interventions récentes auprès de nos clients et partenaires.
          </p>
        </div>

        <div className="grid grid-cols-2 auto-rows-[130px] gap-3.5 md:grid-cols-4 md:auto-rows-[150px]">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className={`relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-accent/20 to-gold/20 ${
                event.featured ? "col-span-2 row-span-1 md:row-span-2" : ""
              }`}
            >
              <span className="absolute left-3 top-3 z-10 rounded-full bg-paper/80 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[.06em] backdrop-blur">
                {event.category}
              </span>
              <div className="absolute inset-0 flex items-center justify-center font-display text-ink-soft/55">
                {event.category[0]}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3.5">
                <h4 className={`font-display font-medium text-paper ${event.featured ? "text-[19px]" : "text-[14.5px]"}`}>
                  {event.title}
                </h4>
                <span className="font-mono text-[10.5px] text-paper/70">{event.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
