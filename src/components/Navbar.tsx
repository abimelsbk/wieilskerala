import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Highlights", href: "#highlights" },
    { title: "Tracks", href: "#tracks" },
    { title: "Challenge", href: "#challenge" },
    { title: "Wellness", href: "#wellness" },
    { title: "Legacy", href: "#legacy" },
    { title: "Speakers", href: "#speakers" },
    { title: "Committee", href: "#committee" },
    { title: "Sponsors", href: "#sponsors" },
    { title: "Register", href: "#register" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <span
              className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
                scrolled ? "text-purple-700" : "text-white"
              }`}
            >
              WIE ILS 2025
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`transition-colors duration-300 hover:text-purple-500 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.title}
              </a>
            ))}
            <a
              href="#register"
              className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-purple-700 hover:text-purple-900"
                  : "text-white hover:text-purple-200"
              }`}
            >
              Register Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 p-4 transition-all duration-500 ease-in-out">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-purple-600 py-2 px-4 hover:bg-purple-50 rounded-md transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 font-medium text-purple-700 py-2 px-4 hover:bg-purple-50 rounded-md transition-colors duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
