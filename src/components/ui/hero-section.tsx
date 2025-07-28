import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, MessageCircle, Phone } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "دليلك الأكاديمي للدراسات العليا في مصر",
      subtitle: "رحلة تعليمية متكاملة من التقديم حتى التخرج",
      description: "نحن متخصصون في دعم الطلاب العرب للحصول على أفضل الفرص الدراسية في الجامعات المصرية المعتمدة",
      cta: "ابدأ رحلتك معنا",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "من التقديم لحد التخرج... EduNile معاك في كل خطوة",
      subtitle: "خدمات شاملة ومتابعة مستمرة",
      description: "نقدم الدعم الأكاديمي والإداري والسكني وجميع الخدمات التي يحتاجها الطالب الوافد",
      cta: "تواصل معنا الآن",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "شراكات قوية مع أفضل الجامعات المصرية",
      subtitle: "ضمان القبول والجودة الأكاديمية",
      description: "علاقاتنا المتميزة مع الجامعات ووزارة التعليم العالي تضمن لك أفضل الخيارات والحلول",
      cta: "اكتشف التخصصات",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[600px] bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12">
          {/* Content */}
          <div className="space-y-6 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl lg:text-2xl text-secondary font-semibold">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary-gradient hover:opacity-90 text-primary font-semibold"
              >
                {slides[currentSlide].cta}
              </Button>
              
              <div className="flex gap-3">
              <Button size="lg" variant="outline-white" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </a>
              </Button>
              
              <Button size="lg" variant="outline-white" asChild>
                <a href="tel:+201019434737" className="flex items-center">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا
                </a>
              </Button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-reverse space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentSlide ? 'bg-secondary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image/Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant animate-float">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                >
                  <Play className="w-6 h-6 text-white fill-current" />
                </Button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-smooth border border-white/30"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-smooth border border-white/30"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;