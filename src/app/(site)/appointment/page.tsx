import type { Metadata } from "next";
import { Suspense } from "react";
import { AppointmentForm } from "@/components/site/appointment-form";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Book an Appointment — GRAIR",
  description: "Private viewings in Paris, London, New York, Tokyo, or by video.",
};

export default function AppointmentPage() {
  return (
    <section className="appt-page">
      <div className="appt-intro">
        <Reveal as="p" className="eyebrow">
          Private viewings
        </Reveal>
        <Reveal as="h1" className="page-title" delay={0.1}>
          A room,
          <br />
          a stone,
          <br />
          your time.
        </Reveal>
        <Reveal as="p" className="page-lede" delay={0.2}>
          Every GRAIR piece is shown one to one. Choose a salon and a moment, and the atelier will prepare the pieces you
          want to see.
        </Reveal>
      </div>
      <Suspense>
        <AppointmentForm />
      </Suspense>
    </section>
  );
}
