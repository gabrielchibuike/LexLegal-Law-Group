// components/Footer.tsx
"use client";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Practice Area", href: "#practice" },
    { label: "What We Offer", href: "#offer" },
    { label: "Attorneys", href: "#attorneys" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  return (
    <footer className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
              Contacts
            </p>
            <h2 className="text-3xl font-bold mt-2">Contact Us</h2>
            <p className="text-gray-600 mt-3">
              Feel free to contact us directly in any convenient way.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Main Office</h4>
              <p className="text-gray-600 text-sm">
                12 Bleecker St,
                <br />
                New York, NY 10012
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <FaEnvelope className="text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">E-mail</h4>
              <p className="text-gray-600 text-sm">
                LexLegal@email.com
                <br />
                supportcm@email.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <FaClock className="text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Hours</h4>
              <p className="text-gray-600 text-sm">
                Monday – Friday
                <br />9 AM – 6 PM
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div className="space-y-2">
            <h4 className="font-bold text-gray-800"> LexLegal Law Group</h4>
            <p className="text-gray-600">
              Our company provides a full range of legal services to
              individuals, businesses, and large organizations in a variety of
              practice areas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 border-b-2 border-orange-500 inline-block">
              Navigation
            </h4>
            <ul className="space-y-1 mt-3 text-gray-700 cursor-pointer">
              {navItems.map((item) => (
                <li
                  onClick={() => scrollToSection(item.href)}
                  key={item.href}
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 border-b-2 border-orange-500 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-1 mt-3 text-gray-700">
              <li
                onClick={() => scrollToSection("#contact")}
                className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
              >
                Make Appointment
              </li>
              {/* <li>Corporate Securities</li>
              <li>Real Estate Law</li> */}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold">Subscribe to get the latest news.</h4>
            <p className="text-xs text-gray-600 mt-1">
              * You give us permission to process your personal data.
            </p>
            <form className="mt-3 flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email*"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
