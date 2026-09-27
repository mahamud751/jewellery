import type { Metadata } from "next";
import Link from "next/link";
import { JewelView } from "@/components/site/jewel-view";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "The Maison — GRAIR",
  description: "How GRAIR selects, cuts and sets its stones, and why it makes so little.",
};

const STATS = [
  ["57", "Facets in every brilliant, each polished by hand"],
  ["1 / 10,000", "Rough stones that meet our standard"],
  ["140 h", "Average atelier hours per piece"],
  ["4", "Salons, and one private video room"],
];

const CHAPTERS = [
  {
    no: "01",
    title: "Origin",
    body: "GRAIR began with a single ring and a refusal: nothing on it that the stone did not need. Every collection since has started the same way, with one idea and a long list of things to take away.",
  },
  {
    no: "02",
    title: "The Atelier",
    body: "Eleven craftspeople, one room, north light. Pieces are made to order and move from bench to bench by hand: modelling, casting, setting, polishing. Nothing is outsourced and nothing is rushed.",
  },
  {
    no: "03",
    title: "The Stone",
    body: "We buy rough, not polished, and we reject far more than we keep. A stone is chosen for how it moves light, not for its certificate. Then it is cut to the proportions it asks for, not the ones that keep the most weight.",
  },
];

const CS = [
  ["Cut", "Excellent only", "Proportions chosen for light return, never for retained weight."],
  ["Colour", "D to F", "Colourless whites, and fancy violets graded by eye against a master set."],
  ["Clarity", "VVS1 to VS1", "No inclusion visible under ten-times magnification from the table."],
  ["Carat", "As the stone decides", "We cut to the brilliant inside the rough, whatever it weighs."],
];

export default function MaisonPage() {
  return (
    <>
      <section className="page-hero">
        <Reveal as="p" className="eyebrow">
          The Maison
        </Reveal>
        <Reveal as="h1" className="page-title" delay={0.1}>
          We make very little.
          <br />
          On purpose.
        </Reveal>
        <Reveal as="p" className="page-lede" delay={0.2}>
          GRAIR is a house built on restraint: few pieces, few stones, and no decoration a diamond would not choose for
          itself.
        </Reveal>
      </section>

      <section className="stone-band">
        <JewelView model="loose" metal="#eceef4" stone="white" className="stone-view" distance={3} />
        <div className="stats">
          {STATS.map(([value, label], i) => (
            <Reveal key={label} className="stat" delay={i * 0.08}>
              <p className="stat-value">{value}</p>
              <p className="stat-label">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="chapters-list">
        {CHAPTERS.map((c) => (
          <Reveal key={c.no} as="article" className="chapter-row">
            <p className="chapter-no">{c.no}</p>
            <h2 className="chapter-title">{c.title}</h2>
            <p className="chapter-body">{c.body}</p>
          </Reveal>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-heading">Our standard</h2>
          <p className="muted">The four Cs, and where we draw the line on each.</p>
        </div>
        <div className="cs">
          {CS.map(([name, grade, body], i) => (
            <Reveal key={name} className="c-card" delay={i * 0.08}>
              <p className="c-letter">{name.charAt(0)}</p>
              <h3>{name}</h3>
              <p className="c-grade">{grade}</p>
              <p className="muted">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="blockquote" className="quote">
        <p>“Strength does not raise its voice. It waits. It chooses. It moves only when necessary.”</p>
        <cite>The GRAIR manifesto</cite>
      </Reveal>

      <section className="cta-band">
        <Link href="/collections" className="line-btn">
          <span>See the collections</span>
        </Link>
        <Link href="/appointment" className="solid-btn">
          Book a private viewing
        </Link>
      </section>
    </>
  );
}
