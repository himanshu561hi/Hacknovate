import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Hero gradient orbs ──────────────────────────────────────────────────────
function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500" />
    </div>
  );
}

// ── Feature card ────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div
      className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ── Step card ───────────────────────────────────────────────────────────────
function StepCard({ step, title, desc }) {
  return (
    <div className="flex gap-5 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
        {step}
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ── Testimonial card ────────────────────────────────────────────────────────
function TestimonialCard({ name, role, text, avatar }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
          {avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Home page ──────────────────────────────────────────────────────────
export default function Home() {
  const features = [
    {
      icon: "🤖",
      title: "AI Tutor",
      desc: "Get instant, personalized explanations from our intelligent AI tutor available 24/7 to answer your questions.",
    },
    {
      icon: "🗺️",
      title: "Personalized Learning Path",
      desc: "Our AI analyzes your goals and skill level to create a custom roadmap designed just for you.",
    },
    {
      icon: "📊",
      title: "Skill Tracking",
      desc: "Visualize your progress with detailed analytics and track every milestone on your learning journey.",
    },
    {
      icon: "🎯",
      title: "Smart Assessment",
      desc: "Adaptive quizzes that adjust in real-time to challenge you at exactly the right difficulty level.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      desc: "Tell us your goals, current skill level, and how much time you can dedicate to learning each day.",
    },
    {
      step: "02",
      title: "Get Your AI Learning Path",
      desc: "Our AI engine generates a fully personalized curriculum tailored to your unique needs.",
    },
    {
      step: "03",
      title: "Learn & Practice",
      desc: "Engage with interactive lessons, AI-guided exercises, and real-world projects.",
    },
    {
      step: "04",
      title: "Track & Achieve",
      desc: "Monitor your growth, earn certificates, and land your dream opportunities.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer",
      avatar: "A",
      text: "Edupath_AI completely transformed how I learn new tech skills. The AI tutor feels like having a mentor available 24/7.",
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      avatar: "P",
      text: "The personalized learning path is incredibly accurate. It knew exactly where my gaps were and filled them efficiently.",
    },
    {
      name: "Rohan Mehta",
      role: "UX Designer",
      avatar: "R",
      text: "I went from zero to landing a job in 4 months. The smart assessments kept me challenged without overwhelming me.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <HeroOrbs />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 hover:bg-indigo-500/20 transition-all duration-300 cursor-default">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Powered by Advanced AI Technology
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Learning Path
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Stop following generic courses. Edupath_AI builds a personalized curriculum around{" "}
            <span className="text-slate-200">your goals</span>, adapts in real-time, and helps you master
            any skill faster than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Started Free
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              ▶ Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-slate-950 flex items-center justify-center text-white text-xs font-bold"
                >
                  {l}
                </div>
              ))}
            </div>
            <span>
              <span className="text-white font-semibold">10,000+</span> learners already on their AI path
            </span>
          </div>
        </div>
      </section>

      {/* ── Features Section ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Features</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                learn smarter
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our AI-powered tools work together to create the most effective learning experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                it works
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Go from sign-up to mastery in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((s, i) => (
              <StepCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              Loved by{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                learners
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Glow blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
          <div className="relative p-12 sm:p-16 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Start your AI learning
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                journey today
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of learners who've accelerated their careers with personalized AI guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
                Get Started — It's Free
              </button>
              <button className="px-8 py-4 text-white font-bold rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                View Pricing
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-5">No credit card required · Free forever plan available</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
