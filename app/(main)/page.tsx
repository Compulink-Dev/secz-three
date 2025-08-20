"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible =
          elementTop < window.innerHeight - 100 && elementBottom > 0;

        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Securities & Exchange Commission</title>
        <meta
          name="description"
          content="Official website of the Securities & Exchange Commission"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <StatsSection />
        <ValuesSection />
        <ServicesSection />
        <MarketsSection />
        <NewsSection />
        <ResourcesSection />
        <CTASection />
      </main>
    </>
  );
}

// Header Component
function Header({ mobileMenuOpen, setMobileMenuOpen }: any) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-amber-700 flex items-center justify-center text-white font-bold text-xl mr-3">
              SEC
            </div>
            <h1 className="text-xl font-bold text-amber-900">
              Securities & Exchange Commission
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-amber-800 font-medium hover:text-amber-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 transition-colors"
            >
              Regulations
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// Mobile Menu Component
function MobileMenu({ setMobileMenuOpen }: any) {
  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-amber-700 flex items-center justify-center text-white font-bold text-xl mr-3">
              SEC
            </div>
            <h1 className="text-xl font-bold text-amber-900">
              Securities & Exchange Commission
            </h1>
          </div>

          <button
            className="text-gray-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          <a href="#" className="text-amber-800 font-medium text-lg">
            Home
          </a>
          <a href="#" className="text-gray-600 font-medium text-lg">
            About
          </a>
          <a href="#" className="text-gray-600 font-medium text-lg">
            Regulations
          </a>
          <a href="#" className="text-gray-600 font-medium text-lg">
            Services
          </a>
          <a href="#" className="text-gray-600 font-medium text-lg">
            Resources
          </a>
          <a href="#" className="text-gray-600 font-medium text-lg">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative gradient-bg text-white overflow-hidden h-screen flex items-center">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 -mt-16 mr-16 w-64 h-64 bg-amber-300 rounded-full opacity-50 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-amber-600 rounded-full opacity-50 blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-amber-700/30 text-amber-100 text-sm font-medium backdrop-blur-sm animate-fade-in">
          Protecting Investors • Maintaining Fair Markets • Facilitating Capital
          Formation
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl animate-fade-in-up">
          Empowering Financial Markets Through Effective Regulation
        </h1>

        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-amber-100 animate-fade-in-up delay-100">
          Fostering a transparent, efficient, and fair securities market for
          economic growth and investor protection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <button className="px-8 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors transform hover:-translate-y-1">
            Explore Our Services
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors transform hover:-translate-y-1">
            View Regulations
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { value: "250+", label: "Listed Companies" },
    { value: "150B+", label: "Market Capitalization" },
    { value: "40+", label: "Years of Service" },
    { value: "98%", label: "Compliance Rate" },
  ];

  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-amber-50 p-6 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="text-4xl font-bold text-amber-800 mb-2 count-up"
                data-target={stat.value.replace("+", "")}
              >
                0
              </div>
              <div className="text-amber-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Values Section Component
