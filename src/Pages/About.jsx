import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <div className="py-16 px-6 md:px-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            About Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We transform legal education into practical, skill-based learning
            with real-world exposure, freelancing, and AI tools.
          </p>
        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-14 px-6 md:px-20">

        <div>
          <h3 className="text-3xl font-bold mb-4">Who We Are</h3>

          <p className="text-gray-600 mb-3 leading-relaxed">
            We are educators, legal experts, and developers building a bridge
            between traditional law education and real industry skills.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Our focus is practical learning — contract drafting, freelancing,
            AI-powered legal workflows, and real client exposure.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Practical legal training</li>
            <li>✔ Freelancing & client skills</li>
            <li>✔ AI-powered legal tools</li>
            <li>✔ Industry mentorship</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="About"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-orange-500">100+</h3>
            <p className="text-gray-600 text-sm mt-1">Students</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-orange-500">50+</h3>
            <p className="text-gray-600 text-sm mt-1">Projects</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-orange-500">25+</h3>
            <p className="text-gray-600 text-sm mt-1">Mentors</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-orange-500">6</h3>
            <p className="text-gray-600 text-sm mt-1">Months</p>
          </div>

        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className="max-w-4xl mx-auto py-14 px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">Our Mission</h3>

        <p className="text-gray-600 leading-relaxed">
          To build industry-ready legal professionals by combining education,
          technology, freelancing, and real-world experience into one powerful
          learning ecosystem.
        </p>
      </div>

      {/* ================= TEAM ================= */}
      <div className="py-10 px-6 md:px-20 bg-white">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Meet Our Team</h3>
          <p className="text-gray-600 text-sm mt-1">
            Experts behind your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full mb-3"></div>
            <h4 className="font-semibold">Legal Mentor</h4>
            <p className="text-gray-600 text-sm">Contract Expert</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full mb-3"></div>
            <h4 className="font-semibold">Freelancing Coach</h4>
            <p className="text-gray-600 text-sm">Upwork Guide</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full mb-3"></div>
            <h4 className="font-semibold">AI Expert</h4>
            <p className="text-gray-600 text-sm">Legal Tech</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutUs;