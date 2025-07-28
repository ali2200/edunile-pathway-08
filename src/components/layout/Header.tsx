import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "التخصصات الجامعية", href: "/majors" },
    { name: "خدماتنا الدراسية", href: "/academic-services" },
    { name: "خدمات عامة", href: "/general-services" },
    { name: "النشر العلمي", href: "/research-services" },
    { name: "كيف تبدأ؟", href: "/how-to-start" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-reverse space-x-2">
            <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold hero-text">EduNile</span>
              <span className="text-xs text-muted-foreground">دليلك الأكاديمي</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Login & Contact Buttons */}
          <div className="hidden md:flex items-center space-x-reverse space-x-3">
            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/student/login">دخول الطلاب</Link>
            </Button>
            <Button size="sm" className="bg-primary-gradient hover:opacity-90 text-white" asChild>
              <Link to="/admin/login">دخول الأدمن</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/contact" className="flex items-center space-x-reverse space-x-2">
                <Phone className="w-4 h-4" />
                <span>تواصل معنا</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://wa.me/201019434737"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-2 bg-secondary-gradient"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-2 py-1 ${
                    isActive(item.href) ? "text-primary bg-muted rounded" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link to="/student/login">دخول الطلاب</Link>
                </Button>
                <Button size="sm" className="bg-primary-gradient hover:opacity-90 text-white" asChild>
                  <Link to="/admin/login">دخول الأدمن</Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact" className="flex items-center justify-center space-x-reverse space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>تواصل معنا</span>
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href="https://wa.me/201019434737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-reverse space-x-2 bg-secondary-gradient"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>واتساب</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;