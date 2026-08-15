/**
 * The service model.
 *
 * RECONCILIATION NOTE — info.md flags three overlapping-but-different service
 * lists across three sources:
 *   1. Google Sites HOME:    DOB, HPD, ECB/OATH, DOT, FDNY, Stop Work Orders,
 *                            Local Law 152, OATH hearing representation
 *   2. Google Sites CONTACT: same minus HPD, plus correction coordination,
 *                            contractor coordination, paperwork/filings,
 *                            agency follow-up
 *   3. LinkedIn headline:    DOB, ECB, OATH, Certificate of Correction &
 *                            Permit Resolution
 *
 * Resolution: the UNION of all three. Items 1 and 2's coordination/filing
 * items are not standalone services — they are the engagement itself, so
 * they live in `process.ts` rather than here.
 *
 * Every entry carries `source` so nothing on this site is untraceable.
 *
 * COPY STATUS: `summary`, `whatItIs`, `ifIgnored` and `whatWeDo` are DRAFT
 * copy written from public knowledge of how these NYC agencies operate. They
 * describe process in general terms and deliberately state no dollar amounts,
 * no deadline counts, and no claims about this business's history, results,
 * or credentials. The owner must review before launch.
 */

export type ServiceCategory = "violations" | "orders" | "compliance" | "resolution";

export type Service = {
  slug: string;
  /** Full page title. */
  name: string;
  /** Short label for nav, chips, and the decoder. */
  shortName: string;
  /** Agency acronym as it appears printed on the notice. */
  code: string;
  /** What the acronym stands for — the FAQ decoder ring. */
  agency: string;
  category: ServiceCategory;
  /** One line, plain English: what you are actually holding. */
  decoded: string;
  summary: string;
  whatItIs: string;
  ifIgnored: string[];
  whatWeDo: string[];
  /** Which of the three sources this service came from. */
  source: string;
};

