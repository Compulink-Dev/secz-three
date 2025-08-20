import React, { useEffect, useState } from "react";

export function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

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
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-amber-100 animate-fade-in-up delay-100">
              Get in touch with our team for inquiries, assistance, or feedback
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
              Get In Touch
            </h2>
            <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
              We're here to assist with all your inquiries related to securities
              regulation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-amber-50 p-6 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-amber-700">123 Financial District</p>
                <p className="text-amber-700">Harare, Zimbabwe</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Call Us
                </h3>
                <p className="text-amber-700">+263 123 456 789</p>
                <p className="text-amber-700">Mon - Fri, 8:00 - 17:00</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Email Us
                </h3>
                <p className="text-amber-700">info@sec.gov.zw</p>
                <p className="text-amber-700">inquiries@sec.gov.zw</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-6 text-amber-900">
                  Send us a Message
                </h3>

                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                    <p>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-amber-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-amber-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-amber-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-amber-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-700 text-white py-3 px-4 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Office Map and Additional Info */}
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-6 text-amber-900">
                  Our Office
                </h3>

                <div className="bg-amber-200 rounded-xl h-64 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-amber-700">
                      Interactive Map Would Appear Here
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-amber-900">
                    Department Contacts
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-amber-700">Licensing:</span>
                      <span className="text-amber-700 font-medium">
                        licensing@sec.gov.zw
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-700">Compliance:</span>
                      <span className="text-amber-700 font-medium">
                        compliance@sec.gov.zw
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-700">Enforcement:</span>
                      <span className="text-amber-700 font-medium">
                        enforcement@sec.gov.zw
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-700">
                        Investor Education:
                      </span>
                      <span className="text-amber-700 font-medium">
                        education@sec.gov.zw
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-amber-100 fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 text-amber-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-center text-amber-600 mb-16 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How do I register as a market intermediary?",
                  answer:
                    "You can apply through our online portal by submitting the required documentation and completing the application process.",
                },
                {
                  question: "What are the capital requirements for brokers?",
                  answer:
                    "Capital requirements vary based on the type of license. Please refer to our regulations document or contact our licensing department.",
                },
                {
                  question:
                    "How can I check if a company is registered with SEC?",
                  answer:
                    "Use our online registry search tool available on our website to verify the registration status of any company.",
                },
                {
                  question: "What should I do if I suspect securities fraud?",
                  answer:
                    "Immediately report your concerns through our whistleblower portal or contact our enforcement division directly.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-amber-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors">
                View All FAQs
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
