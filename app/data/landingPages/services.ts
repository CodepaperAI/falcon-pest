// SERVICE LANDING PAGES
//
// These split the single /services page — where six services shared one URL
// behind a JS modal — into one URL per service.
//
// Two deliberate taxonomy changes from the client's own service list:
//  - "Ant & Cockroach Control" is ONE service in Falcon's list but TWO
//    unrelated keyword clusters, so it becomes two pages. Both describe the
//    same published service and the same published four-step process.
//  - "One-Time & Ongoing Services" is not a page. It has no demand as a
//    phrase; its content lives inside the quarterly page instead.
//
// ALLOWED FACTS used here that are specific to this file: the four-step
// process and the stated treatment duration for each service, both of which
// Falcon publishes in app/data/services.js. Those are quoted accurately.
//
// BANNED — see the header of ./cities.ts for the full list. Most relevant
// here: no bed bug, wasp, flea, wildlife, termite or mosquito service may be
// claimed; no product or active ingredient may be named; no price, guarantee
// term, licence number or response-time promise may be stated.

import { LandingPage } from "./types";
import { IMAGES } from "./images";


export const servicePages: LandingPage[] = [
  // ------------------------------------------------------------------
  {
    slug: "service-rodent-control",
    family: "service",
    serviceSlug: "rodent-control",
    pathname: "/services/rodent-control",
    title: "Rodent Control Niagara | Mice & Rat Exterminator",
    h1: "Rodent Control in Niagara — Mice & Rat Extermination",
    metaDescription:
      "Mice and rat control across the Niagara Region. Assessment, trapping and removal, exclusion and sanitation — typically one to two weeks to full elimination.",
    formSourceId: "service-rodent-control",
    intro:
      "Rodent work is the service where the difference between killing what is inside and stopping what is outside matters most. A trap removes an animal. It does not remove the gap the animal used, and while that gap remains the property stays available to the next one. Falcon's rodent service is built around that distinction: our published four stages are assessment, trapping and removal, exclusion, and sanitation, and it is the third of those — exclusion — that determines whether the problem comes back. We give a typical elimination window of one to two weeks.",
    sections: [
      {
        heading: "Six millimetres is all it takes",
        body: "A house mouse can pass through a gap of roughly six millimetres — about the diameter of a pencil — because its skull is the limiting dimension and the rest of the body follows. A rat needs closer to twenty millimetres. Those numbers explain why homeowners so often insist there is no way in: the openings that matter are not obvious holes, they are the tolerances left where something passes through a wall. The list is short and consistent across almost every property we inspect. Where the gas line enters. Around the water service. The dryer vent, especially where the flap no longer closes. HVAC and refrigerant line penetrations. The gap beneath the sill plate at grade. Weep holes in brick veneer. The base of exterior basement stairs. And the door sweep between an attached garage and the house, which is the single most common route we find in modern homes.",
      },
      {
        heading: "Trapping, removal, and what gets used where",
        body: "Falcon's published second stage is the strategic placement of humane traps and the removal of rodents from the property. Trapping has real advantages worth understanding: it confirms the scale, because you can see what was caught and how much, which tells you whether you are dealing with one animal or twenty; and it removes the carcass rather than leaving it to decompose somewhere inaccessible in a wall void or above a ceiling, which becomes an odour problem in its own right. Where tamper-resistant bait stations are used, they are placed and secured so that children and pets cannot reach the contents. What matters is that the choice is made from the assessment rather than applied uniformly, and that whoever attends explains what they are placing, where, and why — so tell us at the outset if you have young children, pets, or particular concerns, and it will shape the plan.",
      },
      {
        heading: "Exclusion is the part that actually lasts",
        body: "Once the active population is removed, the work that determines the outcome is sealing. Steel wool and copper mesh packed into a gap and sealed will stop rodents chewing through in a way that expanding foam alone will not — foam is a perfectly good air seal and a poor physical barrier, and rodents go straight through it. Hardware cloth over larger openings, proper sheet metal at chewed timber edges, and correctly fitting door sweeps are the durable answers. This is the stage where a cheap job and a lasting one diverge, because it is slower and less visible than setting traps. It is also why our published process lists exclusion as a distinct stage rather than an afterthought.",
      },
      {
        heading: "Sanitation, and why it is not just tidying up",
        body: "The fourth stage in our process is sanitation, and it exists for two reasons. The practical one is odour and contamination in the affected area. The more important one is scent: rodents navigate and communicate using urine and pheromone trails, and a site that still carries those markers reads as established habitat to the next animal that passes. Cleaning the affected area properly removes that signal along with the mess. One safety point worth stating plainly, because people get it wrong: do not dry-sweep or vacuum droppings. That aerosolises particulate. Ventilate the space, keep people and pets out of it, and let the affected area be dealt with properly.",
      },
      {
        heading: "When rodent pressure peaks in Niagara",
        body: "Autumn is the event. As overnight temperatures fall, animals that spent the summer living outdoors begin systematically testing structures for somewhere warm, and a building that was fine all summer can be entered within days. Two local variations are worth knowing. In agricultural areas — much of Lincoln, Pelham, Niagara-on-the-Lake and West Lincoln — harvest and ploughing displace field populations in concentrated waves. In fast-growing municipalities, Thorold above all, excavation destroys established burrow systems and pushes those animals into the nearest occupied building. In both cases the pressure is external and temporary, and the buildings that come through it well are the ones that were sealed beforehand.",
      },
    ],
    benefits: [
      {
        icon: "ScanSearch",
        title: "Assessment first",
        description:
          "We establish entry points, nesting areas and the extent of the population before anything is set. Treating without that is guesswork.",
      },
      {
        icon: "Mouse",
        title: "Trapping and removal",
        description:
          "The published second stage: humane traps placed strategically, so the scale is confirmed and the carcass is removed rather than left in a wall void.",
      },
      {
        icon: "ShieldCheck",
        title: "Exclusion that holds",
        description:
          "Steel wool, copper mesh and hardware cloth properly fitted — not expanding foam, which rodents chew straight through.",
      },
      {
        icon: "Sparkles",
        title: "Sanitation",
        description:
          "Scent trails mark a site as established habitat for the next animal. Cleaning the affected area removes the signal, not just the mess.",
      },
    ],
    factTable: {
      caption: "Rodent control — what we do and how long it takes",
      rows: [
        {
          label: "Typical duration",
          value: "1–2 weeks for complete elimination",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "Stage 1 — Assessment",
          value: "Identify entry points, nesting areas and the extent of the infestation",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 2 — Trapping & removal",
          value: "Strategic placement of humane traps and removal of rodents from the property",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 3 — Exclusion",
          value: "Seal entry points and gaps to prevent future entry",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 4 — Sanitation",
          value: "Clean and sanitise affected areas to eliminate contamination and odours",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Gap a mouse can pass through",
          value: "About 6 mm — roughly the diameter of a pencil",
          source: "General rodent biology; the skull is the limiting dimension",
        },
      ],
    },
    faqs: [
      {
        question: "How do I know whether it is mice or rats?",
        answer:
          "Droppings are the quickest indicator. Mouse droppings are small, roughly rice-grain sized and pointed at the ends; rat droppings are substantially larger and more capsule-shaped. Sound helps too — rats are heavier and their movement in a ceiling or wall is more audible. Gnaw damage differs in scale in the same way. If you are unsure, photograph what you have found and describe where, and we can usually narrow it down before the visit.",
      },
      {
        question: "Why do I still hear activity after the treatment?",
        answer:
          "Usually because removal is a process rather than an instant. The published window is one to two weeks, and during that time traps are working through the population. What matters is that activity is declining. If it is steady or increasing after the first week, that points to either a larger population than initially assessed or a continuing entry route, and that is exactly what the follow-up visit is for.",
      },
      {
        question: "Can you guarantee they will not come back?",
        answer:
          "No responsible pest control company can promise a permanent guarantee, and we will not. What determines the long-term outcome is exclusion — how thoroughly the entry points are sealed — plus what happens outside the building afterwards. A property backing onto farmland, a waterway or a construction site faces continuing pressure that no single visit can eliminate. We will tell you honestly which category your property is in, and for terms of any specific promise, ask us directly.",
      },
      {
        question: "Is it safe with children and pets in the house?",
        answer:
          "Falcon's published position is that treatments are family and pet friendly. In rodent work, humane trapping is the published second stage, and where tamper-resistant bait stations are used they are placed and secured so the contents cannot be reached. Tell us before the visit if there are young children or pets in the property — including birds and fish, which have particular sensitivities — and where they spend time, because that genuinely shapes what gets placed and where.",
      },
      {
        question: "What is the single most common entry point you find?",
        answer:
          "The door sweep between an attached garage and the house. Garages are rarely sealed to the standard of the living space, doors get knocked out of alignment, and the sweep wears until there is a gap along the bottom. It is easy to check and inexpensive to fix. After that: the gas line penetration, the dryer vent where the flap no longer closes, and the sill plate at grade.",
      },
      {
        question: "Should I put down bait from the hardware store first?",
        answer:
          "We would rather you did not, and not for commercial reasons. Retail bait frequently results in animals dying inside wall voids or above ceilings where they cannot be reached, and that becomes an odour problem that lasts weeks and is far harder to resolve than the original infestation. It also gives no information about the size of the population. If you have already used it, just tell us and we will work around it.",
      },
    ],
    ctaHeading: "Book rodent control",
    ctaBody:
      "Tell us what you have heard or found and roughly where. Even a rough location helps us plan the assessment, which is the stage the rest of the job depends on.",
    images: [
      IMAGES.rodent,
      IMAGES.gnawedBaseboard,
      IMAGES.mouseAtBaitStation,
      IMAGES.antsOnCounter,
      IMAGES.technicianTreating,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["rodent control", "mice", "rats"],
  },

  // ------------------------------------------------------------------
  {
    slug: "service-cockroach-control",
    family: "service",
    serviceSlug: "cockroach-control",
    pathname: "/services/cockroach-control",
    title: "Cockroach Exterminator Niagara | Falcon Pest Control",
    h1: "Cockroach Control in Niagara, Ontario",
    metaDescription:
      "Cockroach extermination across the Niagara Region. Colony detection, targeted treatment, entry-point sealing and monitoring — typically two to four weeks.",
    formSourceId: "service-cockroach-control",
    intro:
      "Cockroaches are the pest people are most reluctant to call about, and that reluctance is the reason they become difficult. An infestation noticed early is a contained job; one that has been quietly endured for months is not. It is worth saying plainly at the outset: cockroaches are not a verdict on how clean a home is. They arrive in deliveries, in packaging, in second-hand goods and along shared building services, and they persist because of harbourage and moisture rather than untidiness. Falcon's published process runs colony detection, targeted treatment, entry-point sealing and ongoing monitoring, with a typical window of two to four weeks.",
    sections: [
      {
        heading: "Why you only ever see a fraction of them",
        body: "Cockroaches are thigmotactic — they seek surfaces pressing against their bodies on multiple sides — and they are strongly nocturnal. The practical consequence is that the visible population is a small minority of the actual one, and the insects you see in daylight are frequently the ones displaced by crowding. This is why counting sightings is a poor measure of severity and why treating only where they were seen reliably fails. Detection is about finding harbourage rather than individuals: the void behind and beneath kitchen cabinetry, the motor compartments of the fridge and dishwasher, the cavity around plumbing where it passes through a wall, the underside of countertops, and inside the framework of appliances that stay warm.",
      },
      {
        heading: "Moisture is the constraint that matters",
        body: "Cockroaches can survive a long time without food. They cannot survive long without water, and that single fact should direct most of what a householder does between visits. A dripping trap under a sink, condensation on cold pipework, a slow leak behind a dishwasher, a perpetually damp bath mat, a pet water bowl left out overnight — each is a water source that will sustain a population regardless of how spotless the counters are. When we inspect, moisture is the first thing we map, because eliminating it does more to make a property inhospitable than almost anything else available to the occupant.",
      },
      {
        heading: "Why aerosol sprays make the problem worse",
        body: "This is the single most common way a manageable infestation becomes a difficult one. Retail contact aerosols kill the insects they hit and repel the ones they do not, and the ones they do not are the majority. The result is dispersal: a population concentrated in one kitchen void scatters into adjacent voids, along service runs and into neighbouring rooms — or in a multi-unit building, into neighbouring units. What was one treatable focus becomes several, some of them now outside the property entirely. Professional cockroach work generally relies on materials the insects carry back to the harbourage rather than on contact killing, and repellent sprays actively work against that mechanism. If you have already sprayed, tell us — it changes the approach rather than ruining it.",
      },
      {
        heading: "Multi-unit buildings and the limits of treating one unit",
        body: "In an apartment building, cockroaches move between units through wall voids, plumbing chases and the gaps behind cabinetry, which means a thoroughly treated unit sitting next to an untreated one will be recolonised. This matters a great deal in parts of Niagara where apartment stock is concentrated — St. Catharines is 29.6 per cent apartments, Welland 23.4 per cent, Niagara Falls 20.7 per cent and Port Colborne 20.6 per cent. Where our inspection finds evidence that the population extends beyond the unit, we say so directly, because the alternative is a resident paying repeatedly for a treatment that was never capable of holding on its own.",
      },
      {
        heading: "What resolution actually looks like",
        body: "The published window is two to four weeks, and the shape of it is predictable. Activity often appears to increase in the first few days as insects move in response to treatment — that is expected and is not a sign of failure. It then declines. Ongoing monitoring, the fourth stage of our process, exists because the last part of an infestation is the part most likely to be declared over too early: a small surviving group in an unfound harbourage will rebuild, and the interval before that becomes visible again is long enough to be mistaken for success.",
      },
    ],
    benefits: [
      {
        icon: "ScanSearch",
        title: "Harbourage detection",
        description:
          "We find where they live, not where they were seen. The visible population is a small fraction of the real one.",
      },
      {
        icon: "ShieldCheck",
        title: "Targeted, non-repellent approach",
        description:
          "Treatment applied to harbourage and travel routes rather than contact spraying, which scatters a population rather than reducing it.",
      },
      {
        icon: "Home",
        title: "Entry-point sealing",
        description:
          "Stage three of our published process. In attached and multi-unit housing this is what limits movement between spaces.",
      },
      {
        icon: "CalendarClock",
        title: "Monitoring to the end",
        description:
          "The last survivors are what rebuild an infestation. Monitoring is why we do not declare a job finished on the first quiet week.",
      },
    ],
    factTable: {
      caption: "Cockroach control — what we do and how long it takes",
      rows: [
        {
          label: "Typical duration",
          value: "2–4 weeks for complete elimination",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "Stage 1 — Colony detection",
          value: "Identify harbouring areas using professional detection methods",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 2 — Targeted treatment",
          value: "Apply treatments directly to harbourage and high-activity areas",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 3 — Entry-point sealing",
          value: "Block re-entry paths and treat potential access routes",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 4 — Ongoing monitoring",
          value: "Continue monitoring to confirm elimination and prevent recurrence",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Highest apartment share in Niagara",
          value: "St. Catharines 29.6%, Welland 23.4%, Niagara Falls 20.7% — where between-unit spread matters most",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
      ],
    },
    faqs: [
      {
        question: "Does having cockroaches mean my home is dirty?",
        answer:
          "No, and it is worth saying clearly because the embarrassment is what delays most calls. Cockroaches arrive in deliveries, cardboard packaging, second-hand furniture and appliances, and along shared services in attached buildings. What sustains them once they arrive is harbourage and water, not crumbs. Spotless homes get infestations, and the ones that become severe are usually the ones where the occupant waited months before asking for help.",
      },
      {
        question: "Why did I see more of them right after treatment?",
        answer:
          "That is expected in the first few days. Treatment disturbs harbourage and insects move in response, so activity becomes more visible before it drops. What matters is the trend across the following two to four weeks. If activity is still rising after the first week rather than falling, tell us, because that points to an unfound harbourage or a source outside the unit.",
      },
      {
        question: "Should I use a spray from the supermarket in the meantime?",
        answer:
          "Please do not. Contact aerosols are repellent — they kill what they hit and scatter everything they do not, which turns one treatable focus into several spread through adjacent voids and rooms. They also work directly against the non-repellent approach professional treatment relies on. If you have already used one, just tell us; it changes how we sequence the work rather than making it impossible.",
      },
      {
        question: "I live in an apartment. Will treating my unit be enough?",
        answer:
          "It depends on whether the population extends beyond your unit, which is what the inspection establishes. Cockroaches travel between units through wall voids, plumbing chases and cabinetry gaps, so a treated unit next to an untreated one will be recolonised. If we find that pattern we will tell you, so you can put a building-level approach to your landlord or property manager rather than paying for the same treatment repeatedly.",
      },
      {
        question: "What can I do between visits that actually helps?",
        answer:
          "Remove water more than food. Fix dripping taps and traps, dry the sink and shower before bed, lift pet water bowls overnight, and deal with any slow leak behind an appliance. Then reduce harbourage: break down and remove cardboard, which is both shelter and a common way they arrive. Keeping surfaces clean helps, but water is the constraint that decides whether a population persists.",
      },
      {
        question: "How will I know it has actually worked?",
        answer:
          "Sustained absence rather than a quiet week. A small surviving group in an unfound harbourage will rebuild, and the interval before that becomes visible is long enough to be mistaken for success — which is exactly why monitoring is the fourth stage of the process rather than an optional extra. We would rather confirm properly than sign off early and have you call again in two months.",
      },
    ],
    ctaHeading: "Book cockroach control",
    ctaBody:
      "Tell us where you have seen them, what time of day, and whether the property is a house or a unit in a larger building. Those three answers shape the whole approach.",
    images: [
      IMAGES.antCockroach,
      IMAGES.cockroachesInCabinet,
      IMAGES.cleanKitchen,
      IMAGES.general,
      IMAGES.antsOnCounter,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["cockroach control", "cockroaches"],
  },

  // ------------------------------------------------------------------
  {
    slug: "service-ant-control",
    family: "service",
    serviceSlug: "ant-control",
    pathname: "/services/ant-control",
    title: "Ant Control Niagara | Carpenter Ant Exterminator",
    h1: "Ant & Carpenter Ant Control in Niagara",
    metaDescription:
      "Ant and carpenter ant control across Niagara. Colony detection, targeted treatment, entry sealing and monitoring — typically two to four weeks to full control.",
    formSourceId: "service-ant-control",
    intro:
      "Ant problems divide cleanly into two kinds, and confusing them wastes a great deal of time. Nuisance ants are foraging for food and are a hygiene and irritation problem. Carpenter ants excavate wood to nest and are a structural one. They need different responses, they signal different underlying issues, and on the Niagara escarpment and through the wooded parts of the region the second kind is considerably more common than most homeowners realise. Falcon's published process for this service is colony detection, targeted treatment, entry-point sealing and ongoing monitoring, with a typical window of two to four weeks.",
    sections: [
      {
        heading: "Telling carpenter ants from the rest",
        body: "Carpenter ants are noticeably larger than the small ants that trail across a kitchen counter, usually dark, and more often seen singly than in a dense column. The more reliable evidence is not the insect but the debris. Carpenter ants do not eat wood; they excavate it, and they push the resulting material out of the gallery as a fine sawdust-like substance called frass, often mixed with fragments of dead insects. A small accumulating pile of it below a window frame, a door frame or a ceiling edge is a strong indicator of an active nest above or behind that point. Winged individuals appearing indoors in spring indicate a mature colony producing reproductives, not a few strays that wandered in.",
      },
      {
        heading: "Why they chose your building, and what to fix",
        body: "Carpenter ants strongly prefer wood that moisture has already softened. That means a carpenter ant problem is very often a water problem wearing a different costume, and treating the insects while leaving the water in place produces a temporary result at best. The locations are consistent enough to check directly: below a gutter that overflows or is blocked, at a roof edge that ice-dams in winter, around a window or door where sealant has failed, at a deck ledger board bolted to the house, at a sill plate behind damaged or gapped siding, and wherever a downspout discharges against the foundation rather than away from it. We will point out what we find even where the repair is not work we carry out ourselves, because it is the difference between solving this and repeating it.",
      },
      {
        heading: "Parent colonies, satellites, and why the trail matters",
        body: "A mature carpenter ant colony often operates as a parent nest — typically outdoors in genuinely decayed wood such as a stump, standing deadwood or a fallen limb — plus one or more satellite nests, which can sit quite happily inside a heated structure in wood that is not decayed at all. This is why finding and treating a single indoor nest sometimes fails to end the problem, and why we follow trails outward rather than treating only where activity was reported. In escarpment communities such as Grimsby and in the wooded lots around Fonthill, the parent colony is frequently within metres of the building, which is precisely why the pattern is so persistent there.",
      },
      {
        heading: "Nuisance ants and the mistake of spraying the trail",
        body: "For pavement ants and similar species trailing indoors for food, the instinctive response — spraying the visible line — is close to the least effective option available. It kills foragers, which are the most expendable members of a colony and are readily replaced, while leaving the nest and its queen entirely untouched. It can also fragment some colonies into multiple nesting sites, which multiplies the problem. Effective treatment works with the trail rather than against it, using the foragers' own behaviour to carry material back to the nest. It is slower to look impressive and far more likely to actually end the infestation.",
      },
      {
        heading: "Seasonality across the region",
        body: "Ant activity rises with warmth and follows moisture. Spring brings the first foraging and, for mature carpenter ant colonies, the winged reproductives that alarm homeowners most. Sustained summer dry spells push ants indoors looking for water, which is why a hot July often produces kitchen trails in properties that had none in June. Autumn rain and the first cold nights drive activity back toward shelter. In wooded and escarpment communities the carpenter ant pattern dominates; in denser urban areas smaller nuisance species trailing from pavement and foundation cracks are more typical.",
      },
    ],
    benefits: [
      {
        icon: "ScanSearch",
        title: "Colony detection, not trail spraying",
        description:
          "We identify trails and nesting sites and work back to the colony. Killing foragers achieves very little on its own.",
      },
      {
        icon: "Leaf",
        title: "We find the moisture behind it",
        description:
          "Carpenter ants target water-softened wood. Treatment without the repair leaves the building just as attractive next season.",
      },
      {
        icon: "Home",
        title: "Entry-point sealing",
        description:
          "Stage three of the published process — blocking re-entry routes and treating potential access paths.",
      },
      {
        icon: "CalendarClock",
        title: "Monitoring for satellite nests",
        description:
          "A parent colony outdoors can seed new satellites indoors. Monitoring is what catches the second nest.",
      },
    ],
    factTable: {
      caption: "Ant and carpenter ant control — what we do and how long it takes",
      rows: [
        {
          label: "Typical duration",
          value: "2–4 weeks for complete elimination",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "Stage 1 — Colony detection",
          value: "Identify ant trails and harbouring areas using professional detection methods",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 2 — Targeted treatment",
          value: "Apply colony-eliminating treatments to nests and high-activity areas",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 3 — Entry-point sealing",
          value: "Block re-entry paths and treat potential access routes",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Key carpenter ant sign",
          value: "Frass — fine sawdust-like excavation debris below a frame or ceiling edge",
          source: "General carpenter ant biology",
        },
        {
          label: "Why they chose the wood",
          value: "Carpenter ants excavate wood softened by moisture; they do not eat it",
          source: "General carpenter ant biology",
        },
      ],
    },
    faqs: [
      {
        question: "How do I tell carpenter ants from ordinary ants?",
        answer:
          "Size and behaviour give a first indication — carpenter ants are noticeably larger, usually dark, and more often seen individually than in a dense trail. The decisive sign is frass: a fine sawdust-like material, sometimes mixed with insect fragments, accumulating below a window frame, door frame or ceiling edge. That points to an active nest above or behind that spot. Winged ants indoors in spring indicate a mature colony rather than strays.",
      },
      {
        question: "Do carpenter ants eat the wood in my house?",
        answer:
          "No. They excavate it to create galleries and push the debris out, which is why you find frass rather than nothing. That distinction does not make them harmless — sustained excavation in structural timber causes real damage over time — but it does mean the damage develops more slowly than people fear, and that catching it early genuinely matters.",
      },
      {
        question: "Will treatment stop them coming back?",
        answer:
          "Only if the moisture problem is addressed as well. Carpenter ants seek wood that water has already softened, so an overflowing gutter, an ice-damming roof edge, failed window sealant or a downspout discharging against the foundation will keep the structure attractive no matter how effective the treatment was. We will tell you what we find even where the repair is not something we carry out.",
      },
      {
        question: "Why not just spray the trail I can see?",
        answer:
          "Because foragers are the most replaceable members of a colony, and killing them leaves the nest and queen untouched. With some species, repellent sprays can also fragment a colony into several nesting sites, which makes the problem larger rather than smaller. Effective treatment uses the foragers to carry material back to the nest — less dramatic to watch, far more likely to end it.",
      },
      {
        question: "I only see them in spring and summer. Are they gone in winter?",
        answer:
          "Not necessarily. A colony nesting inside a heated building can remain active through winter, and mid-winter sightings usually indicate an indoor nest rather than something that wandered in from outside. Seeing them in January is worth mentioning specifically, because it changes where we look.",
      },
      {
        question: "Are ants worse in some parts of Niagara than others?",
        answer:
          "Carpenter ants are noticeably more prevalent where mature woodland sits close to housing — the escarpment communities such as Grimsby, and well-treed areas like Fonthill and the Pelham lots. Woodland supplies the decayed standing timber and fallen limbs that parent colonies need, and satellite nests move into nearby structures from there. In denser urban areas, smaller nuisance species trailing from pavement and foundation cracks are the more common pattern.",
      },
    ],
    ctaHeading: "Book ant or carpenter ant control",
    ctaBody:
      "If you have found sawdust-like debris anywhere, or seen large dark ants indoors, mention it when you call. It usually means an active nest and tells us where to start looking.",
    images: [
      IMAGES.cockroachesInCabinet,
      IMAGES.antCockroach,
      IMAGES.antsOnCounter,
      IMAGES.fouledDoorFrame,
      IMAGES.general,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["ant control", "carpenter ants"],
  },

  // ------------------------------------------------------------------
  {
    slug: "service-spider-control",
    family: "service",
    serviceSlug: "spider-control",
    pathname: "/services/spider-control",
    title: "Spider Control Niagara | Falcon Pest Control",
    h1: "Spider Control in Niagara, Ontario",
    metaDescription:
      "Spider control across the Niagara Region. Web and egg sac removal, targeted treatment and preventative maintenance — typically two to three weeks to full control.",
    formSourceId: "service-spider-control",
    intro:
      "Spider control is the service most often misunderstood, because the spiders are usually a symptom rather than the cause. Spiders settle where there is reliable prey, which means a property with a persistent spider problem generally has a persistent insect problem that has not been noticed. Any treatment that ignores that will be undone within a season. Falcon's published process for this service is web identification, web and egg sac removal, treatment application and preventative maintenance, with a typical window of two to three weeks.",
    sections: [
      {
        heading: "Why removing egg sacs matters more than removing spiders",
        body: "A single egg sac can contain dozens to hundreds of eggs depending on species, which means leaving sacs in place while removing the adults you can see is close to pointless — the population simply replaces itself on its own schedule. This is why our published process lists web and egg sac removal as a distinct stage rather than folding it into general cleaning. It is painstaking work and it is done by hand: soffit and eave junctions, window frames and reveals, porch and entry ceilings, garage corners and rafters, deck undersides, exterior light fittings, and the sheltered angles where a wall meets a roofline. Those are the places a physical removal pass has to reach if it is going to change anything.",
      },
      {
        heading: "Exterior lighting is doing most of the work",
        body: "This is the highest-leverage change most homeowners can make and it costs almost nothing. White and blue-toned exterior lights attract flying insects in quantity all night; spiders build where insects reliably gather, which is exactly why webs concentrate around porch lights, garage lights and illuminated entryways. Switching to warm-toned lighting, moving fixtures away from doorways, or fitting motion activation so lights are not burning continuously reduces the prey concentration that made those spots attractive in the first place. We raise it on almost every spider job, because a treatment applied to a wall beneath a light that runs all night is working against a supply line that never stops.",
      },
      {
        heading: "What actually reduces the population",
        body: "Beyond the light source, three things change the picture. Reduce the harbourage — stacked firewood against a wall, undisturbed clutter in garages and sheds, dense planting touching the siding, and material stored directly against the foundation all provide the sheltered, undisturbed spaces spiders prefer. Reduce the prey — if there is a standing insect problem, treating it removes the reason spiders settled. And maintain the physical removal, because webs rebuilt over weeks in the same favoured spots are a signal that the underlying conditions have not changed, not that the treatment failed. Preventative maintenance is the fourth stage of our process for that reason.",
      },
      {
        heading: "What lives here, and being straight about risk",
        body: "The great majority of spiders found in and around Niagara homes are harmless nuisance species. They are unnerving, they leave webbing across doorways and window corners, and their presence indicates an insect population worth investigating — but they are not dangerous. We do not think it is useful to trade on fear about species identification, and we will not. If you are worried about a specific spider you have found, photograph it if you safely can and describe where it was; that is far more productive than either guessing from a web or reading a list of worst cases.",
      },
      {
        heading: "Seasonal timing",
        body: "Spider visibility peaks in late summer and early autumn. This is partly growth — individuals that hatched in spring reach full size — and partly behaviour, as males become more mobile searching for mates and are therefore more often seen indoors. Cooling weather then pushes activity toward buildings. The most effective time for a preventative treatment is before that peak rather than during it, which means a late-spring or early-summer visit generally produces a better autumn than a call placed in September when webs are already established across every eave.",
      },
    ],
    benefits: [
      {
        icon: "ScanSearch",
        title: "Web and harbourage mapping",
        description:
          "We identify where webs concentrate and why. Web location tells you where the prey is, which is the actual problem.",
      },
      {
        icon: "Sparkles",
        title: "Hand removal of webs and egg sacs",
        description:
          "A sac can hold dozens to hundreds of eggs. Removing adults while leaving sacs in place just delays the same population.",
      },
      {
        icon: "Sun",
        title: "Lighting and prey advice",
        description:
          "Exterior lighting concentrates the insects spiders feed on. Changing it is the cheapest durable improvement available to most properties.",
      },
      {
        icon: "CalendarClock",
        title: "Preventative maintenance",
        description:
          "Stage four of the published process. Rebuilt webs mean conditions have not changed, and that is what maintenance addresses.",
      },
    ],
    factTable: {
      caption: "Spider control — what we do and how long it takes",
      rows: [
        {
          label: "Typical duration",
          value: "2–3 weeks for complete control",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "Stage 1 — Web identification",
          value: "Locate all webs and identify high-traffic spider zones",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 2 — Web & egg sac removal",
          value: "Manual removal of webs and egg sacs to eliminate future populations",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 3 — Treatment application",
          value: "Targeted treatment to prevent new spiders settling",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 4 — Preventative maintenance",
          value: "Regular inspection and treatment to maintain control",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Peak visibility",
          value: "Late summer to early autumn, as spring-hatched individuals mature and males become mobile",
          source: "General spider biology",
        },
      ],
    },
    faqs: [
      {
        question: "Why do I get so many spiders around my porch light?",
        answer:
          "Because the light is doing the recruiting. White and blue-toned exterior lights attract flying insects all night, and spiders build webs where prey reliably gathers. Switching to warm-toned bulbs, relocating fixtures away from doorways, or fitting motion activation so the light is not on continuously will do more to reduce webbing around an entrance than repeatedly clearing it.",
      },
      {
        question: "Are the spiders in my Niagara home dangerous?",
        answer:
          "The overwhelming majority of species found in and around homes here are harmless nuisance spiders. They are unpleasant to walk into and their webbing is unsightly, but they are not a health threat. If a particular spider concerns you, photograph it if you can do so safely and tell us where it was found — that is far more useful than identifying from a web or working through a list of worst cases.",
      },
      {
        question: "The webs came back after a few weeks. Did the treatment fail?",
        answer:
          "Usually it means the conditions that attracted them have not changed rather than that the treatment did not work. Webs rebuilt in the same favoured spots point to a continuing prey supply — very often exterior lighting, sometimes a standing insect problem elsewhere on the property. That is exactly what the preventative maintenance stage exists to address, and it is worth telling us where the webs returned, because the location is diagnostic.",
      },
      {
        question: "Do I actually need treatment, or can I just knock the webs down?",
        answer:
          "Clearing webs helps and is worth doing, but on its own it is maintenance rather than control — particularly if egg sacs are being left in place, since a single sac can hold dozens to hundreds of eggs. Physical removal combined with treatment and a change to the conditions is what shifts the population rather than resetting the clock.",
      },
      {
        question: "When is the best time to book?",
        answer:
          "Before the late-summer peak rather than during it. A late-spring or early-summer preventative visit generally produces a much better autumn than a call made in September when webs are already established across every eave and soffit. If you already have a problem now, we will still treat it — but if you are planning ahead, earlier is better.",
      },
      {
        question: "What should I clear before you arrive?",
        answer:
          "Make the exterior perimeter accessible — move stored items away from walls, clear space around the garage and shed, and make sure porch and entry ceilings can be reached. If the concern is inside a garage or basement, clearing a working path around the walls makes a real difference to how thoroughly the removal stage can be done.",
      },
    ],
    ctaHeading: "Book spider control",
    ctaBody:
      "Tell us where the webs are concentrated — around lights, in the garage, along the soffits. Where they are tells us a great deal about why they are there.",
    images: [
      IMAGES.spider,
      IMAGES.spiderOnWeb,
      IMAGES.antsOnCounter,
      IMAGES.general,
      IMAGES.fouledDoorFrame,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["spider control", "spiders"],
  },

  // ------------------------------------------------------------------
  {
    slug: "service-general-pest-control",
    family: "service",
    serviceSlug: "general-pest-control",
    pathname: "/services/general-pest-control",
    title: "General Pest Control Niagara | Falcon Pest Control",
    h1: "General Pest Control in Niagara, Ontario",
    metaDescription:
      "General pest control across the Niagara Region for ants, roaches, silverfish and other common household pests. Inspection, tailored plan, application and follow-up.",
    formSourceId: "service-general-pest-control",
    intro:
      "General pest control is the right service when the problem is not a single identified species but a property that keeps producing them. It covers ants, cockroaches, silverfish and the other common household pests together, and it is built around the property rather than around one insect. Falcon's published process is inspection, a treatment plan tailored to your specific issues and property size, application, and follow-up, with a typical window of three to five weeks for complete elimination — longer than a single-pest job, because it is doing more.",
    sections: [
      {
        heading: "When general treatment is the right choice",
        body: "There are three situations where it makes more sense than a targeted service. The first is genuine uncertainty: you are seeing insects but cannot identify them confidently, and treating for the wrong species wastes a visit. The second is multiple simultaneous problems, which is common in older properties where the same structural and moisture conditions favour several pests at once — silverfish in a damp basement, ants at a failed window seal, and the occasional cockroach arriving in packaging are not three coincidences so much as three symptoms. The third is a property you have just taken on, where you want a baseline established before problems announce themselves.",
      },
      {
        heading: "The inspection is the part that earns its keep",
        body: "Because this service is not aimed at one species, the inspection is broader and more consequential than for a targeted job. We are looking for conditions rather than individuals: where moisture is accumulating, where the structure is open at grade, where clutter and stored material create undisturbed harbourage, how vegetation and stored goods sit against the exterior wall, and where food sources are accessible. The treatment plan comes out of that, tailored to what the property actually presents rather than to a standard specification. It is also where we tell you which parts of the problem are ours to solve and which are structural or behavioural and therefore yours.",
      },
      {
        heading: "Silverfish, and what they tell you",
        body: "Silverfish deserve specific mention because they are so frequently dismissed. They need high humidity to thrive, so a silverfish population is a reliable indicator of a moisture problem — usually a basement, bathroom or crawl space with inadequate ventilation or a slow undetected leak. They feed on starches and cellulose, which makes stored cardboard, books, paper and natural textiles vulnerable. Treating silverfish while the humidity that supports them stays unchanged is a temporary measure by definition, so on a general pest programme we treat them as a diagnostic signal as much as a target: they are pointing at something.",
      },
      {
        heading: "Why the window is three to five weeks",
        body: "A single-species job can move quickly because everything is aimed at one biology and one set of harbourage sites. A general programme is addressing several life cycles at once, and the slowest of them sets the pace. Some pests are dealt with in the first pass; others need a second, either because eggs present at the first visit had not yet hatched or because the material has to be carried back to a nest over time. Follow-up is the fourth stage of the published process for that reason. A programme declared finished after one application is one that has treated the adults present on the day.",
      },
      {
        heading: "What you can change that treatment cannot",
        body: "Some of the biggest improvements are not treatments at all. Reducing humidity in basements and bathrooms removes the condition silverfish and several other pests depend on. Removing cardboard storage takes away both harbourage and a common arrival route. Establishing a clear, dry band around the building exterior — no firewood against the wall, no dense planting touching the siding, no mulch banked against the foundation — removes covered approach. Sealing the gaps found at inspection is what stops the property being re-entered. We will always tell you which of these apply to your property, because a treatment working against unchanged conditions is a treatment that has to be repeated.",
      },
    ],
    benefits: [
      {
        icon: "ScanSearch",
        title: "Whole-property inspection",
        description:
          "We look for the conditions producing pests — moisture, harbourage, entry points — rather than only the insects currently visible.",
      },
      {
        icon: "ClipboardCheck",
        title: "A plan built for your property",
        description:
          "The published process specifies a strategy tailored to your specific issues and property size, not a standard package applied to everyone.",
      },
      {
        icon: "Bug",
        title: "Several pests at once",
        description:
          "Ants, cockroaches, silverfish and other common household pests handled together, which is usually what an older property actually needs.",
      },
      {
        icon: "CalendarClock",
        title: "Follow-up built in",
        description:
          "Three to five weeks reflects several overlapping life cycles. A single application treats only what was present on the day.",
      },
    ],
    factTable: {
      caption: "General pest control — what we do and how long it takes",
      rows: [
        {
          label: "Typical duration",
          value: "3–5 weeks for complete elimination",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "Stage 1 — Inspection",
          value: "Thorough examination to identify entry points and infestation levels",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 2 — Treatment plan",
          value: "Strategy tailored to your specific pest issues and property size",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 3 — Application",
          value: "Targeted treatment of affected areas and preventative zones",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Stage 4 — Follow-up",
          value: "Monitoring and follow-up treatment to ensure complete elimination",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Covers",
          value: "Ants, cockroaches, silverfish and other common household pests",
          source: "Falcon Pest Control published service information",
        },
      ],
    },
    faqs: [
      {
        question: "Should I book general pest control or a specific service?",
        answer:
          "Choose the targeted service when you know what you are dealing with — a clear rodent problem, an identified cockroach infestation, carpenter ants with visible frass. Choose general pest control when you are seeing several different things, when you cannot identify what you have, or when you have just taken on a property and want a baseline. If you are unsure, describe what you have seen when you call and we will tell you which fits.",
      },
      {
        question: "Why does it take three to five weeks?",
        answer:
          "Because it is addressing several life cycles at once and the slowest one sets the pace. Some pests are resolved in the first pass; others need a second, either because eggs present at the first visit had not hatched or because treatment has to be carried back to a nest over time. That is why follow-up is a named stage of the process rather than an optional extra.",
      },
      {
        question: "I keep getting silverfish. What does that mean?",
        answer:
          "Almost always a humidity problem. Silverfish need high moisture to thrive, so a persistent population points to a basement, bathroom or crawl space with poor ventilation or a slow leak. They feed on starches and cellulose, which puts stored cardboard, books, paper and natural textiles at risk. Treating them without reducing the humidity is temporary by definition — they are a signal worth acting on.",
      },
      {
        question: "Is it safe around children and pets?",
        answer:
          "Falcon's published position is that treatments are family and pet friendly and use industry-leading, low-impact products. Tell us about pets before the visit — including birds and fish, which have specific sensitivities — and about anyone in the household with respiratory conditions or allergies, so the approach and any re-entry guidance account for them.",
      },
      {
        question: "What should I do before the first visit?",
        answer:
          "Clear access to the areas of concern: under sinks, along basement walls, around the perimeter of rooms, and inside kitchen cabinetry if that is where activity is. Avoid using retail sprays beforehand, since they commonly scatter populations into adjacent voids and make targeted treatment slower. And make a note of when and where you see activity — timing and location are genuinely useful diagnostic information.",
      },
      {
        question: "Will one treatment be enough?",
        answer:
          "Occasionally, for a small and contained problem. More often it will not be, which is why the published window is three to five weeks and why follow-up is built into the process. We would rather set that expectation at the outset than have you assume a single visit ends it and conclude the treatment failed when activity reappears in week two.",
      },
    ],
    ctaHeading: "Book general pest control",
    ctaBody:
      "Describe everything you have noticed, even the things that seem unrelated. On a general programme the pattern across several small observations is usually what identifies the underlying cause.",
    images: [
      IMAGES.general,
      IMAGES.antsOnCounter,
      IMAGES.cleanKitchen,
      IMAGES.cockroachesInCabinet,
      IMAGES.gnawedBaseboard,
      IMAGES.technicianTreating,
    ],
    related: [],
    entities: ["general pest control", "silverfish"],
  },

  // ------------------------------------------------------------------
  {
    slug: "service-quarterly-pest-control",
    family: "service",
    serviceSlug: "quarterly-pest-control",
    pathname: "/services/quarterly-pest-control",
    title: "Quarterly Pest Control Plans Niagara | Falcon",
    h1: "Quarterly Pest Control Plans in Niagara",
    metaDescription:
      "Seasonal and quarterly pest protection plans across Niagara. Property assessment, a prevention schedule, regular treatments and adjustment as pest pressure changes.",
    formSourceId: "service-quarterly-pest-control",
    intro:
      "A preventive plan is worth having when the pressure on a property is continuous rather than occasional — and it is genuinely not worth having when it is not. We would rather say that plainly than put every customer on a recurring schedule. Falcon's published preventive service runs on four stages: property assessment, a prevention plan built around seasonal pest activity, regular treatments on a quarterly or monthly schedule, and monitoring with adjustment as pressure changes. This page also covers the one-time option, because choosing between them is the actual decision most people are trying to make.",
    sections: [
      {
        heading: "Who genuinely benefits from a recurring plan",
        body: "Four situations justify it. Properties on an agricultural edge, where harvest and cultivation displace field populations toward buildings every year on a predictable calendar — much of Lincoln, Pelham, Niagara-on-the-Lake and the rural concessions. Properties bordering woodland or an escarpment slope, where carpenter ants and other woodland species have a permanent nearby source. Properties adjacent to a waterway, canal margin or industrial edge, where water, shelter and food waste sustain populations regardless of anything done on your own lot. And properties with a history of recurrence, where the same problem has returned more than once despite treatment. In each case the defining feature is that the source is external, permanent, and outside your control.",
      },
      {
        heading: "Who does not need one",
        body: "A detached house in a settled residential area, with no adjacent woodland, farmland or waterway, that has had one contained problem dealt with properly and sealed afterwards, usually does not need a recurring plan. Putting that property on a quarterly schedule is selling a subscription against a risk that is not there. When our assessment says that, we will tell you, and recommend a one-time treatment with proper follow-up instead. It is a smaller sale and it is the honest recommendation, and we would rather have it on record here than have you discover it after twelve months of visits.",
      },
      {
        heading: "What the seasonal calendar actually looks like in Niagara",
        body: "A plan built around real seasonality does different work at different points in the year rather than repeating the same visit four times. Spring is when ant activity resumes and mature carpenter ant colonies produce the winged reproductives that appear indoors, so the emphasis is on early colony detection before nests establish. Summer is peak general insect activity, and sustained dry spells push ants and other pests indoors looking for water. Late summer into early autumn is the spider peak, as spring-hatched individuals mature. Autumn is the critical one: falling temperatures drive rodents to test structures for warmth, and in agricultural areas harvest displaces field populations in waves — which makes exterior sealing before that window the highest-value work in the year. Winter shifts attention indoors, to activity in heated structures and to the overwintering populations already inside wall voids.",
      },
      {
        heading: "One-time versus ongoing, decided honestly",
        body: "Falcon publishes both options, and the choice should follow the assessment rather than a default. A one-time treatment suits a contained, identified problem in a property without continuing external pressure — you deal with it, seal it, and that is the end of it. An ongoing plan suits properties where the pressure returns on a schedule whatever you do. The published one-time process is consultation, plan selection, service delivery, and support with follow-up; the ongoing option provides continuous coverage across the year. What we will not do is recommend the recurring option because it is the recurring option.",
      },
      {
        heading: "What monitoring and adjustment means in practice",
        body: "The fourth stage of the preventive process is monitoring and adjustment, and it is the part that distinguishes a plan from a repeated appointment. Pest pressure is not constant year to year. A new development next door changes it. A neighbouring property clearing land changes it. A wet spring or an unusually mild autumn changes it. A plan that runs the same four visits regardless of what is actually happening is not preventive; it is a subscription. Adjustment means the schedule and the emphasis respond to what monitoring finds, which is the whole reason for monitoring in the first place.",
      },
    ],
    benefits: [
      {
        icon: "ClipboardCheck",
        title: "Assessment before commitment",
        description:
          "We evaluate the property's actual vulnerability first. If a recurring plan is not warranted, we will say so and recommend a one-time treatment.",
      },
      {
        icon: "CalendarClock",
        title: "Built on seasonal reality",
        description:
          "Spring colony detection, summer activity, the autumn rodent window. Four different visits, not the same visit four times.",
      },
      {
        icon: "Sparkles",
        title: "Regular treatment",
        description:
          "Quarterly or monthly, as the property warrants — the published process specifies a schedule set by seasonal pest activity.",
      },
      {
        icon: "ShieldCheck",
        title: "Monitored and adjusted",
        description:
          "Pressure changes when a neighbouring site is developed or a season runs unusually. The schedule should respond to that.",
      },
    ],
    factTable: {
      caption: "Preventive and one-time options compared",
      rows: [
        {
          label: "Preventive — duration",
          value: "Ongoing year-round protection",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "Preventive — schedule",
          value: "Quarterly or monthly, set by seasonal pest activity at your property",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Preventive — stages",
          value: "Property assessment, prevention plan, regular treatments, monitoring and adjustment",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "One-time — duration",
          value: "About one week for a one-time treatment; ongoing plans provide continuous coverage",
          source: "Falcon Pest Control published service information",
        },
        {
          label: "One-time — stages",
          value: "Consultation, plan selection, service delivery, support and follow-up",
          source: "Falcon Pest Control published service process",
        },
        {
          label: "Best candidates for a plan",
          value: "Properties on agricultural, woodland, waterway or industrial edges, or with a history of recurrence",
          source: "Falcon Pest Control assessment criteria",
        },
      ],
    },
    faqs: [
      {
        question: "Do I actually need a quarterly plan?",
        answer:
          "Often not, and we will tell you when that is the case. A recurring plan earns its cost where external pressure is continuous — an agricultural edge, adjacent woodland, a waterway or industrial margin, or a documented history of the same problem returning. A detached house in a settled residential area that has had one contained problem dealt with and sealed usually does not need one. The assessment is what decides it, not a default.",
      },
      {
        question: "What is the difference between quarterly and monthly?",
        answer:
          "Frequency, set by the pressure the property faces. Quarterly aligns with the four seasonal windows and suits most properties that need ongoing coverage. Monthly is appropriate where pressure is unusually high or continuous — some commercial settings, or a property directly against a persistent external source. The published process sets the schedule from the property assessment rather than from a price list.",
      },
      {
        question: "What happens on each visit?",
        answer:
          "Different things at different points in the year, which is the point. Spring focuses on early colony detection before ant and carpenter ant nests establish. Summer addresses peak general activity. Autumn concentrates on exterior sealing and rodent exclusion ahead of the cold-weather move indoors. Winter shifts to indoor activity and overwintering populations. A plan that repeats an identical visit four times is not preventive.",
      },
      {
        question: "Can I switch from a one-time treatment to a plan later?",
        answer:
          "Yes, and that is frequently the sensible order. Deal with the immediate problem first, see whether it recurs, and decide from evidence rather than prediction. If the same issue returns after proper treatment and sealing, that is genuine information about continuing external pressure — and it is a much better basis for committing to a plan than a guess made on day one.",
      },
      {
        question: "Which month is best to start?",
        answer:
          "Late summer or early autumn, if you are choosing freely. That places the first significant preventive work just ahead of the autumn window when falling temperatures drive rodents to test structures and, in agricultural areas, harvest displaces field populations toward buildings. Exterior sealing done before that window is worth considerably more than the same work done during it.",
      },
      {
        question: "Does a plan cover every kind of pest?",
        answer:
          "It covers the services Falcon offers — general household pests, rodents, spiders, ants and cockroaches, and preventive treatment. It does not cover services we do not publish. If you need something specific, ask us directly and we will give you a straight answer about whether it is something we handle rather than folding it into a plan and hoping.",
      },
    ],
    ctaHeading: "Ask whether a plan is worth it for your property",
    ctaBody:
      "Tell us what borders the property — farmland, woodland, a waterway, an industrial site — and whether a problem has returned before. Those answers usually settle the question.",
    images: [
      IMAGES.technicianTreating,
      IMAGES.fouledDoorFrame,
      IMAGES.general,
      IMAGES.cleanUnderSink,
      IMAGES.antsOnCounter,
      IMAGES.protectionDiagram,
    ],
    related: [],
    entities: ["quarterly pest control", "preventive treatments"],
  },
];

export default servicePages;
