import type { Metadata } from "next";
import Link from "next/link";
import { JewelView } from "@/components/site/jewel-view";
import { Reveal } from "@/components/site/reveal";
import { COLLECTIONS, getPiece, METALS, piecesIn } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Collections — GRAIR",
  description: "Silence, Instinct, Constant and Nocturne: the four collections of Maison GRAIR.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="page-hero">
        <Reveal as="p" className="eyebrow">
          Maison GRAIR — The Collections
        </Reveal>
        <Reveal as="h1" className="page-title" delay={0.1}>
          Four collections.
          <br />
          One silence.
        </Reveal>
        <Reveal as="p" className="page-lede" delay={0.2}>
          Each collection begins with a single idea and removes everything that does not serve it.
        </Reveal>
      </section>

      <section className="c-rows">
        {COLLECTIONS.map((c, index) => {
          const signature = getPiece(c.signature)!;
          const count = piecesIn(c.slug).length;
          return (
            <article key={c.slug} className={`c-row ${index % 2 ? "is-flipped" : ""}`} style={{ ["--accent" as string]: c.accent }}>
              <Reveal className="c-row-stage">
                <span className="c-row-numeral" aria-hidden="true">
                  {c.numeral}
                </span>
                <JewelView model={signature.model} metal={METALS[signature.metals[0]].color} stone={signature.stone} distance={3.1} />
              </Reveal>
              <Reveal className="c-row-text" delay={0.15}>
                <p className="eyebrow">
                  Collection {c.numeral} · {count} pieces
                </p>
                <h2 className="c-row-name">{c.name}</h2>
                <p className="c-row-tag">{c.tagline}</p>
                <p className="c-row-story">{c.story}</p>
                <Link href={`/collections/${c.slug}`} className="line-btn">
                  <span>Explore {c.name}</span>
                </Link>
              </Reveal>
            </article>
          );
        })}
      </section>
    </>
  );
}
