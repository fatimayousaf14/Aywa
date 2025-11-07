import React, { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "../lib/supabase";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send the data to your Supabase table
      const { error } = await supabase.from("waitlist_signups").insert({
        first_name: firstName,
        email: email,
        user_agent: navigator.userAgent,
      });

      if (error) {
        // Handle duplicate or general errors gracefully
        alert(
          error.message.includes("duplicate")
            ? "You're already on the list!"
            : "Something went wrong. Please try again."
        );
        setIsLoading(false);
        return;
      }

      // ✅ Success — show confirmation
      setIsSubmitted(true);
      setIsLoading(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setFirstName("");
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Supabase error:", err);
      alert("Network error. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(42, 36, 30, 0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{
          backgroundColor: "#EAE4DB",
          boxShadow:
            "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 1px rgba(234, 228, 219, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 rounded-full p-2 transition-all duration-300"
          style={{
            backgroundColor: "rgba(203, 187, 160, 0.3)",
            color: "#2A241E",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(203, 187, 160, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(203, 187, 160, 0.3)";
          }}
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-12">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2rem, 5vw, 2.5rem)",
                    fontWeight: 300,
                    lineHeight: "1.2",
                    color: "#2A241E",
                    letterSpacing: "-0.012em",
                  }}
                >
                  Join the Waitlist
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#6E6A5B",
                    letterSpacing: "-0.003em",
                  }}
                >
                  Be the first to experience AYWA—wellness that understands your
                  roots.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="firstName"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#2A241E",
                      letterSpacing: "0.01em",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="Enter your first name"
                    className="w-full px-5 py-3.5 rounded-2xl transition-all duration-300 outline-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      border: "1.5px solid #CBBBA0",
                      color: "#2A241E",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.9)";
                      e.currentTarget.style.borderColor = "#9AA17C";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.6)";
                      e.currentTarget.style.borderColor = "#CBBBA0";
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#2A241E",
                      letterSpacing: "0.01em",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 rounded-2xl transition-all duration-300 outline-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      border: "1.5px solid #CBBBA0",
                      color: "#2A241E",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.9)";
                      e.currentTarget.style.borderColor = "#9AA17C";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.6)";
                      e.currentTarget.style.borderColor = "#CBBBA0";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 rounded-full transition-all duration-300 mt-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: "0.025em",
                    backgroundColor: "#9AA17C",
                    color: "#FFFFFF",
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    opacity: isLoading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.backgroundColor = "#8A9170";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(154, 161, 124, 0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#9AA17C";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>

              {/* Footer note */}
              <p
                className="mt-6 text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.813rem",
                  lineHeight: "1.5",
                  color: "#6E6A5B",
                  letterSpacing: "-0.003em",
                }}
              >
                We respect your privacy. No spam, ever.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(154, 161, 124, 0.15)",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9AA17C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#2A241E",
                  letterSpacing: "-0.012em",
                }}
              >
                Welcome to AYWA
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#6E6A5B",
                  letterSpacing: "-0.003em",
                }}
              >
                You're on the list, {firstName}. We'll be in touch soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
