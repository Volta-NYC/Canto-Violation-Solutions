"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitIntake, type IntakeState } from "@/lib/actions";
import { services } from "@/content/services";

const initialState: IntakeState = { status: "idle" };

const fieldBase =
  "w-full rounded-[3px] border bg-white px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

function FieldWrap({
  label,
  htmlFor,
  hint,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="field-label flex items-baseline gap-2 text-body"
      >
        {label}
        {optional ? (
          <span className="font-sans text-[0.6875rem] tracking-normal text-muted normal-case">
            optional
          </span>
        ) : null}
      </label>
      <div className="mt-2.5">{children}</div>
      {error ? (
        <p className="mt-2 text-sm text-signal" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-2 text-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-[3px] bg-ink px-6 py-4 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-700 disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending…" : "Send for a free review"}
    </button>
  );
}

export function IntakeForm() {
  const [state, formAction] = useActionState(submitIntake, initialState);
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="document p-8 sm:p-10" role="status">
        <p className="field-label text-clear">Received</p>
        <h3 className="mt-4 text-2xl text-ink">
          Thanks — that&rsquo;s everything needed to start.
        </h3>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-body">
          {state.message}
        </p>
        <div className="mt-8 border-t border-rule pt-6">
          <p className="text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-signal">
              Developer note:
            </strong>{" "}
            this form validates correctly but does not deliver anywhere yet —
            there is no inbox configured. See{" "}
            <code className="font-mono text-[0.8125rem]">src/lib/actions.ts</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="document p-6 sm:p-9" noValidate>
      {state.status === "error" && state.message ? (
        <p
          className="mb-7 border-l-2 border-signal bg-signal-soft/50 px-4 py-3 text-sm font-medium text-signal"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <FieldWrap label="Your name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={`${fieldBase} ${errors.name ? "border-signal" : "border-rule"}`}
            placeholder="Full name"
          />
        </FieldWrap>

        <FieldWrap
          label="Phone or email"
          htmlFor="contact"
          error={errors.contact}
        >
          <input
            id="contact"
            name="contact"
            autoComplete="email"
            required
            className={`${fieldBase} ${errors.contact ? "border-signal" : "border-rule"}`}
            placeholder="However you’d rather be reached"
          />
        </FieldWrap>
      </div>

      <div className="mt-8 border-t border-rule pt-8">
        <p className="field-label mb-6 text-muted">From your notice</p>

        <div className="grid gap-6">
          <FieldWrap
            label="Property address"
            htmlFor="address"
            error={errors.address}
            hint="Street address of the property the notice concerns."
          >
            <input
              id="address"
              name="address"
              autoComplete="street-address"
              required
              className={`${fieldBase} ${errors.address ? "border-signal" : "border-rule"}`}
              placeholder="123 Example Street, Brooklyn, NY"
            />
          </FieldWrap>

          <div className="grid gap-6 sm:grid-cols-2">
            <FieldWrap
              label="Violation number"
              htmlFor="violationNumber"
              optional
              hint="If you have it in front of you."
            >
              <input
                id="violationNumber"
                name="violationNumber"
                className={`${fieldBase} border-rule font-mono tracking-wider`}
                placeholder="————————"
              />
            </FieldWrap>

            <FieldWrap label="Issuing agency" htmlFor="agency" optional>
              <select
                id="agency"
                name="agency"
                defaultValue=""
                className={`${fieldBase} border-rule appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="%23635d51" stroke-width="1.3" stroke-linecap="round"/></svg>')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
              >
                <option value="">Not sure</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.code}>
                    {s.code} — {s.shortName}
                  </option>
                ))}
              </select>
            </FieldWrap>
          </div>

          <FieldWrap
            label="Hearing date, if there is one"
            htmlFor="hearingDate"
            optional
            hint="If your notice shows a hearing date, this is the most important thing on it."
          >
            <input
              id="hearingDate"
              name="hearingDate"
              type="date"
              className={`${fieldBase} border-rule`}
            />
          </FieldWrap>

          <FieldWrap
            label="Anything else"
            htmlFor="message"
            optional
            hint="Work already done, deadlines you know about, or what you’re most worried about."
          >
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${fieldBase} border-rule resize-y`}
              placeholder="Optional"
            />
          </FieldWrap>
        </div>
      </div>

      {/* Honeypot — hidden from people and assistive tech alike. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-9 flex flex-col gap-5 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="max-w-xs text-sm leading-relaxed text-muted">
          The review is free. Pricing comes after, once the case is understood.
        </p>
      </div>
    </form>
  );
}
