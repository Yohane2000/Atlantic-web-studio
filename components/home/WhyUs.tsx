import {
  Target,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const advantages = [
  {
    number: "01",
    icon: Target,
    title: "Une approche personnalisée",
    description:
      "Nous prenons le temps de comprendre votre activité, vos contraintes et vos objectifs avant de proposer une solution.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Des solutions adaptées",
    description:
      "Nous concevons des outils numériques pensés pour répondre à vos besoins réels et faciliter votre quotidien.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Un échange direct",
    description:
      "Vous bénéficiez d'une communication claire et d'un interlocuteur impliqué dans l'évolution de votre projet.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Un accompagnement continu",
    description:
      "Nous vous accompagnons de la réflexion initiale jusqu'à la mise en service de votre solution.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white px-6 py-24 lg:py-32">

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        {/* COLONNE GAUCHE */}
        <div>

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2458E8]">
            Pourquoi nous choisir ?
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
            Bien plus qu'un prestataire,
            <span className="text-[#2458E8]">
              {" "}un partenaire digital.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">
            Derrière chaque projet se trouve une ambition.
            Notre rôle est de comprendre vos enjeux et de vous
            proposer des solutions numériques cohérentes avec
            vos besoins et vos objectifs.
          </p>

          <div className="mt-9 space-y-4">

            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <CheckCircle2 size={19} className="text-blue-600" />
              Une démarche centrée sur vos besoins
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <CheckCircle2 size={19} className="text-blue-600" />
              Des solutions pensées pour votre activité
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <CheckCircle2 size={19} className="text-blue-600" />
              Un accompagnement à chaque étape
            </div>

          </div>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 hover:bg-[#101828]"
          >
            Échangeons sur votre projet

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

        {/* COLONNE DROITE */}
        <div className="grid gap-4 sm:grid-cols-2">

          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <div
                key={advantage.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2458E8] transition-all duration-300 group-hover:bg-[#2458E8] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {advantage.number}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-bold text-[#101828]">
                  {advantage.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {advantage.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}