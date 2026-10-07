import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/portfolio";

export function Photo({
  project,
  onClick,
  className = "",
  eager = false,
}: {
  project: Project | undefined;
  onClick?: () => void;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  if (!project) return null;
  return (
    <div
      className={`photo-panel ${className}`}
      ref={ref}
      onPointerMove={(e) => {
        if (
          e.pointerType !== "mouse" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const box = e.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty(
          "--tilt-x",
          `${-((e.clientY - box.top) / box.height - 0.5) * 3}deg`,
        );
        ref.current?.style.setProperty(
          "--tilt-y",
          `${((e.clientX - box.left) / box.width - 0.5) * 4}deg`,
        );
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--tilt-x", "0deg");
        ref.current?.style.setProperty("--tilt-y", "0deg");
      }}
    >
      <Button
        variant="ghost"
        className="photo-button"
        onClick={onClick}
        aria-label={`View ${project.title}`}
        data-cursor="VIEW"
      >
        <img
          src={project.image}
          alt={`${project.title} — Dream Drafter portfolio`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        <span className="photo-view">
          View project <ArrowUpRight size={16} />
        </span>
      </Button>
    </div>
  );
}

export function Lightbox({
  items,
  index,
  onChange,
  onClose,
}: {
  items: Project[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const start = useRef(0);
  const close = useRef<HTMLButtonElement>(null);
  const move = (delta: number) => {
    if (index !== null) onChange((index + delta + items.length) % items.length);
  };
  useEffect(() => {
    if (index === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [index, items.length, onChange]);
  const item = index === null ? undefined : items[index];
  return (
    <Dialog.Root
      open={index !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="lightbox-overlay" />
        <Dialog.Content
          className="lightbox"
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            close.current?.focus();
          }}
        >
          <div className="lightbox-top">
            <span className="eyebrow">Dream Drafter / Selected work</span>
            <Dialog.Close asChild>
              <Button ref={close} variant="ghost" size="icon" aria-label="Close gallery">
                <X />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">{item?.title ?? "Project gallery"}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Dream Drafter portfolio photograph
          </Dialog.Description>
          {item && (
            <div
              className="lightbox-image"
              onTouchStart={(e) => {
                start.current = e.touches[0]?.clientX ?? 0;
              }}
              onTouchEnd={(e) => {
                const delta = (e.changedTouches[0]?.clientX ?? start.current) - start.current;
                if (Math.abs(delta) > 40) move(delta > 0 ? -1 : 1);
              }}
            >
              <img key={item.image} src={item.image} alt={item.title} />
            </div>
          )}
          <div className="lightbox-bottom">
            <div>
              <span className="eyebrow">
                {String((index ?? 0) + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")} · {item?.category}
              </span>
              <p>{item?.title}</p>
            </div>
            <div className="gallery-arrows">
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous project"
                onClick={() => move(-1)}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Next project"
                onClick={() => move(1)}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ProjectGallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const filtered = projects.filter((p) => filter === "All" || p.tags.includes(filter));
  const items = compact ? filtered.slice(0, 6) : filtered;
  return (
    <>
      <div className="gallery-filters" aria-label="Project filters">
        {["All", "Residential", "Interiors", "Architecture", "Living", "Bedrooms"].map((f) => (
          <Button
            key={f}
            variant="ghost"
            aria-pressed={filter === f}
            className={filter === f ? "filter active" : "filter"}
            onClick={() => {
              setFilter(f);
              setIndex(null);
            }}
          >
            {f}
          </Button>
        ))}
      </div>
      <div className="project-masonry">
        {items.map((p, i) => (
          <figure key={p.image} className={p.portrait ? "project-item portrait" : "project-item"}>
            <Photo project={p} onClick={() => setIndex(i)} />
            <figcaption>
              <span>{p.title}</span>
              <span className="eyebrow">
                {p.category} <ArrowUpRight size={13} />
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <Lightbox items={items} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    </>
  );
}
