import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Section heading component
function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-black flex-shrink-0">
        {number}
      </div>
      <h2 className="text-white font-bold text-xl">{title}</h2>
    </div>
  );
}

// Policy block
function PolicyBlock({ number, title, children }) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/[0.15] transition-all duration-300">
      <SectionHeading number={number} title={title} />
      <div className="text-slate-400 text-sm leading-relaxed space-y-3 pl-11">{children}</div>
    </div>
  );
}

export default function Refund() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            Refund Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Refund &amp; Cancellation
            </span>{" "}
            Policy
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We want you to love Edupath_AI. If you're not satisfied, we'll make it right. Please read our policy below.
          </p>
          <p className="text-slate-600 text-sm mt-4">Last updated: March 2025</p>
        </div>
      </section>

      {/* ── Policy Content ───────────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-5">

          {/* Overview Banner */}
          <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <p className="text-indigo-200 text-sm leading-relaxed">
              <strong>Quick Summary:</strong> We offer a 30-day money-back guarantee on all paid plans. If you're
              not happy within your first 30 days, contact us for a full refund — no questions asked.
            </p>
          </div>

          <PolicyBlock number="01" title="30-Day Money-Back Guarantee">
            <p>
              Edupath_AI offers a <strong className="text-slate-200">30-day money-back guarantee</strong> for all new
              paid subscriptions (Monthly, Quarterly, and Annual plans). If you are not completely satisfied with
              your purchase within the first 30 days of your subscription, we will issue a full refund.
            </p>
            <p>
              This guarantee applies to first-time purchases only. Refund requests must be submitted within 30
              calendar days from the date of initial payment.
            </p>
          </PolicyBlock>

          <PolicyBlock number="02" title="Eligibility Criteria">
            <p>To be eligible for a refund, the following conditions must be met:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>The refund request must be made within <strong className="text-slate-300">30 days</strong> of the original purchase date.</li>
              <li>Your account must not have violated our Terms and Conditions.</li>
              <li>The request must come from the account holder (verified email address).</li>
              <li>Only first-time purchases of a specific plan tier are eligible.</li>
              <li>Accounts used to complete more than 80% of a course's content are not eligible.</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock number="03" title="Non-Refundable Items">
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Renewals and auto-renewed subscriptions (except in special circumstances)</li>
              <li>Add-on purchases such as additional AI credits or premium content packs</li>
              <li>One-time course purchases after 30 days of purchase</li>
              <li>Gift cards and promotional credits</li>
              <li>Accounts that have been suspended for policy violations</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock number="04" title="How to Request a Refund">
            <p>Requesting a refund is simple:</p>
            <ol className="list-decimal list-inside space-y-2 text-slate-400">
              <li>Log in to your <strong className="text-slate-300">Edupath_AI account</strong>.</li>
              <li>Navigate to <em>Settings → Billing → Request Refund</em>.</li>
              <li>Select your reason from the dropdown and add optional notes.</li>
              <li>Submit your request. You'll receive a confirmation email within 24 hours.</li>
            </ol>
            <p className="mt-3">
              Alternatively, you can email us at{" "}
              <a href="mailto:support@edupathi.ai" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                support@edupathi.ai
              </a>{" "}
              with your registered email address and order ID.
            </p>
          </PolicyBlock>

          <PolicyBlock number="05" title="Refund Processing Timeline">
            <p>
              Once your refund request is approved, the following timelines apply:
            </p>
            <div className="space-y-3 mt-2">
              {[
                { method: "Credit / Debit Card", time: "5–10 business days" },
                { method: "UPI / Net Banking", time: "3–7 business days" },
                { method: "PayPal", time: "3–5 business days" },
                { method: "Wallet (if applicable)", time: "1–3 business days" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-slate-300 text-sm">{row.method}</span>
                  <span className="text-indigo-400 text-sm font-medium">{row.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-3">
              Please note that processing times may vary depending on your bank or payment provider. We have no
              control over delays on the receiving end.
            </p>
          </PolicyBlock>

          <PolicyBlock number="06" title="Subscription Cancellation">
            <p>
              You can cancel your subscription at any time from <em>Settings → Billing → Cancel Subscription</em>.
              Upon cancellation:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Your access remains active until the end of your current billing period.</li>
              <li>You will not be charged again after cancellation.</li>
              <li>Cancellation does not automatically trigger a refund unless within the 30-day window.</li>
              <li>Your data and progress are retained for 90 days after cancellation.</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock number="07" title="Special Circumstances">
            <p>
              We understand that life happens. If you face exceptional circumstances (e.g., medical emergency, technical
              issues preventing platform access, duplicate charges), please reach out to us directly. We review such
              cases on an individual basis and will always try to find a fair resolution.
            </p>
          </PolicyBlock>

          <PolicyBlock number="08" title="Changes to This Policy">
            <p>
              Edupath_AI reserves the right to modify this Refund Policy at any time. Changes will be communicated
              via email and reflected on this page with an updated date. Continued use of the platform following
              any changes constitutes acceptance of the revised policy.
            </p>
          </PolicyBlock>

          {/* Contact Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center">
            <h3 className="text-white font-bold text-lg mb-2">Still have questions?</h3>
            <p className="text-slate-400 text-sm mb-4">Our support team is available Monday–Friday, 9am–6pm IST.</p>
            <a
              href="mailto:support@edupathi.ai"
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
