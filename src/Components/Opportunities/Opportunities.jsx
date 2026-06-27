
import heroImage from "../../assets/opportunity.jpg";

function Opportunities() {
  const posts = [
    {
      category: "INTERNSHIPS",
      title:
        "Legal Internship at Manthan Law Firm, New Delhi [July & Aug 2026]",
      author: "Sarthak Gupta",
      date: "27 June 2026",
      status: "Apply Now",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      category: "JOBS",
      title:
        "Legal Associates at Santosh Thakrar & Associates, Ahmedabad",
      author: "Sarthak Gupta",
      date: "27 June 2026",
      status: "Hiring",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    },
    {
      category: "WORKSHOP",
      title:
        "Contract Drafting Workshop by Industry Experts",
      author: "Sarthak Gupta",
      date: "25 June 2026",
      status: "Register",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen pt-24">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-[32px] overflow-hidden h-[320px]">

          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center">

            <div className="px-10 md:px-16 max-w-2xl">

              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                Opportunities & Events
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-5">
                Discover Legal Opportunities
              </h1>

              <p className="text-gray-200 mt-4">
                Internships, jobs, workshops and career opportunities curated
                for law students.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            ["1200+", "Internships"],
            ["350+", "Jobs"],
            ["150+", "Workshops"],
            ["50K+", "Students"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm text-center"
            >
              <h3 className="text-3xl font-bold text-orange-500">
                {value}
              </h3>

              <p className="text-gray-500 mt-1">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-6 mt-8">

        <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search opportunities..."
            className="flex-1 border rounded-xl px-4 py-3 outline-none"
          />

          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl">
            Search
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT */}
          <div className="space-y-6">

            {posts.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >

                <div className="md:flex">

                  <img
                    src={item.image}
                    alt=""
                    className="w-full md:w-56 h-56 object-cover"
                  />

                  <div className="p-6 flex-1">

                    <div className="flex justify-between items-center">

                      <span className="text-xs font-semibold text-orange-500 uppercase">
                        {item.category}
                      </span>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        {item.status}
                      </span>

                    </div>

                    <h2 className="text-xl font-bold mt-4 hover:text-orange-500 cursor-pointer transition">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 text-sm mt-4">
                      {item.author} • {item.date}
                    </p>

                    <button className="mt-5 text-orange-500 font-semibold">
                      Read More →
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 shadow-sm">

              <h3 className="font-bold text-lg mb-4">
                Featured Event
              </h3>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                className="rounded-2xl mb-4"
                alt=""
              />

              <h4 className="font-semibold">
                Contract Drafting Masterclass
              </h4>

              <p className="text-gray-500 text-sm mt-2">
                Learn practical contract drafting from experts.
              </p>

              <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl">
                Register
              </button>

            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white">

              <h3 className="text-2xl font-bold">
                Join Our Community
              </h3>

              <p className="mt-3 text-orange-100">
                Get internships, jobs and workshop alerts directly.
              </p>

              <button className="mt-5 bg-white text-orange-600 px-5 py-2 rounded-xl font-semibold">
                Join Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Opportunities;
