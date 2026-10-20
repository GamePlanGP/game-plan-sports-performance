"use client";

import { useState } from "react";
import { LAUNCH_MODE, cleanLabelFlags, inside } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { Placeholder } from "./ui/Placeholder";
import { CheckIcon } from "./ui/Icons";
import { placeholderId } from "@/lib/home";

export function WhatsInside() {
  const [labelOpen, setLabelOpen] = useState(false);
  const { featured, cleanLabel } = inside;
  const showUnconfirmed = LAUNCH_MODE !== "live";
  const items = cleanLabel.items.filter((item) => cleanLabelFlags[item.id] || showUnconfirmed);

  return (
    <Section id="inside" tone="white" labelledBy="inside-heading">
      <SectionHeading id="inside-heading" heading={inside.heading} className="max-w-3xl" />

      <div className="mt-10 rounded-hp border border-hp-navy p-6 md:p-10 lg:mt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-hp-ink-soft uppercase">
              {featured.kind}
            </p>
            <h3 className="font-display mt-2 text-4xl leading-tight font-semibold md:text-5xl">{featured.name}</h3>
            <p className="mt-3 leading-relaxed">
              <Txt v={featured.reason} />
            </p>
          </div>
          <p className="font-display [font-variant-numeric:lining-nums] text-6xl leading-none font-medium text-hp-burgundy md:text-7xl">{featured.dose}</p>
        </div>
      </div>

      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {inside.others.map((item, i) => (
          <li key={i} className="rounded-hp border border-hp-line p-5" aria-label="Ingredient placeholder">
            <Placeholder id={placeholderId(item) ?? item} />
            <div className="mt-4 h-3 w-2/3 rounded-hp bg-hp-tint-2" />
            <div className="mt-2 h-3 w-1/3 rounded-hp bg-hp-tint-2" />
            <div className="mt-4 h-2.5 w-full rounded-hp bg-hp-tint" />
            <div className="mt-2 h-2.5 w-4/5 rounded-hp bg-hp-tint" />
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button
          type="button"
          aria-expanded={labelOpen}
          aria-controls="hp-label-panel"
          onClick={() => setLabelOpen((o) => !o)}
          className="text-[0.72rem] font-semibold tracking-[0.16em] text-hp-navy uppercase underline decoration-1 underline-offset-[5px] transition-colors hover:text-hp-ink-soft motion-reduce:transition-none"
        >
          {labelOpen ? inside.label.close : inside.label.open}
        </button>
        {labelOpen ? (
          <div id="hp-label-panel" className="mt-5 max-w-md">
            <Media {...inside.label.image} ratio="3 / 4" />
          </div>
        ) : null}
      </div>

      {items.length > 0 ? (
        <div className="mt-14 border-t border-hp-line pt-8">
          <p className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] text-hp-ink-soft uppercase">
            Clean label {showUnconfirmed ? <Txt v={cleanLabel.note} /> : null}
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((item) => {
              const confirmed = cleanLabelFlags[item.id];
              return (
                <li key={item.id} className={`flex flex-col items-start gap-3 ${confirmed ? "" : "opacity-55"}`}>
                  <span
                    aria-hidden="true"
                    className={`flex h-10 w-10 items-center justify-center rounded-hp border ${
                      confirmed ? "border-hp-navy text-hp-navy" : "border-hp-line text-hp-ink-soft"
                    }`}
                  >
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <span className="text-[0.7rem] leading-snug font-semibold tracking-[0.12em] uppercase">
                    {item.label}
                    {confirmed ? null : (
                      <span className="mt-1 block text-[0.58rem] tracking-[0.16em] text-hp-ink-soft">
                        {cleanLabel.unconfirmed}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
