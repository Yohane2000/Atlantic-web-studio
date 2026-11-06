"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import About from "@/components/home/About";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101828] px-6 pb-24 pt-20 text-white lg:bg-white lg:text-[#101828] lg:pb-32 lg:pt-28">

        {/* EFFETS LUMINEUX MOBILE */}
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-600/25 blur-[100px] lg:hidden" />

        <div className="pointer-events-none absolute -left-32 top-[450px] h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] lg:hidden" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-800/10 blur-[100px] lg:hidden" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* TEXTE */}
          <div className="relative z-10">

            {/* BADGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm lg:border-blue-100 lg:bg-blue-50 lg:text-blue-700 lg:backdrop-blur-none"
            >
              <Sparkles size={15} />
              Studio digital & solutions numériques
            </motion.div>

            {/* TITRE */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.12 }}
              className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[68px] lg:text-[#101828]"
            >
              Le digital au service de votre{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent lg:bg-none lg:text-[#2458E8]">
                croissance.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-7 max-w-xl text-lg leading-8 text-slate-300 lg:text-slate-500"
            >
              Nous accompagnons les entreprises dans leur transformation
              numérique grâce à des sites web, des applications et des
              solutions digitales conçues pour répondre à leurs besoins.
            </motion.p>

            {/* BOUTONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/20"
              >
                Parlons de votre projet
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/realisations"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400 hover:bg-white/5 lg:border-slate-200 lg:text-[#101828] lg:hover:border-blue-200 lg:hover:bg-blue-50"
              >
                Découvrir nos projets
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* EXPERTISES */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.48 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300 lg:border-slate-100 lg:text-slate-500"
            >
              <span className="flex items-center gap-2">
                <Code2 size={17} className="text-cyan-400 lg:text-blue-600" />
                Développement sur mesure
              </span>

              <span className="flex items-center gap-2">
                <Layers3 size={17} className="text-cyan-400 lg:text-blue-600" />
                Solutions professionnelles
              </span>
            </motion.div>
          </div>

          {/* VISUEL DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* HALOS DU DASHBOARD */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/20 lg:shadow-slate-200/70">

              {/* FENÊTRE */}
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Atlantic Digital Workspace
                </span>

                <MonitorSmartphone size={18} className="text-slate-400" />
              </div>

              {/* CONTENU DU DASHBOARD */}
              <div className="bg-[#F8FAFC] p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      ESPACE PROFESSIONNEL
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#101828]">
                      Gérez votre activité.
                    </h3>
                  </div>

                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <Layers3 size={23} />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-100 bg-white p-5">
                    <p className="text-xs text-slate-400">Gestion</p>

                    <h4 className="mt-3 font-bold text-[#101828]">
                      Centralisée
                    </h4>

                    <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 w-4/5 rounded-full bg-blue-600" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-5">
                    <p className="text-xs text-slate-400">Solutions</p>

                    <h4 className="mt-3 font-bold text-[#101828]">
                      Sur mesure
                    </h4>

                    <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 w-3/4 rounded-full bg-cyan-500" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#101828]">
                      Nos expertises
                    </p>

                    <span className="text-xs text-blue-600">
                      Atlantic Web Studio
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      "Développement web",
                      "Applications professionnelles",
                      "Outils de gestion",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          {index === 0 ? (
                            <Code2 size={18} />
                          ) : index === 1 ? (
                            <MonitorSmartphone size={18} />
                          ) : (
                            <Layers3 size={18} />
                          )}
                        </div>

                        <span className="text-sm font-medium text-slate-600">
                          {item}
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="ml-auto text-slate-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BADGE FLOTTANT */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3 text-green-600">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#101828]">
                    Pensé pour votre activité
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Des solutions adaptées à vos besoins
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <Services />

      {/* SECTION RÉALISATIONS */}
      <Projects />

      {/* SECTION NOTRE MÉTHODE */}
      <Process />

      {/* SECTION POURQUOI NOUS CHOISIR */}
      <WhyUs />

      {/* SECTION À PROPOS */}
      <About />
    </div>
  );
}