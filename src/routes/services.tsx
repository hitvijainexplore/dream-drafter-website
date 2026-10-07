import { createFileRoute } from "@tanstack/react-router";
import { Services, Featured } from "@/components/studio-sections";
import { pageHead } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "919810682008";
const WHATSAPP_MESSAGE =
  "Hi Dream Drafter, I would like to discuss an interior / architecture project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Interior, Architecture & Exhibition Services | Dream Drafter",
      "Explore Dream Drafter’s residential, office and commercial interiors, architectural works and exhibition design services.",
    ),
  component: ServicesPage,
});
function ServicesPage() {
  return (
    <>
      <div className="page-heading section-pad">
        <span className="eyebrow">Dream Drafter / Services</span>
        <h1>
          Designed with purpose.
          <br />
          <em>Created for you.</em>
        </h1>
      </div>
      <Services full />
      <Featured />
      <section className="section-pad light-section services-contact">
        <h2>
          Your vision.
          <br />
          <em>Our next beginning.</em>
        </h2>
        <Button asChild className="studio-button">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start a project with Dream Drafter on WhatsApp"
          >
            Start a project <ArrowUpRight />
          </a>
        </Button>
      </section>
    </>
  );
}
