import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import { Zap, Settings, Home, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false); // for mobile, optional

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
    <>
      <nav className="w-full flex justify-between py-3 px-5 max-lg:px-4 items-center border border-b-accent sticky top-0 bg-white z-100">
        <div className="bg-white p-3 rounded-full  ">
          <div className="flex flex-col items-center text-center">
            <Scale className="w-5 h-5 text-primary" />
            <h1 className="text-sm font-bold text-primary leading-none">
              LexLegal
            </h1>
            {/* <div className="border-t-2 border-primary pt- mt-">
              <p className="text-slate-600 text-sm font-light tracking-[1px] uppercase">
                Law Group
              </p>
            </div> */}
          </div>
        </div>

        <ul className="flex gap-5 text-sm font-medium max-lg:hidden">
          {navItems.map((item) => (
            <li
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={
                activeSection === item.href.substring(1)
                  ? "text-primary cursor-pointer"
                  : "cursor-pointer hover:text-primary transition-colors duration-300"
              }
            >
              {item.label}
            </li>
          ))}
        </ul>

        <Button className="max-lg:hidden">Contact Us</Button>

        {/* Mobile Navigation Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 border-t border-nextjs-800/30 mt-4 fixed w-full z-100 top-10 bg-white">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? "text-white bg-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
