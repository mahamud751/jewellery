import Link from "next/link";

export default function NotFound() {
  return (
    <div className="lost">
      <p className="eyebrow">404</p>
      <h1>This piece does not exist.</h1>
      <p>Some names do not fade. This one never was.</p>
      <Link href="/collections" className="line-btn">
        <span>Return to the collections</span>
      </Link>
    </div>
  );
}
