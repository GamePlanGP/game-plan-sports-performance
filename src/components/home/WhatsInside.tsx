"use client";

import { useState } from "react";
import { LAUNCH_MODE, cleanLabelFlags, electrolytes, focusBlend, inside } from "@/content/homepage";
import { Amount } from "./ui/Price";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { Placeholder } from "./ui/Placeholder";
import { CheckIcon } from "./ui/Icons";
import { placeholderId } from "@/lib/home";

const tierLabel = "text-[0.66rem] font-semibold tracking-[0.2em] text-hp-ink-soft uppercase";
const LINING = "[font-variant-numeric:lining-nums]";

function BlendRoster() {
  const { confirmed, descriptors, placeholderCount, formula } = focusBlend;
  if (confirmed.length === 0) {
    return (
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <li key={i} className="rounded-hp border border-hp-line p-4" aria-label="Blend ingredient placeholder">
            <Placeholder id={placeholderId(formula) ?? formula} />
            <div className="mt-3 h-3 w-2/3 rounded-hp bg-hp-tint-2" />
            <div className="mt-2 h-2.5 w-full rounded-hp bg-hp-tint" />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
      {confirmed.map((name) => (
        <li key={name} className="rounded-hp border border-hp-line p-4">
          <p className="font-semibold">{name}</p>
          <p className="mt-1 text-sm text-hp-ink-soft">
            {descriptors[name] ? <Txt v={descriptors[name]} /> : <Placeholder id="BLEND_DESCRIPTOR" />}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ElectrolyteTable() {
  const { rows, placeholderRows, panel } = electrolytes;
  const cell = "border-t border-hp-line py-3 pr-4 text-left";
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[320px] text-sm">
        <thead>
          <tr>
            {inside.plus.columns.map((c) => (
              <th key={c} scope="col" className="pb-2 pr-4 text-left text-[0.62rem] font-semibold tracking-[0.16em] text-hp-ink-soft uppercase">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0
            ? rows.map((r) => (
                <tr key={r.name}>
                  <th scope="row" className={`${cell} font-semibold`}>{r.name}</th>
                  <td className={`${cell} ${LINING}`}>{r.mg} mg</td>
                  <td className={`${cell} ${LINING}`}>{r.dv}</td>
                </tr>
              ))
            : Array.from({ length: placeholderRows }).map((_, i) => (
                <tr key={i}>
                  <td className={cell}>{i === 0 ? <Placeholder id={placeholderId(panel) ?? panel} /> : <div className="h-2.5 w-24 rounded-hp bg-hp-tint-2" />}</td>
                  <td className={cell}><div className="h-2.5 w-14 rounded-hp bg-hp-tint-2" /></td>
                  <td className={cell}><div className="h-2.5 w-10 rounded-hp bg-hp-tint-2" /></td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export function WhatsInside() {
  const [labelOpen, setLabelOpen] = useState(false);
  const { ask, proof, playbook, plus, cleanLabel } = inside;
  const showUnconfirmed = LAUNCH_MODE !== "live";
  const items = cleanLabel.items.filter((item) => cleanLabelFlags[item.id] || showUnconfirmed);

  return (
    <Section id="inside" tone="white" labelledBy="inside-heading">
      <SectionHeading id="inside-heading" heading={inside.heading} className="max-w-3xl" />
      <p className="mt-4 max-w-2xl text-base md:text-lg">
        <Txt v={inside.subline} />
      </p>

      <div className="mt-10">
        <p className={tierLabel}>{ask.eyebrow}</p>
        <dl className="mt-4 grid gap-6 md:grid-cols-3">
          {ask.rows.map((row) => (
            <div key={row.question} className="border-t border-hp-line pt-4">
              <dt className="font-display text-xl leading-snug font-semibold">{row.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed">
                <Txt v={row.answer} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Tier 1 — the proof */}
      <div className="mt-14">
        <p className={tierLabel}>Tier 1 · {proof.tier}</p>
        <div className="mt-3 rounded-hp border border-hp-navy p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className={tierLabel}>{proof.kind}</p>
              <h3 className="font-display mt-2 text-4xl leading-tight font-semibold md:text-5xl">{proof.name}</h3>
              <p className="mt-3 leading-relaxed">
                <Txt v={proof.body} />
              </p>
            </div>
            <p className={`font-display ${LINING} text-6xl leading-none font-medium text-hp-burgundy md:text-7xl`}>{proof.dose}</p>
          </div>
        </div>
      </div>

      {/* Tier 2 — the playbook */}
      <div className="mt-8">
        <p className={tierLabel}>Tier 2 · {playbook.tier}</p>
        <div className="mt-3 rounded-hp border border-hp-line p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-4xl leading-tight font-semibold">
                <Txt v={{ text: focusBlend.name, draft: true, dependsOn: [focusBlend.nameMatchesLabel] }} />
              </h3>
              <p className="font-display mt-3 text-2xl italic">
                <Txt v={playbook.pull} />
              </p>
              <p className="mt-2 leading-relaxed">
                <Txt v={playbook.body} />
              </p>
            </div>
            <p className="text-sm">
              <span className={tierLabel}>{playbook.totalLabel}</span>
              <span className={`mt-1 block text-2xl font-semibold ${LINING}`}>
                <Amount value={focusBlend.totalMg} /> mg
              </span>
            </p>
          </div>
          <BlendRoster />
        </div>
      </div>

      {/* Tier 3 — the + */}
      <div className="mt-8">
        <p className={tierLabel}>Tier 3 · {plus.tier}</p>
        <div className="mt-3 rounded-hp border border-hp-line p-6 md:p-10">
          <h3 className="font-display text-4xl leading-tight font-semibold">
            <Txt v={plus.heading} />
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed">
            <Txt v={plus.body} />
          </p>
          <ElectrolyteTable />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="button"
          aria-expanded={labelOpen}
          aria-controls="hp-label-panel"
          onClick={() => setLabelOpen((o) => !o)}
          className="text-[0.72rem] font-semibold tracking-[0.16em] text-hp-navy uppercase underline decoration-hp-burgundy decoration-[1.5px] underline-offset-[5px] transition-colors hover:text-hp-ink-soft motion-reduce:transition-none"
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
