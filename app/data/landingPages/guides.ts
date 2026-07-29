// GUIDE PAGES
//
// High-intent informational pages that answer a question searchers actually
// ask, and that competitors in this market largely do not answer.
//
// ACCURACY NOTE: both pages below describe third-party rules — Ontario tenancy
// law and a City of Niagara Falls rebate programme. Those are summarised from
// published sources and are NOT legal advice, which each page states. Neither
// page asserts anything about Falcon's own credentials.
//
// SPECIFICALLY NOT CLAIMED on the rebate page: that Falcon holds the Ontario
// exterminator licence the rebate requires. The client has not published a
// licence number. The page explains the requirement and tells the reader to
// confirm it, which is honest and still useful. If and when the client
// supplies a licence number, this page can state it — until then it must not.

import { LandingPage } from "./types";
import { IMAGES } from "./images";


export const guidePages: LandingPage[] = [
  // ------------------------------------------------------------------
  {
    slug: "guide-landlord-responsibility",
    family: "guide",
    pathname: "/landlord-pest-control-ontario",
    title: "Landlord Pest Control Responsibility in Ontario | Falcon",
    h1: "Landlord or Tenant? Pest Control Responsibility in Ontario",
    metaDescription:
      "Who pays for pest control in an Ontario rental — landlord or tenant? What the Residential Tenancies Act requires, what tenants must do, and how to escalate.",
    formSourceId: "guide-landlord-responsibility",
    intro:
      "This is the question we are asked more than any other, and the confusion is understandable because the answer has two halves that get conflated. In Ontario the landlord is generally responsible for dealing with pests in a rental unit, and the tenant is responsible for reporting the problem promptly and co-operating with treatment. Most disputes we see are not really about who pays — they are about whether the tenant reported it in a way that can be proved, and whether the tenant prepared the unit so treatment could actually work. This page explains both halves. It is general information about published Ontario rules, not legal advice.",
    sections: [
      {
        heading: "What the landlord is responsible for",
        body: "Under the Residential Tenancies Act, 2006, a landlord is responsible for providing and maintaining a residential complex in a good state of repair and fit for habitation, and for complying with health, safety and housing standards. Pest infestation falls within that maintenance obligation, which is why the cost of professional treatment normally sits with the landlord rather than the tenant. That obligation applies regardless of how the pests arrived — a landlord cannot decline to treat an infestation on the basis that they believe the tenant introduced it, though that belief may matter later if they seek to recover costs. The obligation also extends to the building as a whole, not just the unit that complained, which matters enormously in multi-unit buildings where a population is moving between units.",
      },
      {
        heading: "What the tenant is responsible for",
        body: "The tenant's duties are real and they are the part most often overlooked. A tenant is expected to report a problem promptly — delay can weaken a later complaint, because the landlord cannot be responsible for failing to act on something they were never told about. A tenant is also expected to co-operate with treatment, which in practice means providing access on the scheduled date and completing whatever preparation the treatment requires: emptying cabinets, moving furniture away from walls, laundering and bagging items, and keeping the space accessible between visits. Refusing access or ignoring preparation instructions can shift responsibility, because a treatment that fails because the unit was not prepared is not a failure of the landlord's obligation. Tenants also remain responsible for ordinary cleanliness.",
      },
      {
        heading: "Report it in writing, and keep a copy",
        body: "This is the single most useful practical step, and it costs nothing. A verbal report to a superintendent leaves no record of when the landlord was put on notice, and the date of notice is usually the pivot on which any later dispute turns. Send it by email or text, or hand over a dated letter and keep a copy. Describe what you have seen, where, and when it started. Photograph the evidence with a visible date if you can. If the problem continues, keep every subsequent message in the same thread so the timeline is continuous rather than reconstructed later from memory. Tenants who do this are in a far stronger position than tenants who are certain they mentioned it in a hallway in March.",
      },
      {
        heading: "Do you still pay rent during an infestation?",
        body: "Yes. Withholding rent is not a remedy available to tenants in Ontario, and doing so exposes the tenant to an application for arrears and potentially to eviction — which is a far worse position than the one they started in. The available route is an application to the Landlord and Tenant Board, which can order a landlord to carry out repairs, order an abatement of rent, or award other remedies where a landlord has failed to meet their maintenance obligations. That is a genuine remedy with real outcomes, but it is a process to follow rather than a shortcut, and stopping payment first tends to undermine it.",
      },
      {
        heading: "Multi-unit buildings, and why one unit is not the problem",
        body: "In an apartment building, cockroaches and rodents move between units through wall voids, plumbing chases and the gaps behind cabinetry. A single treated unit adjoining untreated ones will be recolonised, usually within weeks. This is not a marginal technicality — it is the most common reason tenants find themselves reporting the same problem three times in a year and concluding that the treatment does not work. Where the population extends beyond a unit, the effective response is a building-level programme, and the landlord's maintenance obligation applies to the residential complex, not only to the unit that complained. If a technician tells you the problem extends beyond your unit, that is worth putting in writing to your landlord.",
      },
      {
        heading: "Where this matters most in Niagara",
        body: "The proportion of households in apartments varies widely across the region, and with it the likelihood that a pest problem is a building problem rather than a unit problem. St. Catharines is 29.6 per cent apartments, the highest in Niagara; Welland is 23.4 per cent, Niagara Falls 20.7 per cent and Port Colborne 20.6 per cent. At the other end, Niagara-on-the-Lake is 5.7 per cent and Fonthill and the wider Town of Pelham 8.9 per cent, where a rental is far more likely to be a detached house and the problem genuinely self-contained. If you are renting in one of the higher-density municipalities, the building-level question is worth asking early rather than after the third treatment.",
      },
    ],
    benefits: [
      {
        icon: "Landmark",
        title: "The rule in one line",
        description:
          "The landlord's maintenance obligation under the Residential Tenancies Act, 2006 normally makes pest treatment their responsibility.",
      },
      {
        icon: "ClipboardCheck",
        title: "Report in writing",
        description:
          "The date the landlord was put on notice is what most disputes turn on. Email or text creates that record; a hallway conversation does not.",
      },
      {
        icon: "AlertTriangle",
        title: "Do not withhold rent",
        description:
          "It is not a remedy in Ontario and it exposes you to arrears proceedings. An application to the Landlord and Tenant Board is the route.",
      },
      {
        icon: "Building2",
        title: "Prepare the unit",
        description:
          "Access and preparation are the tenant's duties. A treatment that fails because the unit was not prepared is not the landlord's failure.",
      },
    ],
    factTable: {
      caption: "Who is responsible for what in an Ontario rental",
      rows: [
        {
          label: "Treatment and its cost",
          value: "Generally the landlord, under the maintenance and habitability obligation",
          source: "Residential Tenancies Act, 2006 (Ontario)",
        },
        {
          label: "Reporting the problem",
          value: "The tenant, promptly — delay can weaken a later complaint",
          source: "Residential Tenancies Act, 2006 (Ontario)",
        },
        {
          label: "Preparing the unit and providing access",
          value: "The tenant. Refusing access or skipping preparation can shift responsibility",
          source: "Residential Tenancies Act, 2006 (Ontario)",
        },
        {
          label: "Paying rent during an infestation",
          value: "Rent remains payable. Withholding is not a remedy and risks arrears proceedings",
          source: "Residential Tenancies Act, 2006 (Ontario)",
        },
        {
          label: "If the landlord does not act",
          value: "Apply to the Landlord and Tenant Board, which can order repairs or a rent abatement",
          source: "Landlord and Tenant Board, Ontario",
        },
        {
          label: "Scope of the obligation",
          value: "The residential complex, not only the unit that complained — relevant in multi-unit buildings",
          source: "Residential Tenancies Act, 2006 (Ontario)",
        },
      ],
    },
    faqs: [
      {
        question: "Is my landlord legally required to pay for pest control in Ontario?",
        answer:
          "Generally yes. The Residential Tenancies Act, 2006 requires a landlord to keep a residential complex in a good state of repair, fit for habitation, and compliant with health, safety and housing standards. Pest infestation falls within that maintenance obligation, so the cost of professional treatment normally sits with the landlord. Your side of it is to report the problem promptly and co-operate with treatment. This is general information rather than legal advice — for a specific dispute, get advice on your own circumstances.",
      },
      {
        question: "What if my landlord says I caused the infestation?",
        answer:
          "The maintenance obligation still applies, and a landlord generally cannot refuse to treat on the basis that they believe the tenant introduced the pests. Whether they can later recover costs is a separate question that depends on the facts and on evidence. In the meantime the practical priority is getting the treatment done, because an untreated infestation grows and, in a multi-unit building, spreads to units that had nothing to do with it.",
      },
      {
        question: "Can I withhold rent until it is dealt with?",
        answer:
          "No, and this is the mistake that most often makes a tenant's position worse. Withholding rent is not a remedy in Ontario and it exposes you to an application for arrears and potentially eviction. The proper route is an application to the Landlord and Tenant Board, which has the power to order a landlord to carry out repairs, to order a rent abatement, or to grant other remedies where maintenance obligations have not been met.",
      },
      {
        question: "What do I have to do as a tenant?",
        answer:
          "Report the problem promptly and in writing, provide access on the scheduled treatment date, and complete the preparation the treatment requires — typically emptying cabinets, moving furniture away from walls, laundering and bagging items as instructed, and keeping the space accessible between visits. These are genuine obligations. A treatment that fails because a unit was not prepared or access was refused is not a failure of the landlord's duty.",
      },
      {
        question: "The treatment keeps failing. Why?",
        answer:
          "In a multi-unit building the usual reason is that the population is not confined to your unit. Cockroaches and rodents travel through wall voids, plumbing chases and cabinetry gaps, so a treated unit next to untreated ones is recolonised within weeks. The answer is a building-level programme rather than repeated single-unit treatments. If a technician has told you the problem extends beyond your unit, put that in writing to your landlord — the maintenance obligation covers the residential complex, not just the unit that complained.",
      },
      {
        question: "I am a landlord. How do I protect myself?",
        answer:
          "Respond to reports promptly and document your response, since a demonstrated record of acting is your strongest position at the Board. Use a licensed contractor and keep the invoices and reports. In multi-unit buildings, treat at building level when a technician advises that the population extends beyond one unit, because repeated single-unit treatments cost more over a year and do not resolve it. And where you have turnover, schedule an inspection into the empty window between tenancies — it is the cheapest, most thorough opportunity you will get.",
      },
    ],
    ctaHeading: "Need the treatment itself arranged?",
    ctaBody:
      "We work with tenants, landlords and property managers across the Niagara Region. Tell us which you are and whether the property is a house or a unit in a larger building.",
    images: [
      IMAGES.general,
      IMAGES.cockroachesInCabinet,
      IMAGES.rodent,
      IMAGES.cleanUnderSink,
      IMAGES.antsOnCounter,
      IMAGES.protectionDiagram,
    ],
    related: [],
    entities: ["landlord pest control", "tenant rights"],
  },

  // ------------------------------------------------------------------
  {
    slug: "guide-niagara-falls-rodent-rebate",
    family: "guide",
    pathname: "/niagara-falls-rodent-rebate",
    title: "Niagara Falls Rodent Rebate: Claim 50%, Up to $200",
    h1: "The Niagara Falls Rodent Control Rebate — How to Claim It",
    metaDescription:
      "The City of Niagara Falls reimburses 50% of an exterior rodent extermination bill, up to $200 a year. Eligibility rules and how to apply.",
    formSourceId: "guide-niagara-falls-rodent-rebate",
    intro:
      "Most Niagara Falls property owners do not know this exists, which is why almost nobody claims it. The City of Niagara Falls runs a Residential Rodent Control Rebate that reimburses half of a professional rodent extermination bill, to a maximum of $200, once per calendar year. The conditions are specific and a few of them catch people out after the money has already been spent — so it is worth reading them before you book anything rather than afterwards.",
    sections: [
      {
        heading: "What the rebate covers",
        body: "The programme reimburses 50 per cent of the total bill for professional rodent extermination, capped at $200, and it can be claimed once per calendar year per property. It is aimed at residential property owners dealing with rodent infestations on their property. The most important limitation, and the one most often missed, is that the rebate applies to exterior property services only. Work carried out inside the dwelling is not what this programme is for. If your job involves both interior and exterior work, that distinction is worth raising with your contractor before the invoice is written, because how the work is described and itemised will matter when the City assesses the claim.",
      },
      {
        heading: "The licensed contractor requirement",
        body: "This is the condition that determines whether you can claim at all. The property owner must have retained a contractor holding a valid Ontario exterminator licence issued under provincial pesticide legislation, authorising the use of pesticides. A neighbour with a van, a handyman, or a general property maintenance service will not satisfy this even if the work is effective. Equally important: do-it-yourself pest control products that you buy and apply yourself are explicitly not eligible, regardless of how much you spend on them. Before you book any contractor for work you intend to claim against, ask them directly to confirm they hold a current Ontario exterminator licence, and keep that confirmation.",
      },
      {
        heading: "The property standards condition",
        body: "The City requires that any outstanding property-standards or litter concerns at the address be resolved, and a Municipal Enforcement Officer may attend the service address to carry out a site assessment. This is not arbitrary. Rodent populations are sustained by shelter, harbourage and accessible waste, so a property with accumulated refuse, overgrown areas or stored material against structures will keep producing the conditions the extermination is meant to address. In practice it means that if you have an outstanding order or a visible issue at the property, sorting that out is part of qualifying — and it also happens to be the thing most likely to stop the problem recurring.",
      },
      {
        heading: "How to apply and what happens next",
        body: "The application form is published by the City of Niagara Falls under Animal Services, alongside the full programme terms. You complete the form and submit it with your documentation, including the invoice from the licensed contractor. Once the City approves the application, the guidance is to allow approximately thirty days for the rebate to be paid, and payment is made by cheque directly to the property owner. Municipal Enforcement Services administers the programme and can be reached at 905-356-7521 — worth a call before you spend money if there is any doubt about whether your particular situation qualifies, because they make the eligibility decision, not your contractor.",
      },
      {
        heading: "Why exterior work is where the money should go anyway",
        body: "There is a logic to the exterior-only restriction that is worth understanding, because it happens to align with what actually solves rodent problems. Killing the animals inside a building does not stop the next ones getting in; sealing the exterior does. A mouse needs a gap of about six millimetres, and the openings that matter are the tolerances around service penetrations — the gas line, the water service, the dryer vent, HVAC penetrations, the sill plate at grade, and the door sweep between an attached garage and the house. Exterior exclusion work is the part of a rodent job that determines whether the problem returns next autumn, so a programme that subsidises exactly that is subsidising the right half.",
      },
    ],
    benefits: [
      {
        icon: "Landmark",
        title: "50% back, up to $200",
        description:
          "Once per calendar year, for residential property owners in the City of Niagara Falls dealing with rodent infestation.",
      },
      {
        icon: "AlertTriangle",
        title: "Exterior work only",
        description:
          "The condition most often missed. Interior work and DIY products bought by the owner are not eligible.",
      },
      {
        icon: "ClipboardCheck",
        title: "Licensed contractor required",
        description:
          "The contractor must hold a valid Ontario exterminator licence. Confirm that before you book work you intend to claim against.",
      },
      {
        icon: "Home",
        title: "Property standards must be clear",
        description:
          "Outstanding property-standards or litter issues must be resolved, and an enforcement officer may assess the address.",
      },
    ],
    factTable: {
      caption: "City of Niagara Falls Residential Rodent Control Rebate",
      rows: [
        {
          label: "Amount",
          value: "50% of the total bill, to a maximum of $200",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Frequency",
          value: "Once per calendar year",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Scope",
          value: "Exterior property services only",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Contractor requirement",
          value: "Valid Ontario exterminator licence authorising pesticide use",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Not eligible",
          value: "Do-it-yourself pest control products purchased by the property owner",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Payment",
          value: "About 30 days after approval, by cheque to the property owner",
          source: "City of Niagara Falls, Residential Rodent Control Rebate Program",
        },
        {
          label: "Administered by",
          value: "Municipal Enforcement Services, 905-356-7521",
          source: "City of Niagara Falls",
        },
      ],
    },
    faqs: [
      {
        question: "How much is the Niagara Falls rodent rebate worth?",
        answer:
          "Fifty per cent of your total professional extermination bill, capped at $200, claimable once per calendar year. So a $400 exterior rodent job would attract the full $200; a $200 job would attract $100. It applies to residential property owners in the City of Niagara Falls.",
      },
      {
        question: "Does interior work qualify?",
        answer:
          "No. The programme covers exterior property services only, and this is the condition people most often discover too late. If your job involves both interior and exterior work, raise the distinction with your contractor before the invoice is issued, because how the work is itemised will matter when the City assesses your claim.",
      },
      {
        question: "Can I claim for traps and bait I bought myself?",
        answer:
          "No. Do-it-yourself pest control products purchased by the property owner are explicitly excluded, regardless of the amount spent. The rebate is specifically for work carried out by a contractor holding a valid Ontario exterminator licence.",
      },
      {
        question: "Does hiring Falcon Pest Control qualify me for the rebate?",
        answer:
          "The programme requires a contractor holding a valid Ontario exterminator licence and applies to exterior work. Ask us to confirm both points for your specific job before you book, and keep your invoice for the application. We would also encourage you to check directly with Municipal Enforcement Services on 905-356-7521 — the eligibility decision is the City's to make, not ours, and we would rather you confirmed it than relied on our word and were disappointed.",
      },
      {
        question: "How long does the rebate take to arrive?",
        answer:
          "The City's guidance is to allow approximately thirty days after your application is approved. Payment is made by cheque directly to the property owner. Note that approval may involve a Municipal Enforcement Officer attending the service address for a site assessment, so build a little time in beyond the thirty days.",
      },
      {
        question: "What if I have an outstanding property standards issue?",
        answer:
          "It needs to be resolved. The City requires that property-standards and litter concerns at the address be dealt with, and an officer may attend to assess. That is consistent with how rodent problems actually work — accumulated refuse, overgrown areas and material stored against structures supply the shelter and food that sustain a population, so clearing them is both a condition of the rebate and one of the more effective things you can do to stop the problem returning.",
      },
      {
        question: "Where do I get the application form?",
        answer:
          "It is published by the City of Niagara Falls under Animal Services, on the rodent prevention and control pages, together with the full programme terms. Municipal Enforcement Services administers the programme and can be reached at 905-356-7521 if you cannot find it or want to check something before applying.",
      },
    ],
    ctaHeading: "Book exterior rodent work in Niagara Falls",
    ctaBody:
      "Tell us the property is in the City of Niagara Falls and that you intend to claim the rebate, and we will make sure the exterior work is scoped and invoiced in a way that supports your application.",
    images: [
      IMAGES.gnawedBaseboard,
      IMAGES.mouseAtBaitStation,
      IMAGES.rodent,
      IMAGES.antsOnCounter,
      IMAGES.fouledDoorFrame,
      IMAGES.cleanUnderSink,
    ],
    related: [],
    entities: ["Niagara Falls rodent rebate"],
  },
];

export default guidePages;
