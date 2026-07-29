// VERIFIED FACTS ONLY.
//
// Every number in this file came from a citable source and was fetched, not
// recalled. Nothing here may be edited by hand to "look better" — if a figure
// changes, re-run the fetch and regenerate.
//
// SOURCES
//  - Population, dwellings, land area, density:
//      Statistics Canada, 2021 Census, Table 98-10-0002-01
//      "Population and dwelling counts: Canada, provinces and territories,
//       census divisions and census subdivisions"
//      https://www150.statcan.gc.ca/n1/tbl/csv/98100002-eng.zip
//  - Households, structural dwelling type, average household size:
//      Statistics Canada, 2021 Census, Table 98-10-0041-01
//      "Structural type of dwelling and household size"
//      https://www150.statcan.gc.ca/n1/tbl/csv/98100041-eng.zip
//  - Drive distance and time from Falcon's Niagara Falls base
//    (4551 Zimmerman Ave, geocoded via OpenStreetMap Nominatim):
//      OSRM public routing API, driving profile, no traffic model.
//      https://router.project-osrm.org/
//
// CAVEAT ON DRIVE TIMES: OSRM excludes live traffic. Always present distance
// (stable) as the primary figure and time as an approximate range. Never state
// a drive time as a guarantee.
//
// DERIVED FIELDS (plain arithmetic on the above, no estimation):
//  - populationChangePct  = (pop2021 - pop2016) / pop2016
//  - unoccupiedSharePct   = (totalDwellings - occupiedDwellings) / totalDwellings
//    NOTE: this counts dwellings with no *usual resident*. In shoreline and
//    tourism municipalities it largely reflects seasonal and short-term-rental
//    stock. Describe it as "not occupied by a usual resident", never as
//    "abandoned" or "vacant homes".

export interface CityFacts {
  slug: string;
  /** Census subdivision name, which may differ from the name people search. */
  censusName: string;
  /** Statistics Canada DGUID — lets anyone re-verify a figure. */
  dguid: string;
  population: number;
  population2016: number;
  populationChangePct: number;
  totalDwellings: number;
  occupiedDwellings: number;
  unoccupiedSharePct: number;
  landAreaKm2: number;
  densityPerKm2: number;
  households: number;
  apartmentSharePct: number;
  singleDetachedSharePct: number;
  avgHouseholdSize: number;
  /** Road distance in km from the Niagara Falls base. null = not routed. */
  driveKm: number | null;
  /** Free-flow driving minutes, excludes traffic. null = not routed. */
  driveMinutes: number | null;
}

