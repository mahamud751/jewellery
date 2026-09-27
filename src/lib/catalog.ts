export type Model =
  | "solitaire"
  | "halo"
  | "eternity"
  | "band"
  | "pendant"
  | "riviera"
  | "studs"
  | "drops"
  | "hoops"
  | "tennis"
  | "cuff"
  | "loose";

export type Category = "Rings" | "Necklaces" | "Earrings" | "Bracelets";
export type MetalId = "platinum" | "white-gold" | "yellow-gold" | "rose-gold";
export type StoneId = "white" | "violet" | "ice" | "champagne";

export const METALS: Record<MetalId, { label: string; color: string }> = {
  platinum: { label: "Platinum 950", color: "#eceef4" },
  "white-gold": { label: "18k White Gold", color: "#e2e2e6" },
  "yellow-gold": { label: "18k Yellow Gold", color: "#f0c677" },
  "rose-gold": { label: "18k Rose Gold", color: "#ebb39c" },
};

export type Piece = {
  slug: string;
  name: string;
  collection: string;
  category: Category;
  model: Model;
  stone: StoneId;
  metals: MetalId[];
  /** Euros; null means price on request. */
  price: number | null;
  carat: string;
  line: string;
  story: string;
  specs: [string, string][];
};

export type Collection = {
  slug: string;
  numeral: string;
  name: string;
  tagline: string;
  story: string;
  signature: string;
  accent: string;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "silence",
    numeral: "I",
    name: "Silence",
    tagline: "One stone. Nothing to interrupt it.",
    story:
      "The founding collection. Every piece holds a single diamond and removes everything else, so the stone is the only thing that speaks. Knife-edge bands, invisible settings, platinum worn close to the skin.",
    signature: "noir-solitaire",
    accent: "#e9e4ff",
  },
  {
    slug: "instinct",
    numeral: "II",
    name: "Instinct",
    tagline: "Strength that waits.",
    story:
      "Sculpted metal, held in tension. Claws that grip a stone the way a hand closes around something it will not let go. Heavier pieces, designed to be felt before they are seen.",
    signature: "instinct-cuff",
    accent: "#f0c677",
  },
  {
    slug: "constant",
    numeral: "III",
    name: "Constant",
    tagline: "No beginning. No end.",
    story:
      "Stones set edge to edge in unbroken lines. Eternity bands, tennis bracelets and rivières that turn without ever repeating. The collection for promises that do not need to be repeated either.",
    signature: "constant-tennis",
    accent: "#cfe0ff",
  },
  {
    slug: "nocturne",
    numeral: "IV",
    name: "Nocturne",
    tagline: "High jewellery, after dark.",
    story:
      "Six one-of-one pieces, each built around a fancy violet diamond, a colour found once in a generation. Made to order in the atelier over months, shown only by private appointment.",
    signature: "nocturne-halo",
    accent: "#cdb1ff",
  },
];

