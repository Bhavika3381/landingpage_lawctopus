import { pricing } from "./PricingData";
function PricingPage() {
  return (
    <div className="min-h-screen bg-[#07070c] text-white px-6 py-24 relative overflow-hidden">

      {/* 🔥 background glow effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Choose Your Plan
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Invest once, build a high-paying legal freelancing career forever.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {pricing.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-8 border transition duration-300 hover:scale-[1.04] hover:-translate-y-2
              bg-white/5 backdrop-blur-xl border-white/10 shadow-xl
              ${item.tag === "BEST VALUE"
                ? "border-orange-500 shadow-orange-500/20"
                : "border-white/10"
              }`}
          >

            {/* badge */}
            <div className="flex justify-between items-center">
              <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full tracking-widest">
                {item.tag}
              </span>

              {item.tag === "BEST VALUE" && (
                <span className="text-xs text-orange-400 font-semibold animate-pulse">
                  🔥 POPULAR
                </span>
              )}
            </div>

            {/* title */}
            <h2 className="text-2xl font-bold mt-5">
              {item.title}
            </h2>

            {/* price */}
            <div className="mt-6 flex items-end gap-3">
              <span className="text-5xl font-extrabold text-orange-400">
                {item.price}
              </span>

              {item.old && (
                <span className="line-through text-gray-500 text-lg">
                  {item.old}
                </span>
              )}
            </div>

            {/* features (optional feel) */}
            <ul className="mt-6 space-y-2 text-gray-400 text-sm">
              <li>✔ Live Expert Training</li>
              <li>✔ Real Contract Drafting Practice</li>
              <li>✔ Freelancing Guidance</li>
              <li>✔ Certificate Included</li>
            </ul>

            {/* button */}
            <button
              className={`mt-8 w-full py-3 rounded-xl font-semibold transition cursor-pointer duration-300
              ${
                item.tag === "BEST VALUE"
                  ? "bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Enroll Now
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default PricingPage;