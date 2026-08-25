"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";

type Variant = "quote" | "contact" | "careers";

const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "Still planning",
];

export default function InquiryForm({
  variant,
  initialService,
}: {
  variant: Variant;
  initialService?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: variant, ...payload }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="font-heading text-xl font-semibold text-navy-950">Thank you!</h3>
        <p className="max-w-sm text-sm text-slate-600">
          {variant === "quote"
            ? "Your quotation request has been received. Our team will get back to you within 24–48 hours."
            : variant === "careers"
            ? "Your application has been received. We'll be in touch if there's a match for your skills."
            : "Your message has been received. We'll respond as soon as possible."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 font-heading text-sm font-semibold uppercase tracking-wide text-gold-600 hover:text-gold-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-navy-800";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field — hidden from real users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Full Name *</label>
          <input required id="name" name="name" type="text" className={inputClass} placeholder="John Banda" />
        </div>
        {variant === "quote" && (
          <div>
            <label className={labelClass} htmlFor="company">Company Name</label>
            <input id="company" name="company" type="text" className={inputClass} placeholder="Your company" />
          </div>
        )}
        <div>
          <label className={labelClass} htmlFor="email">Email Address *</label>
          <input required id="email" name="email" type="email" className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone Number {variant !== "contact" && "*"}</label>
          <input
            required={variant !== "contact"}
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+260 9XX XXX XXX"
          />
        </div>
      </div>

      {variant === "quote" && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="service">Service Interested In *</label>
            <select required id="service" name="service" defaultValue={initialService ?? ""} className={inputClass}>
              <option value="" disabled>Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="timeline">Preferred Timeline</label>
            <select id="timeline" name="timeline" className={inputClass} defaultValue="">
              <option value="" disabled>Select a timeline</option>
              {timelineOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {variant === "quote" && (
        <div>
          <label className={labelClass} htmlFor="location">Project Location</label>
          <input id="location" name="location" type="text" className={inputClass} placeholder="e.g. Kalumbila, Kitwe" />
        </div>
      )}

      {variant === "careers" && (
        <div>
          <label className={labelClass} htmlFor="trade">Trade / Role Applying For *</label>
          <input required id="trade" name="trade" type="text" className={inputClass} placeholder="e.g. Boilermaker, Site Manager" />
        </div>
      )}

      {variant === "contact" && (
        <div>
          <label className={labelClass} htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" className={inputClass} placeholder="How can we help?" />
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="message">
          {variant === "quote" ? "Project Description / Scope *" : variant === "careers" ? "Tell Us About Your Experience *" : "Message *"}
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          placeholder={
            variant === "quote"
              ? "Describe the work you need, quantities, specifications, and any deadlines."
              : variant === "careers"
              ? "Years of experience, qualifications, and availability."
              : "Write your message here."
          }
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-navy-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {variant === "quote" ? "Request Quotation" : variant === "careers" ? "Submit Application" : "Send Message"}
      </button>
    </form>
  );
}
