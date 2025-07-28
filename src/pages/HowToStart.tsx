import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  CheckCircle, 
  FileText, 
  Clock, 
  MessageCircle,
  Phone,
  Star,
  Target,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const HowToStart = () => {
  const steps = [
    {
      step: 1,
      title: "التواصل الأولي",
      description: "ابدأ بالتواصل معنا عبر واتساب أو الهاتف للحصول على استشارة مجانية",
      icon: MessageCircle,
      action: "تواصل الآن",
      link: "https://wa.me/201019434737",
      details: [
        "استشارة مجانية لمدة 30 دقيقة",
        "تقييم شامل لخلفيتك الأكاديمية",
        "تحديد أفضل الخيارات المتاحة",
        "وضع خطة أولية مخصصة"
      ]
    },
    {
      step: 2,
      title: "تحضير الوثائق",
      description: "احضر جميع الوثائق المطلوبة وسنساعدك في تجهيزها",
      icon: FileText,
      action: "قائمة الوثائق",
      link: "/contact",
      details: [
        "صورة جواز السفر ساري المفعول",
        "شهادة المؤهل الجامعي مع كشف الدرجات",
        "شهادة ميلاد + صورة شخصية",
        "أي شهادات إضافية (لغة، خبرة، إلخ)"
      ]
    },
    {
      step: 3,
      title: "اختيار التخصص والجامعة",
      description: "نساعدك في اختيار أفضل تخصص وجامعة تناسب أهدافك",
      icon: Target,
      action: "تصفح التخصصات",
      link: "/majors",
      details: [
        "مقارنة شاملة بين الجامعات",
        "تحليل فرص العمل المستقبلية",
        "دراسة التكاليف والرسوم",
        "اختيار أفضل مشرف أكاديمي"
      ]
    },
    {
      step: 4,
      title: "التقديم والمتابعة",
      description: "نتولى عملية التقديم الرسمي ونتابع معك حتى القبول",
      icon: Users,
      action: "ابدأ التقديم",
      link: "https://wa.me/201019434737",
      details: [
        "تقديم إلكتروني للجامعات",
        "متابعة يومية لحالة الطلب",
        "التواصل مع مكاتب القبول",
        "إشعارك فور صدور النتائج"
      ]
    },
    {
      step: 5,
      title: "السفر والاستقرار",
      description: "نساعدك في ترتيبات السفر والاستقرار في مصر",
      icon: Star,
      action: "خدمات الوافدين",
      link: "/general-services",
      details: [
        "حجز تذاكر الطيران",
        "استقبال من المطار",
        "توفير سكن مناسب",
        "إنجاز الأوراق الرسمية"
      ]
    }
  ];

  const requiredDocuments = [
    { name: "جواز السفر", status: "إلزامي", note: "ساري المفعول لمدة 6 أشهر على الأقل" },
    { name: "شهادة المؤهل", status: "إلزامي", note: "مع كشف الدرجات مترجم ومصدق" },
    { name: "شهادة الميلاد", status: "إلزامي", note: "مترجمة ومصدقة" },
    { name: "صورة شخصية", status: "إلزامي", note: "خلفية بيضاء، مقاس 4×6" },
    { name: "شهادة اللغة", status: "اختياري", note: "IELTS/TOEFL إن وجدت" },
    { name: "السيرة الذاتية", status: "مستحسن", note: "أكاديمية ومهنية حديثة" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold animate-fadeInUp">
              كيف تبدأ رحلتك الأكاديمية معنا؟
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              خطوات واضحة ومبسطة لتحقيق حلمك في الدراسة بأفضل الجامعات المصرية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="bg-secondary-gradient animate-fadeInUp" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  ابدأ الآن - استشارة مجانية
                </a>
              </Button>
              <Button size="lg" variant="outline-white" asChild>
                <a href="tel:+201019434737">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل مباشرة
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              خطوات البداية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نرافقك خطوة بخطوة من أول استشارة حتى تحقيق هدفك الأكاديمي
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth animate-fadeInUp group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-reverse space-x-4">
                        <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mt-2 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      <Button 
                        size="lg" 
                        className="bg-secondary-gradient hover:opacity-90 group-hover:scale-105 transition-transform" 
                        asChild
                      >
                        <Link to={step.link} className="flex items-center space-x-reverse space-x-2">
                          <span>{step.action}</span>
                          <ArrowLeft className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-reverse space-x-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">الوثائق المطلوبة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تأكد من تجهيز هذه الوثائق لتسريع عملية التقديم
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-reverse space-x-4">
                        <CheckCircle className="w-6 h-6 text-secondary" />
                        <div>
                          <h4 className="font-semibold text-foreground">{doc.name}</h4>
                          <p className="text-sm text-muted-foreground">{doc.note}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={doc.status === "إلزامي" ? "default" : doc.status === "اختياري" ? "secondary" : "outline"}
                        className={doc.status === "إلزامي" ? "bg-primary" : ""}
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">ملاحظة مهمة:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        جميع الوثائق يجب أن تكون مترجمة للغة العربية ومصدقة من الجهات المختصة. 
                        يمكننا مساعدتك في عملية الترجمة والتصديق كجزء من خدماتنا.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">الجدول الزمني المتوقع</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              المدة الزمنية لكل مرحلة من مراحل التقديم
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute right-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              <div className="space-y-8">
                {[
                  { phase: "الاستشارة والتخطيط", duration: "1-2 أسبوع", color: "bg-primary" },
                  { phase: "تجهيز الوثائق", duration: "2-3 أسابيع", color: "bg-primary" },
                  { phase: "التقديم للجامعات", duration: "1-2 أسبوع", color: "bg-primary" },
                  { phase: "انتظار النتائج", duration: "4-8 أسابيع", color: "bg-secondary" },
                  { phase: "إجراءات السفر", duration: "2-3 أسابيع", color: "bg-secondary" }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center space-x-reverse space-x-6">
                    <div className={`w-4 h-4 ${item.color} rounded-full relative z-10`}></div>
                    <Card className="flex-1 hover:shadow-lg transition-smooth">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-reverse space-x-3">
                          <Clock className="w-5 h-5 text-muted-foreground" />
                          <span className="font-semibold text-foreground">{item.phase}</span>
                        </div>
                        <Badge variant="outline">{item.duration}</Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              مستعد للبدء؟
            </h2>
            <p className="text-lg text-primary/80 leading-relaxed">
              لا تتردد في التواصل معنا. فريقنا جاهز لمساعدتك في كل خطوة من رحلتك الأكاديمية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  ابدأ رحلتك الآن
                </a>
              </Button>
              <Button size="lg" variant="outline-primary" asChild>
                <Link to="/contact" className="flex items-center space-x-reverse space-x-2">
                  <span>طرق التواصل الأخرى</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToStart;