import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className="text-white text-xl font-semibold">
              Mr<span className="text-[#4B8BF5]"> Vishwa M T</span>
            </p>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#Home" className="text-white hover:text-[#4B8BF5] transition-colors">
                Home
              </a>
              <a href="#Aboutpage" className="text-white hover:text-[#4B8BF5] transition-colors">
                About
              </a>
              <a href="#Skills" className="text-white hover:text-[#4B8BF5] transition-colors">
                Skills
              </a>
              <a href="#Certificates" className="text-white hover:text-[#4B8BF5] transition-colors">
                Certificates
              </a>
              <a href="#Contact" className="text-white hover:text-[#4B8BF5] transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#Home"
              className="block text-white hover:text-[#4B8BF5] transition-colors"
            >
              Home
            </a>
            <a
              href="#Aboutpage"
              className="block text-white hover:text-[#4B8BF5] transition-colors"
            >
              About
            </a>
            <a
              href="#Skills"
              className="block text-white hover:text-[#4B8BF5] transition-colors"
            >
              Skills
            </a>
            <a
              href="#Certificates"
              className="block text-white hover:text-[#4B8BF5] transition-colors"
            >
              Certificates
            </a>
            <a
              href="#Contact"
              className="block text-white hover:text-[#4B8BF5] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}