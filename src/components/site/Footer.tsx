import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.22_0.01_250)] text-[oklch(0.85_0.01_250)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-3">
          <img src="/logo.png" alt="White Glove Courier" className="h-10 w-auto" />
          <p className="text-sm leading-relaxed text-[oklch(0.75_0.01_250)]">
            Professional courier and removal services delivered with care.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/removal-service" className="hover:text-white">
                Removal Service
              </Link>
            </li>
            <li>
              <Link to="/book-and-pay" className="hover:text-white">
                Book & Pay
              </Link>
            </li>
            <li>
              <Link to="/request-quote" className="hover:text-white">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Courier Services</li>
            <li>Removal Services</li>
            <li>Furniture Delivery</li>
            <li>Business Logistics</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/447547720911"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp: 07547 720911
              </a>
            </li>
            <li>
              <a href="mailto:Collinsstacy3131@gmail.com" className="hover:text-white">
                Collinsstacy3131@gmail.com
              </a>
            </li>
            <li>London, United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-[oklch(0.65_0.01_250)]">
          © {new Date().getFullYear()} White Glove Courier. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
