"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  "Développement web",
  "Applications sur mesure",
  "Solutions de gestion",
  "Solutions e-commerce",
  "Analyse de données",
  "Accompagnement numérique",
  "Autre demande",
];

const budgets = [
  "Moins de 100 000 FCFA",
  "100 000 à 300 000 FCFA",
  "300 000 à 500 000 FCFA",
  "500 000 à 1 000 000 FCFA",
  "Plus de 1 000 000 FCFA",
  "À définir ensemble",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Une erreur est survenue lors de l'envoi.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer votre demande. Veuillez réessayer.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative bg-[#101828] px-6 py-24 lg:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Parlons de votre{" "}
            <span className="text-blue-400">prochain projet.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Vous avez une idée, un besoin ou un projet numérique ?
            Présentez-nous votre objectif et échangeons sur les solutions
            qui pourraient vous aider.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* INFORMATIONS */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Entrons en contact
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101828] sm:text-4xl">
              Votre projet mérite une solution adaptée.
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              Que vous souhaitiez créer un site web, développer une
              application ou améliorer votre organisation grâce au numérique,
              nous sommes disponibles pour étudier votre besoin.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#101828]">
                    Adresse e-mail
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Contactez-nous par e-mail pour présenter votre projet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MessageSquare size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#101828]">
                    Échange personnalisé
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Chaque demande mérite une attention particulière afin
                    d'identifier la solution appropriée.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BriefcaseBusiness size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#101828]">
                    Projets professionnels
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Sites web, applications, outils de gestion et solutions
                    numériques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-10">
            {submitted ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#101828]">
                  Demande envoyée avec succès !
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-slate-500">
                  Merci de votre confiance. Votre demande a bien été transmise
                  à Atlantic Web Studio. Nous reviendrons vers vous
                  prochainement.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage("");
                  }}
                  className="mt-8 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-[#101828] transition hover:bg-slate-50"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-[#101828]">
                    Présentez-nous votre projet
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Remplissez les informations ci-dessous pour nous permettre
                    de mieux comprendre votre demande.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                  {/* NOM ET EMAIL */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-[#101828]"
                      >
                        Nom complet *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Votre nom"
                        required
                        maxLength={120}
                        autoComplete="name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-[#101828]"
                      >
                        Adresse e-mail *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="exemple@email.com"
                        required
                        maxLength={254}
                        autoComplete="email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* TELEPHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Téléphone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      maxLength={40}
                      autoComplete="tel"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Service souhaité *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="" disabled>
                        Sélectionnez un service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* BUDGET */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Budget estimatif
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="">
                        Sélectionnez votre budget
                      </option>

                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Description du projet *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      maxLength={5000}
                      placeholder="Décrivez votre besoin, vos objectifs et les fonctionnalités souhaitées..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* ERREUR */}
                  {errorMessage && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-6 text-red-600"
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* BOUTON */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#2458E8] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition-all hover:-translate-y-1 hover:bg-[#101828] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Envoi en cours..." : "Envoyer ma demande"}

                    <Send
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs leading-6 text-slate-400">
                    Les champs marqués d'un astérisque (*) sont obligatoires.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}