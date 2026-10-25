/* Renseignez ces valeurs : numéro WhatsApp avec indicatif et sans « + » ni espaces, e-mail. */
var CONFIG = { whatsapp: "221777182272", email: "yohanewagra@gmail.com" };

function $(s) { return document.querySelector(s); }

var yr = $("#yr");
if (yr) { yr.textContent = new Date().getFullYear(); }

var mb = $("#mb");
if (mb) {
  mb.addEventListener("click", function () {
    var o = $("#nav").classList.toggle("open");
    mb.setAttribute("aria-expanded", String(o));
  });
}

var cw = $("#cw");
if (cw && CONFIG.whatsapp) {
  cw.innerHTML = '<a href="https://wa.me/' + CONFIG.whatsapp + '">+' + CONFIG.whatsapp + "</a>";
}
var ce = $("#ce");
if (ce && CONFIG.email) {
  ce.innerHTML = '<a href="mailto:' + CONFIG.email + '">' + CONFIG.email + "</a>";
}

var fm = $("#fm");
if (fm) {
  var pre = new URLSearchParams(location.search).get("offre");
  if (pre) { $("#o").value = pre; }

  fm.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(fm);
    var g = function (k) { return (data.get(k) || "").toString().trim(); };
    var er = $("#er");
    if (!g("n") || !g("e") || !g("w")) {
      er.textContent = "Renseignez votre nom, votre entreprise et votre numéro WhatsApp pour continuer.";
      er.hidden = false;
      return;
    }
    er.hidden = true;
    var msg = [
      "Bonjour Atlantic Web Studio, je souhaite un devis.",
      "Nom : " + g("n"),
      "Entreprise : " + g("e"),
      "WhatsApp : " + g("w"),
      "Activité : " + g("a"),
      "Offre : " + g("o"),
      "Besoin : " + (g("m") || "à préciser")
    ].join("\n");
    var url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
    $("#wl").href = url;
    $("#ok").hidden = false;
    try { window.open(url, "_blank", "noopener"); } catch (x) {}
    $("#ok").scrollIntoView({ behavior: "smooth", block: "center" });
  });
}






