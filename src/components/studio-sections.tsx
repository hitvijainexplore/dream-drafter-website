import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { brand, clients, projects, values } from "@/lib/portfolio";
import { Lightbox, Photo } from "./gallery";

const WHATSAPP_NUMBER = "919810682008";
const WHATSAPP_MESSAGE =
  "Hi Dream Drafter, I would like to discuss an interior / architecture project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const move = (e: PointerEvent) => {
      el.style.setProperty("--mouse-x", `${(e.clientX / window.innerWidth - 0.5) * 12}px`);
      el.style.setProperty("--mouse-y", `${(e.clientY / window.innerHeight - 0.5) * 9}px`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);
  return (
    <>
      <section className="hero" ref={ref}>
        <div className="hero-topline">
          <span>Dream Drafter</span>
          <span>Interior · Architecture · Design</span>
        </div>
        <div className="hero-stage">
          <div className="hero-images">
            <div className="hero-back">
              <Photo project={projects[0]} eager onClick={() => setIndex(0)} />
            </div>
            <div className="hero-front">
              <Photo project={projects[2]} eager onClick={() => setIndex(2)} />
              <div className="hero-image-caption">
                <span>Spaces, thoughtfully imagined.</span>
                <span>Dream Drafter / Residential</span>
              </div>
            </div>
          </div>
          <div className="hero-copy">
            <h1>
              Building
              <br />
              <em>luxuries.</em>
              <br />
              Creating
              <br />
              <em>smiles.</em>
            </h1>
            <p className="hero-descriptor">
              Interior design · Architecture
              <br />
              Exhibition design
            </p>
            <div className="hero-actions">
              <Button asChild className="studio-button">
                <Link to="/projects" data-cursor="EXPLORE">
                  Explore our work <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-cta">
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
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#studio" className="eyebrow">
            Scroll to explore <ArrowDown size={15} />
          </a>
          <span className="eyebrow">Refined spaces. Lasting impressions.</span>
          <span className="hero-edition">01 — 13</span>
        </div>
      </section>
      <Lightbox items={projects} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    </>
  );
}

export function Intro() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <section id="studio" className="studio-intro section-pad light-section">
      <div className="section-label">
        <span className="eyebrow">01 / The studio</span>
        <span className="eyebrow">A vision. A space. A feeling.</span>
      </div>
      <div className="intro-layout reveal">
        <div className="intro-copy">
          <h2>
            19 years of
            <br />
            turning visions
            <br />
            <em>into spaces.</em>
          </h2>
          <p>
            Dream Drafter brings together interior design, architectural works and exhibition
            design, with an acclaimed presence nationally and internationally.
          </p>
          <p>
            For 19 years, a commitment to quality, vivid interiors and client-focused design has
            shaped every space we create.
          </p>
          <Button asChild variant="ghost" className="text-cta">
            <Link to="/about">
              Discover the studio <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="intro-photo">
          <Photo project={projects[3]} onClick={() => setIndex(3)} />
          <span className="image-footnote">Material. Light. A considered way of living.</span>
        </div>
      </div>
      <Lightbox items={projects} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    </section>
  );
}

const services = [
  {
    title: "Residential",
    text: "Personal spaces, shaped around the way you live.",
    image: projects[6],
  },
  { title: "Office interiors", text: "Considered workplaces where purpose meets design." },
  { title: "Commercial", text: "Distinctive spaces with a clear sense of identity." },
  {
    title: "Architectural works",
    text: "From an architectural vision to a magnificent reality.",
    image: projects[0],
  },
  { title: "Exhibition design", text: "Spatial experiences that bring your vision into focus." },
];
export function Services({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(0);
  const shown = services[active];
  return (
    <section className="services-section section-pad">
      <div className="section-label">
        <span className="eyebrow">02 / What we create</span>
        <span className="eyebrow">Spaces with intention</span>
      </div>
      <div className="services-heading">
        <h2>
          Different spaces.
          <br />
          <em>One considered approach.</em>
        </h2>
        {!full && (
          <Button asChild variant="ghost" className="text-cta">
            <Link to="/services">
              Our services <ArrowUpRight />
            </Link>
          </Button>
        )}
      </div>
      <div className="services-layout reveal">
        <div className={`service-visual ${shown?.image?.portrait ? "architecture-visual" : ""}`}>
          {shown?.image ? (
            <img
              key={shown.image.image}
              src={shown.image.image}
              alt={shown.image.title}
              loading="lazy"
            />
          ) : (
            <div className="service-type-panel">
              <span className="eyebrow">Dream Drafter</span>
              <p>
                {shown?.title}
                <br />
                <em>with intention.</em>
              </p>
              <span className="eyebrow">Design / Detail / Purpose</span>
            </div>
          )}
          <span className="service-image-tag">
            {shown?.image
              ? "From our residential portfolio"
              : "Interior · Architecture · Exhibition"}
          </span>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <Button
              key={s.title}
              variant="ghost"
              className={`service-row ${active === i ? "selected" : ""}`}
              onClick={() => setActive(i)}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setActive(i);
              }}
              aria-expanded={active === i}
            >
              <span className="service-number">0{i + 1}</span>
              <span className="service-text">
                <span>{s.title}</span>
                <small>{s.text}</small>
              </span>
              <ArrowUpRight />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Featured() {
  const [index, setIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const scroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight)
          el.style.setProperty("--parallax", `${(rect.top - window.innerHeight / 2) * 0.045}px`);
      });
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section className="featured-section section-pad">
      <div ref={ref} className="featured-frame reveal">
        <img
          src={projects[0]?.image}
          alt="Dream Drafter residential architecture from page 2 of the official portfolio"
          loading="lazy"
        />
        <div className="featured-copy">
          <span className="eyebrow">03 / Featured work</span>
          <h2>
            Residential
            <br />
            <em>architecture.</em>
          </h2>
          <Button
            variant="outline"
            className="studio-button"
            onClick={() => setIndex(0)}
            data-cursor="VIEW"
          >
            View project <ArrowUpRight />
          </Button>
        </div>
        <span className="featured-side">Architecture / Dream Drafter</span>
      </div>
      <Lightbox items={projects} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    </section>
  );
}

