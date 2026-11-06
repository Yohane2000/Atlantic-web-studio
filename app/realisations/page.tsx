import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Monitor,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations et projets numériques",
  description:
    "Découvrez les réalisations d'Atlantic Web Studio : applications de gestion de stock, CRM, outils d'analyse de données et solutions numériques professionnelles.",
};

const projects = [
  {
    number: "01",
    name: "Nexora Inventory",
    category: "Gestion de stock",
    description:
      "Une application de gestion de stock conçue pour faciliter le suivi des produits et des mouvements de stock au sein d'une activité professionnelle.",
    objective:
      "Simplifier la gestion quotidienne des stocks grâce à une interface claire et accessible.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://nexora-inventory.vercel.app/",
    icon: Boxes,
    preview: "inventory",
    color: "blue",
  },
  {
    number: "02",
    name: "Nexora CRM",
    category: "Gestion commerciale",
    description:
      "Une solution CRM destinée à centraliser les informations commerciales et à faciliter le suivi des clients, des prospects et des opérations.",
    objective:
      "Améliorer l'organisation commerciale et centraliser les informations utiles à l'activité.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    url: "https://crm-pro-ten-psi.vercel.app/",
    icon: BriefcaseBusiness,
    preview: "crm",
    color: "violet",
  },
  {
    number: "03",
    name: "Sales Insights",
    category: "Analyse de données",
    description:
      "Un projet orienté analyse de données commerciales, avec une interface destinée à rendre les informations plus faciles à consulter.",
    objective:
      "Faciliter la lecture des données et la compréhension des performances commerciales.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://sales-insights-three.vercel.app/",
    icon: ChartNoAxesCombined,
    preview: "analytics",
    color: "cyan",
  },
  {
    number: "04",
    name: "Gestion Services",
    category: "Gestion d'entreprise",
    description:
      "Une application web de gestion destinée à accompagner l'organisation et le suivi des activités d'une entreprise.",
    objective:
      "Proposer un espace numérique centralisé pour faciliter la gestion de l'activité.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://gestion-services-ten.vercel.app/",
    icon: Monitor,
    preview: "management",
    color: "emerald",
  },
];

function ProjectPreview({ type }: { type: string }) {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F1F5F9] p-6 sm:h-72">
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[10px] font-semibold text-slate-400">
            PROJECT PREVIEW
          </span>
        </div>

        {type === "inventory" && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-32 rounded bg-slate-800" />
              </div>
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <Boxes size={20} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {["Produits", "Entrées", "Sorties"].map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 p-3">
                  <div className="h-2 w-10 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-8 rounded bg-blue-600/80" />
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-md bg-blue-50" />
                  <div className="h-2 flex-1 rounded bg-slate-100" />
                  <div className="h-2 w-10 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "crm" && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-32 rounded bg-slate-800" />
              </div>
              <div className="rounded-lg bg-violet-50 p-3 text-violet-600">
                <BriefcaseBusiness size={20} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-100 p-3">
                <div className="h-2 w-14 rounded bg-slate-200" />
                <div className="mt-3 h-5 w-12 rounded bg-violet-500/80" />
              </div>
              <div className="rounded-lg border border-slate-100 p-3">
                <div className="h-2 w-14 rounded bg-slate-200" />
                <div className="mt-3 h-5 w-12 rounded bg-blue-500/80" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-violet-100" />
                  <div className="h-2 flex-1 rounded bg-slate-100" />
                  <div className="h-2 w-12 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "analytics" && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-32 rounded bg-slate-800" />
              </div>
              <div className="rounded-lg bg-cyan-50 p-3 text-cyan-600">
                <ChartNoAxesCombined size={20} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 p-3">
                  <div className="h-2 w-10 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-8 rounded bg-cyan-600/80" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-20 items-end gap-2 rounded-lg border border-slate-100 p-3">
              {[35, 65, 45, 85, 55, 95, 70, 100, 60, 80].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-cyan-500/80"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>
        )}

        {type === "management" && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="mt-2 h-4 w-32 rounded bg-slate-800" />
              </div>
              <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
                <Monitor size={20} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-lg bg-slate-50 p-3">
                <div className="h-2 w-12 rounded bg-slate-200" />
                <div className="mt-3 h-3 w-16 rounded bg-emerald-500/80" />
              </div>
              <div className="h-16 rounded-lg bg-slate-50 p-3">
                <div className="h-2 w-12 rounded bg-slate-200" />
                <div className="mt-3 h-3 w-16 rounded bg-blue-500/80" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-md bg-emerald-50" />
                  <div className="h-2 flex-1 rounded bg-slate-100" />
                  <div className="h-2 w-10 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative bg-[#101828] px-6 py-24 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Nos réalisations
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Des idées transformées en{" "}
            <span className="text-blue-400">solutions concrètes.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Découvrez une sélection de projets numériques illustrant notre
            approche du développement web, des applications professionnelles
            et des outils digitaux.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Portfolio
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">
              Nos projets sélectionnés
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-slate-500">
            Chaque réalisation répond à un objectif précis : simplifier une
            tâche, améliorer une organisation ou rendre les données plus
            accessibles.
          </p>
        </div>
      </section>

      {/* PROJETS */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="grid overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <ProjectPreview type={project.preview} />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-blue-600">
                      {project.number}
                    </span>
                    <span className="h-px w-10 bg-blue-200" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={23} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#101828] sm:text-3xl">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-6 leading-8 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-bold text-[#101828]">
                      Objectif du projet
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {project.objective}
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm font-bold text-[#101828]">
                      Technologies
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#101828]"
                    >
                      Découvrir le projet
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#101828] px-8 py-16 text-center sm:px-14 lg:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Et si votre projet devenait notre prochaine réalisation ?
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
              Présentez-nous votre idée. Nous serons ravis d'échanger avec
              vous sur les possibilités de la concrétiser.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
            >
              Démarrer un projet
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}