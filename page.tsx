"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, CheckCircle, Shield, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Language = "fr" | "en" | "nl" | "de" | "es"

const t = {
  fr: {
    nav: { home: "Accueil", services: "Services", projects: "Réalisations", about: "À propos" },
    hero: {
      title: "Transformez votre espace",
      subtitle: "en un lieu qui vous ressemble",
      description: "Spécialistes en construction et rénovation en Belgique",
      cta: "Demande de Devis Gratuit",
    },
    about: {
      title: "Qui sommes-nous ?",
      description: "Basés en Belgique, MAZ STRUCTURA opère dans tout le pays pour vos projets de construction et de rénovation avec sérieux, qualité et engagement.",
      description2: "Nous sommes spécialisés dans la construction, la rénovation et les structures partout en Belgique. Nous accompagnons nos clients avec sérieux, transparence et professionnalisme, du début à la fin de chaque projet.",
      features: ["Professionnalisme", "Travaux garantis", "Matériaux de qualité", "Respect des délais"],
    },
    services: {
      title: "Nos Services",
      subtitle: "Une expertise complète en construction et rénovation",
      items: [
        {
          title: "Rénovations Complètes",
          desc: "Transformation complète de votre maison ou appartement. Gestion de tous les aspects du projet : démolition, construction, finition, peinture et décoration. De la planification à la livraison finale, nous créons des espaces modernes et fonctionnels adaptés à vos besoins et votre style de vie.",
          color: "from-blue-600 to-blue-800",
          img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
        },
        {
          title: "Salle de Bain",
          desc: "Modernisez votre salle de bain avec un design élégant contemporain. Installation de douches à l'italienne, baignoires, carrelage premium, meubles sur mesure et robinetterie moderne. Nous optimisons l'espace et créons une atmosphère spa dans votre maison.",
          color: "from-purple-600 to-purple-800",
          img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
        },
        {
          title: "Cuisine",
          desc: "Créez la cuisine de vos rêves avec des finitions de qualité supérieure. Installation d'armoires modernes, plans de travail en pierre naturelle, appareils haut de gamme et éclairage LED. Design ergonomique pour optimiser l'espace de travail et de rangement.",
          color: "from-green-600 to-green-800",
          img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
        },
        {
          title: "Électricité & Plomberie",
          desc: "Services professionnels aux normes belges. Installation électrique complète, mise en conformité, domotique, chauffage et climatisation. Plomberie sanitaire, raccordements, réparations et entretien. Intervention rapide par des techniciens qualifiés et certifiés.",
          color: "from-orange-600 to-orange-800",
          img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
        },
        {
          title: "Ventilation",
          desc: "Installation de systèmes de ventilation performants pour une qualité d'air optimal dans votre habitation ou local commercial. Ventilation mécanique contrôlée (VMC), systèmes double flux à haute efficacité énergétique. Améliore le confort et réduit les risques d'humidité.",
          color: "from-cyan-600 to-cyan-800",
          img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
        },
        {
          title: "Climatisation",
          desc: "Installation et entretien de systèmes de climatisation haute performance pour votre confort en toutes saisons. Climatiseurs split, systèmes multi-zones, pompes à chaleur. Solutions énergétiquement efficaces certifiées par nos techniciens agréés.",
          color: "from-sky-600 to-sky-800",
          img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        },
        {
          title: "Structures Acier",
          desc: "Construction et assemblage de structures métalliques industrielles et résidentielles. Charpentes métalliques, portiques, mezzanines, escaliers en acier. Travaux réalisés par des soudeurs et monteurs certifiés, conformes aux normes européennes EN 1090.",
          color: "from-gray-600 to-gray-800",
          img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
        },
        {
          title: "Structures Bois",
          desc: "Réalisation de charpentes et structures bois de haute qualité pour toitures, ossatures et extensions. Bois certifié FSC, assemblage traditionnel et moderne. Idéal pour extensions de maison, toitures, terrasses couvertes et constructions écologiques.",
          color: "from-amber-600 to-amber-800",
          img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80"
        },
      ]
    },
    contact: {
      title: "Obtenez un devis gratuit !",
      subtitle: "Contactez-nous",
      name: "Nom complet", email: "E-mail", phone: "Téléphone",
      service: "Quel service vous faut-il ?", message: "Message", send: "Envoyer",
    },
    testimonials: "Ce que disent nos clients",
    footer: { rights: "Tous droits réservés.", specialization: "Spécialisation : Structures en acier et bois, assemblage et montage." },
  },
  en: {
    nav: { home: "Home", services: "Services", projects: "Projects", about: "About" },
    hero: {
      title: "Transform your space",
      subtitle: "into a place that suits you",
      description: "Construction and renovation specialists in Belgium",
      cta: "Free Quote Request",
    },
    about: {
      title: "Who are we?",
      description: "Based in Belgium, MAZ STRUCTURA operates across the country for your construction and renovation projects with seriousness, quality and commitment.",
      description2: "We specialize in construction, renovation and structures throughout Belgium. We support our clients with seriousness, transparency and professionalism.",
      features: ["Professionalism", "Guaranteed work", "Quality materials", "Respect for deadlines"],
    },
    services: {
      title: "Our Services",
      subtitle: "Complete expertise in construction and renovation",
      items: [
        { title: "Complete Renovations", desc: "Complete transformation of your home or apartment. Management of all project aspects: demolition, construction, finishing, painting.", color: "from-blue-600 to-blue-800" },
        { title: "Bathroom", desc: "Modernize your bathroom with elegant contemporary design. Installation of walk-in showers, bathtubs, premium tiles.", color: "from-purple-600 to-purple-800" },
        { title: "Kitchen", desc: "Create the kitchen of your dreams with superior quality finishes. Installation of modern cabinets, natural stone countertops.", color: "from-green-600 to-green-800" },
        { title: "Electrical & Plumbing", desc: "Professional services to Belgian standards. Complete electrical installation, home automation, heating and air conditioning.", color: "from-orange-600 to-orange-800" },
        { title: "Ventilation", desc: "Healthy airflow for better quality of life. Energy-efficient air systems.", color: "from-cyan-600 to-cyan-800" },
        { title: "Air Conditioning", desc: "Comfort in all seasons with high-performance systems.", color: "from-sky-600 to-sky-800" },
        { title: "Steel Structures", desc: "Construction of industrial and residential metal structures.", color: "from-gray-600 to-gray-800" },
        { title: "Wood Structures", desc: "High quality timber frames and wood structures.", color: "from-amber-600 to-amber-800" },
      ]
    },
    contact: {
      title: "Get a free quote!",
      subtitle: "Contact us",
      name: "Full name", email: "E-mail", phone: "Phone",
      service: "What service do you need?", message: "Message", send: "Send",
    },
    testimonials: "What our clients say",
    footer: { rights: "All rights reserved.", specialization: "Specialization: Steel and wood structures, including assembly and installation." },
  },
  nl: {
    nav: { home: "Home", services: "Diensten", projects: "Projecten", about: "Over ons" },
    hero: {
      title: "Transformeer uw ruimte",
      subtitle: "in een plek die bij u past",
      description: "Specialisten in bouw en renovatie in België",
      cta: "Gratis Offerte Aanvragen",
    },
    about: {
      title: "Wie zijn wij?",
      description: "Gevestigd in België, opereert MAZ STRUCTURA in heel het land voor uw bouw- en renovatieprojecten met ernst, kwaliteit en betrokkenheid.",
      description2: "Wij zijn gespecialiseerd in bouw, renovatie en structuren in heel België. Wij ondersteunen onze klanten met ernst, transparantie en professionaliteit.",
      features: ["Professionaliteit", "Gegarandeerd werk", "Kwaliteitsmaterialen", "Respect voor deadlines"],
    },
    services: {
      title: "Onze Diensten",
      subtitle: "Volledige expertise in bouw en renovatie",
      items: [
        { title: "Volledige Renovaties", desc: "Volledige transformatie van uw huis of appartement. Beheer van alle aspecten: sloop, bouw, afwerking, schilderwerk.", color: "from-blue-600 to-blue-800" },
        { title: "Badkamer", desc: "Moderniseer uw badkamer met elegant eigentijds design. Installatie van inloopdouches, badkuipen, premium tegels.", color: "from-purple-600 to-purple-800" },
        { title: "Keuken", desc: "Creëer de keuken van uw dromen met superieure kwaliteit. Installatie van moderne kasten, natuursteen aanrechtbladen.", color: "from-green-600 to-green-800" },
        { title: "Elektriciteit & Sanitair", desc: "Professionele diensten volgens Belgische normen. Volledige elektrische installatie, domotica, verwarming en airconditioning.", color: "from-orange-600 to-orange-800" },
        { title: "Ventilatie", desc: "Gezonde luchtstroom voor betere levenskwaliteit.", color: "from-cyan-600 to-cyan-800" },
        { title: "Airconditioning", desc: "Comfort in alle seizoenen met hoogwaardige systemen.", color: "from-sky-600 to-sky-800" },
        { title: "Stalen Structuren", desc: "Bouw van industriële en residentiële metalen structuren.", color: "from-gray-600 to-gray-800" },
        { title: "Houten Structuren", desc: "Hoogwaardige houtconstructies en dakgebinten.", color: "from-amber-600 to-amber-800" },
      ]
    },
    contact: {
      title: "Ontvang een gratis offerte!",
      subtitle: "Neem contact met ons op",
      name: "Volledige naam", email: "E-mail", phone: "Telefoon",
      service: "Welke dienst heeft u nodig?", message: "Bericht", send: "Verzenden",
    },
    testimonials: "Wat onze klanten zeggen",
    footer: { rights: "Alle rechten voorbehouden.", specialization: "Specialisatie: Stalen en houten structuren, inclusief assemblage en montage." },
  },
  de: {
    nav: { home: "Startseite", services: "Dienstleistungen", projects: "Projekte", about: "Über uns" },
    hero: {
      title: "Verwandeln Sie Ihren Raum",
      subtitle: "in einen Ort, der zu Ihnen passt",
      description: "Bau- und Renovierungsspezialisten in Belgien",
      cta: "Kostenloses Angebot Anfordern",
    },
    about: {
      title: "Wer sind wir?",
      description: "Mit Sitz in Belgien ist MAZ STRUCTURA im ganzen Land für Ihre Bau- und Renovierungsprojekte tätig.",
      description2: "Wir sind auf Bau, Renovierung und Strukturen in ganz Belgien spezialisiert. Wir begleiten unsere Kunden mit Ernst, Transparenz und Professionalität.",
      features: ["Professionalität", "Garantierte Arbeiten", "Qualitätsmaterialien", "Termintreue"],
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Umfassende Expertise in Bau und Renovierung",
      items: [
        { title: "Komplette Renovierungen", desc: "Vollständige Transformation Ihres Hauses. Verwaltung aller Projektaspekte: Abriss, Bau, Fertigstellung, Malerarbeiten.", color: "from-blue-600 to-blue-800" },
        { title: "Badezimmer", desc: "Modernisieren Sie Ihr Badezimmer mit elegantem zeitgenössischen Design.", color: "from-purple-600 to-purple-800" },
        { title: "Küche", desc: "Schaffen Sie die Küche Ihrer Träume mit hochwertigen Oberflächen.", color: "from-green-600 to-green-800" },
        { title: "Elektrik & Sanitär", desc: "Professionelle Dienstleistungen nach belgischen Normen.", color: "from-orange-600 to-orange-800" },
        { title: "Lüftung", desc: "Gesunder Luftstrom für bessere Lebensqualität.", color: "from-cyan-600 to-cyan-800" },
        { title: "Klimaanlage", desc: "Komfort in allen Jahreszeiten mit Hochleistungssystemen.", color: "from-sky-600 to-sky-800" },
        { title: "Stahlstrukturen", desc: "Bau von industriellen und Wohnmetallstrukturen.", color: "from-gray-600 to-gray-800" },
        { title: "Holzstrukturen", desc: "Hochwertige Holzrahmen und Holzstrukturen.", color: "from-amber-600 to-amber-800" },
      ]
    },
    contact: {
      title: "Erhalten Sie ein kostenloses Angebot!",
      subtitle: "Kontaktieren Sie uns",
      name: "Vollständiger Name", email: "E-Mail", phone: "Telefon",
      service: "Welchen Service benötigen Sie?", message: "Nachricht", send: "Senden",
    },
    testimonials: "Was unsere Kunden sagen",
    footer: { rights: "Alle Rechte vorbehalten.", specialization: "Spezialisierung: Stahl- und Holzstrukturen, einschließlich Montage." },
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", projects: "Proyectos", about: "Nosotros", contact: "Contacto" },
    hero: {
      title: "Transforma tu espacio",
      subtitle: "en un lugar que te represente",
      description: "Especialistas en construcción y renovación en Bélgica",
      cta: "Solicitar Presupuesto Gratis",
    },
    about: {
      title: "¿Quiénes somos?",
      description: "Con sede en Bélgica, MAZ STRUCTURA opera en todo el país para sus proyectos de construcción y renovación con seriedad, calidad y compromiso.",
      description2: "Estamos especializados en construcción, renovación y estructuras en toda Bélgica. Acompañamos a nuestros clientes con seriedad, transparencia y profesionalismo, de principio a fin en cada proyecto.",
      features: ["Profesionalismo", "Trabajos garantizados", "Materiales de calidad", "Cumplimiento de plazos"],
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Experiencia completa en construcción y renovación",
      items: [
        { title: "Renovaciones Completas", desc: "Transformación completa de su casa o apartamento. Gestión de todos los aspectos del proyecto: demolición, construcción, acabado, pintura y decoración. Desde la planificación hasta la entrega final.", color: "from-blue-600 to-blue-800", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
        { title: "Cuarto de Baño", desc: "Modernice su cuarto de baño con un diseño elegante contemporáneo. Instalación de duchas italianas, bañeras, azulejos premium, muebles a medida y grifería moderna.", color: "from-purple-600 to-purple-800", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80" },
        { title: "Cocina", desc: "Cree la cocina de sus sueños con acabados de alta calidad. Instalación de armarios modernos, encimeras de piedra natural, electrodomésticos de gama alta e iluminación LED.", color: "from-green-600 to-green-800", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
        { title: "Electricidad & Fontanería", desc: "Servicios profesionales según las normas belgas. Instalación eléctrica completa, domótica, calefacción y climatización. Fontanería sanitaria, conexiones, reparaciones y mantenimiento.", color: "from-orange-600 to-orange-800", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" },
        { title: "Ventilación", desc: "Instalación de sistemas de ventilación de alto rendimiento para una calidad de aire óptima en su vivienda o local comercial. Ventilación mecánica controlada (VMC), sistemas de doble flujo de alta eficiencia energética.", color: "from-cyan-600 to-cyan-800", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" },
        { title: "Climatización", desc: "Instalación y mantenimiento de sistemas de climatización de alta prestación para su confort en todas las estaciones. Climatizadores split, sistemas multi-zona, bombas de calor.", color: "from-sky-600 to-sky-800", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
        { title: "Estructuras de Acero", desc: "Construcción y ensamblaje de estructuras metálicas industriales y residenciales. Estructuras metálicas, pórticos, entrepisos, escaleras de acero. Conforme a las normas europeas EN 1090.", color: "from-gray-600 to-gray-800", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
        { title: "Estructuras de Madera", desc: "Realización de entramados y estructuras de madera de alta calidad para tejados, estructuras y ampliaciones. Madera certificada FSC, ensamblaje tradicional y moderno.", color: "from-amber-600 to-amber-800", img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80" },
      ]
    },
    contact: {
      title: "¡Obtenga un presupuesto gratis!",
      subtitle: "Contáctenos",
      name: "Nombre completo", email: "Correo electrónico", phone: "Teléfono",
      service: "¿Qué servicio necesita?", message: "Mensaje", send: "Enviar",
    },
    testimonials: "Lo que dicen nuestros clientes",
    footer: { rights: "Todos los derechos reservados.", specialization: "Especialización: Estructuras de acero y madera, incluyendo ensamblaje y montaje." },
  },
}

const heroSlides = [
  {
    bg: "from-orange-700 via-orange-800 to-orange-900",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80",
    label: "Cuadro Eléctrico Industrial",
  },
  {
    bg: "from-blue-700 via-blue-800 to-blue-900",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    label: "Estructuras de Acero",
  },
  {
    bg: "from-gray-700 via-gray-800 to-gray-900",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    label: "Renovación Completa",
  },
  {
    bg: "from-amber-700 via-amber-800 to-amber-900",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&q=80",
    label: "Estructuras de Madera",
  },
  {
    bg: "from-cyan-700 via-cyan-800 to-cyan-900",
    image: "https://images.unsplash.com/photo-1635262608923-927df52aa809?w=1920&q=80",
    label: "Climatisation HVAC",
  },
]

const testimonials = [
  { name: "Sophie Dubois", location: "Bruxelles", rating: 5, comment: "Excellent travail ! MAZ STRUCTURA a complètement transformé notre appartement. L'équipe est professionnelle et le résultat dépasse nos attentes." },
  { name: "Marc Lejeune", location: "Anvers", rating: 5, comment: "Service impeccable pour la rénovation électrique de notre maison. Travail soigné, respect des normes et délais tenus." },
  { name: "Anne-Marie Petit", location: "Liège", rating: 5, comment: "Notre nouvelle salle de bain est magnifique ! Le design est moderne et élégant. Un grand merci à toute l'équipe MAZ STRUCTURA." },
  { name: "Pierre Vandenberghe", location: "Gand", rating: 5, comment: "Nous sommes ravis de notre nouvelle cuisine ! Le travail est de haute qualité. Je les recommande sans hésitation." },
]

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(5)
  const [formSent, setFormSent] = useState(false)
  const [openService, setOpenService] = useState<number | null>(null)
  const [showWelcome, setShowWelcome] = useState(true)
  const tr = t[language]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* WELCOME MODAL */}
      {showWelcome && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-[fadeInScale_0.4s_ease-out]">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 rounded-t-2xl flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-xl">MAZ STRUCTURA</h2>
                <p className="text-orange-100 text-sm">Bienvenue sur notre site web</p>
              </div>
              <button
                onClick={() => setShowWelcome(false)}
                className="text-white hover:text-orange-200 transition-colors bg-white/20 rounded-full p-2 hover:bg-white/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Content */}
            <div className="px-6 py-5 space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Nous croyons que chaque client mérite une approche unique. C'est pourquoi nous écoutons vos besoins, vous conseillons et créons ensemble une vision qui sera réalisée avec le plus grand soin. Notre passion pour la construction nous pousse à rechercher constamment de nouvelles inspirations et technologies afin d'offrir des services au plus haut niveau.
              </p>
              <p>
                En choisissant <span className="font-semibold text-orange-600">MAZ STRUCTURA</span>, vous choisissez une entreprise qui non seulement vous fournira des services de haute qualité, mais qui réalisera également vos rêves avec un engagement et une passion totaux.
              </p>
              <p>
                Le premier contact avec notre équipe est disponible pour les clients aussi bien par téléphone que par e-mail. Nous proposons également la possibilité de réunions personnelles, ce qui vous permet de mieux discuter des détails du projet. Nous nous efforçons de répondre à toute question ou préoccupation dans les meilleurs délais.
              </p>
              <p>
                Chez <span className="font-semibold text-orange-600">MAZ STRUCTURA</span>, nous croyons que les bonnes relations avec les clients sont fondées sur la confiance et la communication. Notre priorité est de comprendre vos besoins et de garantir une pleine satisfaction avec le travail réalisé.
              </p>
              {/* Contact info */}
              <div className="bg-orange-50 rounded-xl p-4 space-y-2 border border-orange-100">
                <p className="flex items-center gap-2 text-orange-700 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+32483742839" className="hover:underline">+32 483 74 28 39</a>
                </p>
                <p className="flex items-center gap-2 text-orange-700 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@mazstructura.be" className="hover:underline">contact@mazstructura.be</a>
                </p>
              </div>
            </div>
            {/* Footer button */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setShowWelcome(false)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <svg viewBox="0 0 100 115" className="w-12 h-14 drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]">
              {/* Clip path to keep lines inside hexagon */}
              <defs>
                <clipPath id="hexClip">
                  <polygon points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5"/>
                </clipPath>
              </defs>
              {/* Hexagon - dark background */}
              <polygon points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5" fill="#111111" stroke="#f97316" strokeWidth="5"/>
              {/* Inner hexagon accent */}
              <polygon points="50,13 87,32 87,83 50,102 13,83 13,32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
              {/* All towers clipped inside hexagon */}
              <g clipPath="url(#hexClip)">
                {/* Tower 1 - left, taller, thinner, angled top - moved right toward center */}
                <polygon points="28,110 28,38 40,25 40,110" fill="#f97316"/>
                {/* Tower 2 - right, shorter, thinner, angled top rotated - moved left toward center */}
                <polygon points="54,110 54,35 66,50 66,110" fill="#f97316"/>
              </g>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-black text-white text-lg tracking-[0.2em] drop-shadow-[0_0_6px_rgba(249,115,22,0.5)]">MAZ</span>
              <span className="font-bold text-orange-400 text-[11px] tracking-[0.35em] uppercase">STRUCTURA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {(["home", "services", "projects", "about"] as const).map((key) => (
              <button key={key} onClick={() => scrollTo(key)} className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
                {tr.nav[key]}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              {tr.nav.contact}
            </button>
          </nav>

          {/* Language + Phone */}
          <div className="hidden md:flex items-center gap-3">
            {(["fr", "en", "nl", "de", "es"] as Language[]).map((lang) => (
              <button key={lang} onClick={() => setLanguage(lang)} className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === lang ? "bg-orange-500 text-white" : "text-gray-400 hover:text-white"}`}>
                {lang.toUpperCase()}
              </button>
            ))}
            <a href="tel:+32483742839" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Phone className="w-4 h-4" />
              +32 483 74 28 39
            </a>
          </div>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 py-4 flex flex-col gap-3">
            {(["home", "services", "projects", "about"] as const).map((key) => (
              <button key={key} onClick={() => scrollTo(key)} className="text-gray-300 text-left py-2 hover:text-orange-400 transition-colors">
                {tr.nav[key]}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              {(["fr", "en", "nl", "de", "es"] as Language[]).map((lang) => (
                <button key={lang} onClick={() => setLanguage(lang)} className={`text-xs font-bold px-2 py-1 rounded ${language === lang ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}>
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="tel:+32483742839" className="flex items-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg font-semibold">
              <Phone className="w-4 h-4" />
              +32 483 74 28 39
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`} />
            <img
              src={slide.image}
              alt={slide.label}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <p className="text-orange-400 font-semibold tracking-widest uppercase text-sm mb-4">MAZ STRUCTURA</p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              {tr.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-orange-300 mb-6">{tr.hero.subtitle}</h2>
            <p className="text-xl text-gray-200 mb-10">{tr.hero.description}</p>
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              {tr.hero.cta}
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-orange-500 w-8" : "bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-3">À propos</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">{tr.about.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{tr.about.description}</p>
              <p className="text-gray-600 mb-8">{tr.about.description2}</p>
              <div className="grid grid-cols-2 gap-4">
                {tr.about.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="MAZ STRUCTURA construction team"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">{tr.services.title}</h2>
            <p className="text-xl text-gray-600">{tr.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tr.services.items.map((service, i) => (
              <div key={i} className="rounded-2xl shadow-lg overflow-hidden cursor-pointer" onClick={() => setOpenService(openService === i ? null : i)}>
                {/* Card header with image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={(service as any).img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">{service.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${openService === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {/* Expandable description */}
                <div className={`bg-white transition-all duration-500 overflow-hidden ${openService === i ? "max-h-64 py-4 px-5" : "max-h-0"}`}>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}
                    className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE PROJECTS */}
      <section id="projects" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Grands Projets</p>
            <h2 className="text-4xl font-black mb-4">Projets à Grande Échelle</h2>
            <p className="text-xl text-gray-300">Solutions professionnelles pour projets commerciaux et institutionnels</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Hôtels & Hôtellerie", desc: "Construction et rénovation complètes d'hôtels, chambres, lobbies, restaurants. Installation de systèmes HVAC professionnels.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
              { title: "Écoles & Établissements", desc: "Rénovation et construction d'écoles publiques et privées en Belgique. Salles de classe modernes conformes aux normes de sécurité.", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" },
              { title: "Bâtiments Commerciaux", desc: "Bureaux, centres commerciaux, restaurants et espaces de vente. Rénovation complète avec systèmes techniques haute performance.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
              { title: "Installations Industrielles", desc: "Entrepôts, usines et installations industrielles. Électricité industrielle haute tension, ventilation et systèmes de refroidissement.", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80" },
            ].map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl h-64">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6 shadow-2xl"
            >
              Demandez un Devis sur Mesure
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-3">Témoignages</p>
            <h2 className="text-4xl font-black text-gray-900">{tr.testimonials}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">{`"${t.comment}"`}</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-orange-500 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW FORM */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Partagez votre expérience</h2>
            <p className="text-gray-600">Votre avis compte pour nous</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Interactive Stars */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setSelectedRating(star)}
                    className="transition-transform hover:scale-125 active:scale-110"
                  >
                    <Star className={`w-12 h-12 transition-all duration-200 ${
                      star <= (hoverRating || selectedRating)
                        ? "text-orange-500 fill-orange-500 drop-shadow-md"
                        : "text-gray-300 fill-gray-100"
                    }`} />
                  </button>
                ))}
              </div>
              <p className="text-sm font-semibold text-orange-600">
                {(hoverRating || selectedRating) === 1 && "Mauvais"}
                {(hoverRating || selectedRating) === 2 && "Passable"}
                {(hoverRating || selectedRating) === 3 && "Bien"}
                {(hoverRating || selectedRating) === 4 && "Très bien"}
                {(hoverRating || selectedRating) === 5 && "Excellent !"}
              </p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setFormSent(true) }}>
              <input required className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Votre nom" />
              <input required className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Votre ville" />
              <textarea required className="border border-gray-200 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Votre commentaire" />
              <input type="hidden" name="rating" value={selectedRating} />
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                Envoyer mon avis ({selectedRating} étoile{selectedRating > 1 ? "s" : ""})
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* SUPPLIERS / PARTNERS */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Nos Fournisseurs</h2>
            <p className="text-gray-500 text-base">Nous travaillons avec les meilleurs fournisseurs de matériaux de construction</p>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"/>
          </div>
          {/* Scrollable row */}
          <div className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"/>
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"/>
            <div className="flex gap-5 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {[
                "CCB Cimenterie du Benelux",
                "Soudal",
                "Wienerberger",
                "Bekaert",
                "Vertuoza",
                "BigMat",
                "Servimat",
                "Lo.Ve.Mat Seraing",
                "Titan Cement",
                "Recibel",
              ].map((name, i) => (
                <div key={i}
                  className="flex-shrink-0 snap-start group bg-white hover:bg-orange-500 rounded-2xl border-2 border-orange-200 hover:border-orange-500 shadow-md hover:shadow-orange-300/50 hover:shadow-xl transition-all duration-300 flex items-center justify-center px-8 py-6 min-w-[180px] cursor-default">
                  <p className="text-orange-600 group-hover:text-white font-black text-sm text-center leading-snug tracking-wide uppercase transition-colors duration-300">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-3">Contact</p>
              <h2 className="text-4xl font-black mb-6">{tr.contact.title}</h2>
              <p className="text-gray-300 text-lg mb-10">{tr.contact.subtitle}</p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Téléphone</p>
                    <a href="tel:+32483742839" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">+32 483 74 28 39</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Email</p>
                    <a href="mailto:contact@mazstructura.be" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">contact@mazstructura.be</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Adresse</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Wellestraat+14,+9470+Denderleeuw,+Belgium" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">
                      Wellestraat 14,<br />9470 Denderleeuw,<br />Belgium
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <p className="text-xl font-bold text-gray-800">Message envoyé !</p>
                  <p className="text-gray-600 text-center">Nous vous contacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <input required className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder={tr.contact.name} />
                  <input required type="email" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder={tr.contact.email} />
                  <input className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder={tr.contact.phone} />
                  <select className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-600">
                    <option value="">{tr.contact.service}</option>
                    <option>Rénovation complète</option>
                    <option>Salle de bain</option>
                    <option>Cuisine</option>
                    <option>Électricité & Plomberie</option>
                    <option>Structures acier/bois</option>
                    <option>Climatisation / HVAC</option>
                    <option>Autre</option>
                  </select>
                  <textarea required className="border border-gray-200 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder={tr.contact.message} />
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg">
                    {tr.contact.send}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-black text-white text-sm">MS</div>
            <span className="font-black text-xl tracking-wide">MAZ STRUCTURA</span>
          </div>
          <p className="text-gray-400 mb-3">{tr.footer.specialization}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-gray-400 text-sm">
            <a href="https://www.google.com/maps/search/?api=1&query=Wellestraat+14,+9470+Denderleeuw,+Belgium" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Wellestraat 14, 9470 Denderleeuw, Belgium
            </a>
            <span className="hidden md:inline">•</span>
            <a href="tel:+32483742839" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone className="w-4 h-4" />+32 483 74 28 39
            </a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:contact@mazstructura.be" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              contact@mazstructura.be
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-gray-500 text-sm">© 2025 MAZ STRUCTURA. {tr.footer.rights}</p>
            <a href="https://www.mazstructura.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wide transition-colors">
              www.mazstructura.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
