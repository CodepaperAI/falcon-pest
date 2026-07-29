// Server component. It exists purely so /services can own its own <head>.
//
// This file used to BE the client component ("use client"), and a client
// component cannot export `metadata`. The route therefore silently inherited
// the root layout's metadata, which meant /services canonicalised to the
// homepage and reused its <title> — telling Google that the site's main
// service page was a duplicate of the homepage. The interactive parts now live
// in ./ServicesContent.jsx and the head is owned here.
import { getPageMetadata, jsonLd, JsonLd } from "../lib/seo";
import { ServicesContent } from "./ServicesContent";
import services from "../data/services";

export const metadata = getPageMetadata(
  "/services",
  "Pest Control Services in Niagara, Ontario",
  "Licensed pest control services across the Niagara Region — rodent, cockroach, ant, spider and quarterly protection plans for homes and businesses."
);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          jsonLd.website("/services"),
          jsonLd.breadcrumb([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]),
          ...services.map((s) =>
            jsonLd.service({
              name: s.title,
              description: s.description,
              path: "/services",
            })
          ),
        ]}
      />
      <ServicesContent />
    </>
  );
}
