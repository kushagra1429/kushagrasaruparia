import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-heading font-bold tracking-tight">
            <span className="text-foreground">Kushagra</span>
            <span className="text-accent-blue">.</span>
          </Link>
          <p className="text-sm text-text-muted">
            Building ambitious systems and modern products.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kushagra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-foreground transition-colors bg-surface hover:bg-surface-hover rounded-full border border-border"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kushagra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-foreground transition-colors bg-surface hover:bg-surface-hover rounded-full border border-border"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-2 text-text-muted hover:text-foreground transition-colors bg-surface hover:bg-surface-hover rounded-full border border-border"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="py-6 border-t border-border/50 text-center">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Kushagra Saruparia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
