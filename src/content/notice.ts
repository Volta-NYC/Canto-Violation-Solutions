/**
 * Sample notice data for the hero anatomy diagram.
 *
 * HONESTY NOTE: this renders an ILLUSTRATION of a New York City violation
 * notice, not a reproduction of one. Every value is obviously synthetic
 * ("SAMPLE-0000000000"), no real BIN, address or respondent appears, and the
 * document carries a visible SAMPLE stamp. It exists to teach a visitor how
 * to read the piece of paper in their hand — nothing more. It must never be
 * made to look like a genuine issued document.
 *
 * Field structure is generalised across agencies rather than copied from any
 * one form, and deliberately states no dollar amounts and no deadline counts.
 */

export type NoticeField = {
  id: string;
  label: string;
  value: string;
  /** Spans the full width of the field grid. */
  wide?: boolean;
  /** Rendered in the urgency colour — only ever the hearing date. */
  urgent?: boolean;
};

export type NoticeSample = {
  slug: string;
  code: string;
  tab: string;
  issuer: string;
  title: string;
  fields: NoticeField[];
};

export type Annotation = {
  id: string;
  /** Which field on the sheet this points at. */
  field: string;
  label: string;
  body: string;
  /** Rendered in the urgency colour — only ever the hearing date. */
  urgent?: boolean;
};

/** The four things worth pointing at, in the order a panicking reader needs them. */
export const annotations: Annotation[] = [
  {
    id: "issuer",
    field: "issuer",
    label: "Who issued it",
    body: "Everything follows from this one line. Each agency runs its own procedure, its own paperwork and its own clock — so the name at the top decides how the whole matter gets resolved.",
  },
  {
    id: "number",
    field: "number",
    label: "The violation number",
    body: "The first of the two things we ask you for. It is how the record gets pulled, and it is usually printed largest on the notice.",
  },
  {
    id: "premises",
    field: "premises",
    label: "The property address",
    body: "The second. Between these two fields, the entire history of the matter can be looked up — which is why a free review needs nothing else to start.",
  },
  {
    id: "hearing",
    field: "hearing",
    label: "The hearing date, if there is one",
    body: "The most important thing on the page. Not every notice carries one — but where it does, failing to appear generally produces a default at a higher penalty than the charge itself.",
    urgent: true,
  },
];

