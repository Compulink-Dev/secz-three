import React, { useEffect, useState } from "react";

export default function About() {
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
      <main>
        {/* Hero Section */}
        <section className="relative gradient-bg text-white overflow-hidden py-24">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 -mt-16 mr-16 w-64 h-64 bg-amber-300 rounded-full opacity-50 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-amber-600 rounded-full opacity-50 blur-3xl animate-pulse-slower"></div>
          </div>

          <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl animate-fade-in-up">
              About the Securities & Exchange Commission
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-amber-100 animate-fade-in-up delay-100">
              Protecting investors, maintaining fair, orderly, and efficient
              markets, and facilitating capital formation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white fade-in">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-900">
                  Our Mission
                </h2>
                <p className="text-amber-700 mb-6 text-lg">
                  The Securities and Exchange Commission is committed to
                  protecting investors, maintaining fair, orderly, and efficient
                  markets, and facilitating capital formation.
                </p>
                <p className="text-amber-700 mb-6">
                  Since our establishment, we have been the primary overseer of
                  the securities industry, ensuring that markets operate with
                  integrity and transparency.
                </p>
                <p className="text-amber-700">
                  Our work helps foster economic growth and financial stability
                  by promoting trustworthy market environments where businesses
                  can raise capital and investors can confidently participate.
                </p>
              </div>
              <div className="bg-amber-100 rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-6">📈</div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    Market Integrity
                  </h3>
                  <p className="text-amber-700">
                    Ensuring fair and transparent markets for all participants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-amber-100 fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
              Our History
            </h2>
            <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
              A legacy of protecting investors and maintaining market integrity
            </p>

            <div className="relative">
              {/* Timeline */}
              <div className="border-l-2 border-amber-700 ml-4 md:ml-0 md:mx-auto">
                {[
                  {
                    year: "1990",
                    title: "Establishment",
                    description:
                      "Founded to regulate the emerging securities market",
                  },
                  {
                    year: "1995",
                    title: "Market Expansion",
                    description: "Oversaw the growth of the stock exchange",
                  },
                  {
                    year: "2005",
                    title: "Regulatory Framework",
                    description:
                      "Implemented comprehensive securities regulations",
                  },
                  {
                    year: "2015",
                    title: "Digital Transformation",
                    description: "Launched electronic filing systems",
                  },
                  {
                    year: "2023",
                    title: "Modernization",
                    description:
                      "Enhanced surveillance and investor protection measures",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="mb-10 ml-6 md:ml-12 fade-in"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute -left-2.5 md:-left-2 mt-1.5 w-5 h-5 rounded-full bg-amber-700 border-4 border-white"></div>
                    <h3 className="text-xl font-semibold text-amber-900">
                      {item.year} - {item.title}
                    </h3>
                    <p className="text-amber-700 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-white fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
              Our Leadership
            </h2>
            <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
              Experienced professionals dedicated to market integrity
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Chikomo",
                  role: "Chairperson",
                  bio: "20+ years in financial regulation and policy development",
                },
                {
                  name: "Mr. Tawanda Moyo",
                  role: "Executive Director",
                  bio: "Expert in market surveillance and enforcement",
                },
                {
                  name: "Ms. Anesu Ndlovu",
                  role: "Chief Legal Officer",
                  bio: "Specialized in securities law and compliance",
                },
                {
                  name: "Mr. Farai Machaya",
                  role: "Director of Operations",
                  bio: "Oversees daily regulatory operations",
                },
                {
                  name: "Ms. Rumbidzai Zhou",
                  role: "Head of Investor Education",
                  bio: "Dedicated to empowering investors",
                },
                {
                  name: "Dr. Tanaka Sibanda",
                  role: "Chief Economist",
                  bio: "Provides economic analysis and research",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-amber-50 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-24 h-24 mx-auto bg-amber-200 rounded-full mb-4 flex items-center justify-center text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-amber-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-amber-100 fade-in">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "250+", label: "Listed Companies" },
                { value: "150B+", label: "Market Capitalization" },
                { value: "40+", title: "Years of Service" },
                { value: "98%", label: "Compliance Rate" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="stat-card bg-white p-6 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-amber-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg text-white fade-in">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Learn More About Our Work
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
              Explore our regulatory frameworks, annual reports, and strategic
              initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors transform hover:-translate-y-1">
                View Annual Report
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors transform hover:-translate-y-1">
                Strategic Plan
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
