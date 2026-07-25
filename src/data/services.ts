import {
  Cable,
  Baby,
  Layers,
  Squirrel,
  Bird,
  Fan,
  Feather,
  ShieldPlus,
  PawPrint,
  PanelTop,
  Target,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  name: string
  shortName: string
  category: 'Invisible Grills' | 'Safety & Pigeon Nets'
  metaTitle: string
  metaDescription: string
  icon: LucideIcon
  heroTagline: string
  intro: string[]
  bestFor: string[]
  materials: { label: string; value: string }[]
  benefits: { title: string; body: string }[]
  process: { step: string; body: string }[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
  gallery: { src: string; alt: string }[]
}

export const services: Service[] = [
  {
    slug: 'invisible-grills',
    name: 'Invisible Grills for Balcony',
    shortName: 'Invisible Grills',
    category: 'Invisible Grills',
    metaTitle: 'Invisible Grills for Balcony in Chennai | Jemima',
    metaDescription:
      'SS 304 cable invisible grills for balconies in Chennai. Unbroken view, child-safe 89mm spacing, free survey. Call +91 78100 40329 for a quote today.',
    icon: Cable,
    heroTagline: 'Balconies you can see through. Not fall through.',
    intro: [
      'An invisible grill is a set of vertical stainless steel cables, tensioned between a top and bottom aluminium channel, fixed across your balcony or window opening. From two metres away the balcony looks open. Up close, nobody is going over that railing.',
      "We use 2mm-3mm SS 304 grade cable — the same grade used in marine railings — because Chennai's coastal air eats cheaper steel within two monsoons. Cables are spaced at a fixed 89mm (3.5 inch) gap, tight enough that a child cannot slip a limb through, and tensioned with turnbuckles so the whole system stays rigid, not springy.",
      "This is the product families in this business are built around. Most of our other pages — children's safety grills, monkey grills, stainless steel grills — are variations of this same cable system, adjusted for who or what you are keeping out.",
    ],
    bestFor: [
      "Apartment balconies where you don't want to lose the view or the light",
      'High-rise flats on floor 5 and above where MS grills look heavy from outside',
      'Owners who want the balcony to still look like a balcony, not a cage',
      'Renovation jobs replacing old, rusted mesh grills',
    ],
    materials: [
      { label: 'Cable material', value: 'SS 304 grade, 7x7 strand, 2mm–3mm dia.' },
      { label: 'Vertical spacing', value: '89mm (3.5") fixed, child-safe' },
      { label: 'Frame / channel', value: 'Powder-coated aluminium, 4 colour options' },
      { label: 'Tensioning', value: 'Stainless steel turnbuckles, re-tightenable' },
      {
        label: 'Load rating',
        value: 'Rated for sustained lateral push, not designed as a climbing structure',
      },
      { label: 'Warranty', value: '5 years on cable against rust, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'The view stays open',
        body: 'From the living room, the cables disappear. From outside, the building elevation stays clean instead of showing bars.',
      },
      {
        title: 'No drilling into the slab',
        body: 'Fixing points are on the parapet and ceiling edge, not through your waterproofing layer.',
      },
      {
        title: 'Handles Chennai humidity',
        body: '304-grade steel is corrosion resistant near the coast — 202 grade and painted MS both start spotting within a year here.',
      },
      {
        title: 'Adjustable after installation',
        body: 'Turnbuckles let our team re-tension cables on a service visit if they loosen over years of heat expansion.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure your balcony opening, check the parapet height and ceiling depth, and confirm if any AC pipe or drain outlet needs routing around. Usually 20–30 minutes, same day or next day.',
      },
      {
        step: 'Quote same day',
        body: 'You get a per-running-foot rate on WhatsApp within hours of the survey, broken down by cable length and channel colour choice.',
      },
      {
        step: 'Installation',
        body: 'A 2-person team fits the top and bottom channel, runs and tensions each cable, and cleans up. Most balconies (up to 10 ft) are done in 3–4 hours.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'We log your installation with cable batch and length. If a cable loosens or a channel needs re-sealing, call us and we re-tension free within the warranty period.',
      },
    ],
    faqs: [
      {
        q: 'Will the cables sag or loosen over time?',
        a: 'Slight loosening from heat expansion is normal after the first summer. It takes ten minutes to re-tension with the turnbuckles — we do this free within warranty.',
      },
      {
        q: 'Can I still hang clothes to dry on the balcony?',
        a: "Yes. The cable system doesn't block a separate drying rod or stand; most homes keep both.",
      },
      {
        q: 'Is invisible grill as strong as a normal MS grill?',
        a: 'It resists lateral push and prevents falls and limb entrapment, which is what balcony safety grills are for. It is not designed to be climbed on or used as a ladder — no grill type should be.',
      },
      {
        q: 'Does drilling damage the building exterior?',
        a: 'Fixing points are small anchor bolts into the parapet wall and ceiling soffit — not through tiles or waterproofing membrane.',
      },
      {
        q: 'How long does one balcony take?',
        a: 'A standard 8–10 ft balcony opening takes 3–4 hours including tensioning and cleanup.',
      },
      {
        q: 'Do you install in villas as well as apartments?',
        a: 'Yes — villas, apartments, duplexes and independent houses. The survey process is the same either way.',
      },
    ],
    relatedSlugs: ['children-safety-grills', 'stainless-steel-grills', 'balcony-safety-nets'],
    gallery: [
      {
        src: '/gallery/grill-pattern-1.svg',
        alt: 'Invisible grill cable system on a balcony, front view',
      },
      {
        src: '/gallery/grill-pattern-2.svg',
        alt: 'Invisible grill installed at a balcony corner, cables tensioned top to bottom',
      },
    ],
  },
  {
    slug: 'children-safety-grills',
    name: 'Children Safety Grills',
    shortName: 'Children Safety Grills',
    category: 'Invisible Grills',
    metaTitle: 'Children Safety Grills for Windows & Balconies | Chennai',
    metaDescription:
      'Cable safety grills built to child-safe spacing for windows and balconies in Chennai apartments. Fast install, free survey. WhatsApp +91 78100 40329.',
    icon: Baby,
    heroTagline: 'Ten minutes of distraction is all it takes. Close that gap for good.',
    intro: [
      'Most balcony falls involving children happen in homes where the parents assumed the railing was "high enough". A toddler doesn\'t fall over a railing — they climb through the gap in it, or through a window with a low sill. Standard building railings in Tamil Nadu are built to code for adults, not for a two-year-old\'s shoulder width.',
      "This page is specifically about closing that gap on windows and balconies where young children spend time unsupervised for even a few minutes — kitchen windows, bedroom windows facing a compound wall, and balconies attached to a child's room. We use the same 304-grade cable system as our standard invisible grill, but survey and quote it with the child's reach and grip in mind, not just the opening size.",
      'If you have a crawling infant or a child under six at home, this is usually the first thing to fix before anything else in the flat — before furniture, before curtains.',
    ],
    bestFor: [
      'Parents of children aged 1–8, especially in flats above the ground floor',
      'Kitchen and bedroom windows with a sill low enough for a child to climb',
      "Balconies attached to a nursery or children's bedroom",
      "Grandparents' homes where children visit but the house wasn't built with kids in mind",
    ],
    materials: [
      { label: 'Cable material', value: 'SS 304 grade, 2mm dia., smooth finish (no burrs)' },
      { label: 'Vertical spacing', value: '89mm (3.5") — tested against limb and head entrapment' },
      {
        label: 'Window variant',
        value: 'Fixed frame within the window grille opening, no swing gap',
      },
      { label: 'Corner treatment', value: 'Rounded channel ends, no sharp edges at child height' },
      { label: 'Fixing', value: 'Anchored into wall masonry above and below the opening' },
      { label: 'Warranty', value: '5 years on cable, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Closes the exact gap a child uses',
        body: 'We check spacing against limb entrapment, not just "looks safe" — 89mm is tight enough that a small child cannot push through or get a leg wedged.',
      },
      {
        title: 'No sharp edges at child height',
        body: "Channel ends and corner brackets are rounded and sit flush, so there's nothing for a child to catch a finger or cheek on.",
      },
      {
        title: 'Works on windows, not just balconies',
        body: 'Ground-floor and low-sill windows get the same fixed cable treatment as balconies — a common gap parents miss.',
      },
      {
        title: "Doesn't block emergency exit",
        body: 'Grills are fitted so an adult can still open the window or step onto the balcony for cleaning or emergencies — nothing is permanently sealed shut.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We check every window and balcony a child has access to, not just the one you called about — low sills get flagged even if you didn't ask.",
      },
      {
        step: 'Quote same day',
        body: "A room-by-room quote so you can prioritise the child's bedroom and the kitchen first if budget means phasing the work.",
      },
      {
        step: 'Installation',
        body: 'Each opening takes 1–3 hours depending on size. We test the finished grill by hand before we leave — pushing on cables the way a child would.',
      },
      {
        step: 'Warranty & aftercare',
        body: "Free re-tensioning within warranty, and we'll re-check spacing at no charge if your child is unusually small for their age or has a younger sibling on the way.",
      },
    ],
    faqs: [
      {
        q: 'What age group is the 89mm spacing safe for?',
        a: 'It is built to prevent limb and torso entrapment for children from infancy through around age 8–9, which covers the age range most falls happen in.',
      },
      {
        q: 'Can this be fitted on rented flats?',
        a: 'Yes, though we anchor into the wall/parapet, which is a permanent fixing. If you need a non-drill option for a rental, ask us about the safety net alternative instead.',
      },
      {
        q: 'Will my child be able to push the cables apart?',
        a: "No — the cables are tensioned taut with turnbuckles, not loose strands, so they don't flex open under hand pressure.",
      },
      {
        q: 'Do you cover windows as well as balconies?',
        a: 'Yes, this is one of the most requested parts of this service — kitchen and bedroom windows with low sills.',
      },
      {
        q: 'How fast can this be installed if we need it urgently?',
        a: "If you tell us it's for a young child, we prioritise the survey visit, usually within 24 hours in Chennai.",
      },
      {
        q: 'Is a net safer than a grill for kids?',
        a: "Both work. Grills keep the view open and suit balconies you use daily; nets are better where you want zero drilling or a softer barrier. We'll tell you honestly which fits your flat.",
      },
    ],
    relatedSlugs: ['invisible-grills', 'children-safety-nets', 'balcony-safety-nets'],
    gallery: [
      {
        src: '/gallery/grill-pattern-2.svg',
        alt: 'Child-safe cable grill fitted on a window opening',
      },
      {
        src: '/gallery/grill-pattern-1.svg',
        alt: 'Cable grill with 3.5 inch spacing on a balcony',
      },
    ],
  },
  {
    slug: 'stainless-steel-grills',
    name: 'Stainless Steel Grills',
    shortName: 'Stainless Steel Grills',
    category: 'Invisible Grills',
    metaTitle: 'Stainless Steel Safety Grills — Chennai Fabrication',
    metaDescription:
      'SS 304 grade grills for windows, balconies, staircases and duct openings. Rust-proof in coastal Chennai weather. Free measurement visit — call today.',
    icon: Layers,
    heroTagline: '304 grade, not 202. The difference shows up in year two.',
    intro: [
      'Not every grill on your flat needs to be an invisible cable system. Staircase openings, duct covers, terrace parapets and some windows are better served by a solid stainless steel grill — welded, powder-coated or natural finish, fabricated to the exact opening. This page is about that side of the work: steel grade, fabrication and fitting, independent of the cable-and-channel product.',
      'The one decision that matters most here is steel grade. A lot of grills sold as "stainless steel" in Chennai are actually 202 grade — cheaper, and it will show tea-coloured rust spots within a year in coastal humidity. We fabricate in 304 grade as standard, the same grade used in kitchen equipment and marine fittings, because it is the grade that actually resists corrosion in this climate.',
      'We supply and fit these grills for any opening — windows, duct covers, compound gates, staircase railings — measured and welded to fit, not sold off a standard size.',
    ],
    bestFor: [
      'Staircase and terrace parapet railings needing a solid, weldable safety barrier',
      'Duct and utility shaft covers that need a rigid grill, not a flexible net',
      'Homeowners who have been burnt by 202-grade grills rusting within a year',
      'Anyone comparing a solid grill against the cable-based invisible grill system',
    ],
    materials: [
      { label: 'Steel grade', value: 'SS 304 (marine/food grade), 202 available on request' },
      { label: 'Bar/pipe sizes', value: '12mm–20mm square or round bar, fabricated to opening' },
      {
        label: 'Finish',
        value: 'Natural brushed steel or powder-coated (matte black, bronze, white)',
      },
      { label: 'Welding', value: 'TIG-welded joints, ground smooth, no visible weld beading' },
      { label: 'Fixing', value: 'Anchor-bolted frame into masonry or existing grill opening' },
      {
        label: 'Warranty',
        value: '7 years against rust on 304 grade, 1 year on fabrication and fitting',
      },
    ],
    benefits: [
      {
        title: "Actually resists Chennai's coastal air",
        body: '304 grade holds up where cheaper 202 grade and painted mild steel both start rusting — painted MS chips and rusts from the scratch outward within one monsoon.',
      },
      {
        title: 'Fabricated to your exact opening',
        body: 'No standard-size panels bolted in with gaps — every grill is measured and welded to the actual opening, indoors or on the terrace.',
      },
      {
        title: "Rigid where a cable system isn't the right fit",
        body: "Duct covers, gates and some staircases need a solid weldable barrier rather than a tensioned cable — we'll tell you honestly which one your opening needs.",
      },
      {
        title: 'Finish options that match your building',
        body: "Natural steel, matte black or bronze powder coat — fabricated grills don't have to look industrial.",
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We measure the exact opening and check what it's for — a staircase railing is specified differently from a duct cover.",
      },
      {
        step: 'Quote same day',
        body: "Priced per kg of steel and per running foot of welding, with grade (304 vs 202) shown separately so you know exactly what you're paying for.",
      },
      {
        step: 'Fabrication & fitting',
        body: 'Panels are welded to size at our workshop and fitted on site, ground smooth and finished before we leave.',
      },
      {
        step: 'Warranty & aftercare',
        body: '7-year rust warranty on 304-grade material; if a weld point ever fails, we come back and fix it under the fabrication warranty.',
      },
    ],
    faqs: [
      {
        q: "What's the real difference between 304 and 202 grade?",
        a: '304 grade has higher nickel content, which is what actually resists rust in humid, coastal air. 202 is cheaper and more common in mass-produced grills, but stains and pits faster in Chennai specifically.',
      },
      {
        q: 'Can you match my existing grill design?',
        a: "Yes, bring a photo or we'll take one on survey — we fabricate to match existing patterns for extensions or replacements.",
      },
      {
        q: 'Is this the same as the invisible grill product?',
        a: 'No — this is solid welded steel bar/pipe, better for duct covers, gates and some staircases. Invisible grill is a tensioned cable system, better for balconies where you want the view kept open.',
      },
      {
        q: 'Do you do powder coating on site or off site?',
        a: 'Powder coating is done at our workshop before fitting; on-site work is limited to touch-up paint if needed.',
      },
      {
        q: 'How long does fabrication take?',
        a: 'Simple openings: 2–3 days from survey to fitting. Larger or custom jobs: 5–7 days depending on welding volume.',
      },
      {
        q: 'Do you offer natural (unpainted) finish?',
        a: "Yes — brushed natural 304 steel is a standard finish option and doesn't need repainting over time like powder coat can.",
      },
    ],
    relatedSlugs: ['invisible-grills', 'duct-area-pigeon-nets', 'monkey-safety-grills'],
    gallery: [
      {
        src: '/gallery/grill-pattern-1.svg',
        alt: 'Welded stainless steel grill panel on a window opening',
      },
      {
        src: '/gallery/grill-pattern-2.svg',
        alt: 'Stainless steel grill fabricated for a staircase opening',
      },
    ],
  },
  {
    slug: 'monkey-safety-grills',
    name: 'Monkey Safety Grills & Nets',
    shortName: 'Monkey Safety Grills',
    category: 'Invisible Grills',
    metaTitle: 'Monkey Safety Grills & Nets for Balconies | Chennai',
    metaDescription:
      'Heavy-gauge grills and nets to keep monkeys out of balconies, kitchens and terraces. Locking clips, reinforced mesh. Free survey — call +91 78100 40329.',
    icon: Squirrel,
    heroTagline: "A standard net rips. A monkey grill doesn't.",
    intro: [
      "If you've had monkeys get onto your balcony or terrace, you already know a normal safety net won't hold — monkeys are strong enough to tear standard mesh, and smart enough to work a simple clip or latch loose. This is a different specification from our regular child-safety net or invisible grill work, and we quote and fit it differently.",
      "For balconies and windows, we usually recommend the solid stainless steel grill over a net here, because monkeys can rip net fabric but can't pull apart welded steel bar. Where a net is unavoidable — large terrace openings, for instance — we use a heavier gauge mesh with reinforced edge rope and conceal or lock every clip point so it can't be worked open from outside.",
      "This is a common request in Chennai's southern and IT-corridor suburbs near tree cover and hills, and in gated communities backing onto wooded compound walls.",
    ],
    bestFor: [
      'Flats and villas near tree cover, hills, or wooded compound walls with regular monkey visits',
      'Kitchens and balconies where monkeys have already entered and taken food',
      'Terraces used for drying food items (papad, pickles) that attract monkeys',
      'Housing societies with a recurring monkey problem across multiple blocks',
    ],
    materials: [
      {
        label: 'Grill option',
        value: 'SS 304, 16mm+ bar, welded (recommended for balconies/windows)',
      },
      {
        label: 'Net option',
        value:
          'Heavy-gauge HDPE, reinforced edge rope, higher breaking strength than standard bird net',
      },
      { label: 'Fixing clips', value: 'Concealed or lockable, not openable by hand from outside' },
      { label: 'Spacing', value: 'Tight enough to prevent a hand or paw reaching through' },
      {
        label: 'Coverage',
        value:
          'Full opening including any gap above cupboards or false ceiling ducts monkeys use to enter',
      },
      {
        label: 'Warranty',
        value: '2 years on net material, 7 years on 304-grade grill, 1 year on installation',
      },
    ],
    benefits: [
      {
        title: 'Built for an animal that can pull and pry',
        body: 'Reinforced mesh and welded bar options are specified to resist tearing and prying, not just to look like a barrier.',
      },
      {
        title: "Clips a monkey can't work open",
        body: 'Fixing points are concealed or use lockable clips rather than simple hooks a monkey can learn to lift.',
      },
      {
        title: 'We check every entry point, not just the balcony',
        body: 'Monkeys use gaps most people miss — AC duct openings, gaps above sliding windows, false ceiling vents. Survey covers all of them.',
      },
      {
        title: 'Honest recommendation between grill and net',
        body: "We'll tell you when a solid grill is the right call instead of a net, even though the grill is sometimes the pricier option.",
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We identify every point monkeys are using to access your flat or terrace, not just the obvious balcony opening.',
      },
      {
        step: 'Quote same day',
        body: "Quote specifies grill vs reinforced net per opening, with reasoning, so you understand what you're paying extra for.",
      },
      {
        step: 'Installation',
        body: 'Welded grills are fitted and ground smooth; nets are fitted with concealed, lockable clip points at every anchor.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If monkeys manage to damage a fitted net or work a clip loose within warranty, we repair or upgrade the fixing at no charge.',
      },
    ],
    faqs: [
      {
        q: 'Can monkeys really tear a normal safety net?',
        a: "Yes — a fully grown monkey is strong enough to rip standard-gauge HDPE net over time, especially at the edge and clip points. That's why we use a heavier gauge and reinforce the edges for this job.",
      },
      {
        q: 'Is a grill better than a net for a monkey problem?',
        a: "For balconies and windows, usually yes — welded steel can't be torn the way net fabric can. We only recommend net where a grill isn't practical for the opening.",
      },
      {
        q: 'Will this stop monkeys from entering through the kitchen exhaust or duct?',
        a: 'We fit a smaller opening cover with the same reinforced approach on duct and exhaust openings monkeys are known to use.',
      },
      {
        q: 'Do monkeys get aggressive during installation?',
        a: "Our team works during daylight hours when monkey activity is lower and takes standard precautions; we don't handle live animal removal, only the physical barrier.",
      },
      {
        q: 'How is pricing different from a standard safety net?',
        a: "Reinforced mesh and lockable clips cost more per running foot than standard bird net — we show this as a separate line so it's clear why.",
      },
      {
        q: 'Does this work for terraces used to dry papad or pickles?',
        a: 'Yes, this is one of the most common reasons societies call us for this specific service.',
      },
    ],
    relatedSlugs: ['stainless-steel-grills', 'anti-bird-safety-nets', 'invisible-grills'],
    gallery: [
      {
        src: '/gallery/grill-pattern-2.svg',
        alt: 'Heavy-gauge grill fitted against monkey entry on a balcony',
      },
      {
        src: '/gallery/net-pattern-1.svg',
        alt: 'Reinforced mesh net with locked clip points on a terrace opening',
      },
    ],
  },
  {
    slug: 'pigeon-nets-balcony',
    name: 'Pigeon Net for Balcony',
    shortName: 'Pigeon Nets (Balcony)',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Pigeon Net for Balcony Installation in Chennai',
    metaDescription:
      'Stop pigeons nesting on your balcony. UV-stable HDPE nets, invisible from inside, no drilling into the slab. Free survey — call +91 78100 40329.',
    icon: Bird,
    heroTagline: "The droppings stop. The nesting stops. The view doesn't.",
    intro: [
      "Pigeons on a balcony aren't just a mess — droppings carry fungal spores that are a genuine respiratory risk, and once a pair nests in a corner they will keep returning to the same spot for years. A pigeon net is the direct fix: a UV-stabilised HDPE mesh fitted across the balcony opening so birds can't land or nest, without changing how the balcony looks or feels from inside.",
      "We use a fine, high-density knotted mesh — 1.5 inch spacing — small enough that pigeons can't squeeze through but see-through enough that from your sofa you barely notice it's there. The net is fixed to the wall and ceiling edge with stainless steel hooks, not tacked to the railing, so there's no loose flapping in Chennai's pre-monsoon winds.",
      'This is our single most requested service, mostly from apartment owners on middle and upper floors where pigeons have already started roosting on the AC unit ledge or parapet.',
    ],
    bestFor: [
      'Balconies where pigeons have already started nesting or roosting',
      'Flats with an AC outdoor unit ledge that pigeons use as a perch',
      "Owners who want the mess and noise gone without changing the balcony's look",
      'Anyone who has tried spikes or reflective tape and found birds simply move around them',
    ],
    materials: [
      { label: 'Mesh material', value: 'UV-stabilised HDPE, knotted, 1.5" x 1.5" spacing' },
      { label: 'Border rope', value: '6mm braided nylon edge rope, stitched into the net' },
      {
        label: 'Fixing hooks',
        value: 'Stainless steel L-hooks / eye bolts, spaced 12–18 inches apart',
      },
      {
        label: 'Breaking strength',
        value: 'Rated well above what wind load or an accidental lean requires',
      },
      {
        label: 'Visibility',
        value: 'Near-invisible from indoor viewing distance in matching net colour',
      },
      { label: 'Warranty', value: '5 years against UV degradation, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Stops nesting, not just perching',
        body: "Spikes and reflective tape only block one ledge — pigeons move a foot over. A full net closes the opening so there's nowhere left to land.",
      },
      {
        title: 'Barely visible from inside',
        body: 'Fine 1.5-inch mesh in a matched colour reads as a faint shimmer, not a visible barrier, from normal sitting distance.',
      },
      {
        title: 'No drilling into the parapet coping or waterproofing',
        body: 'Hooks anchor into the wall face and ceiling edge, keeping your waterproofing layer intact.',
      },
      {
        title: 'Cleans up the mess for good',
        body: "Once birds can't land, droppings, feathers and nesting material stop accumulating — no more scrubbing the parapet every week.",
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure the balcony opening and check existing perch points — AC ledges, grill tops, parapet coping — that need covering along with the main opening.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per square foot of net, with hook count included so there are no surprise add-ons later.',
      },
      {
        step: 'Installation',
        body: 'Hooks are fixed first, net is stretched and tied taut, and edges are checked by hand for gaps a bird could exploit. Most balconies: 2–3 hours.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If a section loosens or a hook works free within the warranty period, we re-fix it free of charge.',
      },
    ],
    faqs: [
      {
        q: 'Will pigeons already nesting come back after the net goes up?',
        a: 'We clear existing nests as part of installation. Once the net is up, birds cannot re-enter that opening.',
      },
      {
        q: 'Does the net make the balcony darker?',
        a: 'No — 1.5 inch mesh in a light colour blocks very little light and is close to invisible from inside.',
      },
      {
        q: 'What if I have an AC unit on the balcony?',
        a: 'We route the net around the unit and its pipe run, and can add a small serviceable flap if the technician needs regular access.',
      },
      {
        q: 'How long before I stop seeing pigeons on the balcony?',
        a: 'Immediately for that balcony — they simply cannot land inside the netted area from day one.',
      },
      {
        q: "Is the net strong enough for Chennai's monsoon wind?",
        a: "Yes, the mesh and hook spacing are rated well above normal wind load; we've fitted these across coastal-facing towers with no issues.",
      },
      {
        q: 'Can I remove the net later if I change my mind?',
        a: 'Yes, it unhooks cleanly without damaging the wall — though almost nobody asks us to take it down once the mess stops.',
      },
    ],
    relatedSlugs: ['duct-area-pigeon-nets', 'anti-bird-safety-nets', 'balcony-safety-nets'],
    gallery: [
      { src: '/gallery/net-pattern-1.svg', alt: 'Pigeon net fitted across a balcony opening' },
      {
        src: '/gallery/net-pattern-2.svg',
        alt: 'Close view of knotted mesh pigeon net with border rope',
      },
    ],
  },
  {
    slug: 'duct-area-pigeon-nets',
    name: 'Duct Area Pigeon Nets',
    shortName: 'Duct Area Nets',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Duct Area Pigeon Net Installation | Chennai Apartments',
    metaDescription:
      'Rope-access netting for apartment duct and utility shafts where pigeons nest. Safe access, no balcony disruption. Free survey — +91 78100 40329.',
    icon: Fan,
    heroTagline: 'The shaft nobody can reach is exactly where they nest.',
    intro: [
      "Duct areas — the narrow utility shafts running down the side of apartment towers for plumbing and ventilation — are a pigeon's ideal nesting spot precisely because residents can't reach them. No balcony access, no ledge to stand on, so the mess and nesting material build up for years until someone complains about the smell or a blockage.",
      "This isn't a job you do from a balcony with a stick and a roll of net. We fit duct openings using rope access or scaffolding depending on the building's height and shaft width, covering every opening from ground floor to terrace in one pass so pigeons can't simply relocate one floor up.",
      'This is typically arranged through the housing society or facility manager rather than a single flat owner, since duct shafts run through common areas and affect every floor they pass.',
    ],
    bestFor: [
      'Housing societies with pigeon nesting or blockages inside duct/utility shafts',
      'Buildings where residents have complained about smell or noise from duct areas',
      'Facility managers doing a building-wide bird-proofing pass rather than one flat at a time',
      'Ducts where nesting material has previously caused a drain blockage',
    ],
    materials: [
      {
        label: 'Mesh material',
        value: 'UV-stabilised HDPE, 1.5" spacing, higher-tension weave for shaft conditions',
      },
      {
        label: 'Access method',
        value: 'Rope access (trained technicians) or scaffolding, per building height/shaft width',
      },
      { label: 'Fixing', value: 'SS anchors into shaft wall at each floor opening' },
      {
        label: 'Coverage',
        value: 'Every duct opening floor to floor, done in a single continuous pass',
      },
      {
        label: 'Safety compliance',
        value: 'Openings kept serviceable for plumbers; nothing welded shut over access points',
      },
      { label: 'Warranty', value: '5 years against UV degradation, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Reaches openings balconies never could',
        body: "Rope access and scaffolding get our team to shaft openings with no ledge or balcony access — the actual problem area, not just what's visible from a flat.",
      },
      {
        title: 'One pass covers the whole shaft',
        body: "We net every floor's opening in the same visit so birds can't simply move up or down one level.",
      },
      {
        title: 'Access stays serviceable',
        body: 'Net panels are fitted so plumbers and maintenance staff can still reach pipework — nothing is permanently sealed.',
      },
      {
        title: 'Removes years of built-up nesting material',
        body: 'We clear existing nests and debris as part of the job, which often resolves smell complaints and slow drains.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We inspect the shaft from top to bottom, note the access method needed (rope or scaffold) and flag any existing blockage for the society's plumber.",
      },
      {
        step: 'Quote to the society/FM',
        body: 'One quote covering the full shaft height, itemised by floor count and access method, usually shared with the facility manager or association.',
      },
      {
        step: 'Installation',
        body: 'Trained technicians net every opening floor to floor in a single scheduled pass, working around common building hours.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'Annual inspection visits can be arranged with the society to check for wear before the next monsoon.',
      },
    ],
    faqs: [
      {
        q: 'Who normally arranges this — the flat owner or the society?',
        a: 'Almost always the housing society or facility manager, since the duct shaft is common property running through every floor.',
      },
      {
        q: 'Is rope access safe for a residential building?',
        a: "Yes — our technicians are trained in rope access work and follow standard safety protocol; we'll explain the method during survey so the society is comfortable with it.",
      },
      {
        q: 'Will this block plumber access to the shaft?',
        a: 'No — panels are fitted to stay serviceable, so maintenance staff can still reach pipework when needed.',
      },
      {
        q: 'How long does a full building shaft take?',
        a: 'Depends on height and number of floors — a typical 12–15 floor tower shaft takes 2–3 days for a full pass.',
      },
      {
        q: 'Can this be done one floor at a time instead of the whole shaft?',
        a: 'It can, but pigeons will simply relocate to the uncovered floors, so we always recommend covering the full shaft in one pass.',
      },
      {
        q: 'Does netting the duct reduce bad smell from the shaft?',
        a: 'Often yes, since most of the smell comes from accumulated droppings and nesting material, which we clear during installation.',
      },
    ],
    relatedSlugs: ['pigeon-nets-balcony', 'anti-bird-safety-nets', 'stainless-steel-grills'],
    gallery: [
      {
        src: '/gallery/duct-pattern-1.svg',
        alt: 'Duct shaft cross-section with netted openings at each floor',
      },
      { src: '/gallery/net-pattern-2.svg', alt: 'Mesh detail used for duct area bird netting' },
    ],
  },
  {
    slug: 'anti-bird-safety-nets',
    name: 'Anti-Bird Safety Nets',
    shortName: 'Anti-Bird Nets',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Anti-Bird Safety Nets — Terraces, Warehouses | Chennai',
    metaDescription:
      'Large-scale bird netting for terraces, warehouses, solar panels and factories. Crows, mynas and pigeons kept out. Site visit free — call +91 78100 40329.',
    icon: Feather,
    heroTagline: 'One net, every bird — not just pigeons.',
    intro: [
      "This is the larger-scale version of bird netting — terraces, warehouse roofs, factory shade sheds, solar panel installations and commercial building facades, where the problem isn't only pigeons but crows, mynas and sometimes swallows nesting in structural gaps. The scale and mesh spec are different from a single balcony job, and so is the survey.",
      "For open terraces and large roof areas we fit a tensioned overhead net, supported on a perimeter cable or pole frame so it doesn't sag under monsoon rain load. For solar panel installations specifically, netting underneath and around the panel frame stops birds nesting in the gap beneath the panels, which is a common cause of wiring damage and reduced output.",
      'We quote this by area (square feet) rather than per opening, since jobs range from a single terrace to an entire factory shed roof.',
    ],
    bestFor: [
      'Open terraces used for drying, storage or gatherings that attract birds',
      'Warehouses and factory sheds with bird nesting in roof trusses',
      'Solar panel installations where birds nest underneath the panel frame',
      'Commercial buildings and facades with recurring crow or myna nesting',
    ],
    materials: [
      {
        label: 'Mesh material',
        value: 'UV-stabilised HDPE, 1.5"–2" spacing depending on target bird size',
      },
      {
        label: 'Support structure',
        value: 'Perimeter cable or GI pole frame rated for monsoon rain load',
      },
      {
        label: 'Coverage',
        value: 'Full overhead or perimeter netting, sized to area in square feet',
      },
      {
        label: 'Solar panel variant',
        value: 'Under-panel netting fitted without obstructing panel cleaning or airflow',
      },
      { label: 'Fixing', value: 'SS anchors into parapet, roof structure or existing railing' },
      { label: 'Warranty', value: '5 years against UV degradation, 1 year on installation' },
    ],
    benefits: [
      {
        title: "Covers birds a pigeon net spec doesn't",
        body: 'Crows and mynas are larger and more aggressive nesters than pigeons — mesh spacing and tensioning are adjusted for them specifically.',
      },
      {
        title: 'Rated for monsoon rain load',
        body: "Overhead terrace and shed netting is supported on a proper cable or pole frame so it doesn't pool water and sag or tear.",
      },
      {
        title: 'Protects solar panel output',
        body: 'Birds nesting under panels is a common, under-noticed cause of wiring damage and dropped output — under-panel netting closes that gap.',
      },
      {
        title: 'Priced by area for large jobs',
        body: 'Warehouse and factory quotes are transparent per-square-foot, so scaling up from one shed to the whole facility is a straightforward add-on, not a renegotiation.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'For large sites we walk the full roof/terrace area and check structural anchor points before quoting — this is a longer survey than a single balcony.',
      },
      {
        step: 'Quote by area',
        body: "Priced per square foot with support-frame cost shown separately, so you can see what's netting and what's structural.",
      },
      {
        step: 'Installation',
        body: 'Support frame goes up first, then the net is tensioned across it. Larger sites are scheduled over multiple days to avoid disrupting operations.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'For factories and warehouses we recommend an annual pre-monsoon inspection, which we can schedule directly with your facility team.',
      },
    ],
    faqs: [
      {
        q: 'Does this stop crows as well as pigeons?',
        a: 'Yes — mesh spacing and the support frame are specified for larger, stronger birds like crows and mynas, not just pigeons.',
      },
      {
        q: 'Will netting affect solar panel cleaning or airflow?',
        a: "No, under-panel netting is fitted with clearance for routine cleaning and doesn't block airflow around the panels.",
      },
      {
        q: 'How is pricing worked out for a large site?',
        a: 'Per square foot of net area, with the support frame (cable or pole) costed separately and shown on the quote.',
      },
      {
        q: 'Can this be done without stopping factory operations?',
        a: 'Yes, we schedule larger jobs in phases or off-hours to avoid disrupting the working floor.',
      },
      {
        q: 'Does the net sag or collect rainwater?',
        a: "No, it's tensioned over a perimeter cable or pole frame specifically rated to shed monsoon rain load rather than pool it.",
      },
      {
        q: 'Do you provide a maintenance contract for large installations?',
        a: 'Yes, annual pre-monsoon inspection visits can be arranged directly with your facility or maintenance team.',
      },
    ],
    relatedSlugs: ['pigeon-nets-balcony', 'duct-area-pigeon-nets', 'glass-safety-nets'],
    gallery: [
      {
        src: '/gallery/net-pattern-2.svg',
        alt: 'Large-format bird netting over a terrace or shed roof',
      },
      { src: '/gallery/net-pattern-1.svg', alt: 'Perimeter-supported anti-bird net mesh detail' },
    ],
  },
  {
    slug: 'children-safety-nets',
    name: 'Children Safety Nets',
    shortName: 'Children Safety Nets',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Children Safety Nets for Balcony & Windows | Chennai',
    metaDescription:
      'Soft nylon safety nets for balconies and windows, no drilling required. Ideal for rented flats with young children. Free survey — +91 78100 40329.',
    icon: ShieldPlus,
    heroTagline: 'No drilling. No grill look. Just no gap for a child to fall through.',
    intro: [
      "For families who want balcony and window safety for young children without a grill's look, or in a rented flat where drilling into the wall for a permanent cable system isn't allowed, a safety net is the better fit. It's a soft nylon mesh, not steel — fixed with removable clip hooks so it can go up and come down without marking the wall.",
      "This differs from our children's safety grill page in one important way: the fixing. Nets clip to a light frame or existing railing rather than anchoring into masonry, which is exactly why landlords approve it where they won't approve a drilled grill. The mesh itself uses the same 2-inch spacing logic as our grill spacing — tight enough that a child cannot push through or wedge a limb.",
      'We fit these on balconies, ground and low-floor windows, and open staircases inside duplexes where a young child could otherwise fall between banister rails.',
    ],
    bestFor: [
      "Rented flats where drilling into the wall isn't allowed by the landlord",
      'Families wanting a softer, less visually "caged" look than a steel grill',
      'Duplex staircases and landings where a toddler could fall through banister gaps',
      'Temporary safety needs — visiting grandchildren, short-term stays',
    ],
    materials: [
      { label: 'Mesh material', value: 'Soft nylon multifilament, knotted, 2" spacing' },
      { label: 'Border rope', value: 'Reinforced 6mm edge rope for repeated clip/unclip use' },
      { label: 'Fixing', value: 'Removable stainless clip hooks — no drilling into masonry' },
      {
        label: 'Frame option',
        value: "Light aluminium frame available where there's no railing to clip to",
      },
      {
        label: 'Feel',
        value: 'Soft to the touch, no sharp edges — safe for a child to lean or press against',
      },
      { label: 'Warranty', value: '3 years on net material, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'No drilling, landlord-friendly',
        body: "Clip-fixing means this is one of the few child-safety options that works in a rental without needing the owner's permission for wall work.",
      },
      {
        title: 'Soft, not caged',
        body: "Nylon mesh has a softer look and feel than steel — some families prefer this specifically because it doesn't look like a security grill.",
      },
      {
        title: 'Removable when you move',
        body: 'Unclips cleanly if you shift flats, so it comes with you rather than staying fixed to a rented property.',
      },
      {
        title: 'Covers staircases, not just balconies',
        body: 'Duplex banister gaps are a fall risk people rarely think to net — we cover this as part of the same visit if you have one.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We check whether there's a railing to clip to or whether a light frame is needed first, and measure every opening a young child has access to.",
      },
      {
        step: 'Quote same day',
        body: 'Priced per opening, with frame cost (if needed) itemised separately from the net itself.',
      },
      {
        step: 'Installation',
        body: 'Net is clipped taut across the opening and hand-tested for give — no loose corners a child could pull at.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If you move flats, we can come detach and refit the same net at your new address for a reduced call-out charge.',
      },
    ],
    faqs: [
      {
        q: 'Will my landlord be okay with this?',
        a: 'Usually yes — since fixing is by clip hooks rather than drilling into the wall, most landlords approve it without hesitation.',
      },
      {
        q: 'Can I take it down and reinstall it if I move?',
        a: 'Yes, this is one of the main reasons families choose net over grill — it unclips and can be refitted elsewhere.',
      },
      {
        q: 'Is nylon net as safe as a steel cable grill?',
        a: "For fall and limb-entrapment prevention, yes — the mesh spacing does the same job. Steel grills add rigidity nets don't have, but for most balcony and window fall risks, net spacing is what matters.",
      },
      {
        q: 'Does this work on a spiral or open staircase?',
        a: 'Yes, we fit netting along banister gaps on open staircases and landings, which is a commonly missed fall risk.',
      },
      {
        q: 'How often does the net need replacing?',
        a: 'Nylon degrades slower indoors/on covered balconies; on fully exposed balconies we recommend a check around year 3.',
      },
      {
        q: 'Can this be fitted just for a short visit, like grandchildren staying over?',
        a: 'Yes, we do short-term installations for visiting children, though most families end up keeping it up.',
      },
    ],
    relatedSlugs: ['children-safety-grills', 'balcony-safety-nets', 'invisible-grills'],
    gallery: [
      {
        src: '/gallery/net-pattern-1.svg',
        alt: 'Soft nylon child-safety net clipped across a balcony opening',
      },
      { src: '/gallery/net-pattern-2.svg', alt: 'Close view of 2 inch mesh child-safety netting' },
    ],
  },
  {
    slug: 'balcony-safety-nets',
    name: 'Balcony Safety Nets',
    shortName: 'Balcony Safety Nets',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Balcony Safety Nets Installation | Chennai, All Areas',
    metaDescription:
      'General-purpose balcony nets for pets, elderly family members and everyday fall prevention. No-drill option available. Free survey — +91 78100 40329.',
    icon: PawPrint,
    heroTagline: 'Kids climb, pets jump, someone leans too far. One net covers all three.',
    intro: [
      'Not every balcony net request is about young children specifically. A lot of our customers want general fall prevention — for an elderly parent who leans on the railing, for a dog or cat that likes to jump onto the parapet ledge, or simply because the balcony is used daily for drying clothes and storage and a loose railing makes everyone nervous.',
      'This is the general-purpose version of our netting work: standard 2-inch mesh, fitted across the full balcony opening, with the same clip-hook, no-drill fixing used in our children\'s net service. It suits any balcony where the goal is "nobody and nothing goes over this railing" rather than a child-specific spec.',
      "If pets are part of the reason you're asking, mention it during survey — we check the mesh tension specifically against a jumping or climbing pet, which is a different stress pattern than a child leaning on it.",
    ],
    bestFor: [
      'Households with an elderly parent who uses the balcony railing for support',
      'Homes with a cat or dog that jumps onto balcony ledges or railings',
      'Balconies used daily for drying clothes, storage, or as an outdoor sitting spot',
      'Anyone wanting general fall-prevention without a child-specific or pigeon-specific spec',
    ],
    materials: [
      { label: 'Mesh material', value: 'Nylon or HDPE, 2" spacing, standard breaking strength' },
      {
        label: 'Fixing',
        value: 'Removable clip hooks (no-drill) or SS eye-bolt anchors (permanent) — your choice',
      },
      {
        label: 'Pet-rated tension',
        value: 'Extra tensioning at jump-height points on request for cats and dogs',
      },
      {
        label: 'Coverage',
        value: 'Full balcony opening including any gap beside an AC unit or drying stand',
      },
      { label: 'Colour', value: 'White, grey or black to match your railing or wall' },
      {
        label: 'Warranty',
        value: '3–5 years depending on fixing type chosen, 1 year on installation',
      },
    ],
    benefits: [
      {
        title: 'One spec, several worries solved',
        body: "The same net addresses an elderly relative leaning on the railing, a pet jumping the ledge, and general everyday fall risk — you don't need three different products.",
      },
      {
        title: 'Choice of drilled or no-drill fixing',
        body: "Owned flats can go with permanent SS eye-bolt anchors; rented flats can choose the same clip-hook, no-drill fixing used in our children's net service.",
      },
      {
        title: 'Tensioned for pets specifically, on request',
        body: 'A cat or dog jumping puts a different, sharper load on a net than a person leaning — we add tension points at typical jump height when told a pet is involved.',
      },
      {
        title: "Doesn't interrupt daily balcony use",
        body: 'Routed around drying stands and AC units so the balcony stays fully usable, not boxed in.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We ask what's driving the request — pets, elderly family, general peace of mind — since it changes tensioning and sometimes fixing choice.",
      },
      {
        step: 'Quote same day',
        body: 'One quote covering both fixing options (drilled or clip) so you can decide based on whether you own or rent.',
      },
      {
        step: 'Installation',
        body: 'Net is fitted and hand-tested at jump height if pets are part of the reason, in addition to standard checks.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'Re-tensioning or hook replacement is free within warranty if a pet or general wear loosens a section.',
      },
    ],
    faqs: [
      {
        q: 'Will a cat or dog be able to break through the net?',
        a: 'Standard mesh handles typical pet weight and jumping; we add extra tension points at jump height when you tell us a pet is involved, which covers larger or more determined animals.',
      },
      {
        q: 'Can I choose no-drill fixing even though I own the flat?',
        a: "Yes — clip-hook fixing isn't only for renters, some owners prefer it simply to avoid any wall drilling.",
      },
      {
        q: 'Does the net restrict using the balcony for drying clothes?',
        a: 'No, we route the net around your existing drying stand or rod so nothing changes about daily use.',
      },
      {
        q: "Is this the same product as the children's safety net?",
        a: "Same core mesh and fixing options, but tensioning and survey questions are adjusted for the actual reason — pets, elderly family, or general safety — rather than assuming it's for children.",
      },
      {
        q: 'How long does installation take?',
        a: 'A standard balcony: 2–3 hours including tensioning checks.',
      },
      {
        q: 'Can this be combined with a pigeon net if I have both problems?',
        a: "Yes — if birds are also an issue we'll spec a single mesh that handles both fall prevention and pigeon exclusion rather than fitting two separate nets.",
      },
    ],
    relatedSlugs: ['children-safety-nets', 'pigeon-nets-balcony', 'invisible-grills'],
    gallery: [
      {
        src: '/gallery/net-pattern-2.svg',
        alt: 'General purpose safety net fitted across a balcony railing',
      },
      {
        src: '/gallery/net-pattern-1.svg',
        alt: 'Balcony net tensioned around a drying stand and railing',
      },
    ],
  },
  {
    slug: 'glass-safety-nets',
    name: 'Glass Safety Nets',
    shortName: 'Glass Safety Nets',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Glass Safety Nets for Skylights & Canopies | Chennai',
    metaDescription:
      'Catch-nets fitted beneath glass skylights, canopies and facades to stop shattered glass falling. For homes and commercial buildings. Call +91 78100 40329.',
    icon: PanelTop,
    heroTagline: 'If the glass ever cracks, this is what stops it landing on someone.',
    intro: [
      'Toughened glass is designed to crumble rather than form blades when it fails — but crumbled glass still falls, and from a skylight, canopy or glass roof, that fall is directly onto whoever is underneath. A glass safety net is a fine mesh fitted just beneath the glass so that if a pane ever cracks from thermal stress, hail, or impact, the fragments are caught before they reach the floor.',
      "This is a different job from our balcony or pigeon netting — the mesh is finer and fitted at a controlled distance below the glass rather than across an open balcony, and it's common on glass canopies over entrances, glass roofs over atriums, and glass partition walls in commercial buildings where a falling-glass incident is a real liability, not just an inconvenience.",
      'We fit this for both residential glass roofs (common over stairwells and skylights in independent houses) and commercial buildings doing a facade safety pass — schools, offices and retail spaces most often ask for this ahead of a safety audit.',
    ],
    bestFor: [
      'Homes and buildings with a glass roof, skylight or overhead glass canopy',
      'Commercial buildings preparing for a facade or safety compliance audit',
      'Schools and offices with glass partition walls in high-footfall areas',
      'Any structure where a cracked glass pane would fall onto people below',
    ],
    materials: [
      {
        label: 'Mesh material',
        value: 'Fine nylon monofilament, near-transparent, fitted below the glass plane',
      },
      {
        label: 'Mesh spacing',
        value: 'Tight enough to contain shattered glass fragments, not just large pieces',
      },
      {
        label: 'Fixing',
        value:
          'SS anchors into the glass frame or surrounding structure, not into the glass itself',
      },
      {
        label: 'Clearance',
        value:
          'Fitted at a set distance below the glass to catch and hold fragments without touching the pane',
      },
      {
        label: 'Visibility',
        value: 'Near-transparent monofilament keeps the glass feature visually unobstructed',
      },
      {
        label: 'Warranty',
        value: '5 years against UV/material degradation, 1 year on installation',
      },
    ],
    benefits: [
      {
        title: 'Catches fragments before they fall',
        body: 'Fitted below the glass plane, the net holds shattered pieces in place instead of letting them drop onto whoever is underneath.',
      },
      {
        title: "Doesn't touch or stress the glass itself",
        body: "Anchors go into the surrounding frame or structure, not the glass, so there's no added load or drilling risk to the pane.",
      },
      {
        title: 'Keeps the glass feature visible',
        body: 'Fine monofilament mesh is close to transparent — it protects without turning your skylight or canopy into a visibly netted structure.',
      },
      {
        title: 'Useful for compliance, not just accidents',
        body: 'Commercial buildings often need documented fall-protection measures for overhead glass ahead of a facade safety audit — this is fitted to satisfy that, not just as a precaution.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We check the glass type, frame structure and the safe clearance distance for the net below the pane — this varies by roof pitch and glass size.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per square foot of coverage, with any scaffolding or access cost for overhead work shown separately.',
      },
      {
        step: 'Installation',
        body: 'Anchors are fitted into the frame/structure first, then the net is tensioned below the glass at the surveyed clearance.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'We recommend a visual check each year, especially before monsoon, and will do this as part of an annual maintenance visit if requested.',
      },
    ],
    faqs: [
      {
        q: 'Does the net get fixed to the glass directly?',
        a: "No — anchors go into the surrounding frame or structure so there's no drilling into or load on the glass pane itself.",
      },
      {
        q: 'Will the net be visible from below?',
        a: "Fine monofilament mesh is close to transparent at normal viewing distance — it doesn't read as an obvious net from underneath.",
      },
      {
        q: 'Is this required for commercial buildings by law?',
        a: 'Requirements vary by building and local authority; many facilities add this proactively ahead of a safety audit rather than waiting to be told to.',
      },
      {
        q: 'What if my skylight is very large or oddly shaped?',
        a: "We survey the exact shape and specify anchor points and net panels to match — this isn't a standard pre-cut product.",
      },
      {
        q: 'Does this work for glass canopies over an entrance, not just skylights?',
        a: 'Yes, entrance canopies are one of the more common requests, since they sit directly over a walking path.',
      },
      {
        q: 'How is this different from your anti-bird nets?',
        a: 'Different purpose and spec entirely — this is a fine, near-invisible mesh for catching falling glass, fitted below a glass surface rather than across an open balcony or terrace.',
      },
    ],
    relatedSlugs: ['anti-bird-safety-nets', 'stainless-steel-grills', 'balcony-safety-nets'],
    gallery: [
      {
        src: '/gallery/glass-pattern-1.svg',
        alt: 'Glass skylight cross-section with a catch net fitted beneath the panes',
      },
      {
        src: '/gallery/glass-pattern-2.svg',
        alt: 'Fine mesh net overlay beneath a glass panel grid',
      },
    ],
  },
  {
    slug: 'cricket-practice-nets',
    name: 'Cricket Practice Nets',
    shortName: 'Cricket Practice Nets',
    category: 'Safety & Pigeon Nets',
    metaTitle: 'Cricket Practice Nets Installation | Chennai & Pan-India',
    metaDescription:
      'Heavy-duty practice nets for societies, schools and sports academies. GI pole frames, ball-stopping mesh. Free site visit — call +91 78100 40329.',
    icon: Target,
    heroTagline: 'Built to take a hard-hit ball, evening after evening, for years.',
    intro: [
      "A cricket practice net gets hit harder and more often than any safety net we install — this is a structural sports installation, not a safety barrier, and it's priced and specified differently. We fit heavy-duty braided HDPE netting on a GI pole frame, sized to the pitch length and height the client needs, for housing society grounds, school playgrounds and sports academies.",
      "Mesh here is chosen for ball-stopping strength rather than for being unobtrusive — 1–2 inch spacing in a heavier braided twine that holds up to a cricket ball at practice pace over years of daily use, not just occasional impact. Pole frames are GI pipe, set in concrete footings, sized to the site's wind exposure and net height (typically 10–12 ft).",
      'This is one of the few services on this site aimed at sports facilities and societies rather than home safety — but the same survey-quote-install-warranty process applies.',
    ],
    bestFor: [
      'Housing societies with open ground wanting a permanent practice net setup',
      'Schools and colleges with a cricket coaching program',
      'Sports academies needing multiple practice lanes',
      'Terraces or open plots used informally for practice that need ball containment',
    ],
    materials: [
      {
        label: 'Net material',
        value: 'Braided HDPE, 1"–2" spacing, heavy-duty ball-stopping weave',
      },
      { label: 'Pole frame', value: 'GI pipe, set in concrete footings, height 10–12 ft standard' },
      {
        label: 'Side/back coverage',
        value: 'Full enclosure (side, back, overhead optional) or single-side, per site',
      },
      {
        label: 'Border rope',
        value: 'Reinforced edge rope stitched to withstand repeated ball impact',
      },
      {
        label: 'Lane width',
        value: 'Standard single-lane or multi-lane layouts, sized to available ground',
      },
      {
        label: 'Warranty',
        value: '3 years on net material, 5 years on pole frame, 1 year on installation',
      },
    ],
    benefits: [
      {
        title: 'Specified for repeated hard impact',
        body: 'Braided twine and reinforced edge rope are chosen for daily ball strikes over years, not occasional light contact.',
      },
      {
        title: 'Concrete-set pole frame',
        body: 'GI poles are set in concrete footings rather than surface-mounted, so the frame stays rigid under repeated impact and wind.',
      },
      {
        title: 'Sized to your ground, not a fixed kit',
        body: 'Single lane, multi-lane, terrace or open-plot layouts are all surveyed and fitted to the actual space available.',
      },
      {
        title: 'One point of contact for society-scale jobs',
        body: 'For societies and schools ordering multiple lanes, we quote and install the full layout as one job, not lane by lane.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure the ground, check for overhead obstructions (wires, trees) and confirm how many lanes fit the available space.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per lane, covering poles, footings, and netting as one line item per lane so multi-lane orders are easy to compare.',
      },
      {
        step: 'Installation',
        body: 'Pole footings are dug and set first and left to cure before netting is fitted and tensioned — larger multi-lane jobs are scheduled over several days.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'We recommend a pre-season tension check; net rope and pole joints are covered under warranty against normal wear.',
      },
    ],
    faqs: [
      {
        q: 'How long do the poles take to set before netting can go up?',
        a: 'Concrete footings typically need 3–4 days to cure before we load-test and fit the netting.',
      },
      {
        q: 'Can this be fitted on a terrace instead of open ground?',
        a: 'Yes, provided the terrace can support pole footings or a suitable base-mounted frame — we confirm this during survey.',
      },
      {
        q: 'What net height do you recommend?',
        a: '10–12 ft is standard for practice nets and stops the ball reliably for most playing levels; taller options are available for specific requirements.',
      },
      {
        q: 'How many lanes can fit in a housing society ground?',
        a: "Depends entirely on your ground's dimensions — we bring lane-width options to the survey so you can see what fits.",
      },
      {
        q: 'Does the net need to be taken down before monsoon?',
        a: 'No, the netting and frame are built to stay up year-round; we just recommend a tension check before the season.',
      },
      {
        q: 'Do you install for schools and academies, not just housing societies?',
        a: 'Yes — schools, colleges and academies are a regular part of this work, often ordering multiple lanes at once.',
      },
    ],
    relatedSlugs: ['anti-bird-safety-nets', 'balcony-safety-nets', 'stainless-steel-grills'],
    gallery: [
      {
        src: '/gallery/cricket-pattern-1.svg',
        alt: 'Cricket practice net enclosure with pole frame and stumps',
      },
      {
        src: '/gallery/cricket-pattern-2.svg',
        alt: 'Close view of heavy-duty cricket practice net mesh',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const grillServices = services.filter((s) => s.category === 'Invisible Grills')
export const netServices = services.filter((s) => s.category === 'Safety & Pigeon Nets')
