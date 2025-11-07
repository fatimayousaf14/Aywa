import React from "react";
import { CustomButton } from "./components/CustomButton";
import { FeatureCard } from "./components/FeatureCard";
import { StatCard } from "./components/StatCard";
import { Navigation } from "./components/Navigation";
import { PCOSRiseChart } from "./components/PCOSRiseChart";
import { ContactForm } from "./components/ContactForm";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Sparkles,
  Leaf,
  Users,
  Package,
  Activity,
  MessageCircle,
  ShoppingBag,
  Video,
  FolderLock,
  Instagram,
  Linkedin,
  ChevronDown,
  Heart,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#EAE4DB" }}>
      <Navigation />

      {/* Hero Section - Warm, Grounded Femininity with Sunrise Tones */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden warm-light">
        {/* Layered Background with Warm Depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EAE4DB] via-[#DDD5C8] to-[#CBBBA0]" />
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677741447380-ede69fb0046f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwc3VucmlzZSUyMGxpZ2h0JTIwaGFuZHN8ZW58MXx8fHwxNzYyMzAwODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Warm sunrise lighting"
              className="w-full h-full object-cover"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Warm sunrise glow overlay */}
          <div className="absolute inset-0 sunrise-glow" />

          {/* Intimate vignette for depth */}
          <div className="absolute inset-0 vignette-warm" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center py-32 z-10">
          {/* Refined Logo Badge with Warmth */}
          <div className="mb-12">
            <div
              className="inline-block px-8 py-3 rounded-full shadow-warm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(234, 228, 219, 0.75) 0%, rgba(214, 191, 167, 0.65) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.25rem",
                  fontWeight: 400,
                  color: "#2A241E",
                  letterSpacing: "0.09em",
                }}
              >
                AYWA
              </span>
            </div>
          </div>

          <h1
            className="mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: "1.15",
              color: "#2A241E",
              letterSpacing: "-0.015em",
              textShadow: "0 2px 24px rgba(28, 25, 22, 0.08)",
            }}
          >
            Wellness that understands
            <br />
            your roots.
          </h1>

          <p
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.15rem",
              lineHeight: "1.75",
              color: "#6E6A5B",
              letterSpacing: "-0.003em",
            }}
          >
            The first holistic lifestyle platform built for women with PCOS.
            Track your cycle, manage your hormones, and access personalized
            nutrition, movement, and mental health support—all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CustomButton size="lg" variant="primary">
              Get Early Access
            </CustomButton>
            <CustomButton size="lg" variant="ghost">
              Learn More
            </CustomButton>
          </div>

          <p
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#6E6A5B",
              letterSpacing: "0.16em",
            }}
          >
            All Your Wellness, Always
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-[#6E6A5B]" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Problem Statement - Rich Depth with Earthy Texture */}
      <section
        className="py-32 px-6 relative overflow-hidden texture-clay"
        style={{ background: "#D8CBBA" }}
      >
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #2A241E 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: "1.25",
              color: "#2A241E",
              letterSpacing: "-0.012em",
            }}
          >
            Living with PCOS is more than
            <br />a diagnosis—it's a daily reality.
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "#6E6A5B",
                letterSpacing: "-0.003em",
              }}
            >
              The fatigue, the frustration, the conflicting advice that never
              fits. Managing your health shouldn't feel like guesswork.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "#6E6A5B",
                letterSpacing: "-0.003em",
              }}
            >
              You deserve guidance that understands your rhythm.
            </p>
          </div>
        </div>
      </section>

      {/* Community Voices - Elevated Cards with Warm Shadows */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #EAE4DB 0%, #DDD5C8 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 300,
                lineHeight: "1.25",
                color: "#2A241E",
                letterSpacing: "-0.012em",
              }}
            >
              Every 1 in 5 women has PCOS—
              <br />
              most are still searching for answers.
            </h2>

            <p
              className="max-w-3xl mx-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.75",
                color: "#6E6A5B",
                letterSpacing: "-0.003em",
              }}
            >
              For decades, women have been told to manage, fix, or tolerate
              their symptoms—without ever being truly understood. AYWA was built
              to change that.
            </p>
          </div>

          {/* Quotes Grid - Refined with Warm Palette */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              "AYWA feels like the friend I needed years ago—calm, informed, and always on my side.",
              "PCOS is confusing—every website says something different, every influencer swears by a new hack. It's exhausting.",
              "I've spent so much money chasing answers that never felt right. I needed something that understood me, not another plan to follow blindly.",
              "Doctors kept saying 'just lose weight,' but no one explained why my body was resisting. I needed someone to listen before telling me what to fix.",
            ].map((quote, index) => (
              <div
                key={index}
                className="relative p-10 rounded-2xl shadow-cinematic-lg hover:shadow-warm transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #EAE4DB 0%, #DDD5C8 100%)",
                  borderLeft: "3px solid #9AA17C",
                }}
              >
                {/* Quote mark - warm accent */}
                <div className="absolute top-6 left-6 opacity-12">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                      fill="#D6BFA7"
                    />
                  </svg>
                </div>

                <p
                  className="mb-6 relative z-10"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.0625rem",
                    lineHeight: "1.75",
                    color: "#2A241E",
                    fontStyle: "italic",
                    letterSpacing: "-0.003em",
                  }}
                >
                  {quote}
                </p>

                <p
                  className="text-xs uppercase tracking-wider"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6E6A5B",
                    letterSpacing: "0.08em",
                  }}
                >
                  AYWA Community Member
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="text-center max-w-3xl mx-auto">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "#6E6A5B",
                letterSpacing: "-0.003em",
              }}
            >
              These voices are why AYWA exists. Because behind every symptom,
              there's a story—and behind every story, there's someone who
              deserves better care. AYWA helps women understand their bodies,
              not fight them.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Sophisticated Data Visualization */}
      <section
        className="py-32 px-6 texture-linen"
        style={{ background: "#CBBBA0" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 300,
                  lineHeight: "1.25",
                  color: "#2A241E",
                  letterSpacing: "-0.012em",
                }}
              >
                One-size-fits-all
                <br />
                doesn't work.
              </h2>

              <div
                className="space-y-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: "1.75",
                  color: "#2A241E",
                  letterSpacing: "-0.003em",
                }}
              >
                <p>
                  Globally, nearly one in five women of reproductive age
                  experience PCOS, with an estimated 70% undiagnosed. That's
                  over 400 million women worldwide navigating uncertainty,
                  fragmented care, and conflicting advice.
                </p>
                <p>
                  PCOS isn't a single hormonal issue; it's a multi-system
                  condition shaped by insulin sensitivity, adrenal response,
                  inflammation, and stress feedback loops. Treating it
                  effectively requires personalized, continuous, and adaptive
                  care.
                </p>
              </div>
            </div>

            {/* Chart - Elevated with Warm Styling */}
            <div
              className="rounded-3xl p-10 shadow-cinematic-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(234, 228, 219, 0.95) 0%, rgba(214, 191, 167, 0.85) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                className="mb-8 text-center"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: "#2A241E",
                  letterSpacing: "-0.01em",
                }}
              >
                PCOS: A Rising Global Challenge
              </h3>
              <PCOSRiseChart />
              <p
                className="mt-6 text-center text-xs"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#6E6A5B",
                  fontStyle: "italic",
                  letterSpacing: "0.02em",
                }}
              >
                Source: Endocrine Society, Reproductive Health Journal (2025)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AYWA - Centered Message with Warm Intimacy */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #EAE4DB 0%, #DDD5C8 100%)",
        }}
      >
        {/* Subtle warm light overlay */}
        <div className="absolute top-0 left-0 right-0 h-1/2 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(214, 191, 167, 0.4) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 300,
              lineHeight: "1.25",
              color: "#2A241E",
              letterSpacing: "-0.012em",
            }}
          >
            Because every woman's body
            <br />
            is her own story.
          </h2>

          <div
            className="space-y-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: "1.75",
              color: "#6E6A5B",
              letterSpacing: "-0.003em",
            }}
          >
            <p>
              Most apps and clinics treat PCOS with generic plans and
              prescriptions. AYWA takes a different approach—seeing every
              woman's body as an interconnected ecosystem.
            </p>
            <p>
              We help you build your wellness around your unique rhythms, goals,
              and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Explainers - Warm, Earthy Depth */}
      <section
        id="features"
        className="py-32 px-6"
        style={{ background: "#CBBBA0" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 300,
                lineHeight: "1.25",
                color: "#2A241E",
                letterSpacing: "-0.012em",
              }}
            >
              Discover How AYWA Works
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.75",
                color: "#6E6A5B",
                letterSpacing: "-0.003em",
              }}
            >
              Designed to help you understand your body, not fight it.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 - Scroll Smarter */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-cinematic-lg">
                  <img
                    src="/images/feed.png"
                    alt="Feed Screen - Strength Training for Insulin Resistance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <Video
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#9AA17C]"
                  />
                </div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                    color: "#2A241E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Scroll Smarter
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.0625rem",
                    lineHeight: "1.75",
                    color: "#6E6A5B",
                    letterSpacing: "-0.003em",
                  }}
                >
                  Cut through the noise. Get vetted video content from trusted
                  experts—right in your feed. Nutrition, movement, mental
                  health, and clinical care—all curated for you.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                    color: "#6E6A5B",
                    fontStyle: "italic",
                  }}
                >
                  No more conflicting advice. No more endless scrolling.
                </p>
              </div>
            </div>

            {/* Feature 2 - Your Medical Vault */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <FolderLock
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#9AA17C]"
                  />
                </div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                    color: "#2A241E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Your Medical Vault
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.0625rem",
                    lineHeight: "1.75",
                    color: "#6E6A5B",
                    letterSpacing: "-0.003em",
                  }}
                >
                  All your health data, organized in one secure place. Track
                  labs, ultrasounds, supplements, and notes—seamlessly synced
                  across your ecosystem.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                    color: "#6E6A5B",
                    fontStyle: "italic",
                  }}
                >
                  Your health history, always accessible.
                </p>
              </div>

              <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-cinematic-lg">
                <img
                  src="/images/vault.png"
                  alt="Medical Vault App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Feature 3 - Your Marketplace */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="relative aspect-[9/19] max-w-[360px] mx-auto rounded-3xl overflow-hidden shadow-cinematic-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(234, 228, 219, 0.08) 0%, rgba(203, 187, 160, 0.06) 100%)",
                  }}
                >
                  {/* Subtle warm overlay */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(154, 161, 124, 0.04) 0%, rgba(203, 187, 160, 0.03) 100%)",
                    }}
                  />
                  <img
                    src="/images/market.png"
                    alt="AYWA Marketplace - Curated wellness products"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <ShoppingBag
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#9AA17C]"
                  />
                </div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                    color: "#2A241E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Your Marketplace
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.0625rem",
                    lineHeight: "1.75",
                    color: "#6E6A5B",
                    letterSpacing: "-0.003em",
                  }}
                >
                  Shop smarter. Access a curated selection of supplements,
                  wellness products, and resources—all vetted for women with
                  PCOS.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                    color: "#6E6A5B",
                    fontStyle: "italic",
                  }}
                >
                  Quality you can trust, delivered to your door.
                </p>
              </div>
            </div>

            {/* Feature 4 - Talk to Real Experts */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <MessageCircle
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#9AA17C]"
                  />
                </div>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                    color: "#2A241E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Talk to Real Experts
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.0625rem",
                    lineHeight: "1.75",
                    color: "#6E6A5B",
                    letterSpacing: "-0.003em",
                  }}
                >
                  Connect with certified practitioners who specialize in
                  PCOS—dietitians, trainers, therapists, and clinicians who
                  understand your journey.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: "1.7",
                    color: "#6E6A5B",
                    fontStyle: "italic",
                  }}
                >
                  Real support, when you need it most.
                </p>
              </div>

              <div
                className="relative aspect-[9/19] max-w-[360px] mx-auto rounded-3xl overflow-hidden shadow-cinematic-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234, 228, 219, 0.08) 0%, rgba(203, 187, 160, 0.06) 100%)",
                }}
              >
                {/* Subtle warm overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(154, 161, 124, 0.05) 0%, rgba(203, 187, 160, 0.04) 100%)",
                  }}
                />
                <img
                  src="/images/consultation.png"
                  alt="AYWA Consultations - Connect with PCOS specialists"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section - Deep, Intimate, Grounded */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1C1916 0%, #2A241E 100%)",
        }}
      >
        {/* Subtle warm overlay texture */}
        <div className="absolute inset-0 opacity-6">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #D6BFA7 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Warm directional light */}
        <div className="absolute top-[-10%] right-[-5%] w-1/3 h-2/3 opacity-8">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(214, 191, 167, 0.3) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: "1.25",
              color: "#EAE4DB",
              letterSpacing: "-0.012em",
            }}
          >
            AYWA isn't another app—
            <br />
            it's a way of life.
          </h2>

          <p
            className="mb-16 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: "1.75",
              color: "#CBBBA0",
              letterSpacing: "-0.003em",
            }}
          >
            Your sleep, your stress, your movement—they're all connected. AYWA
            helps you understand the bigger picture so you can take control with
            clarity and compassion.
          </p>

          {/* Wellness imagery - calm and grounded */}
          <div className="rounded-3xl overflow-hidden shadow-cinematic-lg max-w-2xl mx-auto mb-16 relative">
            {/* Subtle sage overlay for cohesion */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(154, 161, 124, 0.06) 0%, rgba(234, 228, 219, 0.05) 100%)",
              }}
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762112211843-e75e0c16a407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwd2VsbG5lc3MlMjB3b21hbiUyMG5hdHVyYWwlMjBsaWdodxlbnwxfHx8fDE3NjI0NjkwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Calm wellness in natural light"
              className="w-full h-96 object-cover"
              style={{
                filter: "brightness(0.92) contrast(0.96) saturate(0.75)",
              }}
            />
          </div>

          <CustomButton size="lg" variant="warmth">
            Begin Your Journey
          </CustomButton>
        </div>
      </section>

      {/* Contact Section - Clinical Elegance */}
      <section
        className="py-24 px-6"
        id="contact"
        style={{
          background: "linear-gradient(to bottom, #EAE4DB 0%, #DDD5C8 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2
              className="mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 300,
                lineHeight: "1.25",
                color: "#2A241E",
                letterSpacing: "-0.012em",
              }}
            >
              Contact
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "#6E6A5B",
                letterSpacing: "0.015em",
                fontStyle: "italic",
              }}
            >
              We read every message.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer - Rich Contrast with Warm Accents */}
      <footer className="py-20 px-6" style={{ background: "#1C1916" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.75rem",
                  fontWeight: 400,
                  color: "#EAE4DB",
                  letterSpacing: "0.09em",
                }}
              >
                AYWA
              </span>
            </div>
            <p
              className="text-xs uppercase tracking-widest mb-12"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#CBBBA0",
                letterSpacing: "0.14em",
              }}
            >
              All Your Wellness, Always
            </p>

            <nav className="flex flex-wrap justify-center gap-10 mb-12">
              {["About", "Features", "Waitlist", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#CBBBA0] transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#6E6A5B",
                    letterSpacing: "0.025em",
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex justify-center gap-8 mb-12">
              <a
                href="#instagram"
                className="text-[#6E6A5B] hover:text-[#D6BFA7] transition-colors"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a
                href="#tiktok"
                className="text-[#6E6A5B] hover:text-[#D6BFA7] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="#linkedin"
                className="text-[#6E6A5B] hover:text-[#D6BFA7] transition-colors"
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div
            className="border-t pt-10 text-center"
            style={{ borderColor: "rgba(234, 228, 219, 0.08)" }}
          >
            <p
              className="text-xs mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#6E6A5B",
                letterSpacing: "0.015em",
                lineHeight: "1.6",
              }}
            >
              AYWA is in MVP development. For informational purposes only—not
              medical advice.
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#6E6A5B",
                letterSpacing: "0.015em",
              }}
            >
              Copyright © 2025 AYWA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
