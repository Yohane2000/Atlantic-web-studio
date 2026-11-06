import {
  ArrowUpRight,
  Boxes,
  Users,
  ChartNoAxesCombined,
  BriefcaseBusiness,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Nexora Inventory",
    category: "Gestion de stock",
    description:
      "Une solution de gestion de stock pensée pour simplifier le suivi des produits, des mouvements et des opérations quotidiennes.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://nexora-inventory.vercel.app/",
    icon: Boxes,
    color: "blue",
    featured: true,
    highlights: ["Produits", "Mouvements", "Tableau de bord"],
  },
  {
    number: "02",
    name: "Nexora CRM",
    category: "Gestion commerciale",
    description:
      "Une plateforme destinée à centraliser les clients, prospects, ventes et activités commerciales.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    url: "https://crm-pro-ten-psi.vercel.app/",
    icon: Users,
    color: "violet",
    featured: false,
    highlights: ["Clients", "Prospects", "Ventes"],
  },
  {
    number: "03",
    name: "Sales Insights",
    category: "Data Analytics",
    description:
      "Une application d'analyse de données commerciales permettant de transformer les données de vente en indicateurs visuels.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://sales-insights-three.vercel.app/",
    icon: ChartNoAxesCombined,
    color: "emerald",
    featured: false,
    highlights: ["Analyses", "Indicateurs", "Visualisation"],
  },
  {
    number: "04",
    name: "Gestion Services",
    category: "Gestion d'entreprise",
    description:
      "Une application destinée à organiser les activités, les clients, les services et les opérations d'une entreprise.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://gestion-services-ten.vercel.app/",
    icon: BriefcaseBusiness,
    color: "orange",
    featured: true,
    highlights: ["Clients", "Planning", "Facturation"],
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700",
    badge: "bg-blue-50 text-blue-700",
    preview: "from-blue-50 to-indigo-100",
    accent: "bg-blue-600",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700",
    badge: "bg-violet-50 text-violet-700",
    preview: "from-violet-50 to-purple-100",
    accent: "bg-violet-600",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    badge: "bg-emerald-50 text-emerald-700",
    preview: "from-emerald-50 to-teal-100",
    accent: "bg-emerald-600",
  },
  orange: {
    icon: "bg-orange-100 text-orange-700",
    badge: "bg-orange-50 text-orange-700",
    preview: "from-orange-50 to-amber-100",
    accent: "bg-orange-600",
  },
};

export default function Projects() {
  return (
    <section className="bg-white px-6 py-24 lg:py-32">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2458E8]">
            Nos réalisations
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#101828] sm:text-5xl">
            Des idées transformées
            <span className="text-[#2458E8]">
              {" "}en solutions concrètes.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Découvrez quelques projets numériques développés pour
            répondre à des besoins concrets en matière de gestion,
            d'organisation et d'analyse.
          </p>

        </div>

        {/* PROJECTS GRID */}
        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => {
            const Icon = project.icon;

            const styles =
              colorStyles[project.color as keyof typeof colorStyles];

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70"
              >

                {/* VISUAL PREVIEW */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${styles.preview} p-6 sm:p-9`}
                >

                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/50 blur-3xl" />

                  <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl">

                    {/* WINDOW HEADER */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>

                      <span className="text-xs font-medium text-slate-400">
                        {project.name}
                      </span>

                      <Icon size={18} className="text-slate-400" />

                    </div>

                    {/* PREVIEW CONTENT */}
                    <div className="p-5 sm:p-7">

                      <div className="flex items-center gap-3">

                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}>
                          <Icon size={22} />
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            ESPACE PROFESSIONNEL
                          </p>

                          <h3 className="mt-1 font-bold text-[#101828]">
                            {project.name}
                          </h3>
                        </div>

                      </div>

                      {/* DASHBOARD CARDS */}
                      <div className="mt-6 grid grid-cols-3 gap-3">

                        {project.highlights.map((item, index) => (
                          <div
                            key={item}
                            className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                          >
                            <div className={`mb-3 h-2 w-8 rounded-full ${styles.accent} opacity-70`} />

                            <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                              MODULE 0{index + 1}
                            </p>

                            <p className="mt-2 text-xs font-bold text-slate-700 sm:text-sm">
                              {item}
                            </p>
                          </div>
                        ))}

                      </div>

                      {/* DECORATIVE CHART */}
                      <div className="mt-5 flex h-16 items-end gap-2 rounded-xl bg-slate-50 p-3">

                        {[35, 60, 45, 80, 55, 95, 70, 100, 65, 85].map(
                          (height, index) => (
                            <div
                              key={index}
                              className={`flex-1 rounded-t-sm ${styles.accent} opacity-60`}
                              style={{ height: `${height}%` }}
                            />
                          )
                        )}

                      </div>

                    </div>

                  </div>

                  <div className="absolute right-5 top-5 rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-600 backdrop-blur">
                    {project.number}
                  </div>

                </div>

                {/* PROJECT INFORMATION */}
                <div className="p-7 sm:p-9">

                  <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${styles.badge}`}>
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#101828]">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* PROJECT LINK */}
                  <div className="mt-8 border-t border-slate-100 pt-6">

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-3 text-sm font-bold text-[#2458E8] transition-colors hover:text-[#101828]"
                    >
                      Découvrir le projet

                      <ArrowUpRight
                        size={19}
                        className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 rounded-[28px] bg-[#101828] px-8 py-12 text-center sm:px-12">

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Et si nous réalisions votre prochain projet ?
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Chaque projet commence par une idée. Parlons de la vôtre
            et construisons ensemble une solution adaptée.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#101828] transition-all hover:bg-blue-50"
          >
            Démarrer un projet
            <ExternalLink size={17} />
          </a>

        </div>

      </div>

    </section>
  );
}