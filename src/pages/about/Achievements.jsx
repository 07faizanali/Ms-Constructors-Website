export default function Achievements() {
  return (
    <div className="bg-white min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold">
          Our Achievements
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Milestones that reflect our growth, trust, and excellence.
        </p>

        <div className="mt-14 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["250+", "Projects"],
            ["50+", "Clients"],
            ["10+", "Years"],
            ["99%", "Satisfaction"],
          ].map(([num, label], i) => (
            <div key={i} className="bg-[#f8fafc] p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-600">{num}</h3>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
