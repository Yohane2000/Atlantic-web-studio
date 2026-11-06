import {
  Target,
  Lightbulb,
  ShieldCheck,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous imaginons des solutions modernes pour répondre aux défis numériques des entreprises.",
  },
  {
    icon: Target,
    title: "Pertinence",
    description:
      "Chaque solution est pensée en fonction des objectifs et des besoins réels de votre activité.",
  },
  {
    icon: ShieldCheck,
    title: "Engagement",
    description:
      "Nous accordons une importance particulière à la qualité, à la fiabilité et au suivi de nos réalisations.",
  },
  {
    icon: Handshake,
    title: "Proximité",
    description:
      "Nous privilégions l'écoute, le dialogue et une relation de confiance avec chaque client.",
  },
];

export default function About() {
  return (
    <section className="bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* INTRODUCTION */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              À propos d'Atlantic Web Studio
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
              La technologie au service de{" "}
              <span className="text-[#2458E8]">vos ambitions.</span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-500">
              Atlantic Web Studio accompagne les entreprises dans leur
              transformation numérique à travers la conception de sites web,
              d'applications professionnelles et de solutions de gestion.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              Notre approche repose sur une conviction simple : la technologie
              doit apporter une réelle valeur à votre activité. C'est pourquoi
              nous privilégions des solutions utiles, accessibles et adaptées
              à vos objectifs.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#101828]"
            >
              Construisons votre projet
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* VISION */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#101828] p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Notre vision
              </span>

              <h3 className="mt-8 text-3xl font-bold leading-snug sm:text-4xl">
                Faire du numérique un véritable levier de croissance.
              </h3>

              <p className="mt-7 leading-8 text-slate-300">
                Nous souhaitons contribuer à un environnement dans lequel
                chaque entreprise peut tirer parti des opportunités offertes
                par le digital pour mieux s'organiser, gagner en efficacité et
                développer ses activités.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-sm font-medium text-blue-300">
                  Atlantic Web Studio
                </p>
                <p className="mt-2 text-xl font-semibold">
                  Votre partenaire technologique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="mt-24 rounded-[28px] border border-slate-100 bg-[#F8FAFC] p-8 sm:p-12">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Notre mission
          </span>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <h3 className="text-3xl font-bold leading-tight text-[#101828] sm:text-4xl">
              Transformer vos besoins en solutions numériques concrètes.
            </h3>

            <p className="leading-8 text-slate-500">
              De la réflexion à la mise en œuvre, nous accompagnons les
              entreprises dans la création de solutions digitales qui
              simplifient leur quotidien, améliorent leur organisation et
              soutiennent leur développement.
            </p>
          </div>
        </div>

        {/* VALEURS */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Ce qui nous guide
            </span>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">
              Des principes au cœur de chaque projet.
            </h3>

            <p className="mt-5 leading-8 text-slate-500">
              Ces valeurs orientent notre manière de concevoir les solutions
              et de collaborer avec les entreprises.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2458E8]">
                    <Icon size={23} />
                  </div>

                  <h4 className="mt-7 text-xl font-bold text-[#101828]">
                    {value.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}