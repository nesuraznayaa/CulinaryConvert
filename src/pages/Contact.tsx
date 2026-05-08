import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.subject.trim()) e.subject = "Please choose a subject.";
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-50 px-3 py-1 rounded-full">Get In Touch</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3 mb-3">Contact Us</h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Have a question, spotted an inaccuracy in our data, or want to suggest a new ingredient or feature?
          We read every message and respond within 1–2 business days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: "🐛", title: "Report an Error", desc: "Spotted a wrong gram value? Let us know the ingredient and your source." },
          { icon: "💡", title: "Feature Request", desc: "Want to see a new ingredient, unit, or tool? We prioritize community suggestions." },
          { icon: "🤝", title: "Partnerships", desc: "Food blogger, recipe developer, or culinary school? We'd love to collaborate." },
        ].map(c => (
          <div key={c.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl mb-2">{c.icon}</div>
            <h3 className="font-bold text-gray-700 mb-1 text-sm">{c.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        {sent ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
            <p className="text-gray-500 text-sm">
              Thank you, <strong>{form.name}</strong>! We'll get back to you at <strong>{form.email}</strong> within 1–2 business days.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              className="mt-6 px-5 py-2 bg-amber-500 text-white rounded-xl font-semibold text-sm hover:bg-amber-600 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Send a Message</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Jane Smith"
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    errors.name ? "border-red-400 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="jane@example.com"
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    errors.email ? "border-red-400 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Subject *
              </label>
              <select
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className={`w-full border rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  errors.subject ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}
              >
                <option value="">— Choose a subject —</option>
                <option value="report-error">Report a data error</option>
                <option value="feature-request">Feature or ingredient request</option>
                <option value="general-question">General question</option>
                <option value="partnership">Partnership / collaboration</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Message *
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Please describe your question or suggestion in detail..."
                className={`w-full border rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none ${
                  errors.message ? "border-red-400 bg-red-50" : "border-gray-200"
                }`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              <p className="text-xs text-gray-400 mt-1">{form.message.length} / 20 characters minimum</p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors text-sm"
            >
              Send Message →
            </button>

            <p className="text-xs text-gray-400 text-center">
              We respect your privacy. Your information will never be shared with third parties.
              See our <a href="/privacy" className="underline hover:text-amber-500">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>

      {/* Response time */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-600">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="font-bold text-gray-800">⏱️ Response Time</div>
          <div className="text-xs text-gray-500 mt-1">Usually within 1–2 business days</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="font-bold text-gray-800">📍 Based in</div>
          <div className="text-xs text-gray-500 mt-1">United States (EST time zone)</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="font-bold text-gray-800">🌐 Languages</div>
          <div className="text-xs text-gray-500 mt-1">English (primary)</div>
        </div>
      </div>
    </main>
  );
}
