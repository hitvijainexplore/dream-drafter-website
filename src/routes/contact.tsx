import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Start a Project | Dream Drafter",
      "Discuss your residential, office, commercial, architecture or exhibition project with Dream Drafter. Call 9711203080 or 9810682008.",
    ),
  component: ContactPage,
});
function ContactPage() {
  return (
    <section className="section-pad contact-page light-section">
      <ContactForm />
    </section>
  );
}
