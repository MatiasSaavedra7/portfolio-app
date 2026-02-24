"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useI18n } from "@/components/i18n-context";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useI18n();
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center text-lg font-bold text-green-600 py-4">
        ¡Mensaje enviado correctamente!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="contact-name">
            {t.contact.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="contact-email">
            {t.contact.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder={t.contact.emailPlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium" htmlFor="contact-message">
          {t.contact.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder={t.contact.messagePlaceholder}
          className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-500">
          Ocurrió un error al enviar el mensaje. Intenta de nuevo.
        </p>
      )}

      <Button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full rounded-xl shadow-lg shadow-primary/20"
      >
        <Send className="mr-2 h-4 w-4" />
        {formState === "submitting" ? "Enviando..." : t.contact.send}
      </Button>
    </form>
  );
}
