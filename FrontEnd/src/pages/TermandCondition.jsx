import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Terms section block
function TermsSection({ id, number, title, children }) {
  return (
    <div id={id} className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/[0.15] transition-all duration-300 scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-black">
          {number}
        </span>
        <h2 className="text-white font-bold text-xl">{title}</h2>
      </div>
      <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

// Sidebar TOC
function TableOfContents({ sections, active, onClick }) {
  return (
    <div className="sticky top-24 hidden lg:block">
      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
        <h3 className="text-white font-semibold text-sm mb-4">Table of Contents</h3>
        <ul className="space-y-1">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => onClick(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                  active === s.id
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-slate-600 mr-2">{s.number}</span>
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TermandCondition() {
  const [activeSection, setActiveSection] = useState("s1");

  const sections = [
    { id: "s1", number: "1.", title: "Acceptance of Terms" },
    { id: "s2", number: "2.", title: "User Accounts" },
    { id: "s3", number: "3.", title: "Subscription & Billing" },
    { id: "s4", number: "4.", title: "Acceptable Use Policy" },
    { id: "s5", number: "5.", title: "Intellectual Property" },
    { id: "s6", number: "6.", title: "AI-Generated Content" },
    { id: "s7", number: "7.", title: "Privacy & Data" },
    { id: "s8", number: "8.", title: "Disclaimers" },
    { id: "s9", number: "9.", title: "Limitation of Liability" },
    { id: "s10", number: "10.", title: "Termination" },
    { id: "s11", number: "11.", title: "Governing Law" },
    { id: "s12", number: "12.", title: "Contact Us" },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Terms &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using Edupath_AI. By accessing or using our platform,
            you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5 text-sm text-slate-500">
            <span>Last updated: March 2025</span>
            <span>·</span>
            <span>Version 2.1</span>
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex gap-8">
          {/* TOC Sidebar */}
          <div className="w-64 flex-shrink-0">
            <TableOfContents sections={sections} active={activeSection} onClick={scrollTo} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 min-w-0">

            {/* Intro notice */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
              <span className="text-lg flex-shrink-0">⚠️</span>
              <p className="text-amber-200 text-sm leading-relaxed">
                <strong>Important:</strong> These terms constitute a legally binding agreement between you and Edupath_AI Technologies Pvt. Ltd. By creating an account, you acknowledge that you have read, understood, and agree to these terms.
              </p>
            </div>

            <TermsSection id="s1" number="1." title="Acceptance of Terms">
              <p>
                By accessing or using the Edupath_AI platform ("Service"), you agree to be bound by these Terms and
                Conditions ("Terms"), our Privacy Policy, and any other policies we may publish. If you do not agree
                to these Terms, you may not use our Service.
              </p>
              <p>
                We may update these Terms periodically. Your continued use of the Service after any changes
                constitutes acceptance of the modified Terms. We will notify registered users of material changes
                via email.
              </p>
            </TermsSection>

            <TermsSection id="s2" number="2." title="User Accounts">
              <p>To access most features of Edupath_AI, you must create an account. You agree to:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Provide accurate, complete, and current information during registration.</li>
                <li>Maintain the confidentiality of your login credentials.</li>
                <li>Be responsible for all activities that occur under your account.</li>
                <li>Immediately notify us of any unauthorized use of your account.</li>
                <li>Not share account credentials with any third party.</li>
              </ol>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms or that appear to be
                fraudulent, abusive, or otherwise harmful to other users or the platform.
              </p>
            </TermsSection>

            <TermsSection id="s3" number="3." title="Subscription & Billing">
              <p>
                Edupath_AI offers both free and paid subscription plans. Paid plans are billed on a recurring basis
                (monthly or annually) depending on the plan you select.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>All subscription fees are billed in advance.</li>
                <li>Prices are listed in Indian Rupees (INR) unless otherwise stated.</li>
                <li>We reserve the right to modify pricing with 30 days' written notice.</li>
                <li>Taxes may be added to your subscription price as required by law.</li>
                <li>Auto-renewal occurs unless cancelled before the renewal date.</li>
              </ul>
            </TermsSection>

            <TermsSection id="s4" number="4." title="Acceptable Use Policy">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Violate any applicable laws or regulations.</li>
                <li>Engage in cheating, academic dishonesty, or misrepresentation of credentials.</li>
                <li>Scrape, crawl, or extract data from the platform without authorization.</li>
                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                <li>Attempt to gain unauthorized access to any part of the platform.</li>
                <li>Transmit viruses, malware, or any other harmful code.</li>
                <li>Harass, threaten, or impersonate other users or staff.</li>
                <li>Use the AI tutor to generate content for submission as original academic work without disclosure.</li>
              </ul>
            </TermsSection>

            <TermsSection id="s5" number="5." title="Intellectual Property">
              <p>
                All content on the Edupath_AI platform — including but not limited to text, graphics, course
                materials, AI-generated learning paths, software, logos, and trademarks — is the exclusive property
                of Edupath_AI Technologies Pvt. Ltd. or its licensors.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to access and use the Service for
                your personal, non-commercial educational purposes. You may not reproduce, distribute, modify, or
                create derivative works from any content without our express written permission.
              </p>
            </TermsSection>

            <TermsSection id="s6" number="6." title="AI-Generated Content">
              <p>
                Edupath_AI uses artificial intelligence to generate learning paths, explanations, quiz questions, and
                other educational content. You acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>AI-generated content may occasionally contain inaccuracies or errors.</li>
                <li>AI content is intended as a learning aid, not a substitute for professional advice.</li>
                <li>We continuously work to improve accuracy but cannot guarantee perfection.</li>
                <li>You should verify critical information through authoritative sources.</li>
              </ul>
            </TermsSection>

            <TermsSection id="s7" number="7." title="Privacy & Data">
              <p>
                Your privacy is important to us. Our use of your personal data is governed by our Privacy Policy,
                which is incorporated into these Terms by reference. Key points:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>We collect data to personalize and improve your learning experience.</li>
                <li>We do not sell your personal information to third parties.</li>
                <li>You can request deletion of your data at any time.</li>
                <li>Please refer to our full Privacy Policy for details.</li>
              </ul>
            </TermsSection>

            <TermsSection id="s8" number="8." title="Disclaimers">
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted, error-free, or free from viruses or other
                harmful components. We make no guarantees regarding specific learning outcomes, employment
                opportunities, or skill acquisition timelines.
              </p>
            </TermsSection>

            <TermsSection id="s9" number="9." title="Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EDUPATH_AI SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR
                GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
              </p>
              <p>
                Our total aggregate liability to you for any claim arising from or relating to the Service shall not
                exceed the amounts paid by you to us in the twelve (12) months preceding the claim.
              </p>
            </TermsSection>

            <TermsSection id="s10" number="10." title="Termination">
              <p>
                Either party may terminate the agreement at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your right to access the Service ceases immediately.</li>
                <li>Paid subscriptions are not refunded unless within the 30-day guarantee window.</li>
                <li>We retain the right to delete your account data after 90 days.</li>
                <li>Provisions that by their nature survive termination will remain in effect.</li>
              </ul>
            </TermsSection>

            <TermsSection id="s11" number="11." title="Governing Law">
              <p>
                These Terms are governed by and construed in accordance with the laws of India, without regard to
                its conflict of law provisions. Any disputes arising from these Terms shall be subject to the
                exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.
              </p>
            </TermsSection>

            <TermsSection id="s12" number="12." title="Contact Us">
              <p>If you have any questions about these Terms, please contact us:</p>
              <div className="mt-3 p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <p><strong className="text-slate-300">Email:</strong>{" "}
                  <a href="mailto:legal@edupathi.ai" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                    legal@edupathi.ai
                  </a>
                </p>
                <p><strong className="text-slate-300">Address:</strong> Edupath_AI Technologies Pvt. Ltd., 42 Innovation Hub, Koramangala, Bengaluru, Karnataka 560034, India</p>
                <p><strong className="text-slate-300">Support Hours:</strong> Monday–Friday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </TermsSection>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
