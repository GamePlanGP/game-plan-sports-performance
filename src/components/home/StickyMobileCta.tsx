"use client";

import { useEffect, useState } from "react";
import { LAUNCH_MODE, buy, cta, offer } from "@/content/homepage";
import { subscriptionPrice, toNumber, money } from "@/lib/home";
import { track } from "@/lib/track";
import { Button } from "./ui/Button";
import { Txt } from "./ui/Txt";

/** Lowest decided price across the options, or the trial price tag until prices exist. */
function lowestPrice(): string {
  const prices = [
    offer.trial.price,
    offer.bag.price,
    subscriptionPrice(offer.bag.price, offer.subscription.discountPct),
  ]
    .map(toNumber)
    .filter((n): n is number => n !== null);
  return prices.length ? money(Math.min(...prices)) : String(offer.trial.price);
}

/** Visible once the hero scrolls away; hidden while #buy is on screen. Mobile only. */
export function StickyMobileCta() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [buyVisible, setBuyVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const buyBox = document.getElementById("buy");
    const observers: IntersectionObserver[] = [];
    const watch = (el: HTMLElement | null, set: (v: boolean) => void) => {
      if (!el) return;
      const io = new IntersectionObserver(([entry]) => set(entry.isIntersecting));
      io.observe(el);
      observers.push(io);
    };
    watch(hero, setHeroVisible);
    watch(buyBox, setBuyVisible);
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const show = !heroVisible && !buyVisible;
  const prelaunch = LAUNCH_MODE === "prelaunch";

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-hp-line bg-hp-white shadow-[0_-4px_14px_rgba(0,45,98,0.08)] transition-transform duration-300 motion-reduce:transition-none md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">
        <div className="min-w-0">
          <p className="font-wordmark text-xl leading-none">{buy.title}</p>
          <p className="mt-1 text-[0.72rem] text-hp-ink-soft">
            From <Txt v={lowestPrice()} />
          </p>
        </div>
        <Button
          href={prelaunch ? "#join" : "#buy"}
          size="sm"
          onClick={() => track("cta_click", { location: "sticky_mobile", mode: LAUNCH_MODE })}
        >
          {prelaunch ? cta.prelaunch : cta.get}
        </Button>
      </div>
    </div>
  );
}
