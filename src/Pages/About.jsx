import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white">

      {/* ================= HERO ABOUT ================= */}
      <div className="py-20 px-6 md:px-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team dedicated to transforming legal education
            into a practical, skill-based learning experience. Our goal is to
            empower students and professionals with real-world knowledge,
            freelancing skills, and modern legal tools.
          </p>
        </div>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20 px-6 md:px-20">

        {/* Left Content */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Who We Are
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a group of educators, legal professionals, and developers
            working together to bridge the gap between traditional education
            and real industry needs.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Instead of only theory, we focus on hands-on learning — contract
            drafting, case analysis, freelancing strategies, and AI-powered
            legal workflows.
          </p>

          {/* Key Points */}
          <ul className="space-y-3 text-gray-700">
            <li>✔ Practical legal training with real documents</li>
            <li>✔ Freelancing & client acquisition guidance</li>
            <li>✔ AI tools for legal drafting</li>
            <li>✔ Industry-level mentorship</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="About Us"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

          <div>
            <h3 className="text-3xl font-bold text-orange-500">100+</h3>
            <p className="text-gray-600">Students Trained</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">50+</h3>
            <p className="text-gray-600">Legal Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">25+</h3>
            <p className="text-gray-600">Expert Mentors</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">6</h3>
            <p className="text-gray-600">Months Program</p>
          </div>

        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className="max-w-6xl mx-auto py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          To create industry-ready legal professionals by combining traditional
          legal education with modern technology, freelancing opportunities,
          and real-world experience.
        </p>
      </div>

      {/* ================= TEAM ================= */}
      <div className="bg-white pb-20 px-6 md:px-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">Meet Our Team</h3>
          <p className="text-gray-600 mt-2">
            Experts behind your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold">Senior Legal Mentor</h4>
            <p className="text-gray-600 text-sm">Contract Specialist</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold">Freelancing Coach</h4>
            <p className="text-gray-600 text-sm">Upwork Expert</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold">AI Legal Expert</h4>
            <p className="text-gray-600 text-sm">Tech & Automation</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutUs;