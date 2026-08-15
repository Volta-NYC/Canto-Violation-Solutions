/**
 * The engagement, as a real sequence.
 *
 * PROVENANCE: info.md, Contact page — the four items it lists beyond the
 * violation types are "correction coordination, contractor coordination,
 * paperwork/filings, and agency follow-up". Those are not separate services;
 * they are the stages of one engagement, so they are modelled here.
 *
 * The intake stage comes from the Contact page's own instruction to send
 * "the property address and violation number for a free quote", and the
 * pricing note from "review the basic case information... provide pricing
 * for the services needed".
 *
 * Numbering is used on this page and nowhere else on the site, because this
 * is the only content where order actually carries information.
 */

export type ProcessStep = {
  id: string;
  title: string;
  /** The short verb form used in compact summaries. */
  label: string;
  body: string;
  detail: string[];
  source: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "review",
    label: "Review",
    title: "Send the notice. Get a straight answer.",
    body:
      "You send the property address and the violation number. That is enough to pull the record and see what you are actually dealing with — which agency issued it, what was cited, whether there is a hearing date, and how much time is genuinely on the clock.",
    detail: [
      "No charge for the initial review.",
      "You get told what the notice means in plain English.",
      "If there is a deadline, you hear about it first, not last.",
    ],
    source:
      "Contact page: 'the property address and violation number for a free quote'",
  },
  {
    id: "quote",
    label: "Quote",
    title: "Pricing based on the case, not a price list.",
    body:
      "Once the basic case information has been reviewed, you get pricing for the work the matter actually needs. Violations vary enormously in what they require — a paperwork correction and a full permit resolution are not the same job, and pricing them the same would only be accurate for one of them.",
    detail: [
      "Quoted after review, so the number reflects the real scope.",
      "Scope is explained before anything begins.",
      "You decide whether to proceed with the full picture in hand.",
    ],
    source:
      "info.md Pricing: quote-based, not fixed — 'review the basic case information... provide pricing for the services needed'",
  },
  {
    id: "correct",
    label: "Correct",
    title: "Coordinating the correction and the contractors.",
    body:
      "Most violations require something physical to change before any filing will be accepted. Where licensed trades or a design professional are needed, that work gets coordinated and sequenced correctly — because doing the work in the wrong order is one of the most common reasons a correction gets rejected later.",
    detail: [
      "Correction scope confirmed against exactly what was cited.",
      "Contractor and design professional coordination.",
      "Work sequenced so the filing that follows will hold up.",
    ],
    source: "Contact page: 'correction coordination, contractor coordination'",
  },
  {
    id: "file",
    label: "File",
    title: "The paperwork, prepared properly the first time.",
    body:
      "Corrections are closed out by filings, and filings are rejected for documentation reasons far more often than for substantive ones. The supporting package gets assembled in full — permits, sign-offs, photographs, professional certification — before anything is submitted.",
    detail: [
      "Filings and supporting documentation prepared in full.",
      "Submitted to the correct agency in the correct form.",
      "Rejections responded to and re-filed.",
    ],
    source: "Contact page: 'paperwork/filings'",
  },
  {
    id: "close",
    label: "Close",
    title: "Followed through until the record is actually clear.",
    body:
      "A filing that has been submitted is not a violation that has been closed. The matter gets tracked through agency review to acceptance, and you are told when the record is genuinely clear — which is the only point at which any of this is finished.",
    detail: [
      "Agency follow-up through to a decision.",
      "Hearing appearance where the matter calls for one.",
      "Confirmation once the violation is closed of record.",
    ],
    source: "Contact page: 'agency follow-up' + Home: 'OATH hearing representation'",
  },
];
