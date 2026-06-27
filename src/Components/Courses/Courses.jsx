import { FaCheckCircle, FaUserGraduate, FaBriefcase, FaLaptopCode, FaGlobe } from "react-icons/fa";
import img1 from "../../assets/law1.jpg";
import img2 from "../../assets/law2.jpg";
import img3 from "../../assets/law3.jpg";
import img4 from "../../assets/law4.jpg";

function LawCoursePage() {
  const highlights = [
    "6 Months Live Expert Training",
    "54+ Live Sessions",
    "Draft 24+ Legal Contracts",
    "Freelancing on Upwork & LinkedIn",
    "Personal Feedback on Assignments",
    "AI Tools for Legal Practice",
  ];

  const structure = [
    { month: "Month 1-2", title: "Contract Fundamentals & Basics", desc: "Understand the core anatomy of valid agreements." },
    { month: "Month 3", title: "International Contracts & Negotiation", desc: "Master cross-border drafting and client negotiation." },
    { month: "Month 4", title: "IPR, Tech Agreements & Website Terms", desc: "Draft SaaS, NDA, and privacy policies." },
    { month: "Month 5", title: "Real Estate Agreements", desc: "Learn property and rental legal drafting." },
    { month: "Month 6", title: "Corporate & Business Contracts", desc: "Work on real business legal structures." },
  ];

  const testimonials = [
    { name: "Brooklyn Simmons", role: "Law Student", text: "Amazing course helped me start freelancing confidently." },
    { name: "Jane Cooper", role: "Legal Intern", text: "Very practical learning with real contract drafting exposure." },
    { name: "Esther Howard", role: "Associate", text: "The best investment for my legal career growth." },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* ================= HERO (DARK ONLY) ================= */}
      <section className="relative text-center pt-32 pb-24 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff7a18,transparent_60%)] opacity-30"></div>

        <span className="text-orange-400 uppercase tracking-widest text-sm font-semibold">
          Lawctopus Law School
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          Master Contract Drafting <br /> & Freelancing Skills
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
          Become a professional legal drafter with real-world contracts, freelancing mastery, and AI-powered tools.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold shadow-lg">
            Enroll Now
          </button>
          <button className="border border-gray-500 px-8 py-3 rounded-full hover:border-orange-400">
            View Curriculum
          </button>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Course Highlights</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex gap-3"
            >
              <FaCheckCircle className="text-orange-500 text-xl mt-1" />
              <p className="font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      {/* ================= WHY JOIN (ATTRACTIVE + 3 IMAGES + 4 POINTS) ================= */}
<section className="mt-24 bg-gradient-to-r from-orange-50 to-blue-50 py-20 px-6">

  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Why You Should Join</h2>
    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
      Learn practical legal drafting, freelancing skills, and AI tools with real-world exposure.
    </p>
  </div>

  <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-12 items-center">

    {/* ================= IMAGES (CRISS-CROSS STYLE) ================= */}
    {/* ================= IMAGES (4 IMAGE CRISS-CROSS GRID) ================= */}
{/* ================= IMAGES (OVERLAPPING PREMIUM STYLE) ================= */}
<div className="relative flex items-center justify-center">

  {/* VERTICAL MAIN IMAGE */}
  <div className="relative w-[280px] md:w-[320px]">

    <img
      src={img3}
      alt="main vertical"
      className="rounded-3xl shadow-2xl h-[480px] w-full object-cover"
    />

    <span className="absolute bottom-4 left-4 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full shadow">
      💼 Career Growth
    </span>

  </div>

  {/* TOP LEFT FLOATING IMAGE */}
 <div className="relative flex items-center justify-center w-full h-[420px]">

  {/* LEFT IMAGE */}
  <div className="absolute left-6 top-20 z-10 rotate-[-6deg] hover:rotate-0 transition duration-300">
    <img
      src={img2}
      alt="law 2"
      className="w-44 h-36 object-cover rounded-2xl shadow-xl"
    />
    <span className="absolute bottom-2 left-2 bg-white/90 text-gray-800 text-[10px] px-2 py-1 rounded-full shadow">
      📚 Study
    </span>
  </div>

  {/* CENTER MAIN VERTICAL IMAGE */}
  <div className="relative z-20">
    <img
      src={img1}
      alt="law main"
      className="w-56 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
    />
    <span className="absolute bottom-3 left-3 bg-white/90 text-gray-800 text-[11px] px-3 py-1 rounded-full shadow">
      ⚖️ Training
    </span>
  </div>

  {/* RIGHT IMAGE */}
  <div className="absolute right-6 top-28 z-10 rotate-[6deg] hover:rotate-0 transition duration-300">
    <img
      src={img3}
      alt="law 3"
      className="w-44 h-36 object-cover rounded-2xl shadow-xl"
    />
    <span className="absolute bottom-2 left-2 bg-white/90 text-gray-800 text-[10px] px-2 py-1 rounded-full shadow">
      💼 Career
    </span>
  </div>

</div>

  {/* BOTTOM LEFT FLOATING IMAGE */}
  <div className="absolute -left-16 bottom-14 z-10 group">

    <img
      src={img2}
      alt="study session"
      className="rounded-3xl shadow-xl w-48 h-66 object-cover hover:scale-105 transition duration-300"
    />

    <span className="absolute bottom-2 left-2 bg-white/90 text-gray-800 text-[10px] px-2 py-1 rounded-full shadow">
      📚 Learning
    </span>

  </div>

</div>

    {/* ================= POINTS ================= */}
    <div className="space-y-6">

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        ⚖️ <span className="font-semibold">Expert Training</span>
        <p className="text-gray-600 mt-1">Professional guidance from industry experts.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        💼 <span className="font-semibold">Freelancing Skills</span>
        <p className="text-gray-600 mt-1">Start earning on Upwork & LinkedIn.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        🤖 <span className="font-semibold">AI Tools</span>
        <p className="text-gray-600 mt-1">Use AI to draft legal documents faster.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        🌍 <span className="font-semibold">Global Opportunities</span>
        <p className="text-gray-600 mt-1">Work with international clients worldwide.</p>
      </div>

    </div>
  </div>
</section>

      {/* ================= STRUCTURE ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
    <span className="text-orange-500 font-semibold uppercase tracking-wider">
      Roadmap
    </span>

    <h2 className="text-4xl font-bold mt-2">
      Your 6-Month Learning Journey
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Follow a structured roadmap designed to take you from fundamentals
      to professional legal drafting, freelancing, and career opportunities.
    </p>
  </div>

  <div className="relative">
    {/* Timeline Line */}
    <div className="absolute left-5 top-0 bottom-0 w-1 bg-orange-100"></div>

    <div className="space-y-8">
      {structure.map((item, index) => (
        <div
          key={index}
          className="relative flex gap-6 group"
        >
          {/* Circle */}
          <div className="relative z-10 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shadow-lg">
              {index + 1}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                {item.month}
              </span>
            </div>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default LawCoursePage;