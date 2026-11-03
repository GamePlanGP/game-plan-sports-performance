import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { seo } from "@/content/homepage";

// Stopgap share card until {{OG_IMAGE}} is supplied (spec: 1200×630).
export const dynamic = "force-static";
export const alt = seo.shareImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#002D62";
const SILVER = "#C4CED4";
const BURGUNDY = "#862633";

export default function OpengraphImage() {
  const wordmark = readFileSync(join(process.cwd(), "src/assets/gp-wordmark-white.png"));
  const logoSrc = `data:image/png;base64,${wordmark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: NAVY,
          color: "white",
          borderTop: `10px solid ${BURGUNDY}`,
        }}
      >
        <img src={logoSrc} width={199} height={110} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 4, background: BURGUNDY, marginBottom: 28 }} />
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "0.04em", lineHeight: 1 }}>CLARITY+</div>
          <div style={{ marginTop: 22, fontSize: 38, color: SILVER }}>Commit to every shot.</div>
        </div>
        <div style={{ fontSize: 22, letterSpacing: "0.22em", color: SILVER }}>
          DECISION-MAKING DRINK MIX FOR GOLFERS
        </div>
      </div>
    ),
    size,
  );
}
