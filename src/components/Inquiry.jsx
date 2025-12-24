export default function InquiryForm() {
  return (
    <form className="bg-white/90 p-8 rounded-2xl shadow max-w-xl w-full mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Inquiry Form</h3>

      <input className="w-full mb-3 p-3 border rounded" placeholder="Name" />
      <input className="w-full mb-3 p-3 border rounded" placeholder="Email" />
      <input className="w-full mb-3 p-3 border rounded" placeholder="Phone" />

      <select className="w-full mb-3 p-3 border rounded">
        <option>IT Solutions</option>
        <option>Designing</option>
        <option>Construction</option>
      </select>

      <textarea
        className="w-full mb-4 p-3 border rounded"
        placeholder="Message"
      />

      <button className="w-full bg-black text-white py-3 rounded">
        Submit
      </button>
    </form>
  );
}
