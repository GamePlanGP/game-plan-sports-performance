"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const SUBJECT_OPTIONS = [
  { value: "", label: "Select a subject..." },
  { value: "general", label: "General Inquiry" },
  { value: "product", label: "Product Question" },
  { value: "wholesale", label: "Wholesale/Partnership" },
  { value: "press", label: "Press/Media" },
  { value: "other", label: "Other" },
] as const;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <Card padding="lg" className="text-center">
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-silver-500/10">
            <svg
              className="h-8 w-8 text-silver-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-white">
            Message Sent!
          </h3>
          <p className="text-silver">
            We&apos;ll get back to you within 24 hours.
          </p>
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={handleReset}
            className="mt-4"
          >
            Send Another Message
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <Input
          label="Name"
          type="text"
          placeholder="Your full name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <div className="w-full">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-white"
          >
            Subject
          </label>
          <select
            id="subject"
            {...register("subject")}
            className={cn(
              "w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 outline-none transition-all focus:border-silver-500 focus:ring-2 focus:ring-silver-500/20",
              errors.subject &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            )}
            aria-invalid={errors.subject ? true : undefined}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          >
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1.5 text-sm text-red-500"
              role="alert"
            >
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            {...register("message")}
            className={cn(
              "min-h-[150px] w-full resize-y rounded-lg border border-white/20 bg-white/5 px-4 py-3 outline-none transition-all focus:border-silver-500 focus:ring-2 focus:ring-silver-500/20",
              errors.message &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            )}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1.5 text-sm text-red-500"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  );
}