export const services: Service[] = [
  {
    slug: "dob-violations",
    name: "DOB Violations",
    shortName: "DOB",
    code: "DOB",
    agency: "NYC Department of Buildings",
    category: "violations",
    decoded:
      "The Department of Buildings has cited a condition at your property that does not meet the construction or building code.",
    summary:
      "Notices from the Department of Buildings covering construction, code and permit conditions at your property.",
    whatItIs:
      "A DOB violation is issued when an inspector finds a condition at your property that does not comply with the NYC Construction Codes or the Zoning Resolution — anything from work performed without a permit to a facade, boiler or elevator condition flagged during inspection. The violation stays attached to the property record, not to you personally, which is why it follows the building through a sale or refinance.",
    ifIgnored: [
      "The violation remains open on the property’s DOB record indefinitely.",
      "Open violations can block permits, sign-offs and a new or amended Certificate of Occupancy.",
      "Title companies and lenders routinely surface open violations during a sale or refinance.",
      "Related civil penalties can continue to accrue until the condition is corrected and certified.",
    ],
    whatWeDo: [
      "Pull the full violation record and identify exactly what was cited and under which code section.",
      "Determine what physical correction, if any, the condition requires.",
      "Coordinate the licensed contractor or design professional needed to perform and sign off the work.",
      "Prepare and file the correction paperwork, then follow the filing through to agency acceptance.",
    ],
    source: "Google Sites Home + Contact + LinkedIn headline — all three sources",
  },
  {
    slug: "hpd-violations",
    name: "HPD Violations",
    shortName: "HPD",
    code: "HPD",
    agency: "NYC Housing Preservation & Development",
    category: "violations",
    decoded:
      "Housing Preservation & Development has cited a habitability condition in a residential building.",
    summary:
      "Housing maintenance code conditions in residential buildings, classified by how urgent the agency considers them.",
    whatItIs:
      "HPD violations concern residential habitability — heat and hot water, leaks, mold, pests, peeling paint, missing smoke or carbon monoxide detectors. They are classified by hazard level, and the class determines both how quickly the agency expects correction and how it treats certification. HPD violations are frequently the result of a tenant complaint routed through 311.",
    ifIgnored: [
      "Uncertified violations stay on the building record and are publicly visible.",
      "Higher-hazard classes can lead the agency to correct the condition itself and bill the owner.",
      "Open violations affect the building’s standing in HPD programs and can complicate financing.",
      "Unresolved conditions can escalate into Housing Court proceedings.",
    ],
    whatWeDo: [
      "Review every open violation on the building and sort it by class and correction deadline.",
      "Coordinate the repair work the cited conditions actually require.",
      "File the certification of correction within the window the class allows.",
      "Follow up with the agency and handle re-inspection if one is scheduled.",
    ],
    source:
      "Google Sites Home only — note: the Contact page drops HPD. Reconciled IN per the union decision.",
  },
  {
    slug: "ecb-oath-violations",
    name: "ECB / OATH Violations",
    shortName: "ECB/OATH",
    code: "ECB",
    agency: "Environmental Control Board, heard at OATH",
    category: "violations",
    decoded:
      "You have been summonsed to a hearing, and there is a date on that notice you cannot miss.",
    summary:
      "Summonses carrying a monetary penalty and a scheduled hearing date at the Office of Administrative Trials and Hearings.",
    whatItIs:
      "An ECB violation is a summons that carries both a civil penalty and a hearing date. The hearing happens at OATH, the city’s independent administrative tribunal. Unlike a straightforward code violation, an ECB summons is an adversarial proceeding — someone has to appear, respond to the charge, and present evidence. Doing nothing is itself a decision, and it is the worst one available.",
    ifIgnored: [
      "Failing to appear typically results in a default decision against the property owner.",
      "Default penalties are generally higher than the penalty originally charged.",
      "The resulting debt can be entered as a judgment and referred for collection.",
      "Vacating a default after the fact is possible but adds time, cost and uncertainty.",
    ],
    whatWeDo: [
      "Confirm the hearing date and calendar it immediately — this is the first thing we check.",
      "Review the summons for defects in how the charge was drafted or served.",
      "Assemble the documentary evidence the tribunal will actually want to see.",
      "Appear at the hearing and present the case on your behalf.",
    ],
    source: "Google Sites Home + Contact + LinkedIn headline — all three sources",
  },
  {
    slug: "dot-violations",
    name: "DOT Violations",
    shortName: "DOT",
    code: "DOT",
    agency: "NYC Department of Transportation",
    category: "violations",
    decoded:
      "The Department of Transportation has cited a condition in the public way outside your property.",
    summary:
      "Sidewalk, roadway and street-opening conditions in the public right-of-way adjoining your property.",
    whatItIs:
      "DOT violations cover the public way in front of and around your building — defective or trip-hazard sidewalk flags, work in the roadway, street openings, and permit conditions attached to that work. Sidewalk violations in particular catch owners off guard, because the city holds the adjoining property owner responsible for maintaining that sidewalk.",
    ifIgnored: [
      "Sidewalk violations remain of record against the property and surface at sale.",
      "The city can perform the repair itself and bill the cost back to the owner.",
      "An open defective-sidewalk violation is a factor in premises liability if someone is injured.",
      "Permit-related violations can hold up the underlying construction work.",
    ],
    whatWeDo: [
      "Identify the exact flags or roadway conditions cited and their location on the record.",
      "Coordinate a contractor to perform repair to DOT specification.",
      "File for the permits the repair itself requires, where applicable.",
      "Request the re-inspection needed to have the violation dismissed.",
    ],
    source: "Google Sites Home + Contact",
  },
  {
    slug: "fdny-violations",
    name: "FDNY Violations",
    shortName: "FDNY",
    code: "FDNY",
    agency: "Fire Department of the City of New York",
    category: "violations",
    decoded:
      "The Fire Department has cited a fire-safety or life-safety condition.",
    summary:
      "Fire and life-safety conditions — suppression systems, egress, alarms, permits and required certifications.",
    whatItIs:
      "FDNY violations address fire and life safety: sprinkler and standpipe systems, fire alarms, means of egress, extinguisher servicing, and the permits or certificates of fitness required for certain equipment and operations. Because these are life-safety conditions, the department treats them urgently and the correction path is often more prescriptive than other agencies'.",
    ifIgnored: [
      "Life-safety conditions can prompt an order affecting occupancy or use of the space.",
      "Penalties accrue and the matter can be referred to OATH for a hearing.",
      "Open FDNY conditions can affect insurance and commercial lease obligations.",
      "Required certifications lapse further the longer the underlying issue sits.",
    ],
    whatWeDo: [
      "Read the notice against the specific fire code section cited.",
      "Coordinate the licensed contractor or system specialist the correction requires.",
      "Assemble inspection reports, test records and certifications as documentation.",
      "File the correction and follow it through department review.",
    ],
    source: "Google Sites Home + Contact",
  },
  {
    slug: "stop-work-orders",
    name: "Stop Work Orders",
    shortName: "Stop Work Orders",
    code: "SWO",
    agency: "NYC Department of Buildings",
    category: "orders",
    decoded:
      "Work at your property must stop now. This is the most time-sensitive notice on this list.",
    summary:
      "A full or partial order halting construction until the underlying condition is corrected and the order is lifted.",
    whatItIs:
      "A Stop Work Order halts construction at the property — either entirely, or partially for a specific portion of the work. It is posted at the site and it is enforced. Continuing to work in violation of an active SWO draws its own separate and substantially more serious penalties. An SWO is not something to work around; it is something to lift, in the correct order, as quickly as possible.",
    ifIgnored: [
      "Working in violation of an active order carries its own escalating penalties.",
      "Every day the order stands is a day of stalled schedule and carrying cost.",
      "The order blocks related permit activity and inspection sign-offs.",
      "Repeat violations of the order draw progressively harsher enforcement.",
    ],
    whatWeDo: [
      "Establish precisely what triggered the order and what scope it covers.",
      "Sequence the corrections and filings the agency requires before it will consider a rescission.",
      "Coordinate the contractor and design professional work needed to satisfy those conditions.",
      "Request rescission and push the request through to a decision.",
    ],
    source: "Google Sites Home + Contact",
  },
  {
    slug: "local-law-152",
    name: "Local Law 152 Gas Piping",
    shortName: "Local Law 152",
    code: "LL152",
    agency: "NYC Department of Buildings",
    category: "compliance",
    decoded:
      "Your building is on a recurring gas piping inspection cycle, and a filing is due.",
    summary:
      "The recurring gas piping inspection and certification cycle required of most NYC buildings.",
    whatItIs:
      "Local Law 152 requires periodic inspection of exposed gas piping by a licensed master plumber, on a cycle determined by the building’s community district. The inspection produces a report, and that report has to be certified and filed with the Department of Buildings. Unlike a violation, this one is predictable — it is a deadline you can plan for, and missing it is what turns it into a violation.",
    ifIgnored: [
      "Missing the filing deadline results in a penalty and an open condition on the record.",
      "Unresolved conditions found during inspection require their own corrections and re-filing.",
      "Non-compliance compounds across cycles if it is not caught.",
      "Buildings can fall out of cycle entirely and need remediation to get back on schedule.",
    ],
    whatWeDo: [
      "Confirm which inspection cycle your building’s community district falls into.",
      "Coordinate the licensed master plumber inspection.",
      "Prepare and file the certification with the Department of Buildings.",
      "Handle any conditions the inspection surfaces before the deadline closes.",
    ],
    source: "Google Sites Home + Contact",
  },
  {
    slug: "oath-hearing-representation",
    name: "OATH Hearing Representation",
    shortName: "OATH Hearings",
    code: "OATH",
    agency: "Office of Administrative Trials and Hearings",
    category: "resolution",
    decoded:
      "There is a hearing scheduled, and someone needs to appear and make the case.",
    summary:
      "Preparation and appearance at the city’s administrative tribunal, so you do not have to face the hearing alone.",
    whatItIs:
      "OATH is the city’s independent administrative tribunal — where summonses issued by DOB, FDNY, Sanitation and other agencies are actually contested. Hearings can be held in person, by phone, or online, and they run on evidence and procedure. Showing up unprepared and not showing up at all produce closer outcomes than most owners expect.",
    ifIgnored: [
      "Not appearing generally produces a default judgment at a higher penalty.",
      "The opportunity to contest the underlying charge is lost.",
      "Reopening a default is a separate proceeding with its own standard to meet.",
      "The resulting debt can be referred for collection against the owner.",
    ],
    whatWeDo: [
      "Review the summons and identify the defenses actually available on these facts.",
      "Gather the evidence, records and proof of correction the tribunal expects.",
      "Prepare the argument and the exhibits in the format the hearing officer will use.",
      "Appear and represent you at the hearing, then explain the decision in plain English.",
    ],
    source: "Google Sites Home + LinkedIn headline",
  },
  {
    slug: "certificate-of-correction",
    name: "Certificate of Correction & Permit Resolution",
    shortName: "Certificate of Correction",
    code: "CoC",
    agency: "NYC Department of Buildings",
    category: "resolution",
    decoded:
      "The work is done — now it has to be certified and accepted, or the violation stays open.",
    summary:
      "The filing that actually closes a violation out, plus resolution of the permit issues underneath it.",
    whatItIs:
      "Fixing the condition does not close the violation. A Certificate of Correction is the filing that tells the agency the condition has been corrected, supported by the documentation the agency requires — proof of permit, sign-off, photographs, professional certification. Rejected certificates are common, usually because the supporting documentation was incomplete rather than because the work was wrong.",
    ifIgnored: [
      "The violation stays open on the record even though the physical work is finished.",
      "Penalties can continue to run against a condition that has already been fixed.",
      "The open record still blocks permits, sign-offs and certificate of occupancy work.",
      "Owners routinely discover the violation was never closed years later, at sale.",
    ],
    whatWeDo: [
      "Confirm the correction actually satisfies what was cited before anything is filed.",
      "Resolve the underlying permit issues — missing permits, expired permits, open applications.",
      "Assemble the full supporting package the agency requires, the first time.",
      "File the certificate and track it through acceptance, responding to any rejection.",
    ],
    source:
      "LinkedIn headline only — 'Certificate of Correction & Permit Resolution'. Reconciled IN per the union decision. Confirm with owner that this is an active service line.",
  },
];

export const categories: {
  id: ServiceCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "violations",
    label: "Violations by agency",
    description:
      "Find the agency printed at the top of your notice. That determines nearly everything about how the matter gets resolved.",
  },
  {
    id: "orders",
    label: "Orders & work stoppages",
    description:
      "Notices that stop work at the property rather than simply cite a condition. These move fastest.",
  },
  {
    id: "compliance",
    label: "Recurring compliance",
    description:
      "Deadlines that arrive on a schedule. Handled on time, these never become violations at all.",
  },
  {
    id: "resolution",
    label: "Hearings & closing out",
    description:
      "Contesting what was charged, and making sure a corrected condition is actually recorded as corrected.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
