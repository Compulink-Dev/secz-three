"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with gradient */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-indigo-50 text-amber-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 -mt-16 mr-16 w-64 h-64 bg-amber-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-indigo-200 rounded-full opacity-50 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-amber-100 text-amber-800 text-sm font-medium"
            >
              Securities & Exchange Commission
            </motion.div>

            <AnimatedText
              text="Empowering Financial Markets"
              className="text-4xl md:text-6xl font-bold mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-amber-700"
            >
              Fostering a transparent, efficient, and fair securities market for
              Zimbabwe's economic growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-amber-800 hover:bg-amber-900"
              >
                Explore Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white"
              >
                View Regulations
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="w-8 h-8 text-amber-800"
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
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-4 text-amber-900"
            >
              Our Values
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto"
            >
              Guided by principles that ensure market integrity and investor
              confidence
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Transparency",
                  description:
                    "Clear and open communication in all regulatory processes.",
                  color: "bg-amber-100 text-amber-800",
                },
                {
                  title: "Integrity",
                  description:
                    "Uncompromising ethical standards in all operations.",
                  color: "bg-indigo-100 text-indigo-800",
                },
                {
                  title: "Innovation",
                  description:
                    "Embracing technology for efficient market regulation.",
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  title: "Excellence",
                  description:
                    "Commitment to the highest standards of service.",
                  color: "bg-teal-100 text-teal-800",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg"
                >
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${value.color}`}
                  >
                    {value.title}
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-amber-900 to-indigo-900 text-white">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-4"
            >
              Our Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-center text-amber-200 mb-16 max-w-3xl mx-auto"
            >
              Comprehensive regulatory services for market participants
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Licensing & Registration",
                  description:
                    "Registration of market intermediaries, exchanges, and listed companies.",
                },
                {
                  title: "Market Surveillance",
                  description:
                    "Monitoring trading activities to detect and prevent market abuse.",
                },
                {
                  title: "Enforcement",
                  description:
                    "Investigating and taking action against regulatory violations.",
                },
                {
                  title: "Investor Education",
                  description:
                    "Programs to enhance investor knowledge and awareness.",
                },
                {
                  title: "Policy Development",
                  description:
                    "Creating frameworks for market development and regulation.",
                },
                {
                  title: "International Cooperation",
                  description:
                    "Collaborating with global regulators for cross-border oversight.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-amber-200">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-amber-900 mb-2"
                >
                  Latest Updates
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-600"
                >
                  Stay informed with the latest market news and regulatory
                  updates
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 md:mt-0"
              >
                <Button
                  variant="outline"
                  className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white"
                >
                  View All News
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "New Disclosure Guidelines Published",
                  date: "Oct 15, 2023",
                  category: "Regulation",
                  excerpt:
                    "Updated disclosure requirements for listed companies now available.",
                },
                {
                  title: "Q3 Market Performance Report",
                  date: "Oct 5, 2023",
                  category: "Report",
                  excerpt:
                    "Market statistics and performance indicators for the third quarter.",
                },
                {
                  title: "Investor Awareness Workshop",
                  date: "Sep 28, 2023",
                  category: "Event",
                  excerpt:
                    "Join our free workshop on investment fundamentals and rights.",
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                      {news.category}
                    </span>
                    <span className="ml-3 text-sm text-gray-500">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-900">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 text-amber-800 hover:text-amber-900"
                  >
                    Read more →
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-800 to-indigo-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Have questions about regulations?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto text-amber-100"
            >
              Our team of experts is ready to assist you with all regulatory
              matters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-white text-amber-800 hover:bg-gray-100"
              >
                Contact Our Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-amber-800"
              >
                Browse FAQs
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