export const PIECES: Piece[] = [
  // Silence
  {
    slug: "noir-solitaire",
    name: "Noir Solitaire",
    collection: "silence",
    category: "Rings",
    model: "solitaire",
    stone: "white",
    metals: ["platinum", "yellow-gold", "rose-gold"],
    price: 18400,
    carat: "2.10 ct",
    line: "Four claws. One brilliant. Nothing else.",
    story:
      "A round brilliant raised on four fine claws above a knife-edge band. The setting is cut back until light reaches the stone from every side.",
    specs: [
      ["Centre stone", "2.10 ct round brilliant, E VVS1"],
      ["Setting", "Four-claw, open gallery"],
      ["Band", "1.9 mm knife-edge"],
    ],
  },
  {
    slug: "silence-band",
    name: "Silence Band",
    collection: "silence",
    category: "Rings",
    model: "band",
    stone: "white",
    metals: ["platinum", "yellow-gold", "rose-gold"],
    price: 4200,
    carat: "0.15 ct",
    line: "A single stone, set flush into the metal.",
    story: "A flat, softly domed band with one brilliant sunk level into its surface. Made to be worn every day and never taken off.",
    specs: [
      ["Stone", "0.15 ct round brilliant, flush set"],
      ["Band", "4 mm comfort fit"],
      ["Finish", "High polish"],
    ],
  },
  {
    slug: "silence-pendant",
    name: "Silence Pendant",
    collection: "silence",
    category: "Necklaces",
    model: "pendant",
    stone: "white",
    metals: ["platinum", "white-gold", "yellow-gold"],
    price: 7600,
    carat: "1.00 ct",
    line: "A point of light at the collarbone.",
    story: "A one-carat brilliant suspended from a fine cable chain. The bail is hidden behind the stone so nothing interrupts its outline.",
    specs: [
      ["Stone", "1.00 ct round brilliant, F VS1"],
      ["Chain", "Cable, 42 cm, adjustable to 40 cm"],
      ["Bail", "Concealed"],
    ],
  },
  {
    slug: "silence-studs",
    name: "Silence Studs",
    collection: "silence",
    category: "Earrings",
    model: "studs",
    stone: "white",
    metals: ["platinum", "white-gold", "yellow-gold"],
    price: 6900,
    carat: "2 × 0.50 ct",
    line: "The pair that goes with everything.",
    story: "Two matched half-carat brilliants in four-claw baskets, cut to sit close to the ear.",
    specs: [
      ["Stones", "2 × 0.50 ct, matched pair"],
      ["Setting", "Four-claw basket"],
      ["Fastening", "Screw back"],
    ],
  },

  // Instinct
  {
    slug: "instinct-cuff",
    name: "Instinct Cuff",
    collection: "instinct",
    category: "Bracelets",
    model: "cuff",
    stone: "white",
    metals: ["yellow-gold", "platinum", "rose-gold"],
    price: 22800,
    carat: "1.20 ct",
    line: "An open circle, closed around a stone.",
    story: "A sculpted open cuff, heavy in the hand, with a single brilliant held where the two ends almost meet.",
    specs: [
      ["Stone", "1.20 ct round brilliant"],
      ["Metal weight", "Approx. 48 g"],
      ["Width", "9 mm, tapering"],
    ],
  },
  {
    slug: "instinct-claw",
    name: "Instinct Claw Ring",
    collection: "instinct",
    category: "Rings",
    model: "solitaire",
    stone: "champagne",
    metals: ["yellow-gold", "rose-gold"],
    price: 12600,
    carat: "1.60 ct",
    line: "Held, not placed.",
    story: "A champagne diamond gripped by four long claws that rise out of the band like fingers closing.",
    specs: [
      ["Centre stone", "1.60 ct champagne brilliant"],
      ["Setting", "Elongated claw"],
      ["Band", "2.2 mm knife-edge"],
    ],
  },
  {
    slug: "instinct-drops",
    name: "Instinct Drops",
    collection: "instinct",
    category: "Earrings",
    model: "drops",
    stone: "champagne",
    metals: ["yellow-gold", "rose-gold"],
    price: 9800,
    carat: "2 × 0.70 ct",
    line: "They move only when you do.",
    story: "Oval champagne diamonds on short articulated chains, weighted to swing slowly and settle quickly.",
    specs: [
      ["Stones", "2 × 0.70 ct oval, champagne"],
      ["Drop length", "32 mm"],
      ["Fastening", "Lever back"],
    ],
  },
  {
    slug: "instinct-chain",
    name: "Instinct Chain",
    collection: "instinct",
    category: "Necklaces",
    model: "pendant",
    stone: "champagne",
    metals: ["yellow-gold", "rose-gold"],
    price: 8400,
    carat: "0.80 ct",
    line: "A heavier chain, a warmer stone.",
    story: "A champagne brilliant on a gauge of cable chain made to be felt against the skin.",
    specs: [
      ["Stone", "0.80 ct champagne brilliant"],
      ["Chain", "Cable, 45 cm"],
      ["Clasp", "Lobster"],
    ],
  },

  // Constant
  {
    slug: "constant-tennis",
    name: "Constant Tennis Bracelet",
    collection: "constant",
    category: "Bracelets",
    model: "tennis",
    stone: "white",
    metals: ["platinum", "white-gold", "yellow-gold"],
    price: 26500,
    carat: "7.20 ct",
    line: "Forty stones, no end.",
    story: "Forty matched brilliants, each in its own articulated setting, forming a line of light that closes on itself.",
    specs: [
      ["Stones", "40 × 0.18 ct, matched"],
      ["Total weight", "7.20 ct"],
      ["Clasp", "Hidden box, double safety"],
    ],
  },
  {
    slug: "constant-eternity",
    name: "Constant Eternity Band",
    collection: "constant",
    category: "Rings",
    model: "eternity",
    stone: "white",
    metals: ["platinum", "yellow-gold", "rose-gold"],
    price: 9900,
    carat: "2.40 ct",
    line: "All the way around.",
    story: "Twenty-two brilliants set shoulder to shoulder around the full circumference of the band.",
    specs: [
      ["Stones", "22 × 0.11 ct"],
      ["Setting", "Shared claw, full eternity"],
      ["Band", "3 mm"],
    ],
  },
  {
    slug: "constant-hoops",
    name: "Constant Hoops",
    collection: "constant",
    category: "Earrings",
    model: "hoops",
    stone: "ice",
    metals: ["platinum", "white-gold", "yellow-gold"],
    price: 11200,
    carat: "1.80 ct",
    line: "A circle that catches light at every angle.",
    story: "Slim hoops set along their visible arc with diamonds that turn faintly blue in daylight.",
    specs: [
      ["Stones", "2 × 12 brilliants, ice blue"],
      ["Diameter", "24 mm"],
      ["Fastening", "Hinged click"],
    ],
  },
  {
    slug: "constant-riviere",
    name: "Constant Rivière",
    collection: "constant",
    category: "Necklaces",
    model: "riviera",
    stone: "white",
    metals: ["platinum", "white-gold"],
    price: 48000,
    carat: "12.60 ct",
    line: "A river of graduated stones.",
    story: "Brilliants graduated from the nape to a single larger stone at the centre, each set to move independently.",
    specs: [
      ["Stones", "Graduated, 0.10 to 1.50 ct"],
      ["Total weight", "12.60 ct"],
      ["Length", "40 cm"],
    ],
  },

  // Nocturne
  {
    slug: "nocturne-halo",
    name: "Nocturne Halo Ring",
    collection: "nocturne",
    category: "Rings",
    model: "halo",
    stone: "violet",
    metals: ["platinum"],
    price: null,
    carat: "3.02 ct",
    line: "The violet at the centre of everything.",
    story:
      "A fancy violet diamond of 3.02 carats inside a halo of white brilliants. One of one. Shown in the salon by appointment only.",
    specs: [
      ["Centre stone", "3.02 ct fancy violet, VVS1"],
      ["Halo", "16 white brilliants"],
      ["Edition", "One of one"],
    ],
  },
  {
    slug: "nocturne-riviere",
    name: "Nocturne Rivière",
    collection: "nocturne",
    category: "Necklaces",
    model: "riviera",
    stone: "violet",
    metals: ["platinum"],
    price: null,
    carat: "21.40 ct",
    line: "Night, worn at the throat.",
    story: "A rivière of white diamonds leading to a 4-carat fancy violet. Eleven months in the atelier.",
    specs: [
      ["Centre stone", "4.10 ct fancy violet"],
      ["Total weight", "21.40 ct"],
      ["Edition", "One of one"],
    ],
  },
  {
    slug: "nocturne-drops",
    name: "Nocturne Drops",
    collection: "nocturne",
    category: "Earrings",
    model: "drops",
    stone: "violet",
    metals: ["platinum"],
    price: null,
    carat: "2 × 1.50 ct",
    line: "A matched pair, found two years apart.",
    story: "Two oval violet diamonds so closely matched that the second took two years to find.",
    specs: [
      ["Stones", "2 × 1.50 ct fancy violet oval"],
      ["Drop length", "40 mm"],
      ["Edition", "One of one"],
    ],
  },
  {
    slug: "nocturne-cuff",
    name: "Nocturne Cuff",
    collection: "nocturne",
    category: "Bracelets",
    model: "cuff",
    stone: "violet",
    metals: ["platinum"],
    price: null,
    carat: "2.20 ct",
    line: "The Instinct cuff, reborn in violet.",
    story: "The sculpted platinum cuff, closed around a 2.20-carat fancy violet diamond.",
    specs: [
      ["Stone", "2.20 ct fancy violet"],
      ["Metal", "Platinum, hand polished"],
      ["Edition", "One of one"],
    ],
  },
  {
    slug: "nocturne-pendant",
    name: "Nocturne Pendant",
    collection: "nocturne",
    category: "Necklaces",
    model: "pendant",
    stone: "violet",
    metals: ["platinum"],
    price: null,
    carat: "1.80 ct",
    line: "The smallest way into Nocturne.",
    story: "A single fancy violet brilliant on a platinum chain.",
    specs: [
      ["Stone", "1.80 ct fancy violet"],
      ["Chain", "Platinum cable, 42 cm"],
      ["Edition", "Numbered, 1 of 3"],
    ],
  },
  {
    slug: "nocturne-eternity",
    name: "Nocturne Eternity",
    collection: "nocturne",
    category: "Rings",
    model: "eternity",
    stone: "violet",
    metals: ["platinum"],
    price: null,
    carat: "3.30 ct",
    line: "Violet, all the way around.",
    story: "Twenty-two violet diamonds matched in colour from a parcel of several hundred.",
    specs: [
      ["Stones", "22 fancy violet brilliants"],
      ["Total weight", "3.30 ct"],
      ["Edition", "One of one"],
    ],
  },
];

export const CATEGORIES: Category[] = ["Rings", "Necklaces", "Earrings", "Bracelets"];

export const getCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug);
export const getPiece = (slug: string) => PIECES.find((p) => p.slug === slug);
export const piecesIn = (slug: string) => PIECES.filter((p) => p.collection === slug);

/** Fixed locale so the server and the browser print the same string. */
export const formatPrice = (price: number | null) =>
  price === null
    ? "Price on request"
    : new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);
