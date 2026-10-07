import { createFileRoute } from "@tanstack/react-router";
import { ProjectGallery } from "@/components/gallery";
import { pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/projects")({
  head: () =>
    pageHead(
      "Selected Projects & Interiors | Dream Drafter",
      "Explore the actual Dream Drafter residential portfolio: contemporary architecture, refined living spaces and distinctive bedrooms.",
    ),
  component: ProjectsPage,
});
function ProjectsPage() {
  return (
    <section className="section-pad page-heading projects-page">
      <span className="eyebrow">Dream Drafter / Selected work</span>
      <h1>
        Spaces that speak.
        <br />
        <em>Details that stay.</em>
      </h1>
      <ProjectGallery />
    </section>
  );
}
