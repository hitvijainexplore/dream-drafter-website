import { ArrowUpRight, Facebook, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/portfolio";

const WHATSAPP_NUMBER = "919810682008";
const WHATSAPP_MESSAGE =
  "Hi Dream Drafter, I would like to discuss an interior / architecture project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsappIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M16.7 14c-.3-.1-1.7-.9-1.9-1-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-1.8-.9-3-1.7-4.2-3.6-.3-.5.3-.5.8-1.6.1-.3 0-.5 0-.7l-.9-1.7c-.2-.4-.4-.3-.6-.4h-.6c-.2 0-.5.1-.7.4-.8 1.1-1.2 2-1.2 3.2 0 1.3 1 2.6 2.3 3.9 1.4 1.3 2.9 2.1 4.8 2.6.8.2 1.6.2 2.4.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.5-.3z" />
    </svg>
  );
}

export function ContactForm() {
  return (
    <div className="contact-layout">
      <div className="contact-copy">
        <span className="eyebrow">10 / A new beginning</span>
        <h2>
          Let&apos;s create
          <br />
          something
          <br />
          <em>extraordinary.</em>
        </h2>
        <p className="contact-copy-text">
          Have a residential, office, commercial or architectural project in mind?
          <br />
          Let&apos;s discuss your vision.
        </p>
        <div className="contact-numbers">
          <span className="eyebrow">Call the studio</span>
          <a href="tel:9711203080" className="contact-number">
            <span className="contact-number-digit">9711203080</span>
            <Phone size={18} />
          </a>
          <a href="tel:9810682008" className="contact-number contact-number-whatsapp">
            <span className="contact-number-digit">9810682008</span>
            <WhatsappIcon size={18} />
          </a>
        </div>
        <div className="contact-social">
          <span className="eyebrow">Follow the studio</span>
          <div className="footer-social">
            <a
              className="social-link"
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dream Drafter on Instagram"
            >
              <Instagram size={15} />
              Instagram
            </a>
            <a
              className="social-link"
              href={brand.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dream Drafter on Facebook"
            >
              <Facebook size={15} />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="whatsapp-panel">
        <span className="eyebrow">Instant communication</span>
        <h2 className="whatsapp-panel-heading">
          Let&apos;s talk about
          <br />
          your <em>project.</em>
        </h2>
        <p className="whatsapp-panel-text">
          Have a residential, office, commercial or architectural project in mind? Let&apos;s
          discuss your vision.
        </p>
        <div className="whatsapp-panel-card">
          <div className="whatsapp-panel-card-header">
            <div className="whatsapp-avatar">
              <WhatsappIcon size={24} />
            </div>
            <div className="whatsapp-panel-header-info">
              <span className="whatsapp-name">Dream Drafter</span>
              <span className="whatsapp-status">Online · Replies within minutes</span>
            </div>
          </div>
          <div className="whatsapp-bubble">
            <p>{WHATSAPP_MESSAGE}</p>
          </div>
        </div>
        <Button asChild className="studio-button whatsapp-cta">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Dream Drafter on WhatsApp"
          >
            <WhatsappIcon size={18} />
            Chat on WhatsApp
            <ArrowUpRight />
          </a>
        </Button>
        <p className="whatsapp-number-display eyebrow">Or message us directly at +91 98106 82008</p>
      </div>
    </div>
  );
}

export { WHATSAPP_URL, WHATSAPP_MESSAGE, WHATSAPP_NUMBER };
