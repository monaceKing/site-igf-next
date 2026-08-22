type LedgerDividerProps = {
  index: string;
  label: string;
  id?: string;
};

/**
 * Élément signature du design : évoque une ligne d'écriture comptable
 * (numéro de repère + trait + point d'accent). Sépare chaque section
 * de la page comme une entrée de journal.
 */
export function LedgerDivider({ index, label, id }: LedgerDividerProps) {
  return (
    <div id={id} className="my-16 flex items-center gap-4">
      <span className="whitespace-nowrap font-mono text-xs text-ink-soft">{index}</span>
      <div className="relative h-px flex-1 bg-line">
        <span className="absolute -top-[2.5px] left-0 h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
      <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[.08em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}
