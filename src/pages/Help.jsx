import { useState } from "react";

export default function Help() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support request sent:", formData);
    setSubmitted(true);
    setShowForm(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-green-700">❓ Help & Support</h2>

      {/* FAQ Section */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>

        <div className="mb-4">
          <p className="font-medium">Q: How do I complete modules?</p>
          <p className="text-gray-600">→ Go to <b>Modules</b> page and click <b>Start</b>.</p>
        </div>

        <div className="mb-4">
          <p className="font-medium">Q: How can I view farm alerts?</p>
          <p className="text-gray-600">→ Check the <b>Alerts</b> section on your sidebar.</p>
        </div>

        <div className="mb-4">
          <p className="font-medium">Q: How do I contact support?</p>
          <p className="text-gray-600">
            → You can email us at <span className="text-green-700">support@jeevdhan.com</span> 
            or submit the contact form below.
          </p>
        </div>
      </div>

      {/* Support Button */}
      {!showForm && !submitted && (
        <button
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          onClick={() => setShowForm(true)}
        >
          📩 Contact Support
        </button>
      )}

      {/* Support Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white p-6 rounded-xl shadow flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your issue..."
            className="border p-2 rounded h-28"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Confirmation */}
      {submitted && (
        <p className="mt-6 text-green-700 font-semibold">
          ✅ Thank you! Our team will get back to you soon.
        </p>
      )}
    </div>
  );
}

