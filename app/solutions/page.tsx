import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Building2,
  ShoppingBag,
  ChartNoAxesCombined,
  Settings2,
  Database,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions numériques et digitalisation des entreprises",
  description:
    "Atlantic Web Studio accompagne les entreprises dans leur transformation numérique : digitalisation des activités, gestion d'entreprise, développement commercial, automatisation et analyse des données.",
};

const solutions = [
  {
    number: "01",
    icon: Workflow,
    title: "Digitalisation des activités",
    subtitle: "Passez du manuel au numérique.",
    description:
      "Les tâches manuelles et les informations dispersées peuvent ralentir le fonctionnement d'une entreprise. Nous proposons des solutions numériques pour simplifier et structurer les opérations quotidiennes.",
    problems: [
      "Informations dispersées entre plusieurs supports",
      "Tâches répétitives difficiles à suivre",
      "Manque de visibilité sur les opérations",
    ],
    responses: [
      "Centralisation des informations",
      "Dématérialisation de certains processus",
      "Outils numériques adaptés à votre organisation",
    ],
  },
  {
    number: "02",
    icon: Building2,
    title: "Gestion et pilotage d'entreprise",
    subtitle: "Gardez le contrôle de votre activité.",
    description:
      "Une bonne organisation nécessite des informations fiables et accessibles. Nous concevons des outils qui facilitent le suivi des activités et la gestion quotidienne de votre entreprise.",
    problems: [
      "Difficulté à suivre les ventes et les clients",
      "Gestion des stocks peu structurée",
      "Informations commerciales difficiles à retrouver",
    ],
    responses: [
      "Outils de gestion commerciale",
      "Solutions de suivi des stocks",
      "Centralisation des données de gestion",
    ],
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Développement commercial",
    subtitle: "Développez votre présence et vos ventes.",
    description:
      "Le numérique offre de nouvelles possibilités pour présenter vos offres, communiquer avec vos clients et développer vos activités commerciales.",
    problems: [
      "Faible visibilité sur Internet",
      "Difficulté à présenter ses produits en ligne",
      "Demandes clients difficiles à organiser",
    ],
    responses: [
      "Présence professionnelle sur Internet",
      "Solutions de vente en ligne",
      "Outils de suivi des demandes commerciales",
    ],
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Exploitation des données",
    subtitle: "Transformez vos données en informations utiles.",
    description:
      "Les données de votre activité peuvent vous aider à mieux comprendre vos performances. Nous concevons des outils de visualisation et d'analyse pour faciliter leur exploitation.",
    problems: [
      "Difficulté à interpréter les données",
      "Absence de vision globale des performances",
      "Indicateurs répartis dans plusieurs fichiers",
    ],
    responses: [
      "Tableaux de bord interactifs",
      "Indicateurs de performance",
      "Analyse et visualisation des données",
    ],
  },
  {
    number: "05",
    icon: Settings2,
    title: "Automatisation et optimisation",
    subtitle: "Simplifiez les processus de travail.",
    description:
      "Certaines opérations peuvent être simplifiées grâce à des outils numériques adaptés. Nous étudions les processus existants pour identifier les possibilités d'amélioration.",
    problems: [
      "Nombreuses opérations répétitives",
      "Multiplication des manipulations manuelles",
      "Outils qui communiquent difficilement entre eux",
    ],
    responses: [
      "Automatisation de certaines tâches",
      "Amélioration des processus existants",
      "Intégration et connexion d'outils numériques",
    ],
  },
  {
    number: "06",
    icon: Database,
    title: "Organisation de l'information",
    subtitle: "Retrouvez vos informations plus facilement.",
    description:
      "Une information bien organisée facilite le travail et améliore le suivi des activités. Nous concevons des solutions permettant de structurer, stocker et consulter les données.",
    problems: [
      "Documents et informations difficiles à retrouver",
      "Données enregistrées dans plusieurs endroits",
      "Difficulté à partager les informations utiles",
    ],
    responses: [
      "Bases de données structurées",
      "Espaces de gestion centralisés",
      "Accès organisé aux informations",
    ],
  },
];

const approach = [
  {
    number: "01",
    title: "Identifier",
    description:
      "Nous analysons votre organisation afin de comprendre les difficultés rencontrées et vos objectifs.",
  },
  {
    number: "02",
    title: "Proposer",
    description:
      "Nous identifions les solutions numériques qui répondent réellement à vos besoins.",
  },
  {
    number: "03",
    title: "Concrétiser",
    description:
      "Nous concevons et mettons en place une solution adaptée à votre activité.",
  },
  {
    number: "04",
    title: "Accompagner",
    description:
      "Nous vous accompagnons dans la prise en main et l'évolution de votre solution.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative bg-[#101828] px-6 py-24 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Nos solutions
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Nous transformons vos défis en{" "}
            <span className="text-blue-400">opportunités numériques.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Chaque entreprise rencontre des défis dans son organisation,
            sa gestion ou son développement. Découvrez comment le numérique
            peut vous aider à y répondre.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
          >
            Parlons de vos besoins
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Comprendre vos enjeux
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101828] sm:text-4xl">
              Votre entreprise mérite des outils à la hauteur de ses ambitions.
            </h2>
          </div>

          <p className="leading-8 text-slate-500">
            Notre approche commence par vos besoins, pas par la technologie.
            Nous cherchons à comprendre votre fonctionnement pour identifier
            les améliorations possibles et proposer des réponses adaptées à
            votre réalité.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#F8FAFC] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Nos domaines d'intervention
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">
              Des réponses aux défis de votre entreprise.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Explorez les différentes problématiques que nous pouvons vous
              aider à résoudre grâce aux solutions numériques.
            </p>
          </div>

          <div className="space-y-7">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/40 sm:p-10"
                >
                  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* PRESENTATION */}
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2458E8]">
                          <Icon size={26} />
                        </div>

                        <span className="text-sm font-bold text-slate-300">
                          {solution.number}
                        </span>
                      </div>

                      <h3 className="mt-7 text-2xl font-bold text-[#101828]">
                        {solution.title}
                      </h3>

                      <p className="mt-2 font-semibold text-blue-600">
                        {solution.subtitle}
                      </p>

                      <p className="mt-5 text-sm leading-8 text-slate-500">
                        {solution.description}
                      </p>
                    </div>

                    {/* PROBLEMES ET REPONSES */}
                    <div className="grid gap-7 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#101828]">
                          Les défis rencontrés
                        </h4>

                        <ul className="mt-5 space-y-4">
                          {solution.problems.map((problem) => (
                            <li
                              key={problem}
                              className="flex items-start gap-3 text-sm leading-6 text-slate-500"
                            >
                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                              {problem}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl bg-[#F8FAFC] p-6">
                        <h4 className="text-sm font-bold text-[#101828]">
                          Nos réponses possibles
                        </h4>

                        <ul className="mt-5 space-y-4">
                          {solution.responses.map((response) => (
                            <li
                              key={response}
                              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-blue-600"
                              />
                              {response}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-[#101828]"
                    >
                      Étudier ce besoin avec nous
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Notre approche
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">
              Une démarche pensée autour de vos besoins.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Nous avançons avec une méthode structurée pour passer de
              l'identification d'un problème à la mise en place d'une solution.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div key={step.number}>
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

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#101828] px-8 py-16 text-center sm:px-14 lg:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
              <Lightbulb size={27} />
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Votre entreprise rencontre un défi numérique ?
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
              Présentez-nous votre besoin. Nous étudierons ensemble les
              possibilités pour construire une solution adaptée à votre
              activité.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
            >
              Discuter de mon projet
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}