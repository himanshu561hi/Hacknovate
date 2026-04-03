import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Legal section card
function LegalSection({ icon, title, children }) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/[0.15] transition-all duration-300">
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-xl">
          {icon}
        </div>
        <h2 className="text-white font-bold text-xl pt-1.5">{title}</h2>
      </div>
      <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

// Highlight pill for data types
function DataPill({ label, color = "indigo" }) {
  const colors = {
    indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    green: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-md border text-xs font-medium ${colors[color]} mr-2 mb-2`}>
      {label}
    </span>
  );
}

export default function Legal() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
            Privacy &amp; Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Your Privacy Matters to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            This Privacy Policy explains how Edupath_AI collects, uses, and protects your personal data.
            We believe in full transparency.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5 text-sm text-slate-500">
            <span>Effective date: January 1, 2025</span>
            <span>·</span>
            <span>Last revised: March 2025</span>
          </div>
        </div>
      </section>

      {/* ── At A Glance ─────────────────────────────────────────────────── */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🚫", title: "No Data Selling", desc: "We never sell your personal information to third parties." },
              { icon: "🔒", title: "Encrypted Storage", desc: "All sensitive data is encrypted at rest and in transit." },
              { icon: "✅", title: "Your Rights", desc: "Access, correct, or delete your data at any time." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Legal Sections ──────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-5">

          <LegalSection icon="📋" title="Information We Collect">
            <p>We collect the following categories of information to provide and improve our Service:</p>
            <div className="mt-3">
              <h4 className="text-slate-200 font-semibold mb-2">Account &amp; Profile Data</h4>
              <div>
                <DataPill label="Name" />
                <DataPill label="Email address" />
                <DataPill label="Profile photo" />
                <DataPill label="Learning goals" />
                <DataPill label="Skill level" />
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-slate-200 font-semibold mb-2">Usage &amp; Learning Data</h4>
              <div>
                <DataPill label="Courses accessed" color="purple" />
                <DataPill label="Quiz responses" color="purple" />
                <DataPill label="Time spent learning" color="purple" />
                <DataPill label="Progress milestones" color="purple" />
                <DataPill label="AI interactions" color="purple" />
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-slate-200 font-semibold mb-2">Technical Data</h4>
              <div>
                <DataPill label="IP address" color="amber" />
                <DataPill label="Browser type" color="amber" />
                <DataPill label="Device info" color="amber" />
                <DataPill label="Cookies" color="amber" />
              </div>
            </div>
          </LegalSection>

          <LegalSection icon="⚙️" title="How We Use Your Data">
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-slate-200">Personalization:</strong> To generate and refine your AI learning path based on your goals and performance.
              </li>
              <li>
                <strong className="text-slate-200">Platform Improvement:</strong> To analyze usage patterns and improve our AI models, content, and features.
              </li>
              <li>
                <strong className="text-slate-200">Communications:</strong> To send you progress reports, product updates, and service notifications.
              </li>
              <li>
                <strong className="text-slate-200">Security:</strong> To detect and prevent fraud, abuse, and unauthorized access.
              </li>
              <li>
                <strong className="text-slate-200">Legal Compliance:</strong> To comply with applicable legal obligations and respond to lawful requests.
              </li>
            </ul>
            <p className="mt-2">
              We will never use your data for purposes materially different from those described without your explicit consent.
            </p>
          </LegalSection>

          <LegalSection icon="🤝" title="Data Sharing & Third Parties">
            <p>
              We do not sell, rent, or trade your personal information. We may share data with the following
              categories of third parties under strict confidentiality agreements:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  name: "AI Infrastructure Providers",
                  desc: "For processing AI tutoring requests. Data is anonymized where possible.",
                },
                {
                  name: "Payment Processors",
                  desc: "For handling billing. We never store full card details on our servers.",
                },
                {
                  name: "Analytics Tools",
                  desc: "Aggregate, anonymized data to understand platform usage patterns.",
                },
                {
                  name: "Email Service Providers",
                  desc: "For sending transactional and marketing communications.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-indigo-400 font-bold text-xs w-4 flex-shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="text-slate-200 font-semibold text-sm">{item.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection icon="🛡️" title="Data Security">
            <p>
              We implement industry-standard security measures to protect your personal data from unauthorized
              access, disclosure, alteration, or destruction:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { icon: "🔐", label: "AES-256 encryption at rest" },
                { icon: "🌐", label: "TLS 1.3 for data in transit" },
                { icon: "🔍", label: "Regular security audits" },
                { icon: "🏗️", label: "SOC 2 Type II compliant infrastructure" },
                { icon: "👤", label: "Role-based access controls" },
                { icon: "📡", label: "24/7 intrusion detection monitoring" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <span>{item.icon}</span>
                  <span className="text-slate-300 text-xs">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-3">
              No system is 100% secure. In the event of a data breach that affects your personal information,
              we will notify you within 72 hours as required by applicable law.
            </p>
          </LegalSection>

          <LegalSection icon="⚖️" title="Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { right: "Right to Access", desc: "Request a copy of all data we hold about you." },
                { right: "Right to Correction", desc: "Update or correct inaccurate personal information." },
                { right: "Right to Deletion", desc: "Request permanent deletion of your account and data." },
                { right: "Right to Portability", desc: "Receive your data in a structured, machine-readable format." },
                { right: "Right to Object", desc: "Opt out of certain types of data processing." },
                { right: "Right to Restrict", desc: "Limit how we process your data in specific circumstances." },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-indigo-300 font-semibold text-sm mb-1">{item.right}</p>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:privacy@edupathi.ai" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                privacy@edupathi.ai
              </a>
              . We will respond within 30 days.
            </p>
          </LegalSection>

          <LegalSection icon="🍪" title="Cookies Policy">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on Edupath_AI. The types
              of cookies we use:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <strong className="text-slate-200">Essential Cookies:</strong> Required for the platform to function. Cannot be disabled.
              </li>
              <li>
                <strong className="text-slate-200">Performance Cookies:</strong> Help us understand how users interact with the platform.
              </li>
              <li>
                <strong className="text-slate-200">Personalization Cookies:</strong> Remember your preferences and settings.
              </li>
              <li>
                <strong className="text-slate-200">Marketing Cookies:</strong> Used for targeted advertising (can be opted out of).
              </li>
            </ul>
            <p className="mt-3">
              You can manage cookie preferences via the Cookie Settings panel in your account or through your
              browser settings.
            </p>
          </LegalSection>

          <LegalSection icon="🧒" title="Children's Privacy">
            <p>
              Edupath_AI is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If we become aware that a child under 13 has provided us with
              personal information, we will take steps to delete such information immediately.
            </p>
            <p>
              For learners aged 13–17, parental or guardian consent is required. We offer a family plan with
              parental controls and progress monitoring features.
            </p>
          </LegalSection>

          <LegalSection icon="✉️" title="Contact & Data Protection Officer">
            <p>
              For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please
              contact our Data Protection Officer:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-sm">
              <p><strong className="text-slate-200">DPO Name:</strong> Priya Sharma</p>
              <p>
                <strong className="text-slate-200">Email:</strong>{" "}
                <a href="mailto:privacy@edupathi.ai" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                  privacy@edupathi.ai
                </a>
              </p>
              <p><strong className="text-slate-200">Address:</strong> Edupath_AI Technologies Pvt. Ltd., 42 Innovation Hub, Koramangala, Bengaluru, Karnataka 560034, India</p>
              <p><strong className="text-slate-200">Response Time:</strong> Within 30 days of receiving your request</p>
            </div>
          </LegalSection>

        </div>
      </section>

      <Footer />
    </div>
  );
}
