import { Link } from "react-router-dom";

// Global footer with links, social icons, and branding
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white text-xs font-black">E</span>
              </div>
              <span className="font-black text-lg tracking-tight">
                <span className="text-white">Edupath</span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">_AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              An AI-powered learning platform that personalizes your educational journey, tracks your progress, and helps you master any skill faster than ever before.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {["𝕏", "in", "▶", "⬡"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/30 flex items-center justify-center text-slate-400 hover:text-indigo-400 text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Features", to: "/" },
                { label: "Pricing", to: "/" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Privacy Policy", to: "/legal" },
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Refund Policy", to: "/refund" },
                { label: "Cookie Policy", to: "/legal" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} <span className="text-slate-400">Edupath_AI</span>. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with ❤️ for learners worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
