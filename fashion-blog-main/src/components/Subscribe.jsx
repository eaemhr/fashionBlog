import { useState } from "react";

export default function Subscribe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message must be under 500 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section id="subscribe" className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-[#5b1d8f] via-[#7a2fb8] to-[#f36aa5]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="text-white max-w-xl">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Never Miss a Beauty Beat
          </h2>
          <p className="text-white/90 mb-8">
            Join our community of beauty enthusiasts and get exclusive tips,
            early access to reviews, and special offers delivered straight to
            your inbox every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full px-6 py-3 text-sm text-gray-800 outline-none"
            />
            <button className="rounded-full bg-[#ff7a5c] hover:bg-[#ff6845] px-8 py-3 text-sm font-medium transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
          <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>

          {success && (
            <p className="mb-4 text-green-600 text-sm font-medium">
              ✅ Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <div>
              <label className="text-xs text-gray-500">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 text-sm outline-none
                  ${errors.name ? "border-red-400" : "border-gray-200"}`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs text-gray-500">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 text-sm outline-none
                  ${errors.email ? "border-red-400" : "border-gray-200"}`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs text-gray-500">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 text-sm outline-none resize-none
                  ${errors.message ? "border-red-400" : "border-gray-200"}`}
              />
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-400">
                  {formData.message.length}/500 characters
                </span>
              </div>
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#111827] hover:bg-black text-white py-3 rounded-lg text-sm font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
