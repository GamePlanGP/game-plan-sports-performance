"use client";

import { useEffect, useState } from "react";
import { faq } from "@/content/homepage";
import { track } from "@/lib/track";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { TextLink } from "./ui/TextLink";
import { PlusIcon } from "./ui/Icons";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    // "#faq-<id>" (e.g. the announcement bar's guarantee link) opens that question.
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#faq-/, "");
      if (id !== window.location.hash && faq.items.some((item) => item.id === id)) setOpenId(id);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const toggle = (id: string) => {
    const opening = openId !== id;
    setOpenId(opening ? id : null);
    if (opening) track("faq_open", { id });
  };

  return (
    <Section id="faq" tone="tint" labelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="faq-heading" heading={faq.heading} />
          <p className="mt-4 text-sm text-hp-ink-soft">
            {faq.contactPrompt} <Txt v={faq.contactEmail} />
          </p>
        </div>

        <ul className="border-y-2 border-hp-burgundy">
          {faq.items.map((item) => {
            const open = openId === item.id;
            return (
              <li
                key={item.id}
                id={`faq-${item.id}`}
                className={`scroll-mt-24 border-b border-hp-silver pl-5 transition-shadow last:border-b-0 motion-reduce:transition-none ${
                  open ? "shadow-[inset_3px_0_0_var(--burgundy)]" : ""
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${item.id}`}
                    aria-expanded={open}
                    aria-controls={`faq-a-${item.id}`}
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-xl leading-snug font-semibold md:text-2xl">{item.question}</span>
                    <PlusIcon open={open} className="h-6 w-6 shrink-0" />
                  </button>
                </h3>
                <div
                  id={`faq-a-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-q-${item.id}`}
                  inert={!open}
                  className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-xl pb-6 leading-relaxed">
                      <p>
                        <Txt v={item.answer} />
                      </p>
                      {item.link ? (
                        <p className="mt-3">
                          <TextLink href={item.link.href}>{item.link.label}</TextLink>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
