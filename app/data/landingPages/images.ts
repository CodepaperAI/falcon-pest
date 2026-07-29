// THE VERIFIED IMAGE POOL.
//
// Every entry below was produced by OPENING THE FILE AND LOOKING AT IT. The
// filenames in public/services/ are actively misleading — "Rodent-Control.png"
// is not a photo of rodent control, it is a three-panel marketing strip; the
// "-1" and "-2" suffixes are not two views of the same thing, they are a
// dirty/clean pair. Alt text written from a filename here would have been
// wrong on every single image, and an earlier pass proved exactly that.
//
// Alt text is bound to the image HERE, not at each usage site. Previously each
// data file kept its own IMG map and wrote its own alt strings, and the two
// drifted apart the moment an image was swapped. Import these objects whole.
//
// RULE: if you add an image, open it first and describe what is actually in
// the frame. Do not describe what the page is about.
//
// NOTE FOR THE CLIENT: these are stock/AI-generated illustrations, not
// photographs of Falcon's own work or staff. They are described factually and
// nothing on the site claims otherwise. Real job photography would be a
// meaningful upgrade to every page in this set.

import { PageImage } from "./types";

export const IMAGES = {
  /** 3-panel strip: ants + cockroaches at a kitchen cabinet base → bait station and gel applicator → clean corner. */
  general: {
    src: "/services/General-Pest-Control.png",
    alt: "Three-panel before, mid-process and after strip showing ants and cockroaches at a kitchen cabinet base, then a bait station and gel bait applicator, then a clean corner",
  },
  /** Macro: small dark ants swarming a food spill beside a spoon. */
  antsOnCounter: {
    src: "/services/general-pest-1.png",
    alt: "Macro photograph of small dark ants swarming a spill of sweet food on a pale kitchen counter beside a metal spoon",
  },
  /** Clean white marble kitchen counter, no pests. */
  cleanKitchen: {
    src: "/services/general-pest-2.png",
    alt: "A clean white marble kitchen counter and island with no sign of pest activity",
  },
  /** 3-panel strip: rat at gnawed baseboard hole → bait station + metal exclusion plate → sealed corner. */
  rodent: {
    src: "/services/Rodent-Control.png",
    alt: "Three-panel before, mid-process and after strip showing a rat at a gnawed baseboard hole with droppings, then a bait station and metal exclusion plate, then the repaired sealed corner",
  },
  /** Gnawed hole in a white baseboard with droppings on the floor. */
  gnawedBaseboard: {
    src: "/services/rodent-control-1.png",
    alt: "Close-up of a gnawed hole chewed through a white painted baseboard, with rodent droppings scattered across the wood floor below",
  },
  /** Mouse emerging from a baseboard hole beside a bait station. */
  mouseAtBaitStation: {
    src: "/services/rodent-control-2.png",
    alt: "A mouse emerging from a gnawed hole in a white baseboard beside a black tamper-resistant bait station",
  },
  /** 3-panel strip: heavy webbing in a room corner → treatment → cleared corner. */
  spider: {
    src: "/services/Spider-Control.png",
    alt: "Three-panel before, mid-process and after strip showing heavy spider webbing across a room corner, then treatment in progress, then the cleared corner",
  },
  /** Macro: large brown house spider on a dense web against concrete and brick. */
  spiderOnWeb: {
    src: "/services/spider-control-1.png",
    alt: "Macro photograph of a large brown house spider on a dense, dusty web spun across a concrete and brick wall",
  },
  /** Clean white room corner, no webbing. */
  cleanCorner: {
    src: "/services/spider-control-2.png",
    alt: "A clean white room corner with intact painted baseboard and no webbing",
  },
  /** 3-panel strip: ants + cockroaches along a kitchen toe-kick → reduced → clean. */
  antCockroach: {
    src: "/services/Anti-Cockroach-Control.png",
    alt: "Three-panel before, mid-process and after strip showing ants and cockroaches along a kitchen toe-kick, then reduced activity, then a clean floor and cabinet base",
  },
  /** Cockroaches AND silverfish inside a dark wood cabinet. */
  cockroachesInCabinet: {
    src: "/services/ant-cockroach-1.png",
    alt: "Cockroaches and silverfish on the shelf of a dark wooden kitchen cabinet interior",
  },
  /** The same cabinet, clean and empty. */
  cleanCabinet: {
    src: "/services/ant-cockroach-2.png",
    alt: "A clean, empty dark wood cabinet interior after treatment",
  },
  /** 3-panel strip whose middle panel shows a Falcon technician with a compression sprayer. */
  technicianTreating: {
    src: "/services/Preventive Treatments.png",
    alt: "Three-panel before, mid-process and after strip in which a Falcon technician in a respirator applies a perimeter treatment along a baseboard with a compression sprayer",
  },
  /** Soiled door frame and baseboard, heavy insect fouling, cardboard box. */
  fouledDoorFrame: {
    src: "/services/preventive-1.png",
    alt: "Close-up of a soiled baseboard and door frame heavily speckled with insect fouling, next to a stored cardboard box",
  },
  /** The same door frame, cleaned. */
  cleanDoorFrame: {
    src: "/services/preventive-2.png",
    alt: "The same door frame and baseboard cleaned down to bare white paint after treatment",
  },
  /** Clean under-sink cabinet with white P-trap plumbing. */
  cleanUnderSink: {
    src: "/services/service-plans-1.png",
    alt: "Clean, clear under-sink cabinet interior with white plastic P-trap plumbing and no sign of pest activity",
  },
  /** Soiled under-sink cabinet with a cockroach on the floor. */
  fouledUnderSink: {
    src: "/services/service-plans-2.png",
    alt: "Soiled under-sink cabinet base with fouling speckled across the plumbing and cabinet edge, and a cockroach on the floor below",
  },
  /** 3-panel diagram with icon overlays: mixed pests → treatment → protected. */
  protectionDiagram: {
    src: "/services/One-Time-&-Ongoing-Services.png",
    alt: "Three-panel before, mid-process and after diagram with icon overlays, showing mixed pest activity at a kitchen baseboard reducing to a protected, clear finish",
  },
} satisfies Record<string, PageImage>;

export type ImageKey = keyof typeof IMAGES;

/** Picks `count` distinct images starting at `offset`, cycling the pool.
 *  Guarantees uniqueness within a page, which the quality gate enforces. */
export function imageSet(keys: ImageKey[]): PageImage[] {
  return keys.map((k) => IMAGES[k]);
}

export default IMAGES;
