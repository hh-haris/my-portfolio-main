import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/lab", label: "Projects" },
    { path: "/connect", label: "Connect" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-instrument text-primary tracking-tight hover:opacity-80 transition-opacity md:text-5xl text-3xl"
        >
          your name
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base md:text-lg font-instrument transition-colors ${
                location.pathname === link.path
                  ? "text-primary italic"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="active:scale-95 transition-transform"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-0.5 bg-foreground transition-all"></div>
                <div className="w-6 h-0.5 bg-foreground transition-all"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-background border border-border rounded-2xl shadow-lg py-2 min-w-[140px] animate-fade-in overflow-hidden">
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2.5 text-base font-instrument transition-all active:bg-secondary ${
                location.pathname === link.path
                  ? "text-primary italic"
                  : "text-foreground hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
