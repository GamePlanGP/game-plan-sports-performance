import type { Copy } from "@/content/homepage";
import { splitPlaceholders } from "@/lib/home";
import { DraftPill, Placeholder } from "./Placeholder";

/**
 * Renders a content string or Copy object inline: `{{ID}}` tokens become
 * placeholder tags and `draft: true` adds a DRAFT pill.
 */
export function Txt({ v }: { v: string | Copy }) {
  const copy: Copy = typeof v === "string" ? { text: v } : v;
  return (
    <>
      {splitPlaceholders(copy.text).map((seg, i) =>
        seg.kind === "text" ? (
          <span key={i}>{seg.value}</span>
        ) : (
          <Placeholder key={i} id={seg.id} />
        ),
      )}
      {copy.draft ? <DraftPill dependsOn={copy.dependsOn} /> : null}
    </>
  );
}
