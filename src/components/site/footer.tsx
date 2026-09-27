import Link from "next/link";
import { COLLECTIONS } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cols">
        <div className="footer-col footer-intro">
          <p className="footer-lede">Formed in restraint. Crafted for those who do not need to announce their presence.</p>
          <Link href="/appointment" className="line-btn">
            <span>Book a private viewing</span>
          </Link>
        </div>
        <div className="footer-col">
          <p className="eyebrow">Collections</p>
          {COLLECTIONS.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`}>
              {c.name}
            </Link>
          ))}
        </div>
        <div className="footer-col">
          <p className="eyebrow">Jewellery</p>
          <Link href="/jewellery?c=Rings">Rings</Link>
          <Link href="/jewellery?c=Necklaces">Necklaces</Link>
          <Link href="/jewellery?c=Earrings">Earrings</Link>
          <Link href="/jewellery?c=Bracelets">Bracelets</Link>
        </div>
        <div className="footer-col">
          <p className="eyebrow">Maison</p>
          <Link href="/maison">Our story</Link>
          <Link href="/appointment">Appointments</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/">The experience</Link>
        </div>
      </div>
      <p className="footer-mark wordmark" aria-hidden="true">GRAIR</p>
      <div className="footer-legal">
        <span>© MMXXVI Maison GRAIR — a design concept</span>
        <span>Power without noise.</span>
      </div>
    </footer>
  );
}