/* ===== Assistant virtuel ===== */
(function () {
  var WA = CONFIG.whatsapp ? "https://wa.me/" + CONFIG.whatsapp : "contact.html";
  var L = {
    offres: { t: "Voir les offres", h: "offres.html" },
    services: { t: "Voir les services", h: "services.html" },
    etapes: { t: "Comment ça marche", h: "comment-ca-marche.html" },
    devis: { t: "Demander un devis", h: "contact.html#devis" },
    wa: { t: CONFIG.whatsapp ? "Écrire sur WhatsApp" : "Nous contacter", h: WA },
    essentiel: { t: "Demander ce pack", h: "contact.html?offre=Pack%20Gestion%20Essentiel#devis" },
    pro: { t: "Demander ce pack", h: "contact.html?offre=Pack%20Gestion%20Pro#devis" },
    site: { t: "Demander un devis", h: "contact.html?offre=Site%20et%20pr%C3%A9sence%20en%20ligne#devis" }
  };

  function e(k, a, l, w) { return { k: k, a: a, l: l || [], w: w || 1 }; }

  /* Base de réponses : modifiez librement les textes, prix et mots-clés.
     Un mot-clé terminé par * accepte toutes les fins de mot (facture* = facture, factures). */
  var KB = [
    e(["bonjour", "bonsoir", "salut", "hello", "coucou", "salam"],
      ["Bonjour ! Posez-moi une question sur nos services, nos offres, nos prix ou la façon de commander."], [], 0.5),
    e(["offre*", "pack*", "formule*", "proposition*", "catalogue"],
      ["Nous proposons trois offres :",
       "• Pack Gestion Essentiel : 100 000 FCFA, pour démarrer (tableur automatisé, formation, installation en 7 jours).",
       "• Pack Gestion Pro : à partir de 250 000 FCFA, application sur mesure pour une équipe.",
       "• Site et présence en ligne : de 100 000 à 350 000 FCFA, selon la formule."], [L.offres, L.devis]),
    e(["prix", "cout*", "coute*", "combien", "tarif*", "budget", "cher", "fcfa", "franc*", "montant"],
      ["Nos prix de départ :",
       "• Pack Essentiel : 100 000 FCFA",
       "• Pack Pro : à partir de 250 000 FCFA",
       "• Site et présence en ligne : 100 000 à 350 000 FCFA",
       "L’assistance mensuelle coûte de 10 000 à 25 000 FCFA selon l’offre. Ces prix sont indicatifs : le devis confirme le montant exact."], [L.devis, L.offres]),
    e(["essentiel", "tableur", "sheets", "excel", "google sheets", "petit"],
      ["Le Pack Gestion Essentiel coûte 100 000 FCFA, en paiement unique.",
       "Il comprend un tableur automatisé (Google Sheets) pour suivre vos ventes, votre stock, vos factures et vos dettes, une formation de 2 heures pour votre équipe et une installation en 7 jours.",
       "L’assistance est de 10 000 FCFA par mois."], [L.essentiel], 1.5),
    e(["pro", "sur mesure", "application*", "appli*", "employe*", "tableau de bord"],
      ["Le Pack Gestion Pro démarre à 250 000 FCFA, selon vos besoins.",
       "C’est une application sur mesure, web ou mobile, avec un tableau de bord, un accès pour plusieurs employés et l’envoi des factures sur WhatsApp.",
       "Livraison en 3 à 4 semaines. L’assistance est de 20 000 FCFA par mois."], [L.pro], 1.5),
    e(["site*", "vitrine", "boutique en ligne", "presence en ligne", "en ligne", "facebook", "maps", "web"],
      ["Notre offre Site et présence en ligne va de 100 000 à 350 000 FCFA selon la formule.",
       "Elle comprend un site vitrine ou une boutique en ligne, avec WhatsApp Business, Google Maps et Facebook configurés pour que vos clients vous trouvent.",
       "La maintenance coûte de 10 000 à 25 000 FCFA par mois."], [L.site], 1.5),
    e(["service*", "faites", "faire", "activite*", "metier", "propose*"],
      ["Nous proposons quatre services :",
       "• Outils de gestion : ventes, stock, factures et dettes",
       "• Applications sur mesure, web ou mobiles",
       "• Sites et présence en ligne",
       "• Formation et assistance mensuelle"], [L.services, L.offres]),
    e(["stock*", "vente*", "facture*", "dette*", "caisse", "gestion", "suivre", "suivi", "cahier"],
      ["Nos outils de gestion vous permettent de suivre :",
       "• vos ventes du jour et du mois",
       "• votre stock, avec une alerte quand un produit manque",
       "• vos factures et devis (envoi sur WhatsApp avec le Pack Pro)",
       "• les dettes de vos clients, avec des rappels par WhatsApp",
       "Le tout dans un tableau de bord simple, pour savoir chaque soir où en est votre entreprise."], [L.offres]),
    e(["paiement*", "payer", "paye*", "acompte", "mtn", "momo", "airtel", "money", "mobile money", "versement", "reglement"],
      ["Le paiement se fait en deux fois : 50 % à la commande et 50 % à la livraison.",
       "Nous acceptons MTN MoMo et Airtel Money."], [L.devis]),
    e(["delai*", "duree", "combien de temps", "livraison", "livrer", "installation", "installer", "rapide", "semaine*", "jours", "quand"],
      ["Les délais dépendent de l’offre :",
       "• Pack Essentiel : installation en 7 jours",
       "• Pack Pro : livraison en 3 à 4 semaines",
       "• Site : le délai dépend de la formule et figure dans le devis"], [L.devis]),
    e(["assistance", "support", "maintenance", "mensuel*", "abonnement*", "aide*", "mise a jour", "mises a jour", "sauvegarde*", "apres"],
      ["Après la livraison, l’assistance mensuelle comprend l’aide par WhatsApp, les mises à jour et les sauvegardes.",
       "Tarifs : 10 000 FCFA par mois pour le Pack Essentiel, 20 000 pour le Pack Pro, et 10 000 à 25 000 pour la maintenance d’un site."], [L.offres]),
    e(["formation*", "former", "formez", "apprendre", "personnel", "vendeuse*", "vendeur*", "utiliser", "difficile", "compliqu*"],
      ["Nous formons votre équipe pendant 2 heures à l’utilisation de l’outil, puis nous restons joignables sur WhatsApp pour répondre à ses questions.",
       "Pas besoin d’être expert en informatique pour commencer."], [L.etapes]),
    e(["boutique*", "restaurant*", "bar", "clinique*", "ecole*", "artisan*", "pme", "entreprise*", "secteur*", "convient", "commerce*", "hotel*", "cabinet*"],
      ["Nos solutions s’adressent aux PME de Pointe-Noire :",
       "• boutiques et commerces",
       "• restaurants et bars",
       "• artisans et prestataires de services",
       "• cliniques, cabinets, écoles et centres de formation",
       "• sous-traitants du port et du pétrole",
       "Décrivez-nous votre activité dans une demande de devis, nous vous conseillerons le pack adapté."], [L.devis], 0.8),
    e(["devis", "commander", "commande", "acheter", "souscrire", "demarrer", "commencer", "inscrire", "rdv", "rendez vous"],
      ["Pour demander un devis, remplissez le formulaire de la page Contact : votre demande s’ouvre dans WhatsApp, prête à envoyer.",
       "Nous vous proposons ensuite un échange gratuit de 20 minutes pour comprendre votre situation."], [L.devis, L.wa]),
    e(["contact*", "whatsapp", "telephone", "appeler", "adresse", "email", "mail", "joindre", "horaire*", "numero"],
      ["Nous sommes à Pointe-Noire, en République du Congo.",
       "Le plus simple est de nous écrire sur WhatsApp ou de passer par la page Contact."], [L.wa]),
    e(["etape*", "fonctionne*", "processus", "diagnostic", "marche", "deroule*", "procedure"],
      ["Ça se passe en quatre étapes :",
       "• Échange : un diagnostic gratuit de 20 minutes",
       "• Devis : une proposition claire et un acompte de 50 %",
       "• Installation et formation de votre équipe",
       "• Assistance mensuelle après la livraison"], [L.etapes]),
    e(["partenaire*", "partenariat*", "comptable*", "association*", "collaborer", "collaboration"],
      ["Nous cherchons à nouer des partenariats avec des professionnels de Pointe-Noire : experts-comptables, associations d’entrepreneurs, centres de formation.",
       "Si cela vous intéresse, contactez-nous."], [L.wa]),
    e(["internet", "connexion", "reseau", "coupure*", "electricite", "courant", "hors ligne", "panne*"],
      ["Le Pack Essentiel utilise Google Sheets, qui fonctionne avec une connexion internet.",
       "Si les coupures sont fréquentes dans votre activité, précisez-le dans votre demande de devis : nous étudierons avec vous la solution adaptée."], [L.devis]),
    e(["donnee*", "securite", "confidentialite", "securise*"],
      ["Vos données restent les vôtres. Nous prévoyons des sauvegardes régulières, des accès protégés et une clause de confidentialité dans le contrat."], [L.devis]),
    e(["gratuit*", "essai", "tester", "test", "demo", "demonstration"],
      ["Nous proposons un échange gratuit de 20 minutes pour comprendre votre situation.",
       "Pour une démonstration, précisez-le dans votre demande de devis."], [L.devis]),
    e(["promo*", "reduction*", "remise*", "lancement", "moins cher"],
      ["Une offre de lancement existe pour les 3 premières entreprises : le Pack Essentiel à 40 000 FCFA, en échange d’un témoignage sur vos résultats.",
       "Demandez-la dans votre devis."], [L.devis]),
    e(["qui etes vous", "presentez vous", "atlantic", "agence"],
      ["Atlantic Web Studio est une agence digitale basée à Pointe-Noire. Nous installons des outils de gestion simples pour les PME : ventes, stock, factures et dettes, avec formation et assistance."], [L.services]),
    e(["conseiller", "humain", "personne", "parler", "quelqu un", "responsable"],
      ["Bien sûr. Vous pouvez parler directement à notre équipe sur WhatsApp."], [L.wa]),
    e(["merci", "parfait", "super", "ok", "d accord", "genial"],
      ["Avec plaisir ! Si vous avez d’autres questions, je suis là."], [], 0.5)
  ];

  var WELCOME = "Bonjour ! Je suis l’assistant d’Atlantic Web Studio. Je peux répondre à vos questions sur nos services, nos offres, nos prix et la façon de commander.";
  var FALL = ["Je n’ai pas la réponse à cette question. Pour une réponse précise, écrivez-nous sur WhatsApp ou faites une demande de devis."];
  var CHIPS = ["Quelles sont vos offres ?", "Combien ça coûte ?", "Comment payer ?", "Quels délais ?", "Demander un devis"];

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  }
  function score(t, words, kw) {
    if (kw.slice(-1) === "*") {
      var st = kw.slice(0, -1);
      return words.some(function (w) { return w.indexOf(st) === 0; }) ? 1 : 0;
    }
    if (kw.indexOf(" ") > -1) { return (" " + t + " ").indexOf(" " + kw + " ") > -1 ? 2 : 0; }
    return words.indexOf(kw) > -1 ? 1 : 0;
  }
  function answer(q) {
    var t = norm(q), words = t.split(" "), best = null, top = 0;
    KB.forEach(function (en) {
      var s = 0;
      en.k.forEach(function (kw) { s += score(t, words, kw); });
      s *= en.w;
      if (s > top) { top = s; best = en; }
    });
    return best ? { r: "b", p: best.a, l: best.l } : { r: "b", p: FALL, l: [L.wa, L.devis] };
  }

  var state = { open: false, msgs: [] };
  try {
    var saved = JSON.parse(sessionStorage.getItem("aws_chat"));
    if (saved && saved.msgs) { state = saved; }
  } catch (x) {}
  function save() { try { sessionStorage.setItem("aws_chat", JSON.stringify(state)); } catch (x) {} }

  var wrap = document.createElement("div");
  wrap.innerHTML =
    '<button class="as-fab" id="as-fab" type="button" aria-expanded="false" aria-controls="as-box" aria-label="Ouvrir l’assistant"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg></button>' +
    '<div class="as-box" id="as-box" role="dialog" aria-label="Assistant Atlantic Web Studio" hidden>' +
    '<div class="as-hd"><div>Assistant Atlantic Web Studio<small>Réponses sur nos services et offres</small></div><button class="as-x" id="as-x" type="button" aria-label="Fermer l’assistant"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
    '<div class="as-log" id="as-log" role="log" aria-live="polite"></div>' +
    '<div class="as-ch" id="as-ch"></div>' +
    '<form class="as-fm" id="as-fm"><input id="as-in" type="text" placeholder="Posez votre question" aria-label="Votre question" autocomplete="off"><button type="submit" aria-label="Envoyer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg></button></form>' +
    '</div>';
  document.body.appendChild(wrap);

  var fab = $("#as-fab"), box = $("#as-box"), log = $("#as-log"), chips = $("#as-ch"), input = $("#as-in");

  function render(m) {
    var d = document.createElement("div");
    d.className = "as-m " + (m.r === "u" ? "as-u" : "as-b");
    m.p.forEach(function (t) {
      var p = document.createElement("p");
      p.textContent = t;
      d.appendChild(p);
    });
    if (m.l && m.l.length) {
      var c = document.createElement("div");
      c.className = "as-ln";
      m.l.forEach(function (k) {
        var a = document.createElement("a");
        a.href = k.h;
        a.textContent = k.t;
        if (k.h.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
        c.appendChild(a);
      });
      d.appendChild(c);
    }
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }
  function push(m) { state.msgs.push(m); save(); render(m); updateChips(); }
  function updateChips() {
    chips.hidden = state.msgs.some(function (m) { return m.r === "u"; });
  }
  function ask(q) {
    q = q.trim();
    if (!q) { return; }
    push({ r: "u", p: [q] });
    setTimeout(function () { push(answer(q)); }, 350);
  }
  function setOpen(o, focus) {
    state.open = o;
    save();
    box.hidden = !o;
    fab.setAttribute("aria-expanded", String(o));
    if (o) {
      if (!state.msgs.length) { push({ r: "b", p: [WELCOME] }); }
      if (focus) { input.focus(); }
    }
  }

  CHIPS.forEach(function (c) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", function () { ask(c); });
    chips.appendChild(b);
  });

  state.msgs.forEach(render);
  updateChips();
  setOpen(!!state.open, false);

  fab.addEventListener("click", function () { setOpen(!state.open, true); });
  $("#as-x").addEventListener("click", function () { setOpen(false); fab.focus(); });
  $("#as-fm").addEventListener("submit", function (ev) {
    ev.preventDefault();
    ask(input.value);
    input.value = "";
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && state.open) { setOpen(false); fab.focus(); }
  });
})();
