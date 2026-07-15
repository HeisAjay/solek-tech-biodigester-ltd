import { Link } from "@tanstack/react-router";
import { Droplets, MapPin, Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#0b1220] text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-emerald text-white">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold text-white">SolekTech</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Advanced biodigester sewage systems engineered for homes, estates, hotels, schools,
              hospitals, commercial developments, and industry — designed for long service life,
              minimal maintenance, and real environmental responsibility.
            </p>
            <a
              href="https://wa.me/2347066602480"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-brand px-5 py-2.5 text-sm font-semibold text-[#0b1220] hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/process" className="hover:text-white transition">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-emerald-brand" /><span>No 52, Community Road, Ago Palace Way, Okota, Isolo<br />Lagos, Nigeria</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-emerald-brand" /><a href="mailto:Olaifasolomonadeleke2@gmail.com" className="hover:text-white">Olaifasolomonadeleke2@gmail.com</a></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-emerald-brand" /><a href="tel:+2347066602480" className="hover:text-white">+234 7066602480</a></li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} SolekTech. All rights reserved.</p>
          <p>Engineering smarter wastewater — since 2012.</p>
        </div>
      </div>
    </footer>
  );
}
