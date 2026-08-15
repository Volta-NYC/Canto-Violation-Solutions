import Link from "next/link";
import { services, type Service } from "@/content/services";
import { ArrowRight } from "@/components/ui";

/**
 * The agency index.
 *
 * Replaces what used to be a grid of identical "eyebrow / title / summary /
 * Read more →" cards — the single most template-looking thing on the site,
 * and nine of them in a row.
 *
 * A dense reference table is both more useful and more honest about what this
 * business is: someone holding a notice wants to scan for their agency and
 * see, in one glance, whether there is a hearing involved and what actually
 * closes the matter out. Density reads as substance; nine airy cards read as
 * filler.
 */

const hearingLabel: Record<string, string> = {
  "dob-violations": "No — correction filing",
  "hpd-violations": "No — certify by class",
  "ecb-oath-violations": "Yes — at OATH",
  "dot-violations": "No — re-inspection",
  "fdny-violations": "Possible — via OATH",
  "stop-work-orders": "No — rescission request",
  "local-law-152": "No — scheduled filing",
  "oath-hearing-representation": "Yes — that is the service",
  "certificate-of-correction": "No — it is the closeout",
};

const closesWith: Record<string, string> = {
  "dob-violations": "Certificate of correction",
  "hpd-violations": "Certification of correction",
  "ecb-oath-violations": "Hearing decision",
  "dot-violations": "Repair to DOT spec",
  "fdny-violations": "Correction + certification",
  "stop-work-orders": "Order rescinded",
  "local-law-152": "Inspection certified",
  "oath-hearing-representation": "Decision explained",
  "certificate-of-correction": "Agency acceptance",
};

function Row({ service }: { service: Service }) {
  return (
    <tr className="group border-b border-rule transition-colors hover:bg-white">
      <th scope="row" className="py-5 pr-4 text-left align-top sm:pr-6">
        <Link
          href={`/services/${service.slug}`}
          className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-signal"
        >
          {service.code}
        </Link>
      </th>
      <td className="py-5 pr-4 align-top sm:pr-6">
        <Link
          href={`/services/${service.slug}`}
          className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink"
        >
          <span className="link-underline">{service.name}</span>
        </Link>
        <p className="mt-1.5 max-w-sm text-[0.8125rem] leading-relaxed text-body">
          {service.summary}
        </p>
      </td>
      <td className="hidden py-5 pr-4 align-top text-[0.8125rem] text-body sm:pr-6 md:table-cell">
        {service.agency}
      </td>
      <td className="hidden py-5 pr-4 align-top text-[0.8125rem] sm:pr-6 lg:table-cell">
        <span
          className={
            hearingLabel[service.slug]?.startsWith("Yes")
              ? "font-medium text-signal"
              : "text-body"
          }
        >
          {hearingLabel[service.slug]}
        </span>
      </td>
      <td className="hidden py-5 align-top text-[0.8125rem] text-body lg:table-cell">
        {closesWith[service.slug]}
      </td>
      <td className="py-5 pl-2 align-top">
        <Link
          href={`/services/${service.slug}`}
          aria-label={`${service.name} — read more`}
          className="inline-flex text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
        >
          <ArrowRight />
        </Link>
      </td>
    </tr>
  );
}

export function AgencyIndex() {
  return (
    // No `min-w` on the table: the columns are already progressively hidden
    // at md/lg, so forcing a minimum only pushed the whole DOCUMENT wider than
    // the viewport on mobile. `overflow-x-auto` stays purely as a safety net.
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Every violation type handled, by issuing agency, whether a hearing is
          involved, and what closes the matter out
        </caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th scope="col" className="field-label py-3 pr-4 text-muted sm:pr-6">
              Code
            </th>
            <th scope="col" className="field-label py-3 pr-4 text-muted sm:pr-6">
              Matter
            </th>
            <th
              scope="col"
              className="field-label hidden py-3 pr-4 text-muted sm:pr-6 md:table-cell"
            >
              Issued by
            </th>
            <th
              scope="col"
              className="field-label hidden py-3 pr-4 text-muted sm:pr-6 lg:table-cell"
            >
              Hearing
            </th>
            <th
              scope="col"
              className="field-label hidden py-3 text-muted lg:table-cell"
            >
              Closes with
            </th>
            <th scope="col" className="w-8">
              <span className="sr-only">Link</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <Row key={service.slug} service={service} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
