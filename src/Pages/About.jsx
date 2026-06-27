import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a creative team passionate about building modern,
            responsive, and user-friendly web experiences. Our mission is
            to help businesses grow online with beautiful design and
            powerful technology.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With expertise in React, UI/UX design, and full-stack
            development, we deliver high-quality digital products that
            make an impact.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">30+</h3>
              <p className="text-gray-500 text-sm">Clients</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-500 text-sm">Years</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;