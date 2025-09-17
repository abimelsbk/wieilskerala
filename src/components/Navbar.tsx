import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
  // Reset mobile dropdown when menu closes
  useEffect(() => {
    if (!isOpen) {
      setOpenDropdown(null);
    }
  }, [isOpen]);

  const menuItems = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Event Program",
      href: "#program",
      dropdown: [
        { title: "Highlights", href: "#highlights" },
        { title: "Pre-Events", href: "#pre-events" },
        { title: "Tracks", href: "#tracks" },
        { title: "Challenge", href: "#challenge" },
        { title: "Wellness", href: "#wellness" },
        { title: "Legacy", href: "#legacy" },
        { title: "Speakers", href: "#speakers" },
        { title: "Committee", href: "#committee" },
        { title: "Sponsors", href: "#sponsors" },
      ],
    },
    {
      title: "Contact",
      href: "#contact",
    },
    {
      title: "Register",
      href: "#register",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "bg-white shadow-2xl py-4" : " py-4"
      }`}
    >
      <div className=" px-4 md:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-4">
              <div className="flex items-center gap-6">
                <img
                  src="/assets/sponsors/wieils.jpg"
                  alt="WIE ILS Logo"
                  className="h-12"
                />
                <div className="hidden md:flex items-center gap-6">
                  <img
                    src="/assets/sponsors/wie.jpg"
                    alt="WIE Logo"
                    className="h-10"
                  />
                  <img
                    src="/assets/sponsors/ieeeks.webp"
                    alt="IEEE Kerala Section Logo"
                    className="h-10"
                  />
                  <img
                    src="/assets/sponsors/WIE KS.png"
                    alt="WIE KS Logo"
                    className="h-16"
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.title === "Register" ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium"
                >
                  Register Now
                </a>
              ) : (
                <div key={item.title} className="relative group">
                  <a
                    href={item.href}
                    className="transition-colors duration-300 hover:text-purple-500 flex items-center gap-1 text-gray-700"
                  >
                    {item.title}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300"
                          >
                            {dropdownItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors duration-300 text-gray-800 hover:bg-gray-100`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl top-full left-0 right-0 p-4 transition-all duration-500 ease-in-out">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) =>
              item.title === "Register" ? (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  Register Now
                </a>
              ) : (
                <div key={item.title}>
                  <a
                    href={item.href}
                    onClick={() => {
                      if (!item.dropdown) {
                        setIsOpen(false);
                      } else {
                        setOpenDropdown(
                          openDropdown === item.title ? null : item.title
                        );
                      }
                    }}
                    className="text-gray-800 hover:text-purple-600 py-2 px-4 hover:bg-purple-50 rounded-md transition-colors duration-300 flex justify-between items-center"
                  >
                    {item.title}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                  {item.dropdown && openDropdown === item.title && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-purple-600 py-1 px-4 hover:bg-purple-50 rounded-md transition-colors duration-300"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
