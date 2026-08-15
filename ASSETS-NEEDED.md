# Assets & answers needed before launch

Everything on this site that is **not** traceable to `raw messy data/info.md` is
either marked `PLACEHOLDER` in the UI or listed here. Nothing about the business
has been invented.

Audit the whole site in one command:

```bash
grep -rn "PLACEHOLDER" src/
```

Every image placeholder is also tagged in the live DOM. Paste this into the
browser console on any page to dump the shot list for that page:

```js
[...document.querySelectorAll('[data-asset]')].map((el) => ({
  id: el.dataset.asset,
  priority: el.dataset.assetPriority,
  brief: el.dataset.assetBrief,
}));
```

---

## 1. Photography to request from the owner

Every image is currently a locally-generated SVG placeholder in `public/media/`.
Nothing loads from an external CDN. To swap in a real photo, drop the file into
`public/media/` and change one `src` in `src/content/media.ts` — the alt text is
already written for the real image.

### CRITICAL — the site looks unfinished without these

**`owner-portrait`** · used on `/about` and the home trust panel · vertical 4:5
A real photograph of Nasacha, replacing the AI-generated LinkedIn image (which
`info.md` confirms she considers an explicit placeholder). Natural light, plain
or softly blurred background, chest-up. Professional but warm — approachable
rather than corporate-stiff, since the entire brand goal is that someone who
just received a violation feels comfortable reaching out. Avoid a hard studio
white background.

**`logo-mark`** · header, footer, favicon, social sharing · square SVG + PNG
There is no confirmed logo. `info.md` could not view the Google Sites header
image (bot detection blocked it) and so never described it. The mark currently
in use is **original work created for this site**, not a reproduction of
anything existing. If the owner has existing branding, supply it. If not, this
mark can be developed further.

### HIGH — meaningfully improves credibility

**`owner-working`** · `/about` · landscape
Candid working shot: reviewing paperwork at a desk, or on the phone. This is
what makes the business read as a real person doing real work rather than a
template. Documents can be blurred or turned away from camera.

**`brooklyn-rowhouses`** · home + `/about` · landscape, wide
Brooklyn residential streetscape — brownstone or row-house facades, ideally flat
overcast light. Grounds the business in its stated service area. **An owner-shot
phone photo is fine here, and arguably better than stock.**

### NICE TO HAVE

**`facade-scaffolding`** · `/services` · vertical
Sidewalk shed / scaffolding on a NYC building — the most recognizable visual
shorthand for building compliance work in this city. Capturable on any block.

**`notice-document`** · home decoder panel · vertical
A photograph of a real notice of violation, **fully redacted**. Every address,
name, BIN and violation number must be blacked out or blurred, and it must not
be a live client's document. If no safe document exists, keep the placeholder.

---

## 2. Business facts the site cannot state without the owner

These render as visible `PLACEHOLDER` chips rather than plausible-looking fakes.
A fake phone number on a trust-driven site is worse than no phone number.

| Fact | Where it appears | Why it's blank |
|---|---|---|
| Phone number | Footer, `/contact` | NOT FOUND in any source |
| Email address | Footer, `/contact` | NOT FOUND in any source |
| Business hours | Footer, `/contact` | NOT FOUND in any source |
| Mailing address | Footer (currently omitted) | NOT FOUND — may be intentional for a home-based practice |
| LinkedIn URL | Footer (hidden until set) | Profile exists; URL was not captured in the brief |
| **"Are you an attorney?"** | `/faq` | The single most common question from a cautious property owner. The site must not guess. |
| Owner biography / origin story | `/about` | `info.md`: "Year established / bio / origin story: NOT FOUND — gated LinkedIn sections weren't accessible" |
| Licences or credentials held | `/about`, `/faq` | Never claimed anywhere on the site, because nothing is verified |

Edit these in `src/content/site.ts` and `src/content/faq.ts`.

---

## 3. Decisions the owner should confirm

**Service list reconciliation — resolved as the union, needs a sanity check.**
`info.md` found three different service lists across three sources. This site
uses the union of all three. Two items deserve explicit confirmation:

- **HPD violations** — on the Google Sites *Home* page but dropped from the
  *Contact* page. Included here. Is this an active service line?
- **Certificate of Correction & Permit Resolution** — appears *only* in the
  LinkedIn headline, and `info.md` describes that profile's content as mostly
  AI-generated. Included here as a full service page. Confirm it is real.

**"Canto Enterprises LLC."** Listed on LinkedIn alongside her name. `info.md`
flags it as unclear — parent company, separate venture, or an artifact of the
AI-generated draft. **Deliberately left off the site entirely** rather than
guessing at a corporate structure. Confirm whether it belongs anywhere.

**Domain name.** `src/content/site.ts` assumes
`https://cantoviolationsolutions.com` for canonical URLs, the sitemap, and
social sharing tags. Update it once the real domain is registered.

**Google Business Profile.** `info.md` confirms she hasn't registered one. For a
local service business, this is likely the single highest-leverage marketing
action available, and it also unlocks review collection — which is the trust
signal this site currently has to work without.

---

## 4. Engineering handoff

**The contact form does not deliver anywhere.** It validates properly
server-side (required fields, email/phone format, honeypot, length caps) and
returns a correct success state, but the delivery step is a `console.info` call.
There is no inbox to send to yet.

See the marked block in `src/lib/actions.ts`. Replace it with transactional
email (Resend, Postmark), a shared inbox forward, or a CRM webhook. **Do not
launch without this** — the form currently accepts leads and drops them.

---

## 5. Copy review

All prose describing NYC agency procedure is **draft copy** written from public
knowledge of how those agencies operate. It deliberately states:

- no dollar amounts
- no deadline day-counts
- no claims about this business's history, results, credentials, or licensure

Those omissions are intentional — every one of them varies by case or is
unverified. The owner should review the service and FAQ copy for accuracy before
launch. Each entry in `src/content/services.ts` carries a `source` field
recording which of the three original sources it came from.
