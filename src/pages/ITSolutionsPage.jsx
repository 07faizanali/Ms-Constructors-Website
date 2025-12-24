import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ITServices() {

  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Enterprise IT Solutions <br />
              <span className="text-blue-600">
                That Drive Digital Growth
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We deliver scalable software, cloud, AI and digital
              transformation services to help businesses grow faster.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-7 py-3 rounded-full hover:bg-blue-700 transition">
                Get Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-50 transition">
                Explore Services
              </button>
            </div>
          </div>

          <div className="fade-up">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="IT Services"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["10+", "Years Experience"],
            ["250+", "Projects Delivered"],
            ["60+", "Enterprise Clients"],
            ["99%", "Client Satisfaction"],
          ].map(([num, label], i) => (
            <div key={i} className="fade-up">
              <h3 className="text-4xl font-bold text-blue-600">{num}</h3>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center fade-up">
          Our IT Services
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[
            "Web & App Development",
            "AI & Machine Learning",
            "Cloud & DevOps",
            "Cybersecurity",
            "Enterprise Software",
            "IT Consulting & Automation",
          ].map((service, i) => (
            <div
              key={i}
              className="fade-up bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="mt-3 text-gray-600">
                Secure, scalable and future-ready IT solutions built
                for enterprise growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-[#f1f5f9] px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center fade-up">
          How We Work
        </h2>

        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-4 gap-10">
          {["Discover", "Design", "Develop", "Deliver"].map((step, i) => (
            <div key={i} className="fade-up text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <h4 className="mt-4 font-semibold">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center fade-up">
          Industries We Serve
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[
            "Healthcare",
            "Finance",
            "Real Estate",
            "Education",
            "Manufacturing",
            "E-Commerce",
          ].map((industry, i) => (
            <div
              key={i}
              className="fade-up bg-white p-6 rounded-xl shadow"
            >
              <h4 className="font-semibold">{industry}</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Industry-specific IT solutions designed for performance
                and compliance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="py-24 bg-[#0f172a] text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center fade-up">
          Case Studies
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="fade-up bg-[#020617] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                alt="Case Study"
              />
              <div className="p-6">
                <h4 className="font-semibold">Enterprise Digital Upgrade</h4>
                <p className="mt-2 text-gray-400 text-sm">
                  Improved scalability, security, and operational efficiency.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center fade-up">
          What Clients Say
        </h2>

        <div className="mt-14 max-w-4xl mx-auto fade-up bg-white p-10 rounded-2xl shadow">
          <p className="text-lg text-gray-600 italic">
            “Their IT expertise helped us modernize our entire platform.
            Reliable, secure and highly professional.”
          </p>
          <h4 className="mt-4 font-semibold">
            — Enterprise Client
          </h4>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold fade-up">
          Ready to Transform Your Business?
        </h2>
        <button className="mt-8 bg-white text-blue-600 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>

      {/* ================= INQUIRY FORM ================= */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center fade-up">
          Request a Consultation
        </h2>

        <form className="mt-14 max-w-3xl mx-auto grid gap-6 fade-up">
          <input className="border p-4 rounded-lg" placeholder="Full Name" />
          <input className="border p-4 rounded-lg" placeholder="Email Address" />
          <input className="border p-4 rounded-lg" placeholder="Phone Number" />
          <textarea
            className="border p-4 rounded-lg"
            rows="4"
            placeholder="Your Requirement"
          />
          <button className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition">
            Submit Inquiry
          </button>
        </form>
      </section>

    
    </div>
  );
}
