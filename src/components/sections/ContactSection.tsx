"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n-context";
import { ContactForm } from "@/components/ContactForm";

export default function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t.contact.title}
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          {t.contact.subtitle}
        </p>

        <Card className="border-border/60">
          <CardContent className="p-6 sm:p-8">

            {/* Formspree Form */}
            <ContactForm />

            {/* Social shortcuts */}
            <div className="mt-6 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-sm text-muted-foreground">
                {t.contact.or}
              </span>
              <div className="flex gap-3">
                <Link
                  href="https://linkedin.com/in/saavedramatias"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted/30 hover:bg-muted/70 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/MatiasSaavedra7"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted/30 hover:bg-muted/70 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="mailto:matiassaavedra1995@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted/30 hover:bg-muted/70 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
