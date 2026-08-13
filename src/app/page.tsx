import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Flame,
  Gavel,
  HardHat,
  Phone,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "DOB Violations",
    description:
      "Review notices, identify the required corrections, and coordinate the paperwork needed to move toward dismissal.",
    icon: Building2,
  },
  {
    title: "HPD Violations",
    description:
      "Support owners with housing maintenance violations, compliance steps, certifications, and follow-through.",
    icon: ShieldCheck,
  },
  {
    title: "ECB / OATH Hearings",
    description:
      "Prepare owners for hearings, organize evidence, and help present the facts clearly when a summons needs a response.",
    icon: Gavel,
  },
  {
    title: "Stop Work Orders",
    description:
      "Help property teams understand what triggered the order and what needs to happen before work can resume.",
    icon: HardHat,
  },
  {
    title: "FDNY & DOT Matters",
    description:
      "Coordinate next steps for agency notices involving fire safety, sidewalks, streets, and property conditions.",
    icon: Flame,
  },
  {
    title: "Local Law 152",
    description:
      "Guide owners through gas piping inspection requirements, filing timelines, and documentation needs.",
    icon: ClipboardList,
  },
];

const process = [
  "Send the notice, summons, or violation number.",
  "Get a plain-English review of what the agency is asking for.",
  "Receive a step-by-step plan with deadlines and required documents.",
  "Move through filings, hearings, corrections, and follow-up.",
];

const trustPoints = [
  "NYC-focused agency knowledge",
  "Clear communication for busy owners",
  "Practical next steps, not legal jargon",
  "Help from notice review through resolution",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f3] text-[#17211b]">
      <section className="border-b border-[#dfe4d7] bg-[#f7f8f3]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a className="flex items-center gap-3" href="#top">
              <span className="grid size-11 place-items-center rounded-md bg-[#1f5c45] text-base font-bold text-white">
                CV
              </span>
              <span>
                <span className="block text-base font-semibold">
                  Canto Violation Solutions
                </span>
                <span className="block text-sm text-[#657266]">
                  NYC property violation help
                </span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#4d5b51]">
              <a className="rounded-md px-3 py-2 hover:bg-white" href="#services">
                Services
              </a>
              <a className="rounded-md px-3 py-2 hover:bg-white" href="#process">
                Process
              </a>
              <a className="rounded-md px-3 py-2 hover:bg-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div
            id="top"
            className="grid items-center gap-12 pb-8 pt-3 lg:grid-cols-[1.04fr_0.96fr] lg:pb-16 lg:pt-10"
          >
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#c8d4c3] bg-white px-3 py-2 text-sm font-semibold text-[#1f5c45]">
                <BadgeCheck className="size-4" aria-hidden="true" />
                DOB, HPD, ECB/OATH, DOT, FDNY, SWO & Local Law 152
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] text-[#101712] sm:text-6xl lg:text-7xl">
                NYC property violations handled with calm, clear direction.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5b51]">
                Canto Violation Solutions helps property owners understand
                agency notices, plan the right next steps, and work toward
                resolving violations before they become bigger problems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1f5c45] px-5 text-base font-semibold text-white shadow-sm transition hover:bg-[#174835]"
                  href="#contact"
                >
                  Get a Free Quote
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#c8d4c3] bg-white px-5 text-base font-semibold text-[#17211b] transition hover:border-[#9fb097]"
                  href="tel:+10000000000"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call to Review a Notice
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 -top-6 h-20 rounded-md bg-[#d9e4cf]" />
              <div className="relative overflow-hidden rounded-md border border-[#c8d4c3] bg-white shadow-xl shadow-[#203023]/10">
                <div className="border-b border-[#e4e8df] bg-[#f3f5ee] px-6 py-4">
                  <p className="text-sm font-semibold text-[#657266]">
                    Example Case Review
                  </p>
                </div>
                <div className="space-y-6 p-6">
                  <div>
                    <p className="text-sm font-semibold uppercase text-[#7a5743]">
                      Agency Notice
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#17211b]">
                      OATH summons with compliance deadline
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Notice reviewed",
                      "Deadline identified",
                      "Evidence checklist prepared",
                      "Next filing mapped",
                    ].map((item) => (
                      <div
                        className="flex min-h-16 items-center gap-3 rounded-md border border-[#e4e8df] bg-[#fbfcf8] p-3"
                        key={item}
                      >
                        <CheckCircle2
                          className="size-5 shrink-0 text-[#1f5c45]"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-[#38443c]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-md bg-[#17211b] p-5 text-white">
                    <p className="text-sm font-medium text-[#b9c6b1]">
                      Owner takeaway
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      You know what happened, what matters next, and what to do
                      before the agency deadline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {trustPoints.map((point) => (
            <div className="flex items-center gap-3" key={point}>
              <CheckCircle2 className="size-5 shrink-0 text-[#1f5c45]" />
              <p className="font-medium text-[#38443c]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#eef2e8] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#7a5743]">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#101712]">
              Support for the notices NYC property owners actually receive.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="rounded-md border border-[#d7dece] bg-white p-6"
                  key={service.title}
                >
                  <Icon className="size-7 text-[#1f5c45]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-[#17211b]">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#4d5b51]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase text-[#7a5743]">
              Process
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#101712]">
              A violation notice should come with a plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4d5b51]">
              The first conversation is designed to reduce uncertainty. Canto
              reviews what you received, explains what the agency is asking for,
              and outlines the path forward in practical language.
            </p>
          </div>
          <ol className="grid gap-4">
            {process.map((step, index) => (
              <li
                className="flex gap-4 rounded-md border border-[#e1e6dc] bg-[#fbfcf8] p-5"
                key={step}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#1f5c45] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg font-medium text-[#27332b]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="bg-[#17211b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:px-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-[#d9e4cf]">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Free quote and notice review
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Get clear next steps before the deadline gets closer.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c7d1c0]">
              Send the violation, summons, or agency notice and Canto will help
              you understand what it means, what is urgent, and what should
              happen next.
            </p>
          </div>
          <div className="rounded-md border border-white/15 bg-white p-6 text-[#17211b]">
            <FileSearch className="size-8 text-[#1f5c45]" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold">
              Ready for the real contact details
            </h3>
            <p className="mt-3 leading-7 text-[#4d5b51]">
              Replace this panel with the preferred phone number, email address,
              service area language, and any intake form once those are final.
            </p>
            <a
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1f5c45] px-5 font-semibold text-white transition hover:bg-[#174835]"
              href="mailto:hello@example.com"
            >
              Email Canto Violation Solutions
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
