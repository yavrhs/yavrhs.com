// -----------------------------------------------------------------------
// BRANDING PROJECTS
// -----------------------------------------------------------------------
// Add a new project by copying one of these objects and changing the
// values. "id" must be unique — it's what goes in the URL for that
// project's page (branding-project.html?id=your-id).
//
// title               : the project's name — this is the only text shown
//                       on the overview page for that project.
// cover / coverHover : the two images shown on the overview page — the
//                       thumbnail, and what it swaps to on hover.
// images              : the full set shown on the project's own page,
//                       flipped through with the arrows.
// -----------------------------------------------------------------------
const brandingProjects = [
  {
    id: "lush-studio",
    title: "LUSH STUDIO ATHENS",
    cover: "images/branding/lush_def.jpg",
    coverHover: "images/branding/lush_hov.jpg",
    images: [
      "images/branding/lush01.jpg",
      "images/branding/lush02.jpg",
      "images/branding/lush03.jpg",
      "images/branding/lush04.jpg",
      "images/branding/lush05.jpg",
      "images/branding/lush06.jpg",
      "images/branding/lush07.jpg",
      "images/branding/lush08.jpg",
    ],
    description:
      "Lush Studio is a movement and fitness studio dedicated to pole dancing, pilates, flexibility, dance and more. Its visual identity explores movement through a custom wordmark inspired by the human body in motion. An expressive gesture extends beyond the lettering, creating a sense of energy and release. Earthy green tones ground the identity, while bold, direct typography carries the system across digital applications.",
  },
 {
    id: "asense",
    title: "A.SENSE STOCKHOLM",
    cover: "images/branding/asense_def.jpg",
    coverHover: "images/branding/asense_hov.jpg",
    images: [
      "images/branding/asense01.jpg",
      "images/branding/asense02.jpg",
      "images/branding/asense03.jpg",
      "images/branding/asense04.jpg",
      "images/branding/asense05.jpg",
      "images/branding/asense06.jpg",
      "images/branding/asense07.jpg",
      "images/branding/asense08.jpg",
      "images/branding/asense09.jpg",
      "images/branding/asense10.jpg",
      "images/branding/asense11.jpg",
      "images/branding/asense12.jpg",
    ],
    description: "A.sense is a techno collective based in Stockholm, organizing events centered around music, connection, and community. The visual identity was built around the “a”, a bold and playful symbol designed to challenge the seriousness often associated with techno culture. The identity embraces warmth, emotion, and a sense of belonging, while the full logo also incorporates morse code spelling the word “essence”, referencing the philosophy behind the project: music is fun, and fun is the essence of everything.",
  },
  {
    id: "fotagogos",
    title: "FOTAGOGOS TUTORING CENTER",
    cover: "images/branding/fot_def.jpg",
    coverHover: "images/branding/fot_hov.jpg",
    images: [
      "images/branding/fot01.jpg",
      "images/branding/fot02.jpg",
      "images/branding/fot03.jpg",
      "images/branding/fot04.jpg",
      "images/branding/fot05.jpg",
      "images/branding/fot06.jpg",
      "images/branding/fot07.jpg",
      "images/branding/fot08.jpg",
      "images/branding/fot09.jpg",
    ],
    description: "Fotagogos is an educational initiative based in Metaxourgeio, Athens, bringing together literature courses, humanities education, and creative workshops. Inspired by the linear architecture of modern Athens, the identity centers on a rotating Φ and a custom typeface, forming a shared point where learning and art meet.  Beyond the logo itself, the identity extends across signage, printed materials, promotional campaigns, and workshop communications, creating a consistent visual presence across every aspect of the initiative.",
  },
  {
    id: "kobo",
    title: "KOBO SPECIALTY COFFEE",
    cover: "images/branding/kobo_def.jpg",
    coverHover: "images/branding/kobo_hov.jpg",
    images: [
      "images/branding/kobo01.jpg",
      "images/branding/kobogif.gif",
      "images/branding/kobo02.jpg",
      "images/branding/kobo03.jpg",
      "images/branding/kobo04.jpg",
      "images/branding/kobo05.jpg",
      "images/branding/kobo06.jpg",
      "images/branding/kobo07.jpg",
    ],
    description: "Kobo is a specialty coffee brand in Athens. Inspired by the Japanese word meaning workshop, it is a space for creation, where coffee is treated as a crafted experience. Drawing from Japanese minimalism and the ritual of coffee-making, the identity combines a custom wordmark with a distinctive dual-purpose symbol, merging the forms of a coffee cup and V60 filter into one graphic element. A restrained palette of black, grey, and matcha green establishes a refined visual language across the brand’s physical and digital touchpoints, from signage and menus to takeaway cups, creating a cohesive and recognizable visual system.",
  },
  {
    id: "gepsilon",
    title: "G-EPSILON PROPERTY MANAGEMENT",
    cover: "images/branding/ge_def.jpg",
    coverHover: "images/branding/ge_hov.jpg",
    images: [
      "images/branding/ge01.jpg",
      "images/branding/ge02.jpg",
      "images/branding/gegif.gif",
      "images/branding/ge03.jpg",
      "images/branding/ge04.jpg",
      "images/branding/ge05.jpg",
      "images/branding/ge06.jpg",
      "images/branding/ge07.jpg",
    ],
    description: "G-Epsilon is an Athens-based property management firm. The project involved a complete rebrand, from visual identity to website design, aimed at repositioning the company within Athens’ evolving real estate landscape. Built from the initials G and E, the new logo forms a bold architectural symbol inspired by geometry and property architecture. The interlocking shape reflects G-Epsilon’s holistic approach to property management, creating a contemporary and distinctive identity.",
  },
  {
    id: "paparizos",
    title: "BAKALIKO PAPARIZOS",
    cover: "images/branding/paparizos_def.jpg",
    coverHover: "images/branding/paparizos_hov.jpg",
    images: [
      "images/branding/paparizos01.jpg",
      "images/branding/paparizos02.gif",
      "images/branding/paparizos03.jpg",
      "images/branding/paparizos04.jpg",
      "images/branding/paparizos05.jpg",
      "images/branding/paparizos06.jpg",
      "images/branding/paparizos07.jpg",
      "images/branding/paparizos08.jpg",
    ],
    description: "Bakaliko Paparizos is a traditional Greek deli with a rich history dating back to 1952. The project involved redesigning its visual identity and website, evolving it into a modern brand with an intuitive e-commerce presence. The new design  was built around the brand’s core signature element, cheese. Its simple, direct approach combined with vivid colors creates a cohesive communication ecosystem rooted in flavor and experience.",
  },
  {
    id: "tupapu",
    title: "TUPAPU CLOTHING",
    cover: "images/branding/tupapu_def.jpg",
    coverHover: "images/branding/tupapu_hov.jpg",
    images: [
      "images/branding/tupapu01.jpg",
      "images/branding/tupapu02.jpg",
      "images/branding/tupapu03.jpg",
      "images/branding/tupapu04.jpg",
      "images/branding/tupapu05.jpg",
      "images/branding/tupapu06.jpg",
    ],
    description: "Tupapu is a vintage clothing brand based in Thessaloniki, specialising in original shirts from the 1970s and 1980s. The name, derived from the Greek “του παππού” (“grandfather’s”), comes from the idea of a wardrobe passed down from a grandfather: pieces with history, character, and a life of their own. The identity builds on this concept through a modernized grandfather icon and a custom letter-style wordmark, combining nostalgic references with a modernized visual language. The resulting system is distinctive yet flexible, translating naturally across both print and digital applications.",
  },
  {
    id: "aigiale",
    title: "AIGIALE SKINCARE",
    cover: "images/branding/aigiale_def.jpg",
    coverHover: "images/branding/aigiale_hov.jpg",
    images: [
      "images/branding/aigiale01.jpg",
      "images/branding/aigiale02.jpg",
      "images/branding/aigiale03.jpg",
      "images/branding/aigiale04.jpg",
      "images/branding/aigiale05.jpg",
      "images/branding/aigiale06.jpg",
      "images/branding/aigiale07.jpg",
      "images/branding/aigiale08.jpg",
      "images/branding/aigiale09.jpg",
    ],
    description: "Developed as a student portfolio project, Aigiale is a conceptual organic skincare brand centered on Crithmum, a coastal plant from Kythera, Greece, valued for its anti-aging properties. The visual system uses the plant’s outline as a logo element, combined with soft green tones to communicate natural origin, calmness, and trust. The identity is consistently applied across the Revival Series packaging, including serum, cream, and toner, creating a cohesive brand ecosystem.",
  },
  {
    id: "vradies-therinou",
    title: "VRADIES THERINOU",
    cover: "images/branding/vradies_def.jpg",
    coverHover: "images/branding/vradies_hov.jpg",
    images: [
      "images/branding/vradies01.jpg",
      "images/branding/vradies02.jpg",
      "images/branding/vradies03.jpg",
      "images/branding/vradies04.jpg",
      "images/branding/vradies05.jpg",
      "images/branding/vradies06.jpg",
    ],
    description: "Vradies Therinou [2023 Edition] is UOI Film Collective’s summer film festival, celebrating cinema through a curated program of classic and modern  films. The custom wordmark reinterprets classic Greek cinema typography, combining nostalgic references with a fresh visual approach. Vibrant color variations & bold layout bring a lively summer energy to the festival’s identity.",
  },
];