function ValuesSection() {
  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      title: "Integrity",
      description:
        "Maintaining the highest ethical standards in all our operations and decisions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      ),
      title: "Transparency",
      description:
        "Ensuring open communication and clarity in all regulatory processes.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      title: "Efficiency",
      description:
        "Streamlining processes to deliver timely and effective regulatory oversight.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      title: "Accountability",
      description:
        "Taking responsibility for our actions and their impact on the market.",
    },
  ];

  return (
    <section className="py-20 bg-amber-100 fade-in">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
          Our Core Values
        </h2>

        <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
          Guided by principles that ensure market integrity and investor
          confidence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Value Card Component
function ValueCard({ icon, title, description, delay }: any) {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 fade-in"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-amber-900">{title}</h3>
      <p className="text-amber-600">{description}</p>
    </div>
  );
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      title: "Registration & Licensing",
      description:
        "Registration of market intermediaries, exchanges, and listed companies.",
      icon: "📋",
    },
    {
      title: "Market Surveillance",
      description:
        "Monitoring trading activities to detect and prevent market abuse and manipulation.",
      icon: "👁️",
    },
    {
      title: "Enforcement",
      description:
        "Investigating and taking action against regulatory violations to maintain market integrity.",
      icon: "⚖️",
    },
    {
      title: "Investor Education",
      description:
        "Programs and resources to enhance investor knowledge and awareness.",
      icon: "🎓",
    },
    {
      title: "Policy Development",
      description:
        "Creating frameworks for market development and effective regulation.",
      icon: "📊",
    },
    {
      title: "International Cooperation",
      description:
        "Collaborating with global regulators for cross-border oversight.",
      icon: "🌍",
    },
  ];

  return (
    <section className="py-20 bg-white fade-in">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
          Our Services
        </h2>

        <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
          Comprehensive regulatory services for market participants and
          investors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-700 transform transition-all duration-300 hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900">
                {service.title}
              </h3>
              <p className="text-amber-700 mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-amber-700 font-medium hover:text-amber-800 transition-colors"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// New Markets Section
function MarketsSection() {
  const markets = [
    { name: "Equity Market", value: 75, color: "bg-amber-500" },
    { name: "Bond Market", value: 60, color: "bg-amber-600" },
    { name: "Derivatives Market", value: 45, color: "bg-amber-700" },
    { name: "Commodities Market", value: 30, color: "bg-amber-800" },
  ];

  return (
    <section className="py-20 bg-amber-100 fade-in">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
          Market Overview
        </h2>

        <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
          Monitoring and regulating diverse market segments to ensure stability
          and growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-900">
              Market Performance
            </h3>
            {markets.map((market, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-amber-800">{market.name}</span>
                  <span className="text-amber-800 font-semibold">
                    {market.value}%
                  </span>
                </div>
                <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${market.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: "0%" }}
                    data-width={market.value}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-amber-900">
              Recent Market Initiatives
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">📈</div>
                <div>
                  <h4 className="font-semibold text-amber-800">
                    Digital Asset Framework
                  </h4>
                  <p className="text-amber-600">
                    New regulations for cryptocurrency and digital asset trading
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">🔍</div>
                <div>
                  <h4 className="font-semibold text-amber-800">
                    Enhanced Surveillance
                  </h4>
                  <p className="text-amber-600">
                    AI-powered market monitoring system implementation
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">🌱</div>
                <div>
                  <h4 className="font-semibold text-amber-800">
                    Green Bonds Initiative
                  </h4>
                  <p className="text-amber-600">
                    Promoting sustainable investment through green bonds
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// News Section Component
function NewsSection() {
  const newsItems = [
    {
      title: "New Disclosure Guidelines Published",
      date: "Oct 15, 2023",
      category: "Regulation",
      excerpt:
        "Updated disclosure requirements for listed companies now available for compliance.",
      image: "bg-amber-200",
    },
    {
      title: "Q3 Market Performance Report",
      date: "Oct 5, 2023",
      category: "Report",
      excerpt:
        "Market statistics and performance indicators for the third quarter of 2023.",
      image: "bg-amber-300",
    },
    {
      title: "Investor Awareness Workshop",
      date: "Sep 28, 2023",
      category: "Event",
      excerpt:
        "Join our free workshop on investment fundamentals and investor rights protection.",
      image: "bg-amber-400",
    },
  ];

  return (
    <section className="py-20 bg-white fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              Latest Updates
            </h2>
            <p className="text-amber-600">
              Stay informed with the latest market news and regulatory updates
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="px-6 py-2 border-2 border-amber-800 text-amber-800 font-semibold rounded-lg hover:bg-amber-800 hover:text-white transition-colors transform hover:-translate-y-1">
              View All News
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-48 ${news.image} transition-all duration-500 group-hover:scale-105`}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                    {news.category}
                  </span>
                  <span className="ml-3 text-sm text-amber-500">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-amber-900 group-hover:text-amber-700 transition-colors">
                  {news.title}
                </h3>
                <p className="text-amber-600 mb-4">{news.excerpt}</p>
                <a
                  href="#"
                  className="text-amber-700 font-medium hover:text-amber-800 transition-colors inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// New Resources Section
function ResourcesSection() {
  const resources = [
    {
      title: "Investor Guides",
      description:
        "Comprehensive guides for investors of all experience levels",
      icon: "📚",
      count: "15+ Guides",
    },
    {
      title: "Regulatory Frameworks",
      description: "Complete set of regulations governing securities markets",
      icon: "⚖️",
      count: "50+ Documents",
    },
    {
      title: "Market Reports",
      description: "Quarterly and annual reports on market performance",
      icon: "📊",
      count: "100+ Reports",
    },
    {
      title: "Educational Webinars",
      description: "Recorded sessions on various investment topics",
      icon: "🎥",
      count: "40+ Webinars",
    },
  ];

  return (
    <section className="py-20 bg-amber-100 fade-in">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
          Investor Resources
        </h2>

        <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
          Access our comprehensive library of educational materials and
          regulatory information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 text-center group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900">
                {resource.title}
              </h3>
              <p className="text-amber-600 mb-4">{resource.description}</p>
              <div className="text-amber-700 font-medium">{resource.count}</div>
              <button className="mt-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-20 gradient-bg text-white fade-in">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Regulatory Assistance?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
          Our team of experts is ready to assist you with all regulatory matters
          and inquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors transform hover:-translate-y-1">
            Contact Our Team
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors transform hover:-translate-y-1">
            Browse FAQs
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12 fade-in">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="w-12 h-12 rounded-lg bg-amber-700 flex items-center justify-center text-white font-bold text-xl mb-4">
              SEC
            </div>
            <p className="text-amber-200 mb-4">
              Ensuring transparent and efficient securities markets for
              sustainable economic growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Regulations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Enforcement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Investor Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Market Surveillance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-amber-200">
              <p className="mb-2">123 Financial District</p>
              <p className="mb-2">Harare, Zimbabwe</p>
              <p className="mb-2">Phone: +263 123 456 789</p>
              <p className="mb-2">Email: info@sec.gov.zw</p>
            </address>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-sm text-amber-400 text-center">
          <p>© 2023 Securities & Exchange Commission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Add this CSS to your global styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes pulseSlow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.7; }
  }
  
  @keyframes pulseSlower {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.6; }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .delay-100 {
    animation-delay: 0.1s;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .animate-pulse-slow {
    animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-pulse-slower {
    animation: pulseSlower 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .fade-in {
    opacity: 0;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-in.visible {
    opacity: 1;
  }
  
  .gradient-bg {
    background: linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%);
  }
`;

// Add the styles to the head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
