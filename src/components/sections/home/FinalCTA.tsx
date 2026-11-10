"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (_data: WaitlistFormData) => {
    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <FadeIn direction="up">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-silver-500">
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p className="text-xl font-bold text-white">
            You&apos;re on the list!
          </p>
          <p className="text-white/60">
            We&apos;ll be in touch with exclusive early access details.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-lg"
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className={cn(
              "border-white/20 bg-white/5 text-white placeholder:text-white/40",
              "focus:border-silver-500 focus:ring-silver-500/20",
            )}
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
        <Button
          type="submit"
          variant="cta"
          size="lg"
          disabled={status === "loading"}
          className="shrink-0"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </div>
    </form>
  );
}

export function FinalCTA() {
  return (
    <section id="waitlist" className="bg-navy-950 py-24">
      <Container size="narrow">
        <FadeIn direction="up">
          <div className="text-center">
            <SectionHeading
              heading="Ready to Elevate Your Game?"
              subtitle="Join the waitlist for early access, exclusive pricing, and launch updates."
              dark
              className="mb-10"
            />

            <WaitlistForm />

            <p className="mt-6 text-sm text-white/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
