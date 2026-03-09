"use client";

import { FormEvent, useMemo, useState } from "react";
import type { SiteCopy } from "@/lib/site-content";

type ContactFormProps = {
  copy: SiteCopy;
};

type FormState = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

export function ContactForm({ copy }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  const hasEndpoint = useMemo(() => Boolean(endpoint), [endpoint]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatusMessage("");

    try {
      if (!hasEndpoint || !endpoint) {
        const subject = encodeURIComponent(`[Portfolio] ${form.name}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\n\n${form.message}`,
        );
        window.location.href = `mailto:darkwinterlab@gmail.com?subject=${subject}&body=${body}`;
        setStatusMessage(copy.formLabels.fallback);
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("submit_failed");
      }

      setForm(initialState);
      setStatusMessage(copy.formLabels.success);
    } catch {
      setStatusMessage(copy.formLabels.fallback);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span>{copy.formLabels.name}</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-white outline-none transition focus:border-cyan-200"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-200">
          <span>{copy.formLabels.email}</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-white outline-none transition focus:border-cyan-200"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-200">
        <span>{copy.formLabels.organization}</span>
        <input
          value={form.organization}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, organization: event.target.value }))
          }
          className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-white outline-none transition focus:border-cyan-200"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-200">
        <span>{copy.formLabels.message}</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-white outline-none transition focus:border-cyan-200"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? copy.formLabels.submitting : copy.formLabels.submit}
      </button>

      {statusMessage ? <p className="text-sm text-cyan-100">{statusMessage}</p> : null}
    </form>
  );
}
