/**
 * FAQ + acronym decoder.
 *
 * COPY STATUS: DRAFT. Written to answer what a property owner holding a fresh
 * notice actually wants to know. Deliberately states no dollar figures, no
 * deadline day-counts, and no claims about this business's track record,
 * licensure, or years in operation — none of which appear in any source.
 *
 * Questions marked `needsOwnerInput: true` cannot be answered truthfully
 * until the owner supplies the fact. They are listed in ASSETS-NEEDED.md.
 */

export type FaqItem = {
  question: string;
  answer: string;
  group: "starting" | "process" | "working";
  needsOwnerInput?: boolean;
};

export const faqGroups = [
  { id: "starting", label: "If you just got a notice" },
  { id: "process", label: "How resolution works" },
  { id: "working", label: "Working together" },
] as const;

export const faqs: FaqItem[] = [
  {
    group: "starting",
    question: "I just received a violation. What is the first thing I should do?",
    answer:
      "Look for a hearing date. If the notice has one, that date governs everything else and missing it is far more expensive than the original penalty. If there is no hearing date, find the agency name and the violation number at the top of the notice — those two things determine the entire correction path. Then send them over and get a straight read on what you are holding.",
  },
  {
    group: "starting",
    question: "Does a violation go against me or against the building?",
    answer:
      "In most cases it attaches to the property record rather than to you personally. That is why open violations resurface years later during a sale or a refinance, often for owners who assumed a matter had been handled. It also means resolving them protects the asset, not just your immediate peace of mind.",
  },
  {
    group: "starting",
    question: "The condition is already fixed. Am I done?",
    answer:
      "Usually not. Fixing the condition and closing the violation are two separate things. Until a certificate of correction is filed and accepted with the documentation the agency requires, the violation stays open on the record and penalties can keep running against a problem that no longer exists. This is one of the most common and most costly misunderstandings.",
  },
  {
    group: "starting",
    question: "What do DOB, HPD, ECB and OATH actually stand for?",
    answer:
      "DOB is the Department of Buildings, which handles construction and code conditions. HPD is Housing Preservation & Development, which handles residential habitability. ECB is the Environmental Control Board, whose summonses carry a penalty and a hearing date. OATH is the Office of Administrative Trials and Hearings — the tribunal where those summonses are actually contested. Different agencies, different rules, different clocks.",
  },
  {
    group: "process",
    question: "Can a violation be dismissed entirely?",
    answer:
      "Sometimes. It depends on the facts, on how the summons was drafted and served, and on what the record shows. That question can only be answered honestly after reviewing the actual notice — anyone who promises a dismissal before seeing your paperwork is guessing.",
  },
  {
    group: "process",
    question: "Do I have to attend the hearing myself?",
    answer:
      "Not necessarily. OATH hearings can be handled by a representative, and hearings may be held in person, by phone, or online depending on the matter. The thing that cannot happen is nobody appearing at all — that generally produces a default at a higher penalty than the one originally charged.",
  },
  {
    group: "process",
    question: "How long does resolution take?",
    answer:
      "It varies with the agency and with what the condition requires. A documentation correction moves quickly. A matter involving physical work, licensed trades, permits and a re-inspection takes longer, because each of those stages has its own queue. You will get a realistic picture after the review rather than an optimistic one before it.",
  },
  {
    group: "process",
    question: "What happens if I simply ignore it?",
    answer:
      "It does not go away, and it usually gets more expensive. Penalties accrue, defaults are entered, open conditions block permits and sign-offs, and in some cases the city performs the work itself and bills you for it. The version of this problem you have today is almost always the cheapest version of it you will ever have.",
  },
  {
    group: "working",
    question: "How much does this cost?",
    answer:
      "Pricing is quoted per case rather than from a fixed price list. The basic case information gets reviewed first, and pricing for the services the matter actually needs follows from that. The initial review itself is free.",
  },
  {
    group: "working",
    question: "What do you need from me to get started?",
    answer:
      "The property address and the violation number. That is genuinely enough to begin — everything else can be pulled from the record or asked for once the picture is clear.",
  },
  {
    group: "working",
    question: "Which areas do you serve?",
    answer:
      "New York City. The agencies involved — DOB, HPD, ECB/OATH, DOT, FDNY — are all city agencies with city-specific procedure, which is exactly why local familiarity matters on this kind of work.",
  },
  {
    group: "working",
    question: "Are you an attorney?",
    answer:
      "PLACEHOLDER — this needs the owner’s own answer before launch. It is one of the first questions a cautious property owner asks, and the site should not guess at it.",
    needsOwnerInput: true,
  },
];