export const noticeSamples: NoticeSample[] = [
  {
    slug: "dob-violations",
    code: "DOB",
    tab: "DOB",
    issuer: "Department of Buildings",
    title: "Notice of Violation",
    fields: [
      { id: "number", label: "Violation no.", value: "SAMPLE-0000000000" },
      { id: "issued", label: "Date issued", value: "—— / —— / ——" },
      { id: "premises", label: "Premises", value: "———— STREET, BROOKLYN NY", wide: true },
      { id: "class", label: "Class", value: "SAMPLE" },
      { id: "code", label: "Code section", value: "§ ——–——" },
      { id: "hearing", label: "Hearing date", value: "NOT APPLICABLE" },
      { id: "penalty", label: "Penalty", value: "PER SCHEDULE" },
    ],
  },
  {
    slug: "ecb-oath-violations",
    code: "ECB",
    tab: "ECB / OATH",
    issuer: "Environmental Control Board",
    title: "Notice of Violation and Hearing",
    fields: [
      { id: "number", label: "Summons no.", value: "SAMPLE-0000000000" },
      { id: "issued", label: "Date issued", value: "—— / —— / ——" },
      { id: "premises", label: "Premises", value: "———— STREET, BROOKLYN NY", wide: true },
      { id: "class", label: "Tribunal", value: "OATH HEARINGS DIVISION" },
      { id: "code", label: "Code section", value: "§ ——–——" },
      { id: "hearing", label: "Hearing date", value: "—— / —— / ——", urgent: true },
      { id: "penalty", label: "Penalty", value: "PER SCHEDULE" },
    ],
  },
  {
    slug: "hpd-violations",
    code: "HPD",
    tab: "HPD",
    issuer: "Housing Preservation & Development",
    title: "Notice of Violation",
    fields: [
      { id: "number", label: "Violation no.", value: "SAMPLE-0000000000" },
      { id: "issued", label: "Date issued", value: "—— / —— / ——" },
      { id: "premises", label: "Premises", value: "———— STREET, BROOKLYN NY", wide: true },
      { id: "class", label: "Hazard class", value: "SAMPLE" },
      { id: "code", label: "Code section", value: "§ ——–——" },
      { id: "hearing", label: "Certify by", value: "—— / —— / ——", urgent: true },
      { id: "penalty", label: "Penalty", value: "PER SCHEDULE" },
    ],
  },
  {
    slug: "fdny-violations",
    code: "FDNY",
    tab: "FDNY",
    issuer: "Fire Department of the City of New York",
    title: "Notice of Violation",
    fields: [
      { id: "number", label: "Violation no.", value: "SAMPLE-0000000000" },
      { id: "issued", label: "Date issued", value: "—— / —— / ——" },
      { id: "premises", label: "Premises", value: "———— STREET, BROOKLYN NY", wide: true },
      { id: "class", label: "Category", value: "LIFE SAFETY" },
      { id: "code", label: "Code section", value: "§ ——–——" },
      { id: "hearing", label: "Hearing date", value: "—— / —— / ——", urgent: true },
      { id: "penalty", label: "Penalty", value: "PER SCHEDULE" },
    ],
  },
  {
    slug: "stop-work-orders",
    code: "SWO",
    tab: "Stop Work Order",
    issuer: "Department of Buildings",
    title: "Stop Work Order",
    fields: [
      { id: "number", label: "Order no.", value: "SAMPLE-0000000000" },
      { id: "issued", label: "Date posted", value: "—— / —— / ——" },
      { id: "premises", label: "Premises", value: "———— STREET, BROOKLYN NY", wide: true },
      { id: "class", label: "Scope", value: "FULL / PARTIAL" },
      { id: "code", label: "Code section", value: "§ ——–——" },
      { id: "hearing", label: "Work status", value: "STOPPED — EFFECTIVE NOW", urgent: true },
      { id: "penalty", label: "Penalty", value: "PER SCHEDULE" },
    ],
  },
];

/**
 * The escalation timeline. This is the part owners consistently do not know,
 * and it is what actually motivates acting early.
 *
 * Deliberately states NO day counts and NO dollar figures — both vary by
 * agency and by class, and inventing them would be the one genuinely
 * dangerous thing this page could do. The shape of the escalation is the
 * information; the exact timings come from the review.
 */
export type Stage = {
  id: string;
  marker: string;
  title: string;
  body: string;
  severity: 0 | 1 | 2 | 3;
};

export const escalation: Stage[] = [
  {
    id: "served",
    marker: "Notice served",
    title: "You have the paper",
    body: "The clock is already running, and it started before it reached you.",
    severity: 0,
  },
  {
    id: "window",
    marker: "Correction window",
    title: "Fix it, and prove it",
    body: "The condition gets corrected and certified with the documentation the agency requires. Cheapest point on this line, by a wide margin.",
    severity: 0,
  },
  {
    id: "hearing",
    marker: "Hearing date",
    title: "Someone has to appear",
    body: "Where the notice carries a hearing, this date governs everything else on it.",
    severity: 1,
  },
  {
    id: "default",
    marker: "Default",
    title: "Nobody appeared",
    body: "A decision is entered against the property owner, generally at a higher penalty than the original charge.",
    severity: 2,
  },
  {
    id: "judgment",
    marker: "Judgment",
    title: "It becomes debt",
    body: "The penalty can be entered as a judgment and referred for collection. Reopening a default is now its own separate proceeding.",
    severity: 3,
  },
  {
    id: "sale",
    marker: "Sale / refinance",
    title: "It surfaces anyway",
    body: "Title companies and lenders find open violations. Owners routinely meet a matter they forgot about at the least convenient possible moment.",
    severity: 3,
  },
];
