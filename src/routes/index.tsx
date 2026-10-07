import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Intro,
  Services,
  Featured,
  Stories,
  Founder,
  Why,
  Experience,
  Clients,
} from "@/components/studio-sections";
import { ProjectGallery } from "@/components/gallery";
import { ContactForm } from "@/components/contact-form";
import { pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Dream Drafter | Interior Design & Architecture",
      "Dream Drafter is an interior design, architectural works and exhibition design company with 19 years of experience creating refined residential, office and commercial spaces.",
    ),
  component: Index,
});
function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Featured />
      <Stories />
      <Founder />
      <Why />
      <Experience />
      <Clients />
      <section className="section-pad projects-section">
        <div className="section-label">
          <span className="eyebrow">09 / Selected work</span>
          <span className="eyebrow">The Dream Drafter portfolio</span>
        </div>
        <h2>
          A collection
          <br />
          <em>of considered spaces.</em>
        </h2>
        <ProjectGallery compact />
      </section>
      <section className="section-pad light-section contact-section">
        <ContactForm />
      </section>
    </>
  );
}
