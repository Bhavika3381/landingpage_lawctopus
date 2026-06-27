import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE INFO */}
        <div className="bg-orange-500 text-white p-10 flex flex-col justify-center">

          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full w-fit transition cursor-pointer"
          >
            ← Back
          </button>

          <h2 className="text-4xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-4 text-orange-100">
            We’re here to help you with internships, courses, and legal career guidance.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <p>📍 India</p>
            <p>📧 support@lawctopuslearn.com</p>
            <p>📞 +91 98765 43210</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-10">

          <h1 className="text-3xl font-bold mb-2">
            Contact Us
          </h1>

          <p className="text-gray-500 mb-6">
            Fill the form and we’ll respond within 24 hours.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 cursor-text"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 cursor-text"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 cursor-text"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 cursor-text"
            />

            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;