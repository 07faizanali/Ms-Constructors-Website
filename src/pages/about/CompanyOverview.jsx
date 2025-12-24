export default function CompanyOverview() {
  return (
    <div className="bg-[#f8fafc] min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold">
          Company Overview
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          INNOVEX is a technology-driven organization delivering
          enterprise IT solutions, creative designing services,
          and large-scale construction projects.
        </p>

        <p className="mt-4 text-gray-600">
          Inspired by innovation and driven by excellence, we help
          businesses modernize, scale, and succeed in the digital era.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">Founded</h3>
            <p className="text-gray-600 mt-2">2015</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">Projects Delivered</h3>
            <p className="text-gray-600 mt-2">250+</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold">Global Clients</h3>
            <p className="text-gray-600 mt-2">50+</p>
          </div>
        </div>

      </div>
    </div>
  );
}
