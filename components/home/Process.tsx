import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Découverte",
    icon: Search,
    description:
      "Nous prenons le temps de comprendre votre activité, vos besoins et les objectifs que vous souhaitez atteindre.",
    detail: "Comprendre vos besoins",
  },
  {
    number: "02",
    title: "Conception",
    icon: PenTool,
    description:
      "Nous définissons une solution adaptée à votre entreprise, avec une vision claire de son fonctionnement et de son architecture.",
    detail: "Imaginer la solution",
  },
  {
    number: "03",
    title: "Développement",
    icon: Code2,
    description:
      "Nous donnons vie à votre projet en développant une solution moderne, fonctionnelle et adaptée à vos utilisateurs.",
    detail: "Construire votre projet",
  },
  {
    number: "04",
    title: "Déploiement",
    icon: Rocket,
    description:
      "Nous préparons la mise en service de votre solution et vous accompagnons dans sa prise en main.",
    detail: "Donner vie à votre projet",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#101828] px-6 py-24 lg:py-32">

      {/* DÉCORATION */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Notre approche
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            De votre idée à une solution
            <span className="text-blue-400">
              {" "}concrète.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Chaque projet mérite une approche structurée.
            Nous avançons avec vous à chaque étape pour transformer
            vos besoins en solutions numériques.
          </p>

        </div>

        {/* ÉTAPES */}
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {/* LIGNE DE CONNEXION */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/60 to-blue-500/10 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative"
              >

                {/* NUMÉRO ET ICÔNE */}
                <div className="relative z-10 flex items-center justify-between lg:justify-start">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-[#17243A] text-blue-400 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-[#2458E8] group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-900/40">

                    <Icon size={27} strokeWidth={1.7} />

                  </div>

                  <span className="text-3xl font-bold text-white/10 lg:ml-5">
                    {step.number}
                  </span>

                </div>

                {/* CONTENU */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                </div>

                {/* SÉPARATEUR */}
                <div className="mt-7 h-px w-full bg-white/10" />

                {/* DETAIL */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-400">

                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                  {step.detail}

                </div>

              </div>
            );
          })}

        </div>

        {/* BANDEAU FINAL */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 md:flex-row">

          <div>

            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Vous avez une idée en tête ?
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Faisons le premier pas ensemble et donnons forme à votre projet.
            </p>

          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
          >
            Démarrer une discussion

            <ArrowUpRight size={18} />

          </a>

        </div>

      </div>

    </section>
  );
}