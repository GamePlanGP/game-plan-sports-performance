"use client";

import { useState, type FormEvent } from "react";
import { LAUNCH_MODE, join } from "@/content/homepage";
import { track } from "@/lib/track";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Button } from "./ui/Button";
import { DraftPill } from "./ui/Placeholder";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const input =
  "mt-2 block min-h-[50px] w-full rounded-hp border border-hp-silver/50 bg-transparent px-4 text-base text-white placeholder:text-hp-silver/60 focus:border-white";
const label = "text-[0.68rem] font-semibold tracking-[0.18em] text-hp-silver uppercase";

export function Join() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sms, setSms] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    track("email_signup", { sms: sms && phone.trim().length > 0 });
    // Phase 1: no real submit. Phase 2 posts to Omnisend.
    setDone(true);
  };

  return (
    <Section id="join" tone="navy" labelledBy="join-heading">
      <div className="mx-auto max-w-xl text-center">
        <SectionHeading
          id="join-heading"
          heading={LAUNCH_MODE === "prelaunch" ? join.heading.prelaunch : join.heading.live}
          onDark
        />
        <p className="mt-4 text-base text-hp-silver">
          <Txt v={join.subline} />
        </p>

        {done ? (
          <div role="status" className="mt-10 rounded-hp border border-hp-navy-line bg-hp-navy-2 p-8">
            <p className="font-display text-3xl font-medium">
              <Txt v={join.success.heading} />
            </p>
            <p className="mt-3 text-hp-silver">
              <Txt v={join.success.body} />
            </p>
          </div>
        ) : (
          <form noValidate onSubmit={submit} className="mt-10 space-y-5 text-left">
            <div>
              <label htmlFor="hp-email" className={label}>
                {join.emailLabel}
              </label>
              <input
                id="hp-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={error}
                aria-describedby={error ? "hp-email-error" : undefined}
                className={input}
              />
              {error ? (
                <p id="hp-email-error" role="alert" className="mt-2 text-sm text-white">
                  {join.emailError}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="hp-phone" className={label}>
                {join.phoneLabel}
              </label>
              <input
                id="hp-phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={input}
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-[0.78rem] leading-relaxed text-hp-silver">
              <input
                type="checkbox"
                checked={sms}
                onChange={(e) => setSms(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded-hp accent-[#c4ced4]"
              />
              <span>
                <Txt v={join.smsConsent} />
              </span>
            </label>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button type="submit" onDark full className="sm:w-auto">
                {join.button.text}
              </Button>
              {join.button.draft ? <DraftPill /> : null}
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
