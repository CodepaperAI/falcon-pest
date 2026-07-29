// CITY LANDING PAGES
//
// ============================ ALLOWED FACTS ============================
// - Anything Falcon already publishes: the six services and their four-step
//   process, stated treatment durations, phone, email, address, hours.
// - Statistics Canada 2021 Census figures via ./facts (each carries a DGUID).
// - OSRM road distances from the Niagara Falls base via ./facts.
// - Published Government of Ontario and municipal sources, cited inline.
// - Plain arithmetic on any of the above.
// - General pest biology attributable to extension/university entomology.
//
// ============================ BANNED CLAIMS ============================
// Do NOT write any of these until the client confirms them IN WRITING. Each is
// a capability, credential or price Falcon has not published. Writing around a
// gap ("ask our team about X") is always correct; inventing one is not.
//
//   1. Bed bug treatment of any kind, and heat treatment specifically
//   2. Wasp / hornet nest removal
//   3. Flea treatment
//   4. Wildlife removal (raccoons, squirrels, bats) — separate Ontario licence
//   5. The Ontario exterminator licence number
//   6. Years in business, number of technicians, insurance/WSIB
//   7. Any price, and whether inspections or quotes are free
//   8. What "The Falcon Promise" actually guarantees
//   9. Emergency / same-day / weekend availability
//  10. Specific products or active ingredients used
//  11. Termite, mosquito, tick or bird work
//
// The site says "Licensed Professionals" but publishes no licence number, so
// these pages say Falcon is licensed ONLY where the client's own site already
// says it, and never cite a number.

import { LandingPage } from "./types";
import { IMAGES } from "./images";
import { cityFacts } from "./facts";

/** Formats the drive line consistently. Distance leads because it is stable;
 *  time is a range because OSRM excludes traffic. */
function travel(slug: string): string {
  const f = cityFacts[slug];
  if (!f || f.driveKm == null || f.driveMinutes == null) return "";
  const lo = Math.max(5, Math.round((f.driveMinutes * 0.85) / 5) * 5);
  const hi = Math.round((f.driveMinutes * 1.35) / 5) * 5;
  return `${f.driveKm} km from our Niagara Falls base — roughly ${lo}–${hi} minutes depending on traffic`;
}


