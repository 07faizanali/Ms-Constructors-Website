export default function CoreValues() {
  const values = [
    "Integrity & Transparency",
    "Innovation & Creativity",
    "Customer-Centric Approach",
    "Quality & Excellence",
    "Collaboration & Trust",
  ];

  return (
    <div className="bg-white min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold">
          Our Core Values
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Our values define who we are and guide every decision we make.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-[#f8fafc] p-6 rounded-xl shadow">
              <h3 className="font-semibold">{v}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We embed this value into every project and partnership.
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
