function CourseStructure() {
  const structure = [
    { month: "Month 1-2", title: "Contract Fundamentals & Basics", desc: "Understand the core anatomy of valid agreements." },
    { month: "Month 3", title: "International Contracts & Negotiation", desc: "Master cross-border drafting and client negotiation." },
    { month: "Month 4", title: "IPR, Tech Agreements & Website Terms", desc: "Draft SaaS, NDA, privacy policies." },
    { month: "Month 5", title: "Real Estate Agreements", desc: "Learn property and rental drafting." },
    { month: "Month 6", title: "Corporate & Business Contracts", desc: "Work on real business legal structures." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Course Structure
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          6-month structured legal drafting roadmap
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {structure.map((item, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden"
          >

            {/* TOP ACCENT BAR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-500"></div>

            {/* HEADER ROW */}
            <div className="flex items-center justify-between mt-2">

              {/* MONTH BADGE */}
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                {item.month}
              </span>

              {/* DOT */}
              <span className="w-3 h-3 bg-orange-500 rounded-full shadow-md"></span>
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-bold mt-5">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* FOOTER DECOR (optional feel) */}
            <div className="mt-5 text-xs text-gray-400">
              Practical • Industry-focused • Hands-on learning
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default CourseStructure;