import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  Layers3,
} from "lucide-react";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Développement web",
  "Applications sur mesure",
  "Solutions de gestion",
  "Solutions e-commerce",
  "Analyse de données",
  "Accompagnement numérique",
];

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white">
      {/* PARTIE PRINCIPALE */}
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">

          {/* IDENTITÉ */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/atlantic-logo.png"
                alt="Atlantic Web Studio"
                width={220}
                height={75}
                className="h-auto w-[190px] object-contain"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-400">
              Votre partenaire technologique. Nous accompagnons les
              entreprises dans leur transformation numérique grâce à des
              solutions digitales adaptées à leurs ambitions.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-300">
              <Code2 size={15} />
              Le digital au service de votre croissance
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="mt-7 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Nos expertises
            </h3>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Parlons de votre projet
            </h3>

            <p className="mt-7 text-sm leading-7 text-slate-400">
              Une idée, un besoin ou un projet numérique ? Échangeons
              ensemble sur les possibilités de le concrétiser.
            </p>

            <a
              href="mailto:atlanticwebst@gmail.com "
              className="mt-6 flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              <Mail size={18} className="text-blue-400" />
                atlanticwebst@gmail.com     
            </a>

            <div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
              <MapPin size={18} className="text-blue-400" />
              Solutions numériques pour les entreprises
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
            >
              Nous contacter
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* BANDEAU */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Layers3 size={19} className="text-blue-400" />
              <h3 className="font-semibold text-white">
                Un projet en préparation ?
              </h3>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Donnons ensemble une nouvelle dimension à votre activité.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-white sm:mt-0"
          >
            Démarrer un projet
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
         <p>
  © 2026 Atlantic Web Studio. Tous droits réservés.
</p>

          <p>
            Conçu avec passion pour accompagner votre croissance.
          </p>
        </div>
      </div>
    </footer>
  );
}