export const cityPages: LandingPage[] = [
  // ------------------------------------------------------------------
  {
    slug: "city-st-catharines",
    family: "city",
    citySlug: "st-catharines",
    pathname: "/pest-control/st-catharines",
    title: "Pest Control St. Catharines, ON | Falcon Pest Control",
    h1: "Pest Control in St. Catharines, Ontario",
    metaDescription:
      "Licensed pest control in St. Catharines, Ontario. Rodents, cockroaches, ants and spiders treated in houses, student rentals and apartment buildings across the city.",
    formSourceId: "city-st-catharines",
    intro:
      "St. Catharines is the largest city in the Niagara Region and, by some distance, its most densely built. The 2021 Census counted 136,803 residents living at 1,422 people per square kilometre — more than three times the density of Niagara Falls and roughly thirty-five times that of rural West Lincoln. That density is the single most useful thing to understand about pest control here, because it changes what treating a property actually involves. Falcon Pest Control works across St. Catharines from our base in Niagara Falls, and the approach we take on a Port Dalhousie semi is not the approach we take in a downtown low-rise.",
    sections: [
      {
        heading: "Why St. Catharines has a different pest problem than the rest of Niagara",
        body: "Just under thirty per cent of St. Catharines households — 29.6 per cent of 58,905 — live in apartments. That is the highest share of any municipality in the Niagara Region, and it matters enormously. In a detached house, an infestation is a closed problem: find the entry point, treat it, seal it, done. In a multi-unit building, the same infestation is a shared problem. Cockroaches and mice move through wall voids, along plumbing chases and behind kitchen cabinetry, so a unit that has never seen a pest can be reinfested from two doors down within weeks of a treatment. Treating a single unit in a building with an active population is, in most cases, money spent to buy a few quiet weeks. This is why we ask early on whether a property is attached to others, and why our recommendations for apartment residents differ from those we give homeowners.",
      },
      {
        heading: "Student rentals and the September cycle",
        body: "Brock University sits on the Niagara Escarpment at the south end of the city, and the rental stock that serves it turns over on a predictable annual cycle. Late August and September concentrate an unusual amount of movement into a few weeks: furniture changing hands, mattresses and couches moving between addresses, belongings stored over the summer and unpacked into a new unit. Any pest that travels in soft furnishings travels efficiently under those conditions. Landlords and property managers who schedule an inspection into the turnover window — between one tenancy ending and the next beginning, when the unit is empty and accessible — get a far better result than those who wait for a complaint in October. An empty unit can be inspected properly, treated thoroughly, and sealed without working around anyone's belongings.",
      },
      {
        heading: "Older housing stock and how pests actually get in",
        body: "St. Catharines has 61,977 private dwellings, and a substantial part of that stock predates modern construction sealing standards. Mice need a gap of about six millimetres to pass through — roughly the diameter of a pencil — and older masonry, settled foundations, and the service penetrations cut for gas, water and cable all tend to offer them. The places we check first in an older St. Catharines home are consistent: where the gas line enters, around the dryer vent, beneath the sill plate at grade, at the base of exterior basement stairs, and wherever a porch or addition meets the original structure. Sealing those gaps is often more durable than any treatment applied inside, because it addresses how the animal is arriving rather than the fact that it has arrived.",
      },
      {
        heading: "What a Falcon visit to a St. Catharines property involves",
        body: "Every job follows the same four steps: inspection, a treatment plan built for the property, application, and follow-up. The inspection is the part that varies most by address. On a detached house we spend most of the time on the exterior, because that is where the problem usually starts. In an apartment we spend it on shared walls, the kitchen, and any point where services pass between units, because that is where movement between units happens. The plan that comes out of it says plainly what we found, what we intend to do, and what you will need to do — because in most infestations there is something only the occupant can do, whether that is a storage change, a repair, or simply keeping a space accessible between visits.",
      },
    ],
    benefits: [
      {
        icon: "Building2",
        title: "Multi-unit experience",
        description:
          "With the highest apartment share in Niagara, St. Catharines needs a building-level approach. We will tell you honestly when treating one unit alone is unlikely to hold.",
      },
      {
        icon: "ClipboardCheck",
        title: "Turnover-window scheduling",
        description:
          "An empty unit between tenancies is the easiest unit to treat properly. We work with landlords around the September rental cycle.",
      },
      {
        icon: "Home",
        title: "Older-stock entry sealing",
        description:
          "Much of the city's housing predates modern sealing standards. We find and close the six-millimetre gaps rather than only treating what has already come in.",
      },
      {
        icon: "MapPin",
        title: "Twenty minutes away",
        description: `Our base is ${travel("st-catharines")}, so scheduling a follow-up visit is straightforward.`,
      },
    ],
    factTable: {
      caption: "St. Catharines at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Population (2021)",
          value: "136,803 — the largest municipality in the Niagara Region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population density",
          value: "1,422.1 people per km² — the highest density in Niagara",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households in apartments",
          value: "29.6% of 58,905 households — highest share in the region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Single-detached share",
          value: "55.6% — the lowest in Niagara, so more shared walls than anywhere else",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Total private dwellings",
          value: "61,977, of which 58,903 have a usual resident",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Distance from our base",
          value: travel("st-catharines"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "Do you treat apartments and student rentals in St. Catharines?",
        answer:
          "Yes. Nearly thirty per cent of households in the city are in apartments, so a large share of our St. Catharines work is in multi-unit buildings. One thing worth knowing before you book: if the building has an active population moving between units, treating a single unit on its own often buys a few quiet weeks rather than solving the problem. Where that is the case we will say so, and explain what a building-level approach would involve, so you can raise it with your landlord or property manager rather than paying twice.",
      },
      {
        question: "I rent in St. Catharines. Is pest control my responsibility or my landlord's?",
        answer:
          "In Ontario, pest treatment in a rental is generally the landlord's responsibility as part of their maintenance obligation under the Residential Tenancies Act, 2006. The tenant's duty is to report the problem promptly and to co-operate with treatment — preparing the unit, providing access, and following the preparation instructions. Report it in writing and keep a copy, because a documented report is what establishes when the landlord was put on notice.",
      },
      {
        question: "How soon can you get to St. Catharines from Niagara Falls?",
        answer: `St. Catharines is ${travel("st-catharines")}. That is a short enough run that follow-up visits are easy to schedule, which matters because most treatments are not a single visit. We would rather commit to a time we can keep than promise a window we cannot, so call us on ${"289-990-5828"} and we will tell you honestly what is available.`,
      },
      {
        question: "Why do pest problems in St. Catharines seem to spike in September?",
        answer:
          "Two things happen at once. The rental stock serving Brock University turns over, concentrating a great deal of furniture movement into a few weeks, and any pest that travels in soft furnishings travels well under those conditions. Separately, cooling weather in September and October pushes rodents to look for somewhere warm, and they find the gaps in older housing stock. The two are unrelated in cause but they overlap on the calendar, which is why the phone gets busy.",
      },
      {
        question: "What should I do before a technician arrives?",
        answer:
          "Clear access to the areas of concern — under sinks, along baseboards, around the perimeter of the basement, and inside the kitchen cabinetry if the problem is in the kitchen. Do not spray a retail product beforehand: consumer aerosols frequently scatter a population into adjacent voids and rooms, which makes a targeted professional treatment harder and slower. If you have already sprayed, just tell us, and we will factor it in.",
      },
      {
        question: "Do you work with landlords and property managers?",
        answer:
          "Yes, and in a city with this much rental stock it is a large part of what we do. The most effective arrangement we see is an inspection scheduled into the turnover window between tenancies, when the unit is empty and every surface is accessible. It is faster, it is more thorough, and it avoids the awkwardness of treating around an occupant's belongings.",
      },
    ],
    ctaHeading: "Book a St. Catharines inspection",
    ctaBody:
      "Tell us the address, whether the property is detached or attached to others, and what you have seen. That is usually enough for us to say what the visit will involve before anyone is booked in.",
    images: [
      IMAGES.general,
      IMAGES.rodent,
      IMAGES.antCockroach,
      IMAGES.spider,
      IMAGES.technicianTreating,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["St. Catharines"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-niagara-falls",
    family: "city",
    citySlug: "niagara-falls",
    pathname: "/pest-control/niagara-falls",
    title: "Pest Control Niagara Falls, Ontario | Falcon Pest Control",
    h1: "Pest Control in Niagara Falls, Ontario",
    metaDescription:
      "Licensed pest control in Niagara Falls, Ontario — our home city. Rodent, cockroach, ant and spider treatment, plus the City's rodent rebate explained.",
    formSourceId: "city-niagara-falls",
    intro:
      "Falcon Pest Control is based in Niagara Falls, at 4551 Zimmerman Ave, so this is the city we know best and reach fastest. It is also a genuinely unusual place to do pest control. Niagara Falls covers 210.25 square kilometres — more than twice the land area of St. Catharines — but holds 94,415 people at just 449 per square kilometre. Within that spread sits one of the densest concentrations of hotel rooms and short-term accommodation in Canada, a tourist district that runs at high occupancy through the summer, and residential neighbourhoods that have very little to do with either. Treating a property here starts with understanding which of those Niagara Falls you are actually in.",
    sections: [
      {
        heading: "The City of Niagara Falls will pay part of your rodent extermination bill",
        body: "This is the single most useful thing most Niagara Falls property owners do not know. The City runs a Residential Rodent Control Rebate that reimburses 50 per cent of a professional extermination bill, to a maximum of $200, once per calendar year. The conditions are specific and worth reading before you book anything. The rebate applies to exterior property work only. Do-it-yourself products you buy yourself are not eligible. The contractor must hold a valid Ontario exterminator licence issued under the province's pesticide legislation. Any outstanding property-standards or litter issues at the address must be resolved first, and a Municipal Enforcement Officer may attend to assess the property. Once the City approves the application, payment is by cheque to the property owner and takes about thirty days. Full details and the application form are published by the City of Niagara Falls under Animal Services, and Municipal Enforcement Services can be reached at 905-356-7521.",
      },
      {
        heading: "Tourism density and what it does to pest pressure",
        body: "A city built around visitor accommodation has a different baseline than a city built around permanent residents. Accommodation properties see constant guest turnover, which is the classic vector for anything that travels in luggage and soft furnishings, and the food service that supports them concentrates organic waste at a scale ordinary neighbourhoods do not produce. Both create pressure that radiates outward. Rodents in particular do not respect the boundary between a commercial waste enclosure and the residential street behind it — a reliable food source in a laneway supports a population that forages well beyond it. If you live near the tourist core, that context is worth knowing, because the pressure on your property may have very little to do with your own housekeeping.",
      },
      {
        heading: "A sprawling city means very different properties",
        body: "At 449 people per square kilometre across 210 square kilometres, Niagara Falls contains everything from dense older blocks near the river to properties backing onto open land at the city's edge. Sixty-six per cent of the 37,790 households here are in single-detached houses and 20.7 per cent are in apartments, so both the closed-problem and shared-problem patterns exist within the same municipality. Properties bordering undeveloped land, ravine, or agricultural edge see seasonal pressure from field rodents that move toward buildings as temperatures drop in autumn. Properties in the older built-up grid tend to see the structural-gap problems common to any aging housing stock. The inspection is what tells us which conversation we are having.",
      },
      {
        heading: "Growth, construction and displaced populations",
        body: "Niagara Falls grew 7.2 per cent between the 2016 and 2021 censuses, from 88,071 to 94,415 residents. Growth means construction, and construction reliably displaces established rodent populations. Excavation, demolition and ground disturbance break up burrow systems and push the animals that lived in them into whatever adjacent shelter is available, which is often the nearest occupied building. If work has started near you and you are suddenly seeing activity you have never seen before, that sequence is the usual explanation. It also means the problem is likely to be a pulse rather than a permanent change, provided the building is properly sealed while the pressure is high.",
      },
    ],
    benefits: [
      {
        icon: "Landmark",
        title: "We can point you at the City rebate",
        description:
          "Niagara Falls reimburses 50% of an exterior rodent extermination bill up to $200 a year. We will tell you whether your job is likely to qualify.",
      },
      {
        icon: "MapPin",
        title: "This is our home city",
        description:
          "Our base is on Zimmerman Ave. Niagara Falls is the address we reach fastest, which matters most when a treatment needs follow-up visits.",
      },
      {
        icon: "Building2",
        title: "Residential and commercial",
        description:
          "A city built around visitor accommodation creates pressure that crosses between commercial and residential property. We work on both sides of that line.",
      },
      {
        icon: "AlertTriangle",
        title: "Construction-displacement response",
        description:
          "Sudden activity after nearby excavation is a recognisable pattern, not bad luck. Sealing the building while pressure is high is what stops it.",
      },
    ],
    factTable: {
      caption: "Niagara Falls at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Population (2021)",
          value: "94,415, up 7.2% from 88,071 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Land area",
          value: "210.25 km² — more than double St. Catharines, at 449.1 people per km²",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households",
          value: "37,790 — 66.1% single-detached, 20.7% apartments",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "City rodent rebate",
          value: "50% of an exterior extermination bill, max $200, once per calendar year",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Rebate condition",
          value: "Contractor must hold a valid Ontario exterminator licence; DIY products are not eligible",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Our base",
          value: "4551 Zimmerman Ave, Niagara Falls — this is the city we reach fastest",
          source: "Falcon Pest Control",
        },
      ],
    },
    faqs: [
      {
        question: "How does the Niagara Falls rodent rebate work?",
        answer:
          "The City reimburses 50 per cent of a professional rodent extermination bill to a maximum of $200, once per calendar year. It covers exterior property work only, and products you buy and apply yourself do not qualify. The contractor must hold a valid Ontario exterminator licence. You will also need any outstanding property-standards or litter issues at the address resolved, and a Municipal Enforcement Officer may attend to assess. After the City approves the application, payment is by cheque and takes roughly thirty days. The application form is published by the City under Animal Services.",
      },
      {
        question: "Does hiring Falcon qualify me for the rebate?",
        answer:
          "The rebate requires a contractor holding a valid Ontario exterminator licence, and it applies to exterior work. Ask us to confirm both points for your specific job before you book, and keep your invoice — you will need it for the application. We would rather you check with the City directly than take our word for eligibility, because the assessment is theirs to make, not ours.",
      },
      {
        question: "Why am I suddenly seeing mice when I never used to?",
        answer:
          "Two explanations cover most cases in Niagara Falls. The first is seasonal: as temperatures drop through autumn, rodents that spent the summer outdoors start looking for somewhere warm, and they find whatever gap your building offers. The second is construction. Excavation and demolition nearby break up established burrows and push those animals into the closest available shelter. If digging started near you recently, that is very likely your answer.",
      },
      {
        question: "Do you work with hotels, motels and short-term rentals?",
        answer:
          "We work with both residential and commercial properties in Niagara Falls. For accommodation specifically, tell us the property type and the scale when you call — the requirements for a building with continual guest turnover are different from a single home, and it is better to scope that properly at the outset than to arrive expecting the wrong job.",
      },
      {
        question: "How much of Niagara Falls do you cover?",
        answer:
          "All of it. Our base is on Zimmerman Ave, and at 210 square kilometres the city stretches a long way from there, but Niagara Falls addresses are the ones we reach fastest of anywhere in the region. That matters more than it sounds, because most treatments involve at least one follow-up visit.",
      },
      {
        question: "I live near the tourist district. Is that why I have a problem?",
        answer:
          "It may well be a contributing factor. Concentrated food service and visitor accommodation produce organic waste at a density ordinary residential streets do not, and rodents forage well beyond the bin enclosure that is feeding them. That does not mean nothing can be done at your property — sealing entry points and removing shelter and secondary food sources on your own lot still works — but it does mean the pressure may be external and persistent, and we will say so rather than implying your housekeeping is the cause.",
      },
    ],
    ctaHeading: "Book a Niagara Falls inspection",
    ctaBody:
      "We are based here. Tell us the address and what you have seen, and if the job looks like it might qualify for the City's rodent rebate we will flag that before you book.",
    images: [
      IMAGES.rodent,
      IMAGES.gnawedBaseboard,
      IMAGES.general,
      IMAGES.antsOnCounter,
      IMAGES.technicianTreating,
      IMAGES.protectionDiagram,
    ],
    related: [],
    entities: ["Niagara Falls"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-thorold",
    family: "city",
    citySlug: "thorold",
    pathname: "/pest-control/thorold",
    title: "Pest Control Thorold, Ontario | Falcon Pest Control",
    h1: "Pest Control in Thorold, Ontario",
    metaDescription:
      "Licensed pest control in Thorold, Ontario — Niagara's fastest-growing municipality. Rodent, cockroach, ant and spider treatment for new builds and older homes.",
    formSourceId: "city-thorold",
    intro:
      "Thorold is the closest Niagara municipality to our Niagara Falls base and the fastest-growing one in the region by a wide margin. Between the 2016 and 2021 censuses its population rose from 18,801 to 23,816 — an increase of 26.7 per cent, at a time when the Niagara Region as a whole grew far more modestly. That single number explains most of what makes pest control in Thorold distinctive, because rapid growth means construction, and construction changes where pests live.",
    sections: [
      {
        heading: "What 26.7 per cent growth does to a rodent population",
        body: "Established rodent populations live in burrow systems built over years in stable ground: field margins, embankments, undeveloped lots, the rough edges between built and unbuilt land. Excavation destroys those systems. When a site is cleared and dug, the animals that lived there do not disappear — they disperse into whatever adjacent shelter exists, and in a growing municipality the adjacent shelter is very often an occupied building. This produces a pattern we see repeatedly in Thorold: a homeowner who has lived in the same property without incident for years suddenly reports activity, and there is a new subdivision or servicing project within a few hundred metres. The useful thing about this pattern is that it is a pulse rather than a permanent change. Once the ground settles and the site is built out, pressure usually returns to something closer to normal — provided the building was properly sealed while the pressure was high.",
      },
      {
        heading: "New builds are not automatically pest-proof",
        body: "It is a reasonable assumption that a new house has no gaps, and it is frequently wrong. New construction is sealed to a good standard at the envelope, but the service penetrations cut afterwards — for gas, water, electrical, cable, HVAC and dryer venting — are made by different trades at different times, and the sealing around them varies. A gap of six millimetres is enough for a mouse. Add the fact that new subdivisions in Thorold are frequently built on ground that was recently field or scrub, with a displaced population looking for shelter, and a first-winter mouse problem in a brand-new house stops being surprising. We check the same short list on new builds every time: the gas line entry, the dryer vent, the HVAC penetrations, the garage-to-house door sweep, and the sill plate at grade.",
      },
      {
        heading: "The canal corridor and older Thorold",
        body: "Thorold is not only new subdivisions. The Welland Canal runs through the municipality, and the older parts of town near the locks contain housing stock considerably older than the growth statistics suggest, along with the industrial and infrastructure edges that come with a working waterway. Water, shelter and undisturbed ground in combination support rodent activity, and the older residential stock nearby has the structural gaps that let it indoors. Sixteen point nine per cent of Thorold's 9,095 households are apartments and 69.2 per cent are single-detached, so both patterns exist here — but the split between the newer subdivisions and the older canal-side blocks is more pronounced in Thorold than in most Niagara municipalities.",
      },
      {
        heading: "The closest municipality to our base",
        body: `Thorold is ${travel("thorold")}. Of everywhere we work, it is the shortest run from our Niagara Falls base other than Niagara Falls itself. That is genuinely useful rather than a marketing line, because pest control is rarely a single visit. A rodent job typically needs an initial treatment, a check, and a follow-up; a cockroach or ant job normally needs at least one return. The shorter the trip, the easier those return visits are to schedule at a time that suits you rather than a time that suits a route.`,
      },
    ],
    benefits: [
      {
        icon: "AlertTriangle",
        title: "Construction-displacement expertise",
        description:
          "The fastest-growing municipality in Niagara has the most displaced rodents. We know the pattern and treat the pulse rather than pretending it is permanent.",
      },
      {
        icon: "Home",
        title: "New-build inspections",
        description:
          "A new house is not automatically sealed. Service penetrations cut after the envelope is closed are where we find the gaps.",
      },
      {
        icon: "MapPin",
        title: "Our closest service area",
        description: `${travel("thorold")} — the shortest run we make outside Niagara Falls, which makes follow-up visits easy.`,
      },
      {
        icon: "ShieldCheck",
        title: "Canal-corridor experience",
        description:
          "Water, shelter and undisturbed ground support rodent activity. Older housing near the locks needs a different approach than a 2022 subdivision.",
      },
    ],
    factTable: {
      caption: "Thorold at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Population growth",
          value: "+26.7% from 2016 to 2021 (18,801 to 23,816) — the fastest in the Niagara Region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population (2021)",
          value: "23,816 across 83.29 km², at 285.9 people per km²",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households",
          value: "9,095 — 69.2% single-detached, 16.9% apartments",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Total private dwellings",
          value: "9,856, of which 9,095 have a usual resident",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Average household size",
          value: "2.6 people — among the larger household sizes in the region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Distance from our base",
          value: travel("thorold"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "My house is brand new. Why do I have mice?",
        answer:
          "Because new construction is sealed well at the building envelope but not always at the penetrations cut afterwards. Gas, water, electrical, cable, HVAC and dryer vents are run by different trades at different stages, and the sealing around them is inconsistent. A six-millimetre gap is enough. Add that many Thorold subdivisions are built on recently disturbed ground with a displaced rodent population looking for shelter, and a first-winter problem in a new house is common rather than unusual.",
      },
      {
        question: "There is construction near me and I have suddenly got a rodent problem. Are they connected?",
        answer:
          "Almost certainly. Excavation destroys established burrow systems, and the animals that lived in them move into the nearest available shelter rather than vanishing. In the fastest-growing municipality in Niagara this is the most common single explanation for new activity at a long-settled address. The encouraging part is that it is usually a pulse: once the site is built out and the ground settles, pressure tends to drop back — as long as your building is sealed while the pressure is high.",
      },
      {
        question: "How quickly can you reach Thorold?",
        answer: `Thorold is ${travel("thorold")}, which makes it the closest municipality we serve outside Niagara Falls itself. That matters mainly for follow-up: most treatments need at least one return visit, and a short run means we can schedule that around you.`,
      },
      {
        question: "Do you cover both the new subdivisions and older Thorold?",
        answer:
          "Yes, and the two need different work. A new subdivision property is usually about finding the handful of unsealed service penetrations. An older property near the canal is usually about an aging structure with multiple accumulated gaps, often combined with steady external pressure from the corridor itself. The inspection tells us which we are dealing with before anything is applied.",
      },
      {
        question: "What can I do myself to reduce the risk?",
        answer:
          "Three things help more than anything else. Keep vegetation and stored material away from the foundation so there is no covered approach to the wall. Make sure the door sweep between an attached garage and the house actually seals, since the garage is the most common route in. And if you are on the edge of a development or open ground, check the exterior at grade after any nearby excavation, because that is when gaps get tested.",
      },
      {
        question: "Do you treat rental units in Thorold?",
        answer:
          "Yes. Just under seventeen per cent of Thorold households are in apartments. If the unit is in a multi-unit building, tell us — where a population is moving between units through wall voids and service chases, treating one unit in isolation often buys quiet weeks rather than a solution, and we would rather explain that up front than have you pay for it twice.",
      },
    ],
    ctaHeading: "Book a Thorold inspection",
    ctaBody:
      "Whether it is a new build in a recent subdivision or an older property near the canal, tell us the address and what you have seen and we will tell you what the visit involves.",
    images: [
      IMAGES.gnawedBaseboard,
      IMAGES.mouseAtBaitStation,
      IMAGES.antsOnCounter,
      IMAGES.fouledDoorFrame,
      IMAGES.cockroachesInCabinet,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Thorold"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-welland",
    family: "city",
    citySlug: "welland",
    pathname: "/pest-control/welland",
    title: "Pest Control Welland, ON | Licensed Exterminator",
    h1: "Pest Control in Welland, Ontario",
    metaDescription:
      "Licensed pest control in Welland, Ontario. Rodent, cockroach, ant and spider treatment for houses and apartments along the canal corridor and across the city.",
    formSourceId: "city-welland",
    intro:
      "Welland sits at the centre of the Niagara peninsula, built around a waterway that shaped the city and still defines large parts of it. The 2021 Census recorded 55,750 residents at 686.9 people per square kilometre, making it the third-largest and third-densest municipality in the Niagara Region. Nearly a quarter of its households — 23.4 per cent of 23,655 — are in apartments, the second-highest share in Niagara after St. Catharines. Those two facts, water through the middle and a lot of shared walls, describe most of what pest control in Welland actually involves.",
    sections: [
      {
        heading: "The canal corridor and what water does to pest pressure",
        body: "The recreational waterway that runs through the centre of Welland, along with the working canal to its east, gives the city something most inland municipalities do not have: a long, continuous corridor of water, vegetated bank and relatively undisturbed ground running directly through built-up areas. Corridors like this are efficient habitat. They provide water, cover from predators, and a linear route that lets rodent populations move considerable distances without crossing open ground. Properties backing onto the waterway or its green margins see pressure that properties three streets away simply do not. It does not mean a problem is inevitable, but it does mean the exterior of a canal-adjacent building deserves more attention, more often, than the same building elsewhere in the city.",
      },
      {
        heading: "Apartment density and the limits of treating one unit",
        body: "At 23.4 per cent, Welland's apartment share is second only to St. Catharines. That changes what a successful treatment looks like. Cockroaches and mice in a multi-unit building are rarely confined to the unit reporting them — they use the wall voids, the plumbing chases and the gaps behind kitchen cabinetry to move between units, which means a thoroughly treated apartment can be reinfested from a neighbouring one within weeks. When we inspect a unit in a Welland apartment building and find evidence that the population extends beyond it, we say so directly. It is more useful to know that a building-level conversation is needed than to pay for a unit treatment that was never going to hold on its own.",
      },
      {
        heading: "Industrial-era housing and accumulated gaps",
        body: "Welland's growth was tied to industry and to the canal, and a good deal of its 24,530 private dwellings reflect that history. Older housing stock does not have one obvious hole; it has an accumulation of small ones added over decades. Every time a service was upgraded, a vent added, a porch enclosed or an addition attached, another junction was created, and junctions are where seals fail. When we inspect an older Welland property we work methodically around the exterior at grade rather than looking for a single culprit, because the realistic finding is four or five modest gaps rather than one dramatic one. Closing them collectively is what changes the outcome.",
      },
      {
        heading: "A city with more low-rise than high-rise",
        body: "Welland's apartment stock is weighted toward smaller buildings rather than towers, and its 64.6 per cent single-detached share means the majority of properties are still houses. The average household holds 2.3 people. In practice this produces a mixed service pattern: a lot of straightforward detached-house work where the problem is genuinely self-contained, alongside a meaningful volume of multi-unit work where it is not. The inspection is what separates the two, and it is the reason we do not quote a treatment before someone has looked at the property.",
      },
    ],
    benefits: [
      {
        icon: "MapPin",
        title: "Canal-corridor knowledge",
        description:
          "Waterway margins are efficient rodent habitat and a route between properties. Buildings backing onto them need closer exterior attention.",
      },
      {
        icon: "Building2",
        title: "Multi-unit honesty",
        description:
          "With Niagara's second-highest apartment share, we will tell you plainly when a single-unit treatment is unlikely to hold on its own.",
      },
      {
        icon: "Home",
        title: "Older-stock inspection",
        description:
          "Industrial-era housing accumulates small gaps at every junction and upgrade. We work the perimeter methodically rather than hunting one hole.",
      },
      {
        icon: "ShieldCheck",
        title: "Follow-up built in",
        description:
          "Our four-step process ends with follow-up, because a single visit rarely settles a rodent or cockroach problem completely.",
      },
    ],
    factTable: {
      caption: "Welland at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Population (2021)",
          value: "55,750, up 6.6% from 52,293 in 2016 — third-largest in Niagara",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population density",
          value: "686.9 people per km² across 81.16 km²",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households in apartments",
          value: "23.4% of 23,655 — second-highest share in the Niagara Region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Single-detached share",
          value: "64.6% — the majority of properties are still houses",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Average household size",
          value: "2.3 people",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Distance from our base",
          value: travel("welland"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "My property backs onto the canal. Does that make a problem more likely?",
        answer:
          "It raises the exterior pressure, yes. A waterway corridor supplies water, dense cover and a continuous route that lets rodents travel without crossing exposed ground, so buildings along it face more frequent approaches than buildings further into the grid. That is a reason to keep the exterior sealed and the immediate perimeter clear of stored material and heavy vegetation, not a reason to assume an infestation is unavoidable.",
      },
      {
        question: "Do you treat apartment buildings in Welland?",
        answer:
          "Yes, and with almost a quarter of the city's households in apartments it is a regular part of our work here. The key question at the inspection is whether the population is confined to the unit. Where it is not — where there is evidence of movement through wall voids or service chases — treating one unit alone tends to buy quiet weeks rather than resolve the problem, and we will tell you that rather than let you discover it later.",
      },
      {
        question: "How long does treatment take to work?",
        answer:
          "It depends on the pest. Falcon's published guidance is roughly one to two weeks for rodent work, two to four weeks for ants and cockroaches, two to three weeks for spiders, and three to five weeks for a general pest programme to fully resolve. Those windows assume the follow-up visits happen, since most treatments depend on a second pass rather than a single application.",
      },
      {
        question: "How far is Welland from your base?",
        answer: `Welland is ${travel("welland")}. It is a routine run for us and comfortably within the area we cover, so follow-up appointments are not a problem to schedule.`,
      },
      {
        question: "I have an older Welland house. What should I be checking?",
        answer:
          "Look at junctions rather than walls. The points worth checking are where the gas and water lines enter, around the dryer vent, beneath the sill plate at grade, at the base of exterior basement stairs, and anywhere a porch, addition or enclosure meets the original structure. Older properties typically have several modest gaps rather than one obvious one, and closing them together is what makes the difference.",
      },
      {
        question: "Do I need an ongoing plan or is a one-time treatment enough?",
        answer:
          "For a contained, self-limiting problem in a detached house, a one-time treatment with proper follow-up is often sufficient. Ongoing protection makes more sense where external pressure is persistent — a canal-adjacent property, a building next to constant food or waste sources, or a multi-unit building with recurring activity. We will give you an honest view at the inspection rather than defaulting everyone onto a plan.",
      },
    ],
    ctaHeading: "Book a Welland inspection",
    ctaBody:
      "Tell us the address, whether the property is a house or a unit in a larger building, and what you have seen. We will tell you what the visit involves before anything is scheduled.",
    images: [
      IMAGES.antsOnCounter,
      IMAGES.rodent,
      IMAGES.cockroachesInCabinet,
      IMAGES.spiderOnWeb,
      IMAGES.fouledDoorFrame,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Welland"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-fort-erie",
    family: "city",
    citySlug: "fort-erie",
    pathname: "/pest-control/fort-erie",
    title: "Pest Control Fort Erie, Ontario | Falcon Pest Control",
    h1: "Pest Control in Fort Erie, Ontario",
    metaDescription:
      "Licensed pest control in Fort Erie, Ontario. Rodent, ant, cockroach and spider treatment for year-round homes and seasonal Lake Erie shoreline properties.",
    formSourceId: "city-fort-erie",
    intro:
      "Fort Erie has a housing profile unlike almost anywhere else in the Niagara Region, and it changes the pest control picture substantially. The 2021 Census counted 15,875 private dwellings in the town but only 14,081 occupied by a usual resident — meaning 11.3 per cent had nobody permanently living in them. Along the Lake Erie shoreline, through Crystal Beach and Ridgeway, a significant share of that stock is seasonal. Empty buildings are not neutral in pest terms. They are shelter without interference, and that shapes how we approach work here.",
    sections: [
      {
        heading: "Why seasonal properties are a different problem",
        body: "An occupied house is under constant low-level surveillance. Someone notices a droppings trail, hears activity overhead, spots a gnawed package. A seasonal property has none of that for months at a time. A rodent that enters a closed cottage in October has until May to establish, breed and cause damage before anyone opens the door. By the time the property is reopened the problem is rarely small, and the damage is frequently to the things that matter most: wiring insulation, stored soft furnishings, mattresses and upholstery. The single most effective intervention for a seasonal property is not treatment at all — it is a proper closing inspection before the building is left, so that whatever gaps exist are found and sealed while the building is still accessible and the population is still outside it.",
      },
      {
        heading: "Shoreline exposure and structural wear",
        body: "Buildings near Lake Erie take weather that inland properties do not. Wind-driven moisture, freeze-thaw cycling and general exposure age exterior materials faster, and aged materials open gaps. Wooden trim shrinks and pulls away, mortar loosens, soffit and fascia joints separate, and screening degrades. Each of those is a potential entry point. It is also why we tend to spend proportionally more of a Fort Erie inspection on the building envelope than we would on an equivalent property further inland — the structure itself is usually the story.",
      },
      {
        heading: "A town of houses, not apartments",
        body: "Fort Erie is 82.6 per cent single-detached, one of the highest shares in the region, with just 12.7 per cent of its 14,080 households in apartments. Spread across 166.24 square kilometres at only 197.9 people per square kilometre, this is a low-density town of individual buildings on individual lots, many with mature vegetation, outbuildings and open or wooded land nearby. That is good news in one respect — most infestations are genuinely self-contained problems that can be solved at the property without a building-wide conversation. It is less good in another, because detached properties on large lots offer far more exterior perimeter to defend, and more adjacent habitat feeding it.",
      },
      {
        heading: "Autumn is the pressure point",
        body: "In a town with this much open and wooded land at its edges, the autumn movement of field rodents toward buildings is the defining seasonal event. As overnight temperatures fall, populations that lived comfortably outdoors all summer begin testing structures for somewhere warm, and they are thorough about it. For year-round residents this is the window in which a small unnoticed gap becomes a winter-long problem. For seasonal owners it coincides almost exactly with closing up, which is precisely why the closing inspection matters so much — the building is being sealed and abandoned at the same moment external pressure peaks.",
      },
    ],
    benefits: [
      {
        icon: "Snowflake",
        title: "Seasonal closing inspections",
        description:
          "With 11.3% of dwellings having no usual resident, we treat closing-up inspections as a distinct service. Sealing before you leave beats treating in spring.",
      },
      {
        icon: "Home",
        title: "Envelope-first approach",
        description:
          "Shoreline weather ages exterior materials faster. On Fort Erie properties the structure itself is usually where the problem starts.",
      },
      {
        icon: "Sun",
        title: "Spring reopening checks",
        description:
          "If a property has been closed all winter, an inspection before you move back in tells you what happened while nobody was watching.",
      },
      {
        icon: "MapPin",
        title: "Crystal Beach to Ridgeway",
        description: `We cover the whole town — ${travel("fort-erie")}.`,
      },
    ],
    factTable: {
      caption: "Fort Erie at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Dwellings without a usual resident",
          value: "11.3% — 15,875 private dwellings but only 14,081 occupied, largely seasonal shoreline stock",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population (2021)",
          value: "32,901, up 7.1% from 30,710 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Single-detached share",
          value: "82.6% of 14,080 households — among the highest in Niagara",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Land area and density",
          value: "166.24 km² at just 197.9 people per km² — a low-density town",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households in apartments",
          value: "12.7% — most problems here are self-contained rather than building-wide",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Distance from our base",
          value: travel("fort-erie"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "I only use my Fort Erie property in summer. When should I book?",
        answer:
          "Before you close it up, not after you reopen it. A closed building is undisturbed shelter for months, and a rodent that gets in during October has until spring to establish and cause damage — usually to wiring, mattresses and stored soft furnishings. A closing inspection finds and seals the gaps while the building is still accessible and while the population is still outside it. A spring visit deals with whatever already happened, which is always the more expensive option.",
      },
      {
        question: "I have just reopened for the season and found droppings. What now?",
        answer:
          "Do not start sweeping or vacuuming dry droppings, because that puts particulate into the air. Ventilate the building well, keep people and pets out of the affected space, and get an inspection booked so the extent and the entry route are established before anything is cleaned. Once we know how the animal got in and how far it spread, cleaning and treatment can be sequenced properly.",
      },
      {
        question: "Why do shoreline properties seem to get more problems?",
        answer:
          "Two reasons compound. Lake Erie weather ages exterior materials faster than inland conditions, so trim, mortar, soffit joints and screening open gaps sooner. And a large share of shoreline stock stands empty for months, so those gaps go unnoticed and unrepaired. It is exposure and absence together, not the water itself.",
      },
      {
        question: "How far is Fort Erie from your base?",
        answer: `Fort Erie is ${travel("fort-erie")}. It is one of our longer runs but well within the area we serve, and we schedule work there in a way that accounts for the distance rather than squeezing it in.`,
      },
      {
        question: "What should I do before leaving the property for winter?",
        answer:
          "Remove every food source including pantry staples and pet food, since packaged dry goods sustain a population all winter. Strip and store soft furnishings where you can. Close and check every vent and screen. Make sure exterior doors seal at the bottom. And walk the perimeter at grade looking for gaps around service penetrations — anything a pencil fits through will admit a mouse.",
      },
      {
        question: "Do you cover Crystal Beach and Ridgeway as well as Fort Erie itself?",
        answer:
          "Yes. Fort Erie covers 166 square kilometres and includes those communities, and shoreline properties are a meaningful share of the work we do in the town. Tell us the address when you call and whether the property is occupied year-round or seasonally, because that changes what we recommend.",
      },
    ],
    ctaHeading: "Book a Fort Erie inspection",
    ctaBody:
      "Whether the property is lived in year-round or closed for the season, tell us which and we will recommend the right timing rather than the soonest appointment.",
    images: [
      IMAGES.mouseAtBaitStation,
      IMAGES.antsOnCounter,
      IMAGES.rodent,
      IMAGES.technicianTreating,
      IMAGES.spiderOnWeb,
      IMAGES.protectionDiagram,
    ],
    related: [],
    entities: ["Fort Erie"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-grimsby",
    family: "city",
    citySlug: "grimsby",
    pathname: "/pest-control/grimsby",
    title: "Pest Control Grimsby, Ontario | Falcon Pest Control",
    h1: "Pest Control in Grimsby, Ontario",
    metaDescription:
      "Licensed pest control in Grimsby, Ontario. Carpenter ant, rodent, cockroach and spider treatment for homes below the Niagara Escarpment and across the town.",
    formSourceId: "city-grimsby",
    intro:
      "Grimsby occupies the narrow bench of land between the Niagara Escarpment and Lake Ontario at the western edge of the region. That geography is the defining fact for pest control here. Wooded escarpment slopes rise directly behind the residential town, which means a large number of Grimsby properties sit within metres of mature woodland — and mature woodland is where the pests that matter most in this town actually come from. The 2021 Census recorded 28,883 residents in 11,395 households, with just 2.0 per cent of dwellings lacking a usual resident, the lowest share anywhere in Niagara.",
    sections: [
      {
        heading: "The escarpment, deadwood and carpenter ants",
        body: "Carpenter ants do not eat wood; they excavate it to nest, and they strongly prefer wood that is already softened by moisture or decay. Mature woodland supplies that in quantity — standing deadwood, fallen limbs, stumps and rotting logs are ideal parent-colony habitat. A colony established on the escarpment slope will readily send satellite colonies into a nearby structure, and a satellite colony does not need decayed wood to persist once it is inside a heated building. The parts of a house they find are consistent and predictable: window and door frames where sealant has failed, roof edges below a leaking or ice-dammed gutter, deck ledger boards, sill plates behind damaged siding, and anywhere a downspout discharges against the structure. Because they follow moisture, carpenter ant control in Grimsby is as much about finding and fixing a water problem as about treatment.",
      },
      {
        heading: "A stable, owner-occupied town",
        body: "At 2.0 per cent, Grimsby has the lowest share of dwellings without a usual resident in the Niagara Region — the opposite end of the spectrum from shoreline Fort Erie and Port Colborne. Only 10.1 per cent of households are in apartments and 64.5 per cent are single-detached, with an average household size of 2.5. In practice this means Grimsby properties are lived in, watched, and generally maintained, so problems tend to be reported earlier and caught smaller than in municipalities with a large seasonal or transient component. It also means most infestations here are genuinely self-contained: the problem is the property's own, and it can be solved at the property.",
      },
      {
        heading: "Wooded lots and the approach to the wall",
        body: "The value of a wooded lot is also its pest control difficulty. Overhanging branches give squirrels and other climbers a route onto the roof; dense foundation planting gives rodents covered approach to the wall; leaf litter, log piles and landscape timber against the house give both shelter and, in the case of decaying wood, a carpenter ant nesting site within metres of the structure. The single most useful piece of advice we give Grimsby homeowners is to establish a clear, dry band around the base of the building — no stacked firewood against the wall, no dense planting touching the siding, no mulch banked against the foundation. It is unglamorous, it costs nothing, and it removes the covered approach that makes a building easy to reach.",
      },
      {
        heading: "Our furthest regular service area",
        body: `Grimsby is ${travel("grimsby")}, the longest road distance of anywhere we routinely work. We are straightforward about that: it does not stop us serving the town, but it does mean we would rather schedule a Grimsby visit properly than promise an unrealistic window. Because most treatments need follow-up, we plan the return visit at the same time as the first rather than leaving it open, so the whole job is booked before we start.`,
      },
    ],
    benefits: [
      {
        icon: "Leaf",
        title: "Carpenter ant specialists",
        description:
          "Escarpment woodland is ideal carpenter ant habitat. We look for the moisture problem feeding the colony, not just the ants you can see.",
      },
      {
        icon: "Home",
        title: "Wooded-lot perimeter advice",
        description:
          "A clear, dry band around the foundation removes the covered approach. It costs nothing and it works better than most things that do.",
      },
      {
        icon: "ClipboardCheck",
        title: "Both visits booked up front",
        description:
          "As our furthest service area, we schedule the follow-up at the same time as the first visit rather than leaving it open-ended.",
      },
      {
        icon: "ShieldCheck",
        title: "Self-contained problems",
        description:
          "With only 10.1% of households in apartments, most Grimsby infestations can be solved at the property without a building-wide conversation.",
      },
    ],
    factTable: {
      caption: "Grimsby at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Dwellings without a usual resident",
          value: "2.0% — the lowest in Niagara, a stable and consistently occupied town",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population (2021)",
          value: "28,883, up 5.7% from 27,314 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households in apartments",
          value: "10.1% of 11,395 — low, so most problems are property-specific",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Density",
          value: "420.4 people per km² across 68.71 km², compressed between escarpment and lake",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Average household size",
          value: "2.5 people",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Distance from our base",
          value: travel("grimsby"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "How do I tell carpenter ants from ordinary ants?",
        answer:
          "Carpenter ants are noticeably larger than the small ants that trail across a kitchen counter, typically dark, and often seen individually rather than in a dense line. The more reliable indicator is not the ant but the debris: carpenter ants push out a fine sawdust-like material called frass as they excavate, and finding a small pile of it below a window frame, door frame or ceiling edge is a strong sign of an active nest above. Winged individuals indoors in spring point to a mature colony rather than a few wanderers.",
      },
      {
        question: "Why does Grimsby seem to have so many carpenter ants?",
        answer:
          "Because the escarpment behind the town is exactly the habitat they need. Mature woodland supplies standing deadwood, stumps and fallen limbs, which is prime parent-colony territory, and satellite colonies move readily into nearby structures. Properties close to the wooded slope have a shorter route in than properties out on the flat, which is why the pattern is so noticeable here.",
      },
      {
        question: "Will treating the ants solve it permanently?",
        answer:
          "Not on its own, if there is a moisture problem feeding them. Carpenter ants target wood softened by water, so a failed gutter, an ice-dammed roof edge, a downspout discharging against the wall or a leaking window seal will keep making the structure attractive no matter how effective a treatment is. We will point out what we find, and the durable fix is treatment plus repair rather than treatment alone.",
      },
      {
        question: "How far is Grimsby from your base?",
        answer: `Grimsby is ${travel("grimsby")} — the longest run of anywhere we regularly work. We would rather tell you that plainly and schedule properly than promise a window we cannot hold. We book the follow-up visit at the same time as the first so the job is planned end to end.`,
      },
      {
        question: "What should I keep clear around a wooded lot?",
        answer:
          "Aim for a clear, dry band around the base of the building. Move stacked firewood away from the wall and ideally off the ground. Cut back planting so nothing touches the siding. Keep mulch from banking against the foundation. Trim branches that overhang the roof. And clear leaf litter from against the wall each autumn — it holds moisture directly against the structure, which is what starts the decay carpenter ants are looking for.",
      },
      {
        question: "Do you handle squirrels and other wildlife in Grimsby?",
        answer:
          "Wildlife removal is a separately regulated activity in Ontario and is not among the services Falcon currently lists, so we will not claim it here. What we can do is deal with the pest species we do treat and identify the structural gaps that are letting anything in. If your issue is specifically wildlife, ask us and we will tell you honestly whether it is something we can help with.",
      },
    ],
    ctaHeading: "Book a Grimsby inspection",
    ctaBody:
      "If you have found sawdust-like debris below a window or ceiling edge, mention it when you call — it usually means an active nest, and it changes what we look for.",
    images: [
      IMAGES.antCockroach,
      IMAGES.cockroachesInCabinet,
      IMAGES.antsOnCounter,
      IMAGES.spider,
      IMAGES.fouledDoorFrame,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Grimsby"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-beamsville",
    family: "city",
    citySlug: "beamsville",
    pathname: "/pest-control/beamsville",
    title: "Pest Control Beamsville & Lincoln, ON | Falcon",
    h1: "Pest Control in Beamsville, Ontario",
    metaDescription:
      "Licensed pest control in Beamsville and the Town of Lincoln, Ontario. Rodent, ant, cockroach and spider treatment for homes among the vineyards and orchards.",
    formSourceId: "city-beamsville",
    intro:
      "Beamsville is the largest community in the Town of Lincoln, which spreads across 162.74 square kilometres of the Niagara bench at just 158.0 people per square kilometre — one of the least dense municipalities in the region. Most of that land is not town at all. It is vineyard, orchard and farm, and the residential areas sit inside it rather than beside it. For pest control that agricultural setting is not background detail; it is the single biggest factor in what arrives at a building and when.",
    sections: [
      {
        heading: "Living inside an agricultural landscape",
        body: "A house surrounded by cultivated land has a fundamentally different exposure profile from a house surrounded by other houses. Field margins, hedgerows, windbreaks and the rough ground between blocks support substantial rodent populations year-round, and those populations are not static. They respond to the farming calendar. Harvest removes cover and food in a short window and pushes animals outward to look for both. Ploughing and other ground disturbance destroys burrow systems the same way construction does in Thorold. In each case the nearest heated building with an accessible gap becomes an attractive alternative, which is why rural and semi-rural properties in Lincoln often see activity arrive in distinct waves rather than as a steady trickle.",
      },
      {
        heading: "The autumn cluster — flies that overwinter in walls",
        body: "Grassland and pasture across the bench supports the earthworm populations that cluster flies parasitise, and every autumn the adults look for somewhere sheltered to spend the winter. Sun-warmed walls are exactly what they seek. They gather in numbers on the warm side of a building on bright autumn afternoons, work their way in through gaps around window frames, soffits, fascia and attic vents, and then overwinter dormant in wall voids and roof spaces. The part homeowners find baffling is what happens next: on a mild, sunny winter day the warmth wakes them and they emerge indoors, seemingly from nowhere, at completely the wrong time of year. This is very common in agricultural Lincoln, and it is preventable — but only if the exterior gaps are sealed before they get in, because once they are in the wall the opportunity has passed for that season.",
      },
      {
        heading: "Outbuildings, barns and stored crops",
        body: "Rural properties usually have more than one building, and the secondary ones are rarely sealed to the standard of the house. Barns, garages, workshops, drive sheds and storage buildings are where rodent populations establish comfortably, and from there the house is a short journey. Anywhere crop, feed, seed or birdseed is stored is a reliable food source that will sustain a population through winter regardless of how carefully the kitchen is kept. When we inspect a Lincoln property we ask what other buildings are on the lot and what is stored in them, because treating the house while an untouched population lives in the barn forty metres away is not a solution.",
      },
      {
        heading: "Mostly detached, rarely shared",
        body: "Just 8.2 per cent of the 9,555 households in Lincoln are apartments, and 69.8 per cent are single-detached, with an average household size of 2.6 — larger than the regional norm. The population grew 8.1 per cent between 2016 and 2021, from 23,787 to 25,719. What this means practically is that shared-wall transmission is rarely the issue here. The problems are almost always about the individual property and its surroundings: which buildings are on the lot, what is stored where, how the land behind it is used, and how well the structures are sealed against a landscape that is generating pressure continuously.",
      },
    ],
    benefits: [
      {
        icon: "Leaf",
        title: "Agricultural-edge experience",
        description:
          "Harvest and ploughing displace rodents in waves. We treat rural properties with the farming calendar in mind rather than as if they were suburban.",
      },
      {
        icon: "Snowflake",
        title: "Cluster fly prevention",
        description:
          "Autumn sealing of soffits, fascia and window surrounds is the only thing that works. Once they are overwintering in the wall, that season is lost.",
      },
      {
        icon: "Warehouse",
        title: "We inspect the outbuildings",
        description:
          "Treating the house while a population lives in the barn or drive shed solves nothing. We ask what else is on the lot and what is stored in it.",
      },
      {
        icon: "MapPin",
        title: "Across the Town of Lincoln",
        description: `Beamsville, Vineland, Campden and the rural concessions — ${travel("beamsville")}.`,
      },
    ],
    factTable: {
      caption: "Beamsville and the Town of Lincoln at a glance",
      rows: [
        {
          label: "Land area and density",
          value: "162.74 km² at only 158.0 people per km² — largely vineyard, orchard and farmland",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population (2021)",
          value: "25,719, up 8.1% from 23,787 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households in apartments",
          value: "8.2% of 9,555 — shared-wall transmission is rarely the issue here",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Single-detached share",
          value: "69.8%, with an average household size of 2.6 people",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Dwellings without a usual resident",
          value: "2.8% — a settled, year-round community",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Distance from our base",
          value: travel("beamsville"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "Every autumn my windows fill with sluggish flies. What are they?",
        answer:
          "Almost certainly cluster flies. They overwinter as adults inside buildings, gathering on sun-warmed walls in autumn and entering through gaps around windows, soffits, fascia and attic vents. They then sit dormant in wall voids and roof spaces until a mild sunny day warms them enough to emerge indoors, which is why they appear in the middle of winter for no obvious reason. They are a nuisance rather than a health risk, and they are common across agricultural Lincoln.",
      },
      {
        question: "Can cluster flies be prevented?",
        answer:
          "Yes, but the timing is everything. The work is exterior sealing before they enter in autumn — soffit and fascia joints, window and door surrounds, attic and roof vents, and any gap on the warm sunlit side of the building. Once they are already overwintering inside the wall void, sealing accomplishes nothing for that season, and you are managing emergence rather than preventing entry. Book the sealing work for late summer or very early autumn.",
      },
      {
        question: "Why does activity spike after harvest?",
        answer:
          "Harvest strips cover and food from a large area in a very short time, and ploughing destroys burrow systems outright. The rodents living in those field margins do not disappear — they move, and the nearest heated building with an accessible gap is a good alternative. It is the same displacement mechanism that construction causes in growing municipalities, just driven by the farming calendar instead.",
      },
      {
        question: "Do you inspect barns and outbuildings too?",
        answer:
          "We ask about them, because they matter. Secondary buildings are rarely sealed to the standard of the house, and stored crop, feed, seed or birdseed will sustain a rodent population through winter regardless of how the kitchen is kept. Treating the house while an untouched population lives in the drive shed is not a fix. Tell us what is on the lot when you call so we can scope the visit properly.",
      },
      {
        question: "Do you cover Vineland and Campden as well as Beamsville?",
        answer: `Yes — the Town of Lincoln covers 162 square kilometres and we work across it, including the rural concessions. Beamsville is ${travel("beamsville")}, so it is one of our longer runs, and we schedule accordingly rather than squeezing it in.`,
      },
      {
        question: "Do you treat wasps around the vineyards at harvest?",
        answer:
          "Wasp and hornet work is not currently among the services Falcon publishes, so we will not claim it. If that is what you need, ask us directly and we will give you a straight answer rather than book a visit for something we should not be doing. For the pests we do treat — rodents, ants, cockroaches, spiders and general prevention — the agricultural setting is very much our territory.",
      },
    ],
    ctaHeading: "Book a Beamsville or Lincoln inspection",
    ctaBody:
      "Tell us what buildings are on the property and what is stored in them. On rural lots that usually matters more than what has been seen inside the house.",
    images: [
      IMAGES.technicianTreating,
      IMAGES.fouledDoorFrame,
      IMAGES.gnawedBaseboard,
      IMAGES.general,
      IMAGES.cockroachesInCabinet,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Beamsville", "Lincoln"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-port-colborne",
    family: "city",
    citySlug: "port-colborne",
    pathname: "/pest-control/port-colborne",
    title: "Pest Control Port Colborne, ON | Falcon Pest Control",
    h1: "Pest Control in Port Colborne, Ontario",
    metaDescription:
      "Licensed pest control in Port Colborne, Ontario. Rodent, cockroach, ant and spider treatment for year-round homes, apartments and seasonal Lake Erie properties.",
    formSourceId: "city-port-colborne",
    intro:
      "Port Colborne has the most unusual housing profile of any municipality we serve, and it produces two quite different kinds of pest control work in the same small city. Of 10,219 private dwellings recorded in the 2021 Census, only 8,710 had a usual resident — 14.8 per cent stood without one, the highest share of any municipality on our service list. Yet at the same time 20.6 per cent of its 8,710 households are apartments, a share comparable to Niagara Falls. A city that is simultaneously seasonal and multi-unit needs both approaches, and knowing which one applies to your address is the first thing we establish.",
    sections: [
      {
        heading: "The highest seasonal vacancy on our service list",
        body: "Nearly one dwelling in seven in Port Colborne has no usual resident. Along the Lake Erie shoreline and around Sugarloaf, much of that is seasonal and recreational property that stands closed for months. An unoccupied building is undisturbed shelter, and the arithmetic is unforgiving: a rodent entering a closed property in autumn has the entire winter to establish and breed before anyone notices, and the damage tends to concentrate in exactly the things owners care about — wiring insulation, mattresses, upholstery and stored textiles. The most valuable visit for a seasonal property is a closing inspection before it is shut for the winter, while the building is still accessible and the gaps can actually be found and sealed.",
      },
      {
        heading: "But also a working city with apartments",
        body: "The seasonal shoreline is only half of Port Colborne. The city has a permanent population of 20,033 that grew 9.4 per cent between 2016 and 2021, and more than a fifth of its households are in apartments. Multi-unit buildings behave completely differently from closed cottages: the problem is not a long unobserved occupation but continuous movement between units through wall voids, plumbing chases and cabinetry gaps. In that setting, treating one unit while an active population persists elsewhere in the building buys a quiet few weeks. We will tell you which situation your property is in, because the right answer for one is close to useless for the other.",
      },
      {
        heading: "Canal terminus, harbour and industrial edges",
        body: "Port Colborne sits at the Lake Erie end of the Welland Canal, and the harbour, lock and associated industrial land give the city a large amount of edge habitat — waterside margins, working yards, storage areas and the rough ground that accumulates around infrastructure. This is productive rodent territory: water, shelter, food waste and relatively little disturbance. Residential properties near those edges face steadier external pressure than properties in the middle of a residential block, and the honest framing is that the pressure is environmental rather than a reflection of the household. Sealing the building and removing shelter and secondary food on your own lot still works; expecting the external source to disappear does not.",
      },
      {
        heading: "Low density, long distance",
        body: `Port Colborne spreads across 121.99 square kilometres at just 164.2 people per square kilometre, so properties tend to sit on generous lots with plenty of perimeter to defend. It is also ${travel("port-colborne")} — the longest drive of anywhere we serve. We plan Port Colborne work rather than fitting it around other jobs, and we book the follow-up at the same time as the initial visit, because a treatment that needs a second pass should have that second pass scheduled before the first one happens.`,
      },
    ],
    benefits: [
      {
        icon: "Snowflake",
        title: "Closing inspections for seasonal property",
        description:
          "With the highest seasonal vacancy on our list, sealing before you shut up for winter is the highest-value visit we make here.",
      },
      {
        icon: "Building2",
        title: "Multi-unit work too",
        description:
          "Over a fifth of households are apartments. We are direct about when a single-unit treatment will not hold on its own.",
      },
      {
        icon: "MapPin",
        title: "Harbour and canal-edge knowledge",
        description:
          "Waterside and industrial margins generate steady external pressure. We say so plainly rather than implying it is a housekeeping problem.",
      },
      {
        icon: "ClipboardCheck",
        title: "Planned, not squeezed in",
        description: `At ${travel("port-colborne")} this is our longest run, so we schedule both visits up front.`,
      },
    ],
    factTable: {
      caption: "Port Colborne at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Dwellings without a usual resident",
          value: "14.8% — 10,219 dwellings, 8,710 occupied. The highest share on our service list",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Households in apartments",
          value: "20.6% of 8,710 — unusually high for a city with this much seasonal stock",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Population (2021)",
          value: "20,033, up 9.4% from 18,306 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Land area and density",
          value: "121.99 km² at 164.2 people per km² — generous lots, long perimeters",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Average household size",
          value: "2.2 people — the smallest average in the Niagara Region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Distance from our base",
          value: travel("port-colborne"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "My Port Colborne property is seasonal. When is the best time to book?",
        answer:
          "Before you close it for the winter. Almost fifteen per cent of dwellings in this city have no usual resident, and a closed building is undisturbed shelter for months at a stretch. Sealing the gaps while the property is open and accessible is far cheaper and far less disruptive than dealing with a winter's worth of established occupation when you return in spring.",
      },
      {
        question: "I live in an apartment here. Is that different?",
        answer:
          "Very. In a multi-unit building the population typically moves between units through wall voids, plumbing chases and cabinetry gaps, so a thoroughly treated unit can be reinfested from a neighbouring one within weeks. If our inspection finds evidence that the problem extends beyond your unit, we will say so, so you can raise a building-level approach with the landlord or property manager instead of paying for the same treatment repeatedly.",
      },
      {
        question: "I live near the harbour and keep getting rodents. Am I doing something wrong?",
        answer:
          "Probably not. Waterside margins, working yards and industrial edges provide water, shelter and food waste with little disturbance, which supports populations that forage well beyond their harbourage. That external pressure is not a reflection of your housekeeping. What you can control still matters — sealing the building, clearing shelter and removing secondary food sources on your own lot — but we would rather tell you the source is environmental than let you assume it is something you did.",
      },
      {
        question: "How far is Port Colborne from your base?",
        answer: `Port Colborne is ${travel("port-colborne")}, which makes it the longest run of anywhere we serve. We are upfront about that. It does not stop us working here, but we plan the visit and book the follow-up at the same time rather than leaving the second appointment open.`,
      },
      {
        question: "What should I do before closing a property for winter?",
        answer:
          "Clear out every food source, including pantry dry goods, pet food and birdseed, since packaged staples will sustain a population all winter. Store or strip soft furnishings where practical. Check that every vent and screen is intact and that exterior doors seal at the bottom. Then walk the perimeter at grade looking for gaps at service penetrations — if a pencil fits, a mouse does.",
      },
      {
        question: "I opened up in spring and found damage. What now?",
        answer:
          "Ventilate the building thoroughly and avoid dry-sweeping or vacuuming droppings, which puts particulate into the air. Keep people and pets out of the affected area and book an inspection so the entry route and the extent are established before cleaning starts. Wiring damage in particular is worth having looked at properly, because it is not always visible from the room side.",
      },
    ],
    ctaHeading: "Book a Port Colborne inspection",
    ctaBody:
      "Tell us whether the property is lived in year-round, seasonal, or a unit in a larger building. In this city those three answers lead to three genuinely different recommendations.",
    images: [
      IMAGES.rodent,
      IMAGES.mouseAtBaitStation,
      IMAGES.antsOnCounter,
      IMAGES.antCockroach,
      IMAGES.fouledDoorFrame,
      IMAGES.protectionDiagram,
    ],
    related: [],
    entities: ["Port Colborne"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-niagara-on-the-lake",
    family: "city",
    citySlug: "niagara-on-the-lake",
    pathname: "/pest-control/niagara-on-the-lake",
    title: "Pest Control Niagara-on-the-Lake, ON | Falcon",
    h1: "Pest Control in Niagara-on-the-Lake, Ontario",
    metaDescription:
      "Licensed pest control in Niagara-on-the-Lake, Ontario. Discreet rodent, ant, cockroach and spider treatment for heritage homes, wineries and guest accommodation.",
    formSourceId: "city-niagara-on-the-lake",
    intro:
      "Niagara-on-the-Lake is the least apartment-dense municipality in the region and one of the most distinctive to work in. Only 5.7 per cent of its 7,855 households are in apartments — the lowest share anywhere in Niagara — while 79.2 per cent are single-detached. Spread across 131.35 square kilometres at just 145.3 people per square kilometre, the town is mostly vineyard, orchard and farmland with a compact heritage core at its northern end. Two things follow from that: the buildings are old, and a great many of them host paying guests.",
    sections: [
      {
        heading: "Heritage buildings and why they are harder to seal",
        body: "The Old Town contains a concentration of nineteenth-century buildings, and heritage construction is genuinely more difficult to seal than modern construction — not because it was built badly, but because it was built differently. Stone and rubble foundations have irregular voids rather than a poured face. Timber frames move seasonally, opening and closing gaps as humidity changes. Original sash windows rarely seal tightly. Cellars are frequently unsealed at grade. On top of that, heritage designation and simple good sense limit what can be altered on an exterior elevation. The practical consequence is that heritage work is more about careful, sympathetic exclusion in the places where it is possible, and more attention to interior monitoring, than about the aggressive sealing that would be routine on a modern building. It takes longer and it needs a lighter hand.",
      },
      {
        heading: "Guest accommodation and the discretion it needs",
        body: "Niagara-on-the-Lake's economy runs substantially on visitors, and 8.4 per cent of its dwellings have no usual resident — a figure that reflects short-term rental and guest accommodation as much as seasonal ownership. Properties with continual guest turnover face a specific kind of exposure, because anything that travels in luggage and soft furnishings arrives with the guests rather than from the garden. Two things matter to operators here beyond the treatment itself: discretion, and timing that works around bookings. Falcon's own service description emphasises discreet treatment, and in a town this small and this dependent on reputation, that is not a stylistic preference. Tell us the property is guest accommodation when you call, and we will plan around your calendar rather than ours.",
      },
      {
        heading: "Vineyards, orchards and the agricultural surround",
        body: "Outside the Old Town, Niagara-on-the-Lake is farmland. Vineyard rows, orchard blocks, windbreaks and field margins support rodent populations continuously, and the agricultural calendar moves them. Harvest strips cover and food across large areas in a compressed window; cultivation destroys burrow systems. Both push animals toward the nearest sheltered structure. Properties on the agricultural edge — which in this town is most of them — see that pressure arrive in waves each autumn rather than as a constant background level, and the buildings that come through it best are the ones that were sealed before the wave rather than during it.",
      },
      {
        heading: "Low density, large lots, long perimeters",
        body: `At 145.3 people per square kilometre this is a spread-out town of individual properties on generous lots, many with mature trees, outbuildings and cultivated land immediately adjacent. More perimeter means more to inspect and more to maintain. It also means most problems are genuinely self-contained — with so few apartments, the shared-wall transmission that dominates work in St. Catharines and Welland is rarely the issue here. Niagara-on-the-Lake is ${travel("niagara-on-the-lake")}, an easy run from our base, which makes discreet scheduling around guests and events considerably more practical.`,
      },
    ],
    benefits: [
      {
        icon: "Landmark",
        title: "Heritage-appropriate exclusion",
        description:
          "Stone foundations, moving timber frames and original sash windows need a lighter, more careful hand than a modern building.",
      },
      {
        icon: "BedDouble",
        title: "Discreet, booking-aware scheduling",
        description:
          "For guest accommodation we work around your calendar. In a town this reliant on reputation, discretion is part of the job.",
      },
      {
        icon: "Leaf",
        title: "Agricultural-edge timing",
        description:
          "Vineyard and orchard harvest pushes rodents toward buildings in waves. Sealing before the wave beats treating during it.",
      },
      {
        icon: "MapPin",
        title: "An easy run from base",
        description: `${travel("niagara-on-the-lake")} — close enough to schedule discreetly around events and bookings.`,
      },
    ],
    factTable: {
      caption: "Niagara-on-the-Lake at a glance — and what each figure means for pest control",
      rows: [
        {
          label: "Households in apartments",
          value: "5.7% of 7,855 — the lowest share in the Niagara Region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Single-detached share",
          value: "79.2% — problems here are usually self-contained to the property",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Dwellings without a usual resident",
          value: "8.4% — reflecting short-term rental, guest accommodation and seasonal ownership",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population (2021)",
          value: "19,088, up 9.0% from 17,511 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Land area and density",
          value: "131.35 km² at 145.3 people per km² — predominantly agricultural",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Distance from our base",
          value: travel("niagara-on-the-lake"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "I run a bed and breakfast. Can you work discreetly?",
        answer:
          "Yes, and in this town it matters more than most. Tell us the property takes guests when you book and we will schedule around your calendar, arrive appropriately, and keep the visit as low-profile as the work allows. Discreet service is something Falcon's own service description emphasises, and in a small town that runs on reputation it is a practical requirement rather than a nicety.",
      },
      {
        question: "My house is a heritage property. Will treatment damage it?",
        answer:
          "Heritage buildings need a lighter and more careful approach, which is exactly why we inspect before recommending anything. Stone and rubble foundations, seasonally moving timber frames and original sash windows cannot be sealed the way modern construction can, and designation limits what may be altered externally in any case. In practice that means sympathetic exclusion where it is genuinely possible, more interior monitoring, and a slower pace — not aggressive sealing of an irreplaceable elevation.",
      },
      {
        question: "Why do I get a sudden influx of pests in autumn?",
        answer:
          "The agricultural surround. Vineyard and orchard harvest removes cover and food from large areas in a short window, and cultivation destroys burrow systems, so the populations living in field margins move toward the nearest sheltered structure. On the agricultural edge — which is most of this town — that arrives as a distinct autumn wave rather than a steady background level.",
      },
      {
        question: "Do you treat wineries and commercial properties in NOTL?",
        answer:
          "We work on commercial as well as residential property. For a winery, tell us what the spaces are used for when you call — production, storage, hospitality and retail have different requirements, and where food or beverage production is involved it is important we scope that properly at the outset rather than arriving with assumptions.",
      },
      {
        question: "How quickly can you get to Niagara-on-the-Lake?",
        answer: `Niagara-on-the-Lake is ${travel("niagara-on-the-lake")}, which is a comfortable run from our Niagara Falls base. That proximity is genuinely useful for accommodation properties, because it makes it far easier to find a slot that fits between bookings rather than one that suits our route.`,
      },
      {
        question: "Is a rental property my responsibility or the landlord's?",
        answer:
          "For a residential tenancy in Ontario, pest treatment is generally the landlord's responsibility under their maintenance obligation in the Residential Tenancies Act, 2006, with the tenant required to report promptly and co-operate with treatment. Short-term guest accommodation is a different arrangement entirely and sits with the operator. If you are unsure which applies to your situation, tell us the setup and we will at least point you in the right direction.",
      },
    ],
    ctaHeading: "Book a Niagara-on-the-Lake inspection",
    ctaBody:
      "Tell us whether the property is a heritage building, guest accommodation, or on the agricultural edge. Each one changes what we look at and how we schedule it.",
    images: [
      IMAGES.general,
      IMAGES.antsOnCounter,
      IMAGES.spiderOnWeb,
      IMAGES.gnawedBaseboard,
      IMAGES.technicianTreating,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Niagara-on-the-Lake"],
  },

  // ------------------------------------------------------------------
  {
    slug: "city-fonthill",
    family: "city",
    citySlug: "fonthill",
    pathname: "/pest-control/fonthill",
    title: "Pest Control Fonthill & Pelham, ON | Falcon",
    h1: "Pest Control in Fonthill, Ontario",
    metaDescription:
      "Licensed pest control in Fonthill and the Town of Pelham, Ontario. Carpenter ant, rodent, cockroach and spider treatment for wooded lots and established homes.",
    formSourceId: "city-fonthill",
    intro:
      "Fonthill is the main community in the Town of Pelham, sitting on high ground in the middle of the Niagara peninsula. The town is overwhelmingly residential and overwhelmingly detached: 82.8 per cent of its 6,960 households are single-detached houses, only 8.9 per cent are apartments, and just 2.3 per cent of dwellings lack a usual resident. It is a settled, owner-occupied, well-treed community — and that last quality is the one that shapes most of the pest control work we do here.",
    sections: [
      {
        heading: "High ground, mature trees and what lives in them",
        body: "Fonthill sits on the Fonthill Kame, a glacial deposit that gives the area the highest elevation in the Niagara peninsula, and the community has developed among mature woodland rather than clearing it. Short Hills Provincial Park lies immediately to the north. The result is a residential town where a great many properties have substantial trees on or beside the lot, and where wooded land is rarely far away. For carpenter ants that is close to ideal. They nest in wood softened by moisture or decay, and mature woodland supplies standing deadwood, stumps and fallen limbs in quantity. Parent colonies establish in that material and send satellite colonies into nearby structures, where they persist happily in a heated building without needing decayed wood at all. In Fonthill the distance between a parent colony and a house is often measured in metres.",
      },
      {
        heading: "Moisture is the thing that actually invites them",
        body: "Carpenter ants are not attracted to sound, dry timber. They target wood that water has already softened, which means the durable fix is almost always a repair rather than a treatment. The places we find them are consistent: below a gutter that overflows, at a roof edge that ice-dams in winter, around a window whose sealant has failed, at a deck ledger board bolted to the house, at a sill plate behind damaged siding, and wherever a downspout discharges against the foundation instead of away from it. A treatment that ignores the water problem controls the current colony and leaves the building just as attractive to the next one. We will point out what we find even when the repair is not something we do ourselves.",
      },
      {
        heading: "A stable town where problems get caught early",
        body: "With only 2.3 per cent of dwellings without a usual resident and an average household size of 2.6, Fonthill is lived in and looked after. That has a real effect on the work: problems here are typically noticed and reported earlier than in municipalities with substantial seasonal or transient stock, which means we are more often dealing with something contained rather than something established. The very low apartment share also means shared-wall transmission is rarely the issue — an infestation in a Fonthill house is almost always that house's own problem, which is the more solvable kind.",
      },
      {
        heading: "Large lots and the covered approach",
        body: `Pelham covers 126.35 square kilometres at 144.0 people per square kilometre, so lots are generous and perimeters are long. On a wooded property the practical risk is not the trees themselves but what sits against the building: stacked firewood, landscape timber, dense foundation planting, deep mulch banked against the foundation, and leaf litter left against the wall over winter. Each of those provides either covered approach to the structure or, in the case of decaying wood, a nesting site within metres of it. Establishing a clear, dry band around the base of the building is the single most effective thing a Fonthill homeowner can do without calling anyone. Fonthill is ${travel("fonthill")}.`,
      },
    ],
    benefits: [
      {
        icon: "Leaf",
        title: "Carpenter ants and the water behind them",
        description:
          "We find the moisture problem feeding the colony, not just the ants. Treatment without the repair leaves the building just as attractive next year.",
      },
      {
        icon: "Home",
        title: "Wooded-lot perimeter work",
        description:
          "Firewood, landscape timber, deep mulch and leaf litter against the wall are the real risk on a treed property — not the trees.",
      },
      {
        icon: "ShieldCheck",
        title: "Self-contained problems",
        description:
          "At 82.8% single-detached and 8.9% apartments, an infestation here is almost always the property's own — the more solvable kind.",
      },
      {
        icon: "MapPin",
        title: "Across the Town of Pelham",
        description: `Fonthill, Fenwick, North Pelham and the rural areas — ${travel("fonthill")}.`,
      },
    ],
    factTable: {
      caption: "Fonthill and the Town of Pelham at a glance",
      rows: [
        {
          label: "Single-detached share",
          value: "82.8% of 6,960 households — among the highest in the Niagara Region",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Households in apartments",
          value: "8.9% — shared-wall transmission is rarely the issue here",
          source: "Statistics Canada, 2021 Census, Table 98-10-0041-01",
        },
        {
          label: "Dwellings without a usual resident",
          value: "2.3% — a settled, consistently occupied community",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Population (2021)",
          value: "18,192, up 6.3% from 17,110 in 2016",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Land area and density",
          value: "126.35 km² at 144.0 people per km² — generous, often wooded lots",
          source: "Statistics Canada, 2021 Census, Table 98-10-0002-01",
        },
        {
          label: "Distance from our base",
          value: travel("fonthill"),
          source: "OSRM road routing from 4551 Zimmerman Ave, Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "I have found fine sawdust below a window frame. What does that mean?",
        answer:
          "That material is called frass, and carpenter ants push it out of the galleries they excavate. Finding a small pile of it below a window frame, door frame or ceiling edge is one of the more reliable signs of an active nest above or behind that point. It is worth mentioning specifically when you call, because it tells us roughly where to concentrate the inspection.",
      },
      {
        question: "Why are carpenter ants such a problem in Fonthill specifically?",
        answer:
          "Because the community developed among mature woodland rather than clearing it, and Short Hills Provincial Park sits immediately to the north. Standing deadwood, stumps and fallen limbs are prime parent-colony habitat, and satellite colonies move readily into nearby heated structures. On a well-treed Fonthill lot the distance between a parent colony and the house can be a matter of metres.",
      },
      {
        question: "Will treating carpenter ants stop them coming back?",
        answer:
          "Only if the moisture problem is dealt with too. Carpenter ants target wood already softened by water, so an overflowing gutter, an ice-damming roof edge, failed window sealant or a downspout discharging against the foundation will keep the structure attractive regardless of how well a treatment worked. We will tell you what we find even where the repair is not something we carry out ourselves, because treatment alone is a temporary answer.",
      },
      {
        question: "What should I clear away from the house on a wooded lot?",
        answer:
          "Move stacked firewood well away from the wall and off the ground. Cut planting back so nothing touches the siding. Keep mulch from banking against the foundation. Clear leaf litter from against the wall each autumn, because it holds moisture directly against the structure. And trim branches that overhang or touch the roof. The aim is a clear, dry band around the base of the building.",
      },
      {
        question: "Do you cover Fenwick and the rest of Pelham?",
        answer: `Yes. The Town of Pelham covers 126 square kilometres and we work across all of it, including Fenwick, North Pelham and the rural areas. Fonthill is ${travel("fonthill")}, a straightforward run from our base.`,
      },
      {
        question: "Do I need an ongoing plan in a wooded area?",
        answer:
          "It is worth considering, but not automatic. Where a property sits directly against woodland the external pressure is continuous rather than occasional, and seasonal preventive treatment addresses that in a way a single visit cannot. Where the lot is more open, a one-time treatment with proper follow-up is often enough. We will give you a straight assessment at the inspection rather than putting everyone on a plan by default.",
      },
    ],
    ctaHeading: "Book a Fonthill or Pelham inspection",
    ctaBody:
      "If you have seen large dark ants indoors or found sawdust-like debris anywhere, say so when you call. It usually points to an active nest and tells us where to start.",
    images: [
      IMAGES.cockroachesInCabinet,
      IMAGES.antCockroach,
      IMAGES.antsOnCounter,
      IMAGES.spiderOnWeb,
      IMAGES.fouledDoorFrame,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Fonthill", "Pelham"],
  },
];

export default cityPages;
