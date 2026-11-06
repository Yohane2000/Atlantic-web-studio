import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  MonitorSmartphone,
  Database,
  Headset,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Développement web",
    description:
      "Nous concevons des sites internet modernes, rapides et adaptés à votre activité pour renforcer votre présence digitale.",
    features: ["Sites vitrines", "Sites e-commerce", "Plateformes web"],
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Applications sur mesure",
    description:
      "Nous développons des applications adaptées à vos processus métier pour simplifier votre quotidien et améliorer votre organisation.",
    features: ["Applications web", "Interfaces métier", "Outils personnalisés"],
  },
  {
    number: "03",
    icon: Database,
    title: "Solutions de gestion",
    description:
      "Optimisez la gestion de votre entreprise grâce à des outils numériques conçus pour centraliser vos opérations.",
    features: ["Gestion de stock", "CRM", "Facturation et ventes"],
  },
  {
    number: "04",
    icon: Headset,
    title: "Accompagnement numérique",
    description:
      "Nous vous accompagnons dans vos projets numériques avec des conseils et une assistance adaptés à vos besoins.",
    features: ["Conseil digital", "Assistance informatique", "Accompagnement"],
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-24 lg:py-32">

      <div className="mx-auto max-w-7xl">

        {/* EN-TÊTE */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2458E8]">
              Nos expertises
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
              Des solutions digitales
              <span className="text-[#2458E8]"> pensées pour vous.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Chaque entreprise a ses propres défis. Nous développons
              des solutions numériques adaptées à vos objectifs et à
              votre réalité professionnelle.
            </p>

          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#2458E8] transition-colors hover:text-[#101828]"
          >
            Découvrir tous nos services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* CARTES */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative flex min-h-[390px] flex-col rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >

                {/* NUMÉRO */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2458E8] transition-all duration-300 group-hover:bg-[#2458E8] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold text-slate-300">
                    {service.number}
                  </span>

                </div>

                {/* CONTENU */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold leading-snug text-[#101828]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                </div>

                {/* FONCTIONNALITÉS */}
                <div className="mt-6 space-y-3">

                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2458E8]" />
                      {feature}
                    </div>
                  ))}

                </div>

                {/* LIEN */}
                <Link
                  href="/services"
                  aria-label={`En savoir plus sur ${service.title}`}
                  className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 text-sm font-semibold text-[#2458E8]"
                >
                  En savoir plus

                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

              </div>
            );
          })}

        </div>

        {/* BANDEAU */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#101828] px-8 py-9 md:flex-row lg:px-12">

          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Vous avez un projet particulier ?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Discutons ensemble de la solution adaptée à votre entreprise.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#101828] transition-all hover:bg-blue-50"
          >
            Parlons de votre projet
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}