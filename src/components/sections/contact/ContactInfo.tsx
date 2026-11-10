import { SITE_CONFIG } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";

const SOCIAL_LINKS = [
  { label: "IG", name: "Instagram", href: "#" },
  { label: "X", name: "Twitter/X", href: "#" },
  { label: "FB", name: "Facebook", href: "#" },
] as const;

export function ContactInfo() {
  return (
    <FadeIn direction="up" delay={0.2}>
      <Card padding="lg" className="space-y-8">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-silver-500/10">
            <svg
              className="h-5 w-5 text-silver-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Email Us</h3>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-1 block text-silver-500 transition-colors hover:text-silver-400"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-silver-500/10">
            <svg
              className="h-5 w-5 text-silver-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Response Time</h3>
            <p className="mt-1 text-silver">
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-silver-500/10">
            <svg
              className="h-5 w-5 text-silver-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Business Hours</h3>
            <p className="mt-1 text-silver">
              Monday &ndash; Friday, 9am &ndash; 5pm EST
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10" />

        {/* Social Links */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-silver-500/10 text-sm font-semibold text-silver-500 transition-colors hover:bg-silver-500 hover:text-navy-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Card>
    </FadeIn>
  );
}
