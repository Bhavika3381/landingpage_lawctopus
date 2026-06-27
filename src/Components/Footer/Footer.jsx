import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-gray-300 pt-16 pb-8 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Lawctopus <span className="text-orange-500">Law School</span>
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            The home of legal careers. Learn practical legal skills and grow your career.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              contact@lawctopus.com
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              rohith.bhutani@lawctopus.com
            </p>

            <p className="flex items-center gap-2">
              <FaClock className="text-orange-400" />
              Hours: 11 AM - 7 PM (Mon - Fri)
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Reach 3.5 lakh+ learners
          </h3>

          <div className="flex flex-wrap gap-3 mb-6">
            <button className="bg-transparent border border-gray-500 px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Advertise on Lawctopus
            </button>
            <button className="bg-orange-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
              Submit Post
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
            {[
              "About us",
              "Contact us",
              "We are Hiring",
              "Our Team",
              "Our Services",
              "Institutional Partnerships",
              "Moot Suite",
              "Singular Events",
              "Internship Experience",
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            LAWCTOPUS LAW SCHOOL
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Learn practical legal skills with expert-led courses.
          </p>

          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-orange-400" />
            courses@lawctopus.com
          </p>

          <p className="flex items-center gap-2 text-sm mb-4">
            <FaExternalLinkAlt className="text-orange-400" />
            Visit site
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>

          {/* PLAY STORE */}
          <div className="mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-40"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lawctopus Law School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;