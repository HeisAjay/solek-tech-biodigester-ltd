import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/solektech-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
] as const;


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/75 border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 min-w-0" aria-label="SO'LEKTECH — Home">
            <img
              src={logoAsset.url}
              alt="SO'LEKTECH — Advanced biodigester sewage systems"
              width={160}
              height={48}
              loading="eager"
              decoding="async"
              className="h-8 sm:h-9 md:h-10 w-auto max-w-[160px] shrink-0 rounded-lg object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
                activeProps={{
                  className: scrolled
                    ? "px-4 py-2 text-sm font-medium rounded-full bg-muted text-foreground"
                    : "px-4 py-2 text-sm font-medium rounded-full bg-white/15 text-white",
                }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 rounded-xl gradient-emerald px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:opacity-95 transition"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Get a Free Assessment
            </Link>

          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              scrolled ? "text-foreground bg-muted" : "text-white bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2">
            <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-border shadow-elegant p-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-xl gradient-emerald px-4 py-3 text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
