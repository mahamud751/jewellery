"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { PieceCard } from "@/components/site/piece-card";
import { CATEGORIES, COLLECTIONS, type Category, type Piece } from "@/lib/catalog";

type Sort = "featured" | "low" | "high";

export function JewelleryGrid({ pieces }: { pieces: Piece[] }) {
  const params = useSearchParams();
  const initial = params.get("c");
  const [category, setCategory] = useState<Category | "All">(
    CATEGORIES.includes(initial as Category) ? (initial as Category) : "All",
  );
  const [collection, setCollection] = useState<string>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const shown = pieces
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => collection === "all" || p.collection === collection)
    .toSorted((a, b) => {
      if (sort === "featured") return 0;
      // Price on request sorts last either way.
      const pa = a.price ?? Number.POSITIVE_INFINITY;
      const pb = b.price ?? Number.POSITIVE_INFINITY;
      return sort === "low" ? pa - pb : (b.price ?? -1) - (a.price ?? -1);
    });

  return (
    <>
      <div className="filters">
        <div className="tabs" role="tablist" aria-label="Category">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              className={category === c ? "is-active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
              <sup>{c === "All" ? pieces.length : pieces.filter((p) => p.category === c).length}</sup>
            </button>
          ))}
        </div>
        <div className="selects">
          <label className="select">
            <span>Collection</span>
            <select value={collection} onChange={(e) => setCollection(e.target.value)}>
              <option value="all">All</option>
              {COLLECTIONS.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="select">
            <span>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="featured">Featured</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
            </select>
          </label>
        </div>
      </div>

      {shown.length ? (
        <div className="grid">
          {shown.map((piece) => (
            <PieceCard key={piece.slug} piece={piece} />
          ))}
        </div>
      ) : (
        <p className="empty">Nothing in this combination. Try another collection.</p>
      )}
    </>
  );
}
