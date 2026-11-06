"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contacter", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="relative flex items-center"
        >
          <Image
            src="/images/atlantic-logo.png"
            alt="Atlantic Web Studio"
            width={230}
            height={65}
            priority
            className="h-auto w-[190px] object-contain transition-transform duration-300 hover:scale-[1.03] sm:w-[220px]"
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#2458E8]"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#2458E8] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* BOUTON CONTACT DESKTOP */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#2458E8] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#101828] hover:shadow-lg lg:inline-flex"
        >
          Parlons de votre projet
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* BOUTON MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* MENU MOBILE ANIMÉ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white shadow-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-medium text-slate-700 transition-colors duration-200 hover:text-[#2458E8]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#2458E8] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#101828]"
              >
                Parlons de votre projet
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}