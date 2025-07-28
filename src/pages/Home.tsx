import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Star,
  ArrowLeft,
  Play,
  Globe,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "خدماتنا الدراسية",
      description: "دعم أكاديمي متكامل من اختيار التخصص حتى التخرج",
      icon: GraduationCap,
      features: [
        "اختيار التخصص والجامعة المناسبة",
        "تجهيز الملف الأكاديمي كاملاً",
        "التقديم الرسمي للجامعات",
        "متابعة أكاديمية مستمرة"
      ],
      href: "/academic-services",
      isHighlighted: true
    },
    {
      title: "خدمات عامة",
      description: "دعم شامل للحياة اليومية والإقامة في مصر",
      icon: Users,
      features: [
        "استقبال من المطار",
        "توفير سكن مناسب",
        "استخراج التأشيرة",
        "دعم غير أكاديمي"
      ],
      href: "/general-services"
    },
    {
      title: "النشر العلمي",
      description: "دعم كامل في البحث العلمي والنشر الأكاديمي",
      icon: BookOpen,
      features: [
        "إعداد خطة البحث",
        "تنسيق الرسائل العلمية",
        "النشر في مجلات معتمدة",
        "التوثيق والاقتباس"
      ],
      href: "/research-services"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "موثوقية عالية",
      description: "شراكات رسمية مع الجامعات ووزارة التعليم العالي"
    },
    {
      icon: Clock,
      title: "متابعة مستمرة",
      description: "دعم على مدار الساعة من التقديم حتى التخرج"
    },
    {
      icon: Globe,
      title: "خبرة واسعة",
      description: "سنوات من الخبرة في دعم الطلاب العرب"
    },
    {
      icon: Award,
      title: "جودة مضمونة",
      description: "معدلات نجاح عالية وقصص نجاح موثقة"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      country: "السعودية",
      program: "ماجستير في إدارة الأعمال",
      content: "بفضل EduNile تمكنت من الحصول على قبول في جامعة القاهرة والحصول على أفضل إشراف أكاديمي. الخدمة كانت ممتازة من البداية للنهاية.",
      rating: 5
    },
    {
      name: "فاطمة الزهراء",
      country: "العراق",
      program: "دكتوراه في الطب",
      content: "الفريق في EduNile قدم لي دعماً استثنائياً في كل خطوة. من التقديم إلى إيجاد السكن والمتابعة الأكاديمية. أنصح كل طالب بالتعامل معهم.",
      rating: 5
    },
    {
      name: "محمد عبدالله",
      country: "اليمن",
      program: "ماجستير في الهندسة",
      content: "خدمة احترافية ومتابعة مستمرة. ساعدوني في حل جميع المشاكل الإدارية والأكاديمية التي واجهتها أثناء دراستي.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "طالب تخرج بنجاح" },
    { number: "50+", label: "جامعة شريكة" },
    { number: "15+", label: "تخصص متاح" },
    { number: "98%", label: "معدل رضا الطلاب" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold text-foreground">
                  من نحن؟
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-primary">EduNile</strong> هي شركة متخصصة في دعم الطلاب العرب في الدراسة بالجامعات المصرية، 
                  وخاصة الدراسات العليا. نقدم خدمات دراسية وعامة ونشر علمي بأعلى مستوى من الاحترافية.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  نتميز بعلاقات قوية مع الجامعات ووزارة التعليم العالي، وفريق متمرس يضمن 
                  لك رحلة تعليمية متكاملة من التقديم حتى التخرج.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-primary font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm font-secondary text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-primary-gradient">
                <Link to="/about" className="flex items-center space-x-reverse space-x-2">
                  <span>اعرف المزيد عنا</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                  alt="طلاب في الجامعة"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                
                {/* Video Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <Play className="w-4 h-4 md:w-6 md:h-6 text-white fill-current" />
                  </Button>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="absolute -bottom-6 md:-bottom-8 left-2 right-2 md:left-4 md:right-4">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <Card key={index} className="bg-white shadow-lg">
                      <CardContent className="p-3 md:p-4 text-center">
                        <div className="text-lg md:text-2xl font-primary font-bold text-primary">{stat.number}</div>
                        <div className="text-xs md:text-sm font-secondary text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold text-foreground">
              خدماتنا المتكاملة
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground max-w-2xl mx-auto px-4">
              نقدم حلولاً شاملة تغطي جميع احتياجات الطالب العربي للدراسة في مصر
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              أرقام تتحدث عن نجاحنا
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              إنجازاتنا وقصص نجاح طلابنا هي شهادة على جودة خدماتنا
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-secondary">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              آراء طلابنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              استمع لتجارب الطلاب الذين حققوا أحلامهم الأكاديمية معنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-reverse space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    <p className="text-sm text-primary">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonials" className="flex items-center space-x-reverse space-x-2">
                <span>اطلع على المزيد من الآراء</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              ابدأ رحلتك الأكاديمية اليوم
            </h2>
            <p className="text-lg text-primary/80 leading-relaxed">
              انضم إلى مئات الطلاب الذين حققوا أحلامهم الأكاديمية بدعم فريق EduNile المتخصص. 
              احصل على استشارة مجانية واكتشف الفرص المتاحة لك.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link to="/how-to-start">ابدأ الآن</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/contact">احصل على استشارة مجانية</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/student/login">دخول الطلاب</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/admin/login">دخول الأدمن</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;