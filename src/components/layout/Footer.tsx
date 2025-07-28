import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "التخصصات الجامعية", href: "/majors" },
    { name: "خدماتنا الدراسية", href: "/academic-services" },
    { name: "خدمات عامة", href: "/general-services" },
    { name: "النشر العلمي", href: "/research-services" },
  ];

  const supportLinks = [
    { name: "كيف تبدأ؟", href: "/how-to-start" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "آراء الطلاب", href: "/testimonials" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-10 h-10 bg-secondary-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">EduNile</span>
                <span className="text-sm opacity-80">دليلك الأكاديمي</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              منصة متخصصة في دعم الطلاب العرب للدراسة في مصر. نقدم خدمات دراسية وعامة ونشر علمي متكاملة من التقديم حتى التخرج.
            </p>
            <div className="flex space-x-reverse space-x-3">
              <Button size="sm" variant="secondary" asChild>
                <a
                  href="https://wa.me/201019434737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-reverse space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-smooth hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">الدعم والمساعدة</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-smooth hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm">هاتف</p>
                  <a href="tel:+201019434737" className="text-sm opacity-80 hover:opacity-100">
                    +20 101 943 4737
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm">البريد الإلكتروني</p>
                  <a href="mailto:info@edu-nile.com" className="text-sm opacity-80 hover:opacity-100">
                    info@edu-nile.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm">العنوان</p>
                  <p className="text-sm opacity-80">القاهرة، مصر</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <p className="text-sm font-medium">تابعنا على</p>
              <div className="flex space-x-reverse space-x-3">
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-smooth">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-smooth">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-smooth">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} EduNile. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;