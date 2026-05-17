"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      inquiry: String(formData.get("inquiry") || ""),
      message: String(formData.get("message") || ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(
        data.message || "Could not send your message. Please try again.",
      );
      return;
    }

    setStatus("success");
    setMessage("Thanks. Your inquiry has been sent successfully.");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-600"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-600"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Company
          <input
            name="company"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-600"
            placeholder="Company name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Inquiry Type
          <select
            name="inquiry"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-600"
            defaultValue="Distribution"
          >
            <option>Distribution</option>
            <option>Product Information</option>
            <option>Partnership</option>
            <option>General</option>
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-600"
          placeholder="Tell us about your requirements"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Submit Inquiry"}
      </button>
      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-emerald-700" : "text-rose-700"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
