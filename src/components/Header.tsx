import { useState } from "react";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  onCarsClick?: () => void;
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
};

const Header = ({
  onCarsClick,
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onContactClick,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    onHomeClick?.();
  };

  const handleCarsClick = () => {
    setIsMenuOpen(false);
    onCarsClick?.();
  };

  const handleAboutClick = () => {
    setIsMenuOpen(false);
    onAboutClick?.();
  };

  const handleServicesClick = () => {
    setIsMenuOpen(false);
    onServicesClick?.();
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    onContactClick?.();
  };

  return (
    <header className="relative z-50 w-full bg-white px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* LEFT SIDE - LOGO */}
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={handleHomeClick}
            className="font-unbounded text-base font-semibold text-[#3A3C35] transition-colors duration-200 hover:text-gray-600 sm:text-lg md:text-2xl"
          >
            Cars Classic Autotrader
          </button>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li>
              <button
                type="button"
                onClick={handleCarsClick}
                className="font-unbounded text-[#3A3C35] transition-colors duration-200 hover:text-gray-600"
              >
                Cars
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={handleAboutClick}
                className="font-unbounded text-[#3A3C35] transition-colors duration-200 hover:text-gray-600"
              >
                About Us
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={handleServicesClick}
                className="font-unbounded text-[#3A3C35] transition-colors duration-200 hover:text-gray-600"
              >
                Services
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={handleContactClick}
                className="font-unbounded text-[#3A3C35] transition-colors duration-200 hover:text-gray-600"
              >
                Contacts
              </button>
            </li>
          </ul>
        </nav>

        {/* PHONE */}
        <div className="hidden flex-shrink-0 md:block">
          <a
            href="tel:+12403751288"
            className="font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-600 lg:text-base"
          >
            +1 (240) 375-1288
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-[#3A3C35] transition-colors duration-200 hover:bg-gray-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={26} strokeWidth={1.8} />
          ) : (
            <Menu size={26} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-1 py-5">
            <ul className="flex flex-col">
              <li className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={handleCarsClick}
                  className="w-full py-4 text-left font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-500"
                >
                  Cars
                </button>
              </li>

              <li className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={handleAboutClick}
                  className="w-full py-4 text-left font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-500"
                >
                  About Us
                </button>
              </li>

              <li className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={handleServicesClick}
                  className="w-full py-4 text-left font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-500"
                >
                  Services
                </button>
              </li>

              <li className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="w-full py-4 text-left font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-500"
                >
                  Contacts
                </button>
              </li>

              <li className="pt-4">
                <a
                  href="tel:+12403751288"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-unbounded text-sm text-[#3A3C35] transition-colors duration-200 hover:text-gray-500"
                >
                  +1 (240) 375-1288
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

