"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, m } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";

type Variant = "quote" | "contact" | "careers";

const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "Still planning",
];

const SUBJECTS: Record<Variant, string> = {
  quote: "New Quotation Request — TKEL Website",
  contact: "New Contact Enquiry — TKEL Website",
  careers: "New Job Application — TKEL Careers",
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { website, ...payload } = Object.fromEntries(formData.entries());

    // Honeypot: bots fill every field, real visitors never see this one.
    // Pretend success without actually sending anything.
    if (website) {
      setStatus("success");
      form.reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "The enquiry form isn't fully set up yet. Please contact us directly by phone or email in the meantime."
      );
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: SUBJECTS[variant],
          from_name: "TKEL Website",
          ...payload,
        }),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== true) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error && err.name !== "AbortError"
          ? err.message
          : "We couldn't send your message. Please try again or contact us directly."
      );
    } finally {
      clearTimeout(timeout);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 transition-all duration-200 focus:border-navy-600 focus:outline-none focus:ring-4 focus:ring-navy-600/15";
  const labelClass = "mb-1.5 block text-sm font-medium text-navy-800";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <m.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-6 py-12 text-center"
        >
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </m.div>
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
            className="mt-2 font-heading text-sm font-semibold uppercase tracking-wide text-gold-600 transition-colors hover:text-gold-500"
          >
            Send another message
          </button>
        </m.div>
      ) : (
    <m.form
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
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

      <AnimatePresence>
        {status === "error" && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-2 overflow-hidden rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </m.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-500 px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-navy-950 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70 sm:w-auto sm:px-10"
      >
        <span
          aria-hidden="true"
          className="shimmer-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span className="relative flex items-center gap-2">
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          {variant === "quote" ? "Request Quotation" : variant === "careers" ? "Submit Application" : "Send Message"}
        </span>
      </button>
    </m.form>
      )}
    </AnimatePresence>
  );
}
