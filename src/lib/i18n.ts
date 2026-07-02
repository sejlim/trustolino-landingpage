export type Lang = "de" | "en"

export const dictionaries = {
  de: {
    meta: {
      title: "Trustolino | Werde Trusted Educator",
      description:
        "Die stressfreie App für Kinderbetreuung. Registriere dich jetzt als Betreuer, sichere dir Vorteile und werde Teil der Trustolino-Community!",
    },
    nav: {
      features: "Features",
      trustedEducator: "Trusted Educator",
      businessModel: "Preis",
      cta: "Trusted Educator werden",
    },
    hero: {
      badge: "Pre-Release · Rhein-Neckar-Region",
      titleA: "Werde Teil von",
      titleHighlight: "Trustolino",
      intro: "Von der Suche bis hin zur sicheren Zahlungen, Trustolino verbindet Eltern mit geprüften Betreuern.",
      subtitle:
        "Sei von Anfang an dabei. Melde dich für das Trusted Educator Programm an und bestimme die Zukunft von Trustolino mit.",
      ctaPrimary: "Jetzt vorregistrieren",
      ctaSecondary: "Deine Vorteile",
      storeLabel: "Erhältlich ab Release in",
    },
    countdown: {
      heading: "Bis zum Release",
      days: "Tage",
      hours: "Std.",
      minutes: "Min.",
      seconds: "Sek.",
      live: "Wir sind live! Willkommen bei Trustolino.",
    },
    howItWorks: {
      title: "So funktioniert Trustolino für dich",
      subtitle: "Konzentrier dich auf das, was dir liegt. Wir kümmern uns um den Rest.",
      items: [
        {
          title: "Dein Profil, deine Regeln",
          desc: "Erstelle dein Profil, hinterlege deine Qualifikationen und lege deinen eigenen Preis pro 30 Minuten selbst fest.",
        },
        {
          title: "Einfacher Kalender",
          desc: "Trage deine freien Zeiten flexibel im 30-Minuten-Takt ein. Eltern in der Nähe finden dich automatisch.",
        },
        {
          title: "Sichere Buchung & Schutz",
          desc: "Das Geld der Eltern wird bei Buchung sicher reserviert. Chatte und telefoniere über die App, ohne deine Handynummer preiszugeben.",
        },
        {
          title: "Wir erledigen den Papierkram",
          desc: "Nach dem Termin wird das Geld automatisch aufgeteilt. Rechnungen werden vom System geschrieben und am Jahresende gibt es eine fertige EÜR.",
        },
      ]
    },
    trustedEducator: {
      title: "Was ist ein Trusted Educator?",
      subtitle: "Als Betreuer der ersten Stunde bist du sehr wichtig für uns. Deshalb bekommst du besondere Vorteile.",
      items: [
        {
          title: "Dein Trusted-Badge",
          desc: "Löse deinen Code bei der Registrierung in der App ein. So wissen Eltern sofort, dass du von Beginn an dabei bist.",
        },
        {
          title: "Du entscheidest mit",
          desc: "Wir hören auf dich: Alle sechs Monate fragen wir nach deiner Meinung. Du entscheidest über die Zukunft von Trustolino.",
        },
        {
          title: "Nur für kurze Zeit",
          desc: "Diesen Status gibt es nur, wenn du dich jetzt vor dem Start anmeldest.",
        }
      ]
    },
    businessModel: {
      title: "Fair und transparent",
      subtitle: "Gute Arbeit verdient ein faires System. Du zahlst nur, wenn du auch Geld verdienst.",
      feeTitle: "Kleine Transaktionsgebühr",
      feeDesc: "Wir behalten nur 3% Gebühr ein, wenn eine Betreuung erfolgreich über uns abgewickelt wurde. Hast du keine Buchungen, zahlst du auch keinen Cent.",
      freeTitle: "Alles andere ist kostenlos",
      freeDesc: "Keine Abos, keine versteckten Kosten. Alle Features sind für dich komplett kostenlos direkt verfügbar.",
      privacyTitle: "Werbefrei & Sicher",
      privacyDesc: "Trustolino ist komplett werbefrei. Die Datensicherheit unserer Nutzer liegt uns sehr am Herzen."
    },
    form: {
      title: "Sichere dir deinen Trusted Educator Status",
      subtitle: "Trag dich ein und erhalte zum Launch deinen exklusiven Coupon-Code.",
      gender: "Geschlecht",
      genderPlaceholder: "Bitte auswählen",
      genderMale: "Männlich",
      genderFemale: "Weiblich",
      genderDiverse: "Divers",
      age: "Alter",
      agePlaceholder: "Dein Alter",
      email: "E-Mail",
      emailPlaceholder: "du@beispiel.de",
      submit: "Jetzt vorregistrieren",
      submitting: "Wird gesendet …",
      successTitle: "Du bist dabei!",
      successDesc:
        "Danke für deine Vorregistrierung! Wir halten dich auf dem Laufenden und schicken dir pünktlich zum Launch deinen Coupon-Code.",
      errorRequired: "Bitte fülle alle Felder aus.",
      errorPrivacy: "Bitte akzeptiere die Datenschutzerklärung.",
      errorEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
      errorDuplicate: "Diese E-Mail ist bereits registriert.",
      errorAge: "Du musst mindestens 18 Jahre alt sein, um teilzunehmen.",
      errorGeneric: "Etwas ist schiefgelaufen. Bitte versuch es erneut.",
      privacy: "Mit der Anmeldung stimmst du zu, Infos zum Release zu erhalten.",
      privacyConsentBefore: "Ich habe die",
      privacyConsentLink: "Datenschutzerklärung",
      privacyConsentAfter: "gelesen und stimme zu.",
      emailNote: "Deine E-Mail nutzen wir nur für Updates zum Release und den Versand deines Coupon-Codes.",
      couponNote: "So funktioniert's: Zum Startschuss schicken wir dir einen einmaligen Code per E-Mail. Wenn du diesen bei deiner Profilerstellung in der App einlöst, bekommst du dauerhaft deinen Trusted Educator Status.",
    },
    legal: {
      privacyTitle: "Datenschutzerklärung",
      privacyContent:
        "Der Schutz deiner persönlichen Daten ist wichtig. Wir erheben und verarbeiten deine Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO).\n\nZweck der Datenverarbeitung: Vorregistrierung für Betreuer.\nAlle Daten aus der Vorregistrierung werden automatisch 24 Stunden nach dem finalen Versand des Coupon-Codes (nach Ablauf des Countdowns) gelöscht.",
      imprintTitle: "Impressum",
      imprintContent: "Trustolino\nMusterstraße 123\n68159 Mannheim\nDeutschland\n\ninfo@trustolino.de",
    },
    footer: {
      tagline: "Vertrauensvolle Kinderbetreuung",
      imprint: "Impressum",
      privacy: "Datenschutz",
      legalLabel: "Rechtliches",
    },
    common: {
      notFoundTitle: "Seite nicht gefunden",
      notFoundDesc: "Die Seite existiert leider nicht oder wurde verschoben.",
      notFoundCta: "Zurück zur Startseite",
    },
  },
  en: {
    meta: {
      title: "Trustolino | Become a Trusted Educator",
      description:
        "The stress-free app for childcare. Register now as a caregiver, secure early benefits, and join the Trustolino community!",
    },
    nav: {
      features: "Features",
      trustedEducator: "Trusted Educator",
      businessModel: "Pricing",
      cta: "Become a Trusted Educator",
    },
    hero: {
      badge: "Pre-Release · Rhein-Neckar Region",
      titleA: "Become a part of",
      titleHighlight: "Trustolino",
      intro: "From searching to secure payments, Trustolino connects parents with verified caregivers.",
      subtitle:
        "Be there from the start. Sign up for our Trusted Educator program and shape the future of Trustolino.",
      ctaPrimary: "Pre-register now",
      ctaSecondary: "Your Benefits",
      storeLabel: "Available at release on",
    },
    countdown: {
      heading: "Until Release",
      days: "Days",
      hours: "Hrs",
      minutes: "Min",
      seconds: "Sec",
      live: "We're live! Welcome to Trustolino.",
    },
    howItWorks: {
      title: "How Trustolino works for you",
      subtitle: "Focus on what you do best, we'll take care of the rest.",
      items: [
        {
          title: "Your Profile, Your Rules",
          desc: "Create your profile, add your qualifications, and set your own price per 30 minutes.",
        },
        {
          title: "Simple Calendar",
          desc: "Enter your availability flexibly in 30-minute blocks. Nearby parents will automatically find you.",
        },
        {
          title: "Secure Booking & Protection",
          desc: "Parents' payments are securely reserved upon booking. Chat and call safely via the app without sharing your phone number.",
        },
        {
          title: "We Handle the Paperwork",
          desc: "After the appointment, payouts are automatic. Invoices are generated by the system, and at year-end, you get a ready-to-use tax summary.",
        },
      ]
    },
    trustedEducator: {
      title: "What is a Trusted Educator?",
      subtitle: "As an early adopter, you are incredibly important to us. That's why we guarantee you exclusive benefits.",
      items: [
        {
          title: "The Trusted Badge",
          desc: "You will receive a special, permanently visible badge on your profile, showing parents instantly that you've been here from the start.",
        },
        {
          title: "Active Participation",
          desc: "We listen to you: Every six months we ask for your feedback. You decide on the future of Trustolino.",
        },
        {
          title: "Limited Availability",
          desc: "This status is exclusively for those who pre-register now during our pre-release phase.",
        }
      ]
    },
    businessModel: {
      title: "Fair and transparent",
      subtitle: "Good work deserves good conditions. You only pay when you actually earn money.",
      feeTitle: "Small transaction fee",
      feeDesc: "We only charge a small 3% transaction fee on successfully completed bookings. If you don't have any bookings, you pay absolutely nothing.",
      freeTitle: "No subscription traps",
      freeDesc: "No monthly fees, no premium paywalls for caregivers. All features are completely free and available immediately.",
      privacyTitle: "Ad-free & Secure",
      privacyDesc: "Trustolino is completely ad-free. The data security of our users is very important to us."
    },
    form: {
      title: "Secure your Trusted Educator status",
      subtitle: "Sign up and receive your exclusive coupon code at launch.",
      gender: "Gender",
      genderPlaceholder: "Please select",
      genderMale: "Male",
      genderFemale: "Female",
      genderDiverse: "Diverse",
      age: "Age",
      agePlaceholder: "Your age",
      email: "Email",
      emailPlaceholder: "you@example.com",
      submit: "Pre-register now",
      submitting: "Sending …",
      successTitle: "You're in!",
      successDesc:
        "Thank you for pre-registering! We'll keep you updated and send your coupon code right in time for the launch.",
      errorRequired: "Please fill in all fields.",
      errorPrivacy: "Please accept the privacy policy.",
      errorEmail: "Please enter a valid email address.",
      errorDuplicate: "This email is already registered.",
      errorAge: "You must be at least 18 years old to participate.",
      errorGeneric: "Something went wrong. Please try again.",
      privacy: "By signing up you agree to receive release updates.",
      privacyConsentBefore: "I have read the",
      privacyConsentLink: "Privacy Policy",
      privacyConsentAfter: "and agree to it.",
      emailNote: "We only use your email for launch updates and to send your coupon code.",
      couponNote: "How it works: At launch, we'll send you a unique code via email. Redeem it during your in-app profile creation to permanently unlock your Trusted Educator status.",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyContent:
        "The protection of your personal data is important to us. We collect and process your data exclusively on the basis of legal provisions (GDPR).\n\nPurpose of data processing: Pre-registration for caregivers.\nAll pre-registration data is automatically deleted 24h after the final coupon codes are sent (after the countdown expires).",
      imprintTitle: "Imprint",
      imprintContent: "Trustolino\nMusterstraße 123\n68159 Mannheim\nGermany\n\ninfo@trustolino.de",
    },
    footer: {
      tagline: "Trusted childcare",
      imprint: "Imprint",
      privacy: "Privacy",
      legalLabel: "Legal",
    },
    common: {
      notFoundTitle: "Page not found",
      notFoundDesc: "This page does not exist or has been moved.",
      notFoundCta: "Back to home",
    },
  },
} as const

export type Dictionary = (typeof dictionaries)["de"]
