import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://sheetdb.io/api/v1/YOUR_SHEET_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [{ email }] }),
      });

      if (res.ok) {
        setMessage("🎉 You’ve been added to the AYWA waitlist!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("Network error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f0eb]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-serif text-[#2A241E] mb-3">
          Join the AYWA Waitlist
        </h1>
        <p className="text-gray-600 mb-6">
          Be the first to access our holistic wellness app.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#A9A17C]"
          />
          <button
            type="submit"
            className="w-full bg-[#A9A17C] text-white py-3 rounded-lg hover:bg-[#8f8969] transition"
          >
            Join Waitlist
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
}
