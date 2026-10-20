"use client";

import { announcement } from "@/content/homepage";
import { openFaq } from "@/lib/home";
import { Txt } from "./ui/Txt";
import { ShieldIcon } from "./ui/Icons";

export function AnnouncementBar() {
  return (
    <div className="on-navy bg-hp-navy text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2.5 px-5 py-2.5 text-center md:px-8">
        <ShieldIcon className="h-4 w-4 shrink-0 text-hp-silver" />
        <a
          href="#faq"
          onClick={() => openFaq(announcement.faqId)}
          className="text-[0.68rem] leading-snug font-semibold tracking-[0.16em] uppercase underline-offset-4 hover:underline"
        >
          <Txt v={announcement.message} />
        </a>
      </div>
    </div>
  );
}
