import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Eye,
  BarChart3,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Building,
  Scale,
  BookOpen,
  Globe,
  TrendingUp,
  HeartHandshake,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

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

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Stats data
  const stats = [
    {
      value: "30+",
      label: "Years of Service",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      value: "250+",
      label: "Listed Companies",
      icon: <Building className="h-8 w-8" />,
    },
    {
      value: "1.5M+",
      label: "Investors Protected",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: "98%",
      label: "Market Compliance",
      icon: <Scale className="h-8 w-8" />,
    },
  ];

  // Values data
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our operations and decisions.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      title: "Transparency",
      description:
        "We believe in open communication and clear regulatory frameworks.",
      icon: <Eye className="h-10 w-10" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in regulation and market development.",
      icon: <Award className="h-10 w-10" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace innovative approaches to regulation in a dynamic market.",
      icon: <TrendingUp className="h-10 w-10" />,
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "1992",
      title: "Establishment of SECZIM",
      description:
        "SECZIM was established under the Securities Act to regulate Zimbabwe's capital markets.",
    },
    {
      year: "1998",
      title: "Market Expansion",
      description:
        "Introduction of new market segments and expanded regulatory framework.",
    },
    {
      year: "2008",
      title: "Digital Transformation",
      description:
        "Launch of electronic reporting systems and digital market surveillance.",
    },
    {
      year: "2018",
      title: "Investor Protection Framework",
      description:
        "Enhanced investor protection measures and education initiatives.",
    },
    {
      year: "2023",
      title: "Regional Leadership",
      description:
        "Recognized as a leading securities regulator in the SADC region.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is the role of SECZIM?",
      answer:
        "SECZIM regulates Zimbabwe's capital markets, protects investors, maintains fair and efficient markets, and facilitates capital formation.",
    },
    {
      question: "How does SECZIM protect investors?",
      answer:
        "We protect investors through robust regulation, enforcement of securities laws, investor education, and ensuring market transparency.",
    },
    {
      question: "How can I verify a licensed broker?",
      answer:
        "You can verify licensed brokers through our online registry or by contacting our offices directly.",
    },
    {
      question: "What should I do if I suspect investment fraud?",
      answer:
        "Report immediately to our enforcement division through our hotline or online reporting system.",
    },
  ];

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center p-3 bg-amber-900/20 rounded-full mb-6">
                <Shield className="h-8 w-8 text-amber-200" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
                About the Securities & Exchange Commission of Zimbabwe
              </h1>

              <p className="text-xl md:text-2xl mb-10 max-w-2xl text-amber-100">
                Protecting investors, maintaining fair, orderly, and efficient
                markets, and facilitating capital formation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <button className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Learn about our mandate <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-amber-700 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-amber-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white fade-in">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-amber-100 rounded-lg mr-4">
                    <Target className="h-8 w-8 text-amber-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-amber-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  To protect investors, maintain fair, efficient and transparent
                  markets, and facilitate capital formation through the
                  regulation of the securities industry in Zimbabwe.
                </p>
                <p className="text-lg text-gray-700">
                  We achieve this through comprehensive regulation, robust
                  enforcement, and investor education initiatives.
                </p>

                <div className="mt-10 flex items-center">
                  <div className="p-3 bg-amber-100 rounded-lg mr-4">
                    <Eye className="h-8 w-8 text-amber-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-amber-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-700 mt-4">
                  To be a world-class securities regulator that fosters a
                  vibrant, innovative, and globally competitive capital market
                  in Zimbabwe.
                </p>
              </motion.div>

              <motion.div
                className="lg:w-1/2 bg-amber-50 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <BarChart3 className="h-16 w-16 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Regulating Zimbabwe's Capital Markets
                    </h3>
                    <p className="text-amber-100">
                      Ensuring integrity, transparency, and efficiency in the
                      securities industry
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-amber-900 text-amber-50 fade-in">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-amber-200 max-w-3xl mx-auto">
                The principles that guide our regulatory approach and
                organizational culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-amber-800/30 backdrop-blur-sm p-8 rounded-xl border border-amber-700/30 hover:border-amber-500/50 transition-colors"
                >
                  <div className="text-amber-300 mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-amber-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white fade-in">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                Our History
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A journey of regulatory excellence and market development
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-200 transform -translate-x-1/2"></div>

                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`mb-12 flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-amber-600 border-4 border-white shadow-lg"></div>
                    </div>

                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "ml-8" : "mr-8"
                      } bg-amber-50 p-6 rounded-lg shadow-sm`}
                    >
                      <div className="text-amber-700 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-amber-50 fade-in">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                Our Leadership
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experienced professionals dedicated to market integrity and
                investor protection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Tafadzwa Chinamo",
                  title: "Chief Executive Officer",
                  bio: "Over 20 years experience in financial regulation and capital markets development.",
                  initials: "TC",
                },
                {
                  name: "Mrs. Ethel Nyamadzawo",
                  title: "Director of Market Supervision",
                  bio: "Specializes in market surveillance and investor protection frameworks.",
                  initials: "EN",
                },
                {
                  name: "Mr. Farai Mavhunga",
                  title: "Director of Legal & Enforcement",
                  bio: "Leads the Commission's legal and enforcement activities.",
                  initials: "FM",
                },
                {
                  name: "Ms. Rumbidzai Jena",
                  title: "Director of Investor Education",
                  bio: "Develops financial literacy programs for Zimbabwean investors.",
                  initials: "RJ",
                },
                {
                  name: "Mr. Tendai Chirozvi",
                  title: "Director of Research & Development",
                  bio: "Leads market research and policy development initiatives.",
                  initials: "TC",
                },
                {
                  name: "Mrs. Pamela Chibanda",
                  title: "Chief Finance Officer",
                  bio: "Manages the Commission's financial operations and budgeting.",
                  initials: "PC",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-20 h-20 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors mb-6 flex items-center justify-center text-amber-800 text-xl font-bold">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-amber-900 group-hover:text-amber-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white fade-in">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about SECZIM and our regulatory
                functions
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4 border border-amber-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-6 bg-amber-50 text-left font-semibold text-amber-900"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="p-6 bg-white">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg text-white fade-in">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Learn More About Our Work
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
                Explore our regulatory frameworks, annual reports, and strategic
                initiatives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors">
                  View Annual Report
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Strategic Plan
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-amber-50 fade-in">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Address
                </h3>
                <p className="text-amber-700">
                  Securities and Exchange Commission of Zimbabwe
                  <br />
                  6th Floor, Zimre Centre
                  <br />
                  Cnr. Leopold Takawira St. & Jason Moyo Ave.
                  <br />
                  Harare, Zimbabwe
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Phone
                </h3>
                <p className="text-amber-700">
                  +263 242 774 368 / 774 651
                  <br />
                  +263 242 750 891 / 750 893
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Email
                </h3>
                <p className="text-amber-700">
                  info@seczim.co.zw
                  <br />
                  complaints@seczim.co.zw
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(
            135deg,
            var(--seczim-brown) 0%,
            var(--seczim-brown-light) 100%
          );
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </>
  );
}
