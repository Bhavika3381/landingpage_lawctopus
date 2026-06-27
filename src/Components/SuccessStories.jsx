import React from "react";

function SuccessStories() {
  const testimonials = [
    {
      name: "Brooklyn Simmons",
      role: "Law Student",
      text: "This course helped me start freelancing confidently and understand real contracts.",
    },
    {
      name: "Jane Cooper",
      role: "Legal Intern",
      text: "Very practical learning with real drafting exposure.",
    },
    {
      name: "Esther Howard",
      role: "Associate",
      text: "Best investment for my legal career growth.",
    },
    {
      name: "Cameron Williamson",
      role: "Freelancer",
      text: "I started earning on Upwork after this course.",
    },
  ];

  const reasons = [
    {
      icon: "⚖️",
      title: "Contract Drafting",
      text: "Learn practical contract drafting from real examples.",
    },
    {
      icon: "💼",
      title: "Freelancing",
      text: "Start earning through Upwork & LinkedIn.",
    },
    {
      icon: "📄",
      title: "Templates",
      text: "Get access to ready-to-use legal templates.",
    },
    {
      icon: "🤖",
      title: "AI Tools",
      text: "Use AI to improve drafting efficiency.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      text: "Become industry-ready within 6 months.",
    },
    {
      icon: "🎯",
      title: "Personal Feedback",
      text: "Receive expert guidance on assignments.",
    },
  ];

  return (
    <section className="bg-white">

      {/* ================= TESTIMONIALS ================= */}
      <div className="bg-black py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              Testimonials
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Success Stories
            </h2>

            <p className="text-gray-400 mt-4">
              Real students building legal careers & freelancing success
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">5000+</h3>
              <p className="text-gray-400">Students</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">4.9★</h3>
              <p className="text-gray-400">Rating</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">200+</h3>
              <p className="text-gray-400">Freelancers</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">95%</h3>
              <p className="text-gray-400">Success Rate</p>
            </div>

          </div>

          {/* CAROUSEL */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">

              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="min-w-[320px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                      {t.name[0]}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        {t.name}
                      </h4>

                      <p className="text-xs text-gray-400">
                        {t.role}
                      </p>
                    </div>

                  </div>

                  <p className="text-gray-300 text-sm">
                    "{t.text}"
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* ================= WHY JOIN ================= */}

{/* ================= WHY JOIN ================= */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="text-center mb-10">
    <span className="text-orange-500 font-semibold uppercase tracking-wider">
      Benefits
    </span>

    <h2 className="text-3xl md:text-4xl font-bold mt-2">
      Why You Should Join
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      Gain practical legal skills, freelancing opportunities,
      and industry-ready experience.
    </p>
  </div>

  {/* Compact Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    {reasons.map((item, i) => (
      <div
        key={i}
        className="
          group
          bg-white
          border border-gray-100
          rounded-2xl
          p-5
          hover:border-orange-200
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <div className="flex items-start gap-4">

          <div className="
            w-12 h-12
            rounded-xl
            bg-orange-50
            flex items-center justify-center
            text-2xl
            group-hover:scale-110
            transition
          ">
            {item.icon}
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              {item.text}
            </p>
          </div>

        </div>
      </div>
    ))}

  </div>

  {/* Compact CTA */}
  <div className="mt-12">

    <div className="
      bg-gradient-to-r
      from-orange-500
      to-orange-600
      rounded-3xl
      p-8
      md:p-10
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-6
    ">

      <div>
        <h3 className="text-2xl font-bold text-white">
          Ready to Start Your Legal Career?
        </h3>

        <p className="text-orange-100 mt-2">
          Join thousands of learners gaining practical legal skills.
        </p>
      </div>

      <button className="
        bg-white
        text-orange-600
        px-7
        py-3
        rounded-full
        font-semibold
        hover:scale-105
        transition
      ">
        Enroll Now →
      </button>

    </div>

  </div>

</section>



    </section>
  );
}

export default SuccessStories;