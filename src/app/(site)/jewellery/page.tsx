import type { Metadata } from "next";
import { Suspense } from "react";
import { JewelleryGrid } from "@/components/site/jewellery-grid";
import { Reveal } from "@/components/site/reveal";
import { PIECES } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "All Jewellery — GRAIR",
  description: "Rings, necklaces, earrings and bracelets from every GRAIR collection.",
};

export default function JewelleryPage() {
  return (
    <>
      <section className="page-hero compact">
        <Reveal as="p" className="eyebrow">
          All jewellery
        </Reveal>
        <Reveal as="h1" className="page-title" delay={0.1}>
          Every piece.
        </Reveal>
      </section>
      <section className="section">
        <Suspense>
          <JewelleryGrid pieces={PIECES} />
        </Suspense>
      </section>
    </>
  );
}
