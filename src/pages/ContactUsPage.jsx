import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

export default function ContactUsPage() {
  const sectionRef = useRef(null);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  /* ===== GSAP REVEAL ===== */
  useEffect(() => {
    gsap.fromTo(
      ".reveal",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.to(".whatsapp-float", {
      y: -12,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: "power1.inOut",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacy) return;

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0b0e13] text-white py-28 px-6 overflow-hidden"
    >
      {/* ===== SUCCESS TOAST ===== */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-500 text-black px-6 py-3 rounded-xl shadow-xl font-medium animate-bounce">
          ✅ Message Sent Successfully
        </div>
      )}



      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-orange-500 uppercase tracking-widest text-sm">
            Contact Us
          </span>
          <h1 className="heading-font text-4xl md:text-5xl font-bold mt-4">
            Let’s Talk About Your Vision
          </h1>
          <p className="text-gray-400 mt-6">
            Enterprise-grade solutions begin with a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ===== LEFT INFO ===== */}
          <div className="bg-[#121722] border border-white/10 rounded-2xl p-10 reveal">
            <h3 className="heading-font text-2xl mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin />,
                  title: "Location",
                  text: "H-77 Sector 63, Noida, India",
                },
                {
                  icon: <Mail />,
                  title: "Email",
                  text: "support@ramaera.com",
                },
                {
                  icon: <Phone />,
                  title: "Phone",
                  text: "+91 1169310715",
                },
                {
                  icon: <Clock />,
                  title: "Business Hours",
                  text: "Mon–Fri · 10:00–6:30",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl text-orange-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

                {/* ===== Map ===== */}
            <div className="mt-12 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=H-77%20Sector%2063%20Noida&output=embed"
                className="w-full h-[260px] grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            </div>

            {/* SOCIAL */}
            <div className="flex gap-5 mt-12">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 bg-white/5 rounded-full hover:bg-orange-500 transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* ===== FORM ===== */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#121722] border border-white/10 rounded-2xl p-10 reveal"
          >
            <h3 className="heading-font text-2xl mb-10">
              Send a Message
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="input-dark"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="input-dark"
              />
            </div>

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="input-dark mb-6"
            />

            <input
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="input-dark mb-6"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              onChange={handleChange}
              className="input-dark resize-none mb-6"
            />

            <label className="flex items-center gap-3 text-sm text-gray-400 mb-8">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="accent-orange-500"
              />
              I agree to the privacy policy
            </label>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style>{`
        .input-dark {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px;
          color: white;
          outline: none;
        }
        .input-dark::placeholder {
          color: #9ca3af;
        }
        .input-dark:focus {
          border-color: #f97316;
        }
      `}</style>
    </section>
  );
}
