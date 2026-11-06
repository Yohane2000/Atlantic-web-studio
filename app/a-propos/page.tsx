import type { Metadata } from "next";
import About from "@/components/home/About";

export const metadata: Metadata = {
  title: "À propos d'Atlantic Web Studio",
  description:
    "Découvrez Atlantic Web Studio, votre partenaire technologique spécialisé dans le développement web, les applications sur mesure et les solutions numériques pour les entreprises.",
};

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#101828] px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Découvrez notre univers
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Nous mettons la technologie au service de
            <span className="text-blue-400"> vos ambitions.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Atlantic Web Studio accompagne les entreprises dans
            leur transformation numérique grâce à des solutions
            technologiques adaptées à leurs besoins.
          </p>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <About />
    </div>
  );
}