export const cityFacts: Record<string, CityFacts> = {
  "st-catharines": {
    slug: "st-catharines",
    censusName: "St. Catharines",
    dguid: "2021A00053526053",
    population: 136803,
    population2016: 133113,
    populationChangePct: 2.8,
    totalDwellings: 61977,
    occupiedDwellings: 58903,
    unoccupiedSharePct: 5.0,
    landAreaKm2: 96.2,
    densityPerKm2: 1422.1,
    households: 58905,
    apartmentSharePct: 29.6,
    singleDetachedSharePct: 55.6,
    avgHouseholdSize: 2.3,
    driveKm: 19.4,
    driveMinutes: 19,
  },
  "niagara-falls": {
    slug: "niagara-falls",
    censusName: "Niagara Falls",
    dguid: "2021A00053526043",
    population: 94415,
    population2016: 88071,
    populationChangePct: 7.2,
    totalDwellings: 39778,
    occupiedDwellings: 37793,
    unoccupiedSharePct: 5.0,
    landAreaKm2: 210.25,
    densityPerKm2: 449.1,
    households: 37790,
    apartmentSharePct: 20.7,
    singleDetachedSharePct: 66.1,
    avgHouseholdSize: 2.5,
    driveKm: 0.3,
    driveMinutes: 1,
  },
  "welland": {
    slug: "welland",
    censusName: "Welland",
    dguid: "2021A00053526032",
    population: 55750,
    population2016: 52293,
    populationChangePct: 6.6,
    totalDwellings: 24530,
    occupiedDwellings: 23656,
    unoccupiedSharePct: 3.6,
    landAreaKm2: 81.16,
    densityPerKm2: 686.9,
    households: 23655,
    apartmentSharePct: 23.4,
    singleDetachedSharePct: 64.6,
    avgHouseholdSize: 2.3,
    driveKm: 27.8,
    driveMinutes: 28,
  },
  "fort-erie": {
    slug: "fort-erie",
    censusName: "Fort Erie",
    dguid: "2021A00053526003",
    population: 32901,
    population2016: 30710,
    populationChangePct: 7.1,
    totalDwellings: 15875,
    occupiedDwellings: 14081,
    unoccupiedSharePct: 11.3,
    landAreaKm2: 166.24,
    densityPerKm2: 197.9,
    households: 14080,
    apartmentSharePct: 12.7,
    singleDetachedSharePct: 82.6,
    avgHouseholdSize: 2.3,
    driveKm: 36.2,
    driveMinutes: 30,
  },
  "grimsby": {
    slug: "grimsby",
    censusName: "Grimsby",
    dguid: "2021A00053526065",
    population: 28883,
    population2016: 27314,
    populationChangePct: 5.7,
    totalDwellings: 11626,
    occupiedDwellings: 11395,
    unoccupiedSharePct: 2.0,
    landAreaKm2: 68.71,
    densityPerKm2: 420.4,
    households: 11395,
    apartmentSharePct: 10.1,
    singleDetachedSharePct: 64.5,
    avgHouseholdSize: 2.5,
    driveKm: 45.2,
    driveMinutes: 36,
  },
  "beamsville": {
    slug: "beamsville",
    censusName: "Lincoln",
    dguid: "2021A00053526057",
    population: 25719,
    population2016: 23787,
    populationChangePct: 8.1,
    totalDwellings: 9826,
    occupiedDwellings: 9555,
    unoccupiedSharePct: 2.8,
    landAreaKm2: 162.74,
    densityPerKm2: 158.0,
    households: 9555,
    apartmentSharePct: 8.2,
    singleDetachedSharePct: 69.8,
    avgHouseholdSize: 2.6,
    driveKm: 40.8,
    driveMinutes: 34,
  },
  "thorold": {
    slug: "thorold",
    censusName: "Thorold",
    dguid: "2021A00053526037",
    population: 23816,
    population2016: 18801,
    populationChangePct: 26.7,
    totalDwellings: 9856,
    occupiedDwellings: 9095,
    unoccupiedSharePct: 7.7,
    landAreaKm2: 83.29,
    densityPerKm2: 285.9,
    households: 9095,
    apartmentSharePct: 16.9,
    singleDetachedSharePct: 69.2,
    avgHouseholdSize: 2.6,
    driveKm: 13.7,
    driveMinutes: 16,
  },
  "port-colborne": {
    slug: "port-colborne",
    censusName: "Port Colborne",
    dguid: "2021A00053526011",
    population: 20033,
    population2016: 18306,
    populationChangePct: 9.4,
    totalDwellings: 10219,
    occupiedDwellings: 8710,
    unoccupiedSharePct: 14.8,
    landAreaKm2: 121.99,
    densityPerKm2: 164.2,
    households: 8710,
    apartmentSharePct: 20.6,
    singleDetachedSharePct: 70.5,
    avgHouseholdSize: 2.2,
    driveKm: 37.4,
    driveMinutes: 38,
  },
  "niagara-on-the-lake": {
    slug: "niagara-on-the-lake",
    censusName: "Niagara-on-the-Lake",
    dguid: "2021A00053526047",
    population: 19088,
    population2016: 17511,
    populationChangePct: 9.0,
    totalDwellings: 8578,
    occupiedDwellings: 7857,
    unoccupiedSharePct: 8.4,
    landAreaKm2: 131.35,
    densityPerKm2: 145.3,
    households: 7855,
    apartmentSharePct: 5.7,
    singleDetachedSharePct: 79.2,
    avgHouseholdSize: 2.4,
    driveKm: 20.8,
    driveMinutes: 26,
  },
  "fonthill": {
    slug: "fonthill",
    censusName: "Pelham",
    dguid: "2021A00053526028",
    population: 18192,
    population2016: 17110,
    populationChangePct: 6.3,
    totalDwellings: 7123,
    occupiedDwellings: 6959,
    unoccupiedSharePct: 2.3,
    landAreaKm2: 126.35,
    densityPerKm2: 144.0,
    households: 6960,
    apartmentSharePct: 8.9,
    singleDetachedSharePct: 82.8,
    avgHouseholdSize: 2.6,
    driveKm: 24.1,
    driveMinutes: 29,
  },
  "west-lincoln": {
    slug: "west-lincoln",
    censusName: "West Lincoln",
    dguid: "2021A00053526021",
    population: 15454,
    population2016: 14500,
    populationChangePct: 6.6,
    totalDwellings: 5422,
    occupiedDwellings: 5295,
    unoccupiedSharePct: 2.3,
    landAreaKm2: 387.02,
    densityPerKm2: 39.9,
    households: 5295,
    apartmentSharePct: 3.1,
    singleDetachedSharePct: 83.7,
    avgHouseholdSize: 2.9,
    driveKm: null,
    driveMinutes: null,
  },
  "wainfleet": {
    slug: "wainfleet",
    censusName: "Wainfleet",
    dguid: "2021A00053526014",
    population: 6887,
    population2016: 6372,
    populationChangePct: 8.1,
    totalDwellings: 3116,
    occupiedDwellings: 2615,
    unoccupiedSharePct: 16.1,
    landAreaKm2: 217.53,
    densityPerKm2: 31.7,
    households: 2615,
    apartmentSharePct: 1.5,
    singleDetachedSharePct: 95.8,
    avgHouseholdSize: 2.6,
    driveKm: null,
    driveMinutes: null,
  },
};

/** Falcon's operating base — origin for every drive distance above. */
export const BASE = {
  address: "4551 Zimmerman Ave, Niagara Falls, ON L2E 3M5",
  lat: 43.1081548,
  lon: -79.061949,
  citySlug: "niagara-falls",
} as const;

export function getCityFacts(slug: string): CityFacts | undefined {
  return cityFacts[slug];
}