export function Stories() {
  const [index, setIndex] = useState<number | null>(null);
  const selected = [1, 6, 7, 5, 9, 4, 8, 10, 11, 12];
  return (
    <section className="stories-section light-section section-pad">
      <div className="section-label">
        <span className="eyebrow">04 / Interior stories</span>
        <span className="eyebrow">An exploration of living</span>
      </div>
      <h2>
        Every room,
        <br />
        <em>a different story.</em>
      </h2>
      <div className="stories-composition">
        {selected.map((n, i) => {
          const p = projects[n];
          if (!p) return null;
          return (
            <figure className={`story story-${i + 1} reveal`} key={p.image}>
              <Photo project={p} onClick={() => setIndex(n)} />
              <figcaption>
                <span className="eyebrow">
                  {String(i + 1).padStart(2, "0")} / {p.category}
                </span>
                <span>{p.title}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="stories-end">
        <p>
          Thoughtfully composed.
          <br />
          <em>Beautifully lived.</em>
        </p>
        <Button asChild variant="outline" className="studio-button">
          <Link to="/projects">
            View all projects <ArrowUpRight />
          </Link>
        </Button>
      </div>
      <Lightbox items={projects} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    </section>
  );
}

export function Founder() {
  return (
    <section className="founder-section section-pad light-section">
      <div className="founder-layout reveal">
        <div className="founder-photo">
          <img
            src={brand.founder}
            alt="Mr. Sachin Garg, the man behind Dream Drafter"
            loading="lazy"
          />
          <span className="eyebrow">Mr. Sachin Garg / Dream Drafter</span>
        </div>
        <div>
          <span className="eyebrow">05 / The founder</span>
          <h2>
            The man
            <br />
            behind
            <br />
            <em>the draft.</em>
          </h2>
          <p className="founder-name">Mr. Sachin Garg</p>
          <blockquote>
            “Mr. Sachin Garg is the man behind Dream Drafter, drafting dreams and turning them into
            magnificent realities.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="why-section section-pad">
      <div className="section-label">
        <span className="eyebrow">06 / The difference</span>
        <span className="eyebrow">The principles behind every space</span>
      </div>
      <h2>
        Why
        <br />
        <em>Dream Drafter?</em>
      </h2>
      <div className="values-list">
        {values.map((v, i) => (
          <div className="value-row reveal" key={v} tabIndex={0}>
            <span>0{i + 1}</span>
            <h3>{v}</h3>
            <ArrowUpRight strokeWidth={1} />
          </div>
        ))}
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section className="experience-section section-pad light-section">
      <span className="eyebrow">07 / A lasting perspective</span>
      <div className="experience-layout reveal">
        <div className="experience-number">
          19<span>+</span>
        </div>
        <div className="experience-text">
          <span>Years</span>
          <em>of experience.</em>
          <p>
            Building luxuries.
            <br />
            Creating smiles.
          </p>
        </div>
        <img src={projects[2]?.image} alt="Dream Drafter living room detail" loading="lazy" />
      </div>
    </section>
  );
}
export function Clients() {
  return (
    <section className="clients-section section-pad light-section">
      <span className="eyebrow">08 / Client experience</span>
      <h2>
        Trusted
        <br />
        <em>through the years.</em>
      </h2>
      <div className="client-names">
        {clients.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <div className="client-notes">
        <span>Government works</span>
        <span>Residential projects in North India</span>
      </div>
    </section>
  );
}
