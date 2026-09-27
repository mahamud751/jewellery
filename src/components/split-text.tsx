import { Fragment } from "react";

type Tag = "h1" | "h2" | "p" | "div";

/**
 * Letters animate one by one, but each word stays in its own nowrap box
 * so a line can only ever break between words. `start` offsets the stagger.
 */
function Words({ text, start }: { text: string; start: number }) {
  const words = text.split(" ");
  let index = start;
  return words.map((word, w) => (
    <Fragment key={`${word}-${w}`}>
      <span className="word">
        {Array.from(word).map((char, c) => (
          <span className="ch" key={c} style={{ ["--i" as string]: index++ }}>
            {char}
          </span>
        ))}
      </span>
      {w < words.length - 1 ? " " : null}
    </Fragment>
  ));
}

/** Where each chunk's stagger begins: the letter count of everything before it. */
const offsets = (chunks: string[]) =>
  chunks.map((_, i) => chunks.slice(0, i).reduce((sum, chunk) => sum + chunk.replaceAll(" ", "").length, 0));

export function SplitText({
  text,
  className,
  active,
  as: TagName = "h2",
}: {
  text: string;
  className?: string;
  active: boolean;
  as?: Tag;
}) {
  const lines = text.split("\n").map((line) => line.trim());
  const starts = offsets(lines);

  return (
    <TagName className={`split ${className ?? ""} ${active ? "is-on" : ""}`}>
      {lines.map((line, lineIndex) => (
        <span className="split-line" key={`${line}-${lineIndex}`}>
          <Words text={line} start={starts[lineIndex]} />
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </TagName>
  );
}

/** Hero lockup: the second break only appears on small screens, matching GRAIR. */
export function HeroTitle({ active }: { active: boolean }) {
  const [a, b, c] = offsets(["Power", "without", "noise"]);
  return (
    <h1 className={`split hero-title ${active ? "is-on" : ""}`}>
      <Words text="Power" start={a} />
      <br />
      <Words text="without" start={b} />
      {" "}
      <br className="mob-br" />
      <Words text="noise" start={c} />
    </h1>
  );
}
