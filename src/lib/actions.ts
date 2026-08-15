"use server";

/**
 * Intake submission handler.
 *
 * Validation is real and runs server-side. DELIVERY IS NOT WIRED UP — there
 * is no inbox to send to yet, because info.md found no email address, phone
 * number or form endpoint for this business.
 *
 * The submission is validated and logged so the flow can be tested end to
 * end, and the handoff point is marked below. See ASSETS-NEEDED.md.
 */

export type IntakeState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

const MAX = { name: 120, contact: 160, address: 240, violation: 80, message: 3000 };

function clean(value: FormDataEntryValue | null, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function submitIntake(
  _prev: IntakeState,
  formData: FormData,
): Promise<IntakeState> {
  // Honeypot — bots fill hidden fields, humans do not.
  if (clean(formData.get("company"), 100)) {
    return { status: "success", message: "Thanks — your details are in." };
  }

  const payload = {
    name: clean(formData.get("name"), MAX.name),
    contact: clean(formData.get("contact"), MAX.contact),
    address: clean(formData.get("address"), MAX.address),
    violationNumber: clean(formData.get("violationNumber"), MAX.violation),
    agency: clean(formData.get("agency"), 40),
    hearingDate: clean(formData.get("hearingDate"), 40),
    message: clean(formData.get("message"), MAX.message),
  };

  const errors: Record<string, string> = {};

  if (!payload.name) {
    errors.name = "Enter your name so we know who we’re speaking with.";
  }

  if (!payload.contact) {
    errors.contact = "Enter a phone number or email so we can send the review.";
  } else {
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.contact);
    const digits = payload.contact.replace(/\D/g, "");
    if (!looksLikeEmail && digits.length < 10) {
      errors.contact = "That doesn’t look like a complete phone number or email.";
    }
  }

  // The two fields the business actually asks for, per info.md.
  if (!payload.address) {
    errors.address = "The property address is needed to pull the record.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and send it again.",
      errors,
    };
  }

  // ---------------------------------------------------------------------
  // PLACEHOLDER — delivery is not connected.
  //
  // Replace this block with the real destination once the owner supplies
  // one. Options, in rough order of effort:
  //   • Transactional email (Resend / Postmark) to her business inbox
  //   • A shared inbox forward
  //   • A CRM or ticketing webhook
  //
  // Until then, submissions are logged server-side only and NOT delivered
  // to anyone. Do not launch without replacing this.
  // ---------------------------------------------------------------------
  console.info("[intake] PLACEHOLDER — not delivered:", payload);

  return {
    status: "success",
    message:
      "Your details are in. You’ll get a reading of your notice, and if there’s a deadline on it you’ll hear about that first.",
  };
}
