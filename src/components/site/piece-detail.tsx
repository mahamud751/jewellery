"use client";

import Link from "next/link";
import { useState } from "react";
import { JewelView } from "@/components/site/jewel-view";
import { WishButton } from "@/components/site/piece-card";
import { formatPrice, METALS, type Collection, type MetalId, type Piece } from "@/lib/catalog";

const SIZES = ["46", "48", "50", "52", "54", "56", "58"];

const CARE = [
  {
    title: "Craftsmanship",
    body: "Each piece is finished by hand in the atelier. Stones are selected individually and set under magnification, then the metal is polished in stages until no tool mark remains.",
  },
  {
    title: "Care",
    body: "Store each piece separately in its pouch. Clean with warm water and a soft brush. We offer complimentary cleaning and claw checks for life.",
  },
  {
    title: "Certification",
    body: "Every centre stone over 0.30 ct is accompanied by an independent grading report and a Maison GRAIR certificate of authenticity.",
  },
];

export function PieceDetail({ piece, collection }: { piece: Piece; collection: Collection }) {
  const [metal, setMetal] = useState<MetalId>(piece.metals[0]);
  const [size, setSize] = useState<string | null>(null);
  const [open, setOpen] = useState(0);
  const ring = piece.category === "Rings";
  const appointment = `/appointment?piece=${piece.slug}`;

  return (
    <section className="pdp">
      <div className="pdp-stage" style={{ ["--accent" as string]: collection.accent }}>
        <JewelView model={piece.model} metal={METALS[metal].color} stone={piece.stone} controls distance={3} />
        <p className="pdp-hint">Drag to turn · Scroll to look closer</p>
      </div>

      <div className="pdp-info">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/collections">Collections</Link>
          <span>/</span>
          <Link href={`/collections/${collection.slug}`}>{collection.name}</Link>
        </nav>
        <h1 className="pdp-name">{piece.name}</h1>
        <p className="pdp-line">{piece.line}</p>
        <p className="pdp-price">{formatPrice(piece.price)}</p>

        <div className="option">
          <p className="option-label">
            Metal <span>{METALS[metal].label}</span>
          </p>
          <div className="swatches">
            {piece.metals.map((id) => (
              <button
                key={id}
                type="button"
                className={`swatch ${metal === id ? "is-active" : ""}`}
                style={{ ["--swatch" as string]: METALS[id].color }}
                aria-label={METALS[id].label}
                aria-pressed={metal === id}
                onClick={() => setMetal(id)}
              />
            ))}
          </div>
        </div>

        {ring ? (
          <div className="option">
            <p className="option-label">
              Size <span>{size ? `EU ${size}` : "Select"}</span>
            </p>
            <div className="sizes">
              {SIZES.map((s) => (
                <button key={s} type="button" className={size === s ? "is-active" : ""} aria-pressed={size === s} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="pdp-actions">
          <Link href={appointment} className="solid-btn">
            {piece.price === null ? "Request a private viewing" : "Reserve in boutique"}
          </Link>
          <WishButton slug={piece.slug} label />
        </div>

        <p className="pdp-story">{piece.story}</p>

        <dl className="specs">
          <div>
            <dt>Carat weight</dt>
            <dd>{piece.carat}</dd>
          </div>
          {piece.specs.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="accordion">
          {CARE.map((item, index) => (
            <div key={item.title} className={`acc ${open === index ? "is-open" : ""}`}>
              <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                {item.title}
                <span aria-hidden="true">{open === index ? "−" : "+"}</span>
              </button>
              <div className="acc-body">
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
