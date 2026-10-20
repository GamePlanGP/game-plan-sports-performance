"use client";

import { useRef, useState } from "react";
import {
  LAUNCH_MODE,
  buy,
  cta,
  flags,
  offer,
  type PurchaseOptionId,
} from "@/content/homepage";
import { isPlaceholder, perServing, subscriptionPrice } from "@/lib/home";
import { track } from "@/lib/track";
import { Section } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { Button } from "./ui/Button";
import { Amount, Price } from "./ui/Price";
import { Placeholder } from "./ui/Placeholder";
import { ChevronIcon, ShieldIcon, StarIcon } from "./ui/Icons";

const OPTION_IDS: PurchaseOptionId[] = ["trial", "bag", "subscription"];

function initialOption(): PurchaseOptionId {
  const d = offer.defaultOption;
  return (OPTION_IDS as string[]).includes(d) ? (d as PurchaseOptionId) : offer.fallbackOption;
}

function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { slides, src, size } = buy.gallery;

  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(slides.length - 1, i));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
    setIndex(next);
  };

  return (
    <div className="min-w-0">
      <div className="relative">
        <div
          ref={trackRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Clarity+ product images"
          onScroll={(e) => {
            const el = e.currentTarget;
            setIndex(Math.round(el.scrollLeft / el.clientWidth));
          }}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-hp [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.label}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className="w-full shrink-0 snap-center"
            >
              <Media src={src} alt={slide.alt} label={slide.label} ratio="1 / 1" size={size} priority={i === 0} sizes="(min-width: 1024px) 560px, 100vw" />
            </div>
          ))}
        </div>

        {(["prev", "next"] as const).map((dir) => {
          const disabled = dir === "prev" ? index === 0 : index === slides.length - 1;
          return (
            <button
              key={dir}
              type="button"
              aria-label={dir === "prev" ? "Previous image" : "Next image"}
              disabled={disabled}
              onClick={() => go(index + (dir === "prev" ? -1 : 1))}
              className={`absolute top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-hp border border-hp-line bg-hp-white text-hp-navy transition-opacity disabled:opacity-0 motion-reduce:transition-none ${
                dir === "prev" ? "left-3" : "right-3"
              }`}
            >
              <ChevronIcon className={`h-5 w-5 ${dir === "prev" ? "rotate-180" : ""}`} />
            </button>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show image ${i + 1}: ${slide.label}`}
            aria-current={i === index}
            className={`flex aspect-square items-center justify-center rounded-hp border bg-hp-tint-2 text-[0.62rem] font-semibold tracking-[0.12em] text-hp-ink-soft uppercase ${
              i === index ? "border-hp-navy shadow-[inset_0_0_0_1px_var(--navy)]" : "border-hp-line"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function Flavors() {
  const f = offer.flavors;
  if (isPlaceholder(f)) {
    return (
      <p className="mt-5 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
        Flavor <Txt v={f} />
      </p>
    );
  }
  if (f.length <= 1) return null;
  return (
    <div className="mt-5">
      <label htmlFor="hp-flavor" className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
        Flavor
      </label>
      <select id="hp-flavor" className="mt-2 block min-h-[46px] w-full rounded-hp border border-hp-line bg-hp-white px-3">
        {f.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export function BuyBox() {
  const prelaunch = LAUNCH_MODE === "prelaunch";
  const [option, setOption] = useState<PurchaseOptionId>(initialOption);
  const suggested = offer.subscription.suggestedCadences;
  const cadences = Array.isArray(offer.subscription.cadences) ? offer.subscription.cadences : suggested;
  const [cadence, setCadence] = useState<number>(cadences[0]);

  const subPrice = subscriptionPrice(offer.bag.price, offer.subscription.discountPct);
  const rows: {
    id: PurchaseOptionId;
    servings: typeof offer.bag.servings;
    price: typeof offer.bag.price;
  }[] = [
    { id: "trial", servings: offer.trial.servings, price: offer.trial.price },
    { id: "bag", servings: offer.bag.servings, price: offer.bag.price },
    { id: "subscription", servings: offer.bag.servings, price: subPrice },
  ];

  const select = (id: PurchaseOptionId) => {
    setOption(id);
    track("option_select", { option: id });
  };

  return (
    <Section id="buy" tone="white" labelledBy="buy-heading">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-2 lg:gap-16">
        <Gallery />

        <div>
          <h2 id="buy-heading" className="font-wordmark text-5xl leading-none md:text-6xl">
            {buy.title}
          </h2>
          <p className="mt-3 text-base">
            <Txt v={buy.subline} />
          </p>
          {flags.SHOW_RATING ? (
            <p className="mt-3 flex items-center gap-2">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <Txt v="{{JUDGEME_RATING}}" />
            </p>
          ) : null}

          <Flavors />

          <fieldset className="mt-7 border-0 p-0">
            <legend className="mb-3 flex w-full flex-wrap items-center gap-x-3 text-[0.7rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">
              Choose your option
              {isPlaceholder(offer.defaultOption) ? (
                <span className="normal-case">
                  Preselected: <Placeholder id={offer.defaultOption} />
                </span>
              ) : null}
            </legend>

            <div className="space-y-3">
              {rows.map(({ id, servings, price }) => {
                const selected = option === id;
                const meta = buy.options[id];
                const badge = "badge" in meta ? meta.badge : undefined;
                const per = perServing(price, servings);
                return (
                  <div
                    key={id}
                    className={`rounded-hp border bg-hp-white transition-colors motion-reduce:transition-none ${
                      selected
                        ? "border-hp-navy shadow-[inset_0_0_0_1px_var(--navy)]"
                        : "border-hp-line hover:border-hp-ink-soft"
                    } has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-hp-navy`}
                  >
                    <label className="flex cursor-pointer items-start gap-4 p-4 md:p-5">
                      <input
                        type="radio"
                        name="purchase-option"
                        value={id}
                        checked={selected}
                        onChange={() => select(id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-hp-navy"
                      >
                        {selected ? <span className="h-2.5 w-2.5 rounded-full bg-hp-navy" /> : null}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-wrap items-start justify-between gap-x-4 gap-y-1">
                        <span>
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-[0.95rem] font-semibold">
                              {id === "subscription" ? (
                                <>
                                  {meta.name} <Amount value={offer.subscription.discountPct} suffix="%" />
                                </>
                              ) : (
                                meta.name
                              )}
                            </span>
                            {badge ? (
                              <span className="rounded-hp bg-hp-navy px-2 py-1 text-[0.58rem] leading-none font-semibold tracking-[0.14em] text-white uppercase">
                                {badge}
                              </span>
                            ) : null}
                          </span>
                          <span className="mt-1 block text-[0.8rem] text-hp-ink-soft">
                            <Amount value={servings} /> {meta.unit}
                          </span>
                        </span>
                        <span className="text-right">
                          <span className="block text-lg font-semibold">
                            <Price value={price} />
                          </span>
                          <span className="block text-[0.74rem] text-hp-ink-soft">
                            {per.startsWith("$") ? (
                              `${per} per serving`
                            ) : (
                              <>
                                <Txt v={per} /> per serving
                              </>
                            )}
                          </span>
                        </span>
                      </span>
                    </label>

                    {id === "subscription" && selected ? (
                      <div className="border-t border-hp-line px-4 pt-3 pb-4 md:px-5 md:pl-[3.4rem]">
                        <div className="flex flex-wrap items-center gap-3">
                          <label htmlFor="hp-cadence" className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                            {buy.options.subscription.cadenceLabel}
                          </label>
                          <select
                            id="hp-cadence"
                            value={cadence}
                            onChange={(e) => setCadence(Number(e.target.value))}
                            className="min-h-[42px] rounded-hp border border-hp-line bg-hp-white px-3 text-sm"
                          >
                            {cadences.map((w) => (
                              <option key={w} value={w}>
                                {w} weeks
                              </option>
                            ))}
                          </select>
                          {isPlaceholder(offer.subscription.cadences) ? (
                            <Placeholder id={offer.subscription.cadences} />
                          ) : null}
                        </div>
                        <p className="mt-3 text-[0.8rem] text-hp-ink-soft">
                          <Txt v={buy.options.subscription.microcopy} />
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            {prelaunch ? (
              <Button
                href="#join"
                full
                onClick={() => track("cta_click", { location: "buy_box", mode: LAUNCH_MODE })}
              >
                {cta.prelaunch}
              </Button>
            ) : (
              <Button full onClick={() => track("add_to_cart", { option, cadence })}>
                {cta.addToCart}
              </Button>
            )}
          </div>

          <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hp-line pt-4 text-[0.78rem]">
            <li className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 shrink-0 text-hp-navy" />
              <Txt v={offer.guaranteeShort} />
            </li>
            <li>
              <Txt v={offer.shippingShort} />
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
