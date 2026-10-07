import { createFileRoute } from "@tanstack/react-router";
import { Intro, Founder, Why, Experience, Clients } from "@/components/studio-sections";
import { pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "The Studio | Dream Drafter",
      "Meet Mr. Sachin Garg and discover the 19-year perspective behind Dream Drafter’s interiors, architecture and exhibition design.",
    ),
  component: About,
});
function About() {
  return (
    <>
      <div className="page-heading section-pad">
        <span className="eyebrow">Dream Drafter / The studio</span>
        <h1>
          A vision for spaces.
          <br />
          <em>A passion for detail.</em>
        </h1>
      </div>
      <Intro />
      <Founder />
      <Why />
      <Experience />
      <Clients />
    </>
  );
}
