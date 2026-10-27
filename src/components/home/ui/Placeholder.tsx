import { placeholderId } from "@/lib/home";

/** Visible yellow dashed tag for an unresolved `{{ID}}` value. */
export function Placeholder({ id, className = "" }: { id: string; className?: string }) {
  const clean = placeholderId(id) ?? id;
  return (
    <span
      data-placeholder={clean}
      className={`mx-0.5 inline-block max-w-full rounded-hp border border-dashed border-yellow-700 bg-yellow-100 px-1.5 py-px align-baseline font-mono text-[0.68rem] leading-snug font-medium tracking-normal text-yellow-950 normal-case [overflow-wrap:anywhere] ${className}`}
    >
      {`{{${clean}}}`}
    </span>
  );
}

export function DraftPill({ dependsOn }: { dependsOn?: string[] }) {
  return (
    <span
      title={dependsOn?.length ? `Depends on: ${dependsOn.join(", ")}` : "Draft copy — approve or rewrite"}
      className="mx-1.5 inline-block rounded-hp border border-yellow-700 bg-yellow-100 px-1.5 py-px align-middle font-sans text-[0.55rem] leading-snug font-bold tracking-[0.12em] text-yellow-950 uppercase not-italic"
    >
      Draft
    </span>
  );
}
