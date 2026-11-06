import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ShoppingCart,
  Smartphone,
  Database,
  BarChart3,
  Settings2,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services de développement web et solutions numériques",
  description:
    "Découvrez les services d'Atlantic Web Studio : création de sites web professionnels, développement d'applications sur mesure, solutions de gestion, e-commerce et accompagnement numérique pour les entreprises.",
};

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Développement web",
    description:
      "Nous concevons des sites web professionnels qui valorisent votre activité, renforcent votre présence en ligne et facilitent les échanges avec vos clients.",
    solutions: [
      "Sites vitrines professionnels",
      "Sites web institutionnels",
      "Boutiques e-commerce",
      "Plateformes web personnalisées",
    ],
    benefit:
      "Une présence digitale professionnelle pour présenter vos services et développer votre visibilité.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Applications sur mesure",
    description:
      "Nous développons des applications adaptées à votre fonctionnement pour simplifier vos opérations et répondre aux besoins spécifiques de votre entreprise.",
    solutions: [
      "Applications web professionnelles",
      "Interfaces métier personnalisées",
      "Plateformes de réservation",
      "Outils numériques spécifiques",
    ],
    benefit:
      "Des outils conçus autour de vos méthodes de travail et de vos objectifs.",
  },
  {
    number: "03",
    icon: Database,
    title: "Solutions de gestion",
    description:
      "Nous créons des outils numériques permettant de mieux organiser et suivre les différentes activités de votre entreprise.",
    solutions: [
      "Gestion commerciale et CRM",
      "Gestion des stocks",
      "Gestion des ventes et facturation",
      "Centralisation des informations",
    ],
    benefit:
      "Une meilleure organisation de vos opérations et une vision plus claire de votre activité.",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Solutions e-commerce",
    description:
      "Nous accompagnons les entreprises qui souhaitent vendre leurs produits ou services en ligne avec une expérience d'achat simple et professionnelle.",
    solutions: [
      "Boutiques en ligne",
      "Catalogues de produits",
      "Gestion des commandes",
      "Intégration de solutions de paiement adaptées",
    ],
    benefit:
      "Développez un nouveau canal de vente et rendez vos offres accessibles en ligne.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Analyse et valorisation des données",
    description:
      "Nous concevons des outils permettant de mieux exploiter vos données afin de suivre vos performances et faciliter vos décisions.",
    solutions: [
      "Tableaux de bord interactifs",
      "Suivi des indicateurs d'activité",
      "Analyse des données commerciales",
      "Visualisation des performances",
    ],
    benefit:
      "Transformez vos données en informations utiles pour piloter votre activité.",
  },
  {
    number: "06",
    icon: Settings2,
    title: "Accompagnement numérique",
    description:
      "Nous vous aidons à identifier les opportunités offertes par le numérique et à choisir des solutions adaptées à votre organisation.",
    solutions: [
      "Conseil en solutions digitales",
      "Identification des besoins",
      "Assistance à la mise en place",
      "Accompagnement dans l'évolution des outils",
    ],
    benefit:
      "Avancez avec une meilleure compréhension de vos besoins et des solutions disponibles.",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Nous échangeons avec vous pour comprendre votre activité, vos besoins et vos objectifs.",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Nous définissons une solution adaptée et organisons les différentes étapes du projet.",
  },
  {
    number: "03",
    title: "Développer",
    description:
      "Nous réalisons votre solution en accordant une attention particulière à sa qualité et à son utilisation.",
  },
  {
    number: "04",
    title: "Accompagner",
    description:
      "Nous vous accompagnons lors de la mise en service et dans la prise en main de votre solution.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative bg-[#101828] px-6 py-24 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Nos expertises
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Des solutions digitales pour{" "}
            <span className="text-blue-400">
              faire avancer votre activité.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Du développement web aux outils de gestion, nous concevons des
            solutions numériques pensées pour répondre aux besoins concrets
            des entreprises.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
          >
            Discutons de votre projet
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Ce que nous proposons
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101828] sm:text-4xl">
              Le bon outil pour répondre au bon besoin.
            </h2>
          </div>

          <p className="leading-8 text-slate-500">
            Chaque entreprise possède ses propres enjeux. Notre objectif est
            de proposer des solutions pertinentes, évolutives et adaptées à
            votre réalité, plutôt que des outils standardisés qui ne répondent
            pas à vos attentes.
          </p>
        </div>
      </section>

      {/* LISTE DES SERVICES */}
      <section className="bg-[#F8FAFC] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group rounded-[28px] border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/50 sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2458E8] transition-colors group-hover:bg-[#2458E8] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-bold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#101828]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-7">
                    <p className="text-sm font-bold text-[#101828]">
                      Nos prestations
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.solutions.map((solution) => (
                        <div
                          key={solution}
                          className="flex items-start gap-2 text-sm text-slate-500"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-[#F8FAFC] p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Votre avantage
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {service.benefit}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Notre méthode
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">
              De votre idée à sa concrétisation.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Une démarche structurée pour construire des solutions adaptées
              à vos objectifs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-blue-100">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#101828]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#101828] px-8 py-16 text-center sm:px-14 lg:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
              <Lightbulb size={27} />
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Vous avez un projet en tête ?
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
              Parlons de vos besoins et étudions ensemble la solution
              numérique qui pourra accompagner le développement de votre
              activité.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
            >
              Parlons de votre projet
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}