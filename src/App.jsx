import React, { useState, useEffect } from "react";
import {
  Check,
  ArrowRight,
  Calendar,
  Users,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Cpu,
} from "lucide-react";
import logo from "../src/assets/SchoolSync-logo.png";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll("[data-animate]").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInClass = (id) =>
    visibleSections.has(id)
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

  return (
 <div className="bg-white font-sans antialiased overflow-x-hidden">
      {/* FLOATING HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">
          <div className="flex items-center gap-2 w-40">
            <img src={logo} alt="" />
          </div>
          <button
            onClick={() => (window.location.href = "#demo")}
            className="cursor-pointer hidden md:flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="max-w-[800px] mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Helping schools save time and reduce paperwork
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Simplify School Administration.
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Save Time. Reduce Paperwork.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-[700px] mx-auto">
            A cloud-based School Management System built for private schools to
            manage students, attendance, grades, and reports — all in one place.
          </p>

          <div className="flex items-center justify-center gap-2 text-base font-medium text-emerald-600">
            <Check className="w-5 h-5" />
            <span>
              Used by private schools and academies to reduce admin workload by
              up to 60%
            </span>
          </div>
        </div>

        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      </section>

      {/* STATS BAR */}
      <section className="py-12 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              60%
            </div>
            <div className="text-sm text-gray-600">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              200+
            </div>
            <div className="text-sm text-gray-600">Schools Using</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              50K+
            </div>
            <div className="text-sm text-gray-600">Students Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              99.9%
            </div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6" data-animate id="problem">
        <div
          className={`max-w-[900px] mx-auto transition-all duration-700 ${fadeInClass(
            "problem"
          )}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-medium rounded-full mb-4">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Still managing your school with paperwork and spreadsheets?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Clock, text: "Attendance takes too much time every day" },
              { icon: Users, text: "Student records are scattered or outdated" },
              { icon: BarChart3, text: "Report generation is slow and manual" },
              // { icon: Shield, text: "Teachers and admins struggle with coordination" },
              { icon: Cpu, text: "No insights for student performance" },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-lg text-gray-900 leading-relaxed mt-2">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-blue-50/50 to-white"
        data-animate
        id="solution"
      >
        <div
          className={`max-w-[1000px] mx-auto transition-all duration-700 ${fadeInClass(
            "solution"
          )}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              One Intelligent System for Your Entire School
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Our School Management System helps private schools digitize daily
              operations — from attendance to reporting — and leverages AI to
              provide personalized insights for each student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Student & Teacher Management", desc: "Centralized profiles and records" },
              { icon: Calendar, title: "Digital Attendance", desc: "Track presence in real-time" },
              { icon: BarChart3, title: "Class Management", desc: "Organize sections effortlessly" },
              { icon: TrendingUp, title: "Performance Reports", desc: "Generate insights instantly" },
              { icon: Shield, title: "Secure Cloud Access", desc: "Access anywhere, anytime" },
              // { icon: Clock, title: "Time Tracking", desc: "Monitor schedules efficiently" },
              { icon: Cpu, title: "AI Study Recommendations", desc: "Personalized learning tips for each student based on grades" },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURE SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-white" data-animate id="ai-feature">
        <div
          className={`max-w-[900px] mx-auto transition-all duration-700 ${fadeInClass(
            "ai-feature"
          )}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-4">
              AI-Powered
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Insights for Smarter Schools
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Our AI engine analyzes student data to provide actionable recommendations, helping teachers personalize learning and improve academic performance effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Personalized Learning", desc: "Tailored study tips based on each student's progress" },
              { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast student performance and identify gaps early" },
              { icon: TrendingUp, title: "Automated Insights", desc: "AI-generated reports to save teachers hours of work" },
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-6" data-animate id="benefits">
        <div
          className={`max-w-[900px] mx-auto transition-all duration-700 ${fadeInClass(
            "benefits"
          )}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
              The Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Schools Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Save hours of administrative work every week",
              "Access school data anytime, anywhere",
              "Reduce errors caused by manual processes",
              "Simple interface for staff with minimal training",
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-medium text-gray-900 leading-relaxed pt-0.5">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section className="py-24 px-6 bg-gray-50" data-animate id="audience">
        <div
          className={`max-w-[800px] mx-auto text-center transition-all duration-700 ${fadeInClass(
            "audience"
          )}`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Perfect For
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Designed for Private Schools & Academies
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Elementary & Middle Schools", icon: "🏫" },
              { title: "Learning Centers", icon: "📚" },
              { title: "50–1000 Students", icon: "👥" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-lg font-medium text-gray-900">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
            <p className="text-2xl font-bold">
              If you're managing students manually, this system is for you.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 px-6" data-animate id="process">
        <div
          className={`max-w-[900px] mx-auto transition-all duration-700 ${fadeInClass(
            "process"
          )}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Getting Started Is Easy
            </h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { num: "1", title: "Book a free demo", icon: Calendar },
                { num: "2", title: "We understand your needs", icon: Users },
                { num: "3", title: "System setup & onboarding", icon: Shield },
                {
                  num: "4",
                  title: "Your school goes digital",
                  icon: TrendingUp,
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 mb-6 group hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg">
                      {step.num}
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
        data-animate
        id="pricing"
      >
        <div
          className={`max-w-[600px] mx-auto transition-all duration-700 ${fadeInClass(
            "pricing"
          )}`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple & Transparent Pricing
            </h2>
          </div>

          <div className="relative">
            {/* Popular badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
              Most Popular
            </div>

            <div className="p-10 bg-white border-2 border-blue-600 rounded-3xl shadow-2xl shadow-blue-100 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">
                Starter Plan
              </h3>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">$499</span>
                  <span className="text-lg text-gray-600">one-time setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-base text-gray-600 mt-3">
                  Up to 300 students
                </p>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
                {[
                  "Cloud hosting included",
                  "24/7 ongoing support",
                  "Secure data storage",
                  "Regular updates",
                  "Training materials",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-6 text-center">
                🔒 No long-term contracts • Cancel anytime
              </p>

              <button
                onClick={() => (window.location.href = "#demo")}
                className="cursor-pointer  w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        id="demo"
        className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            See How It Works for Your School
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            Book a short demo and decide if it's the right fit — no obligation,
            no pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:contact@yourdomain.com?subject=Demo Request")
              }
              className="cursor-pointer group w-full sm:w-auto px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="cursor-pointer w-full sm:w-auto px-10 py-5 bg-blue-800/50 backdrop-blur text-white text-lg font-semibold rounded-xl border-2 border-white/20 hover:bg-blue-800/70 transition-all duration-300">
              Schedule a Call
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-sm">10-minute demo</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-sm">No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-sm">Free trial available</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SchoolSync</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering schools with modern management solutions. Digitize
                your operations and focus on what matters most — education.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Trust & Security
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  Secure & cloud-hosted
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  99.9% uptime SLA
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Data privacy focused
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:saadbinkhalidsales@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm group"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="group-hover:underline break-all">
                      saadbinkhalidsales@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923170218290"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="group-hover:underline">
                      +92 300 1234567
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923082238947"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="group-hover:underline">
                      +92 321 7654321
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923170218290?text=Hello!%20I%20manage%20a%20private%20school%20and%20I'm%20interested%20in%20learning%20how%20SchoolSync%20can%20help%20us%20save%20time%20and%20digitize%20our%20administration.%20Please%20share%20the%20demo%20details%20and%20next%20steps%20so%20we%20can%20get%20started."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 text-sm group"
                  >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="group-hover:underline">WhatsApp Chat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>
              © {new Date().getFullYear()} SchoolSync. Built by experienced
              developers for schools worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
