import img1 from "../../assets/HeroImagess.jpg";
import img2 from "../../assets/Hero1.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 md:px-16 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-gray-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-14 z-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex-1 text-center md:text-left">

          <div className="mt-8 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full text-sm font-medium text-orange-600">
            🚀 Learn Without Limits
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn New Skills <br />
            <span className="text-orange-500">Advance Your Career</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
            Join thousands of learners and unlock unlimited opportunities with expert-led courses.
          </p>

          {/* Buttons */}
          {/* Buttons */}
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

  <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer hover:cursor-grab">
    Get Started
  </button>

  <button className="border border-gray-300 hover:border-orange-400 text-gray-800 px-7 py-3 rounded-xl font-semibold transition cursor-pointer hover:cursor-grab">
    Explore Courses
  </button>

</div>

          {/* Stats */}
          <div className="mt-10 flex gap-6 text-sm text-gray-600 justify-center md:justify-start">

            <div>
              <span className="font-bold text-gray-900">10K+</span> Students
            </div>

            <div>
              <span className="font-bold text-gray-900">500+</span> Courses
            </div>

            <div>
              <span className="font-bold text-gray-900">95%</span> Success Rate
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Background Glow */}
          <div className="absolute w-[280px] h-[280px] bg-orange-300 blur-3xl opacity-20 rounded-full"></div>

          {/* Floating Badge */}
          <div className="absolute top-6 left-6 bg-white shadow-md border border-gray-200 text-orange-500 rounded-xl px-4 py-2 text-sm font-semibold animate-bounce z-30 cursor-pointer">
            🎓 Top Rated Courses
          </div>

          {/* IMAGE STACK */}
          <div className="relative w-[340px] md:w-[420px] h-[420px] flex items-center justify-center">

            {/* BACK IMAGE */}
            <div className="absolute -left-10 top-10 z-10">
              <img
                src={img1}
                alt="student 1"
                className="w-64 md:w-80 object-cover rounded-2xl shadow-2xl border border-white"
              />
            </div>

            {/* FRONT IMAGE */}
            <div className="absolute right-[-90px] bottom-8 z-20">
              <img
                src={img2}
                alt="student 2"
                className="w-56 md:w-72 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;