import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Team member card
function TeamCard({ name, role, emoji, bio }) {
  return (
    <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <h3 className="text-white font-bold text-lg">{name}</h3>
      <p className="text-indigo-400 text-sm font-medium mt-1 mb-3">{role}</p>
      <p className="text-slate-400 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

// Value pillar card
function ValueCard({ icon, title, desc }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/20 flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  const team = [
    {
      name: "Aryan Kapoor",
      role: "Founder & CEO",
      emoji: "🧠",
      bio: "Former ML engineer at a top tech firm. Passionate about democratizing education through AI.",
    },
    {
      name: "Sneha Reddy",
      role: "Head of AI",
      emoji: "🤖",
      bio: "PhD in Machine Learning. Built the adaptive learning engine that powers Edupath_AI.",
    },
    {
      name: "Kabir Nair",
      role: "Lead Designer",
      emoji: "🎨",
      bio: "Product designer with a decade of experience crafting intuitive learning interfaces.",
    },
    {
      name: "Meera Singh",
      role: "Curriculum Director",
      emoji: "📚",
      bio: "10+ years in edtech. Ensures our learning paths are pedagogically sound and effective.",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Personalization First",
      desc: "Every learner is unique. Our AI respects that by creating truly individual paths.",
    },
    {
      icon: "🌍",
      title: "Access for All",
      desc: "Quality education shouldn't be a luxury. We're committed to affordability and inclusivity.",
    },
    {
      icon: "⚡",
      title: "Speed & Efficiency",
      desc: "We optimize for the fastest path to mastery without sacrificing depth or understanding.",
    },
    {
      icon: "🔒",
      title: "Privacy & Trust",
      desc: "Your data belongs to you. We never sell personal information and use it only to improve your learning.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Learners" },
    { value: "500+", label: "Learning Paths" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "40+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
            We believe learning should be{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              personal
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Edupath_AI was born from a simple frustration: why do millions of learners follow the same generic curriculum when every person's mind, background, and goals are completely different?
          </p>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {s.value}
              </div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-5 leading-tight">
              Democratizing world-class education with AI
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Our mission is to give every learner on the planet access to the kind of personalized, expert guidance that was once reserved for those who could afford private tutors and elite institutions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We combine the latest advances in large language models, adaptive learning theory, and instructional design to build a platform that grows with you — meeting you exactly where you are and guiding you to where you want to be.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <div className="space-y-4">
                {[
                  { label: "Personalization Score", value: 98, color: "from-indigo-500 to-purple-500" },
                  { label: "Learning Efficiency", value: 85, color: "from-purple-500 to-pink-500" },
                  { label: "Learner Satisfaction", value: 97, color: "from-blue-500 to-indigo-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-white font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-500 text-xs mt-6">Based on 2024 learner surveys</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Our Vision</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6 leading-tight">
            A world where anyone can master anything
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We envision a future where your zip code, socioeconomic background, or access to top-tier institutions no longer determines the quality of your education. Edupath_AI is our contribution toward making that future real — today.
          </p>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Values</span>
            <h2 className="text-3xl font-black text-white mt-3">What drives us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ValueCard key={i} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Team</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                builders
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A passionate team of educators, engineers, and designers united by the belief that learning should be personal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
