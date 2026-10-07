import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/portfolio";
import { WhatsappIcon } from "@/components/contact-form";

const WHATSAPP_NUMBER = "919810682008";
const WHATSAPP_MESSAGE =
  "Hi Dream Drafter, I would like to discuss an interior / architecture project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;
function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const move = (e: PointerEvent) => {
      const cursor = ref.current;
      if (!cursor) return;
      cursor.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      cursor.textContent = target?.getAttribute("data-cursor") ?? "";
      cursor.classList.toggle("expanded", !!target);
      cursor.classList.add("visible");
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="custom-cursor" aria-hidden="true" />;
}
export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 30);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const checkTone = () => {
      if (window.scrollY > 30) {
        setOnLight(false);
        return;
      }
      const band = 54;
      const light = [...document.querySelectorAll<HTMLElement>(".light-section")].some(
        (section) => {
          const box = section.getBoundingClientRect();
          return box.top <= band && box.bottom > band;
        },
      );
      setOnLight(light);
    };
    checkTone();
    window.addEventListener("scroll", checkTone, { passive: true });
    return () => window.removeEventListener("scroll", checkTone);
  }, [pathname]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${onLight ? "on-light" : ""}`}>
        <Link to="/" aria-label="Dream Drafter home" className="brand-logo">
          <img src={brand.logo} alt="Dream Drafter — original logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "active" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="outline" className="nav-cta studio-button">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="EXPLORE"
            aria-label="Start a project with Dream Drafter on WhatsApp"
          >
            Start a project <ArrowUpRight />
          </a>
        </Button>
        <Dialog.Root open={menu} onOpenChange={setMenu}>
          <Dialog.Trigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="menu-toggle"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-menu-overlay" />
            <Dialog.Content className="mobile-menu">
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>
              <Dialog.Description className="sr-only">
                Dream Drafter website navigation
              </Dialog.Description>
              <div className="mobile-menu-top">
                <img src={brand.logo} alt="Dream Drafter" />
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon" aria-label="Close navigation">
                    <X />
                  </Button>
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile navigation">
                {links.map((l, i) => (
                  <Link key={l.to} to={l.to} onClick={() => setMenu(false)}>
                    <span>0{i + 1}</span>
                    {l.label}
                    <ArrowUpRight />
                  </Link>
                ))}
              </nav>
              <p className="eyebrow">Building luxuries, creating smiles</p>
              <a href="tel:9711203080">9711203080</a>
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
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Link to="/" className="footer-logo">
              <img src={brand.logo} alt="Dream Drafter" />
            </Link>
            <p className="eyebrow">Building luxuries, creating smiles</p>
          </div>
          <nav aria-label="Footer navigation">
            {links.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <a href="tel:9711203080">
              9711203080 <ArrowUpRight size={16} />
            </a>
            <a href="tel:9810682008">
              9810682008 <ArrowUpRight size={16} />
            </a>
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
        <div className="footer-bottom">
          <span>© 2026 Dream Drafter. All rights reserved.</span>
          <span>Interior · Architecture · Exhibition design</span>
        </div>
      </footer>
      <div className="floating-whatsapp">
        <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat with Dream Drafter on WhatsApp"
        >
          <WhatsappIcon />
        </a>
      </div>
      <Cursor />
    </>
  );
}
