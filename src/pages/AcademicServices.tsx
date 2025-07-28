import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  FileText, 
  Send, 
  UserCheck, 
  BookOpen, 
  CheckCircle,
  ArrowLeft,
  Clock,
  Shield,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const AcademicServices = () => {
  const services = [
    {
      id: 1,
      icon: Search,
      title: "اختيار التخصص والجامعة",
      description: "نساعدك في اختيار أفضل تخصص وجامعة حسب خلفيتك الأكاديمية وأهدافك المهنية",
      features: [
        "تحليل الخلفية الأكاديمية والمهنية",
        "مقارنة شاملة بين الجامعات والتخصصات",
        "توضيح فرص العمل المستقبلية",
        "استشارة مع خبراء أكاديميين"
      ],
      duration: "1-2 أسبوع",
      price: "مجاني"
    },
    {
      id: 2,
      icon: FileText,
      title: "تجهيز الملف الأكاديمي",
      description: "إعداد وتجهيز جميع الوثائق المطلوبة للتقديم بالطريقة الصحيحة",
      features: [
        "ترجمة معتمدة لجميع الوثائق",
        "تصديق وتوثيق من الجهات المختصة",
        "مراجعة وتدقيق الملف الأكاديمي",
        "إعداد السيرة الذاتية الأكاديمية"
      ],
      duration: "2-3 أسابيع",
      price: "500-800 جنيه"
    },
    {
      id: 3,
      icon: Send,
      title: "التقديم الجامعي الرسمي",
      description: "تقديم مباشر للجامعات الحكومية والخاصة مع متابعة حالة الطلب",
      features: [
        "تقديم إلكتروني للجامعات",
        "متابعة حالة الطلب يومياً",
        "التواصل مع مكاتب القبول",
        "ضمان صحة البيانات المقدمة"
      ],
      duration: "1-2 أسبوع",
      price: "300-500 جنيه"
    },
    {
      id: 4,
      icon: UserCheck,
      title: "اختيار المشرف الأكاديمي",
      description: "مساعدتك في اختيار أفضل مشرف أكاديمي يناسب تخصصك ومجال بحثك",
      features: [
        "قاعدة بيانات شاملة للمشرفين",
        "تحليل تخصصات وخبرات المشرفين",
        "ترتيب لقاءات تعارف مبدئية",
        "نصائح للتعامل مع المشرف"
      ],
      duration: "1-3 أسابيع",
      price: "400-600 جنيه"
    },
    {
      id: 5,
      icon: BookOpen,
      title: "شرح النظام الدراسي",
      description: "توضيح كامل لنظام الدراسة والامتحانات والمتطلبات الأكاديمية",
      features: [
        "شرح لوائح وقوانين الجامعة",
        "توضيح نظام الساعات المعتمدة",
        "جدولة المواد والامتحانات",
        "نصائح للنجاح الأكاديمي"
      ],
      duration: "جلسة واحدة",
      price: "مجاني"
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "المتابعة الأكاديمية المستمرة",
      description: "دعم ومتابعة شاملة طوال فترة الدراسة حتى التخرج",
      features: [
        "متابعة الأداء الأكاديمي",
        "حل المشكلات الإدارية",
        "دعم في الأبحاث والمشاريع",
        "تواصل مستمر مع الجامعة"
      ],
      duration: "طوال فترة الدراسة",
      price: "500 جنيه/فصل"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "نضمن جودة الخدمة ودقة المعلومات المقدمة"
    },
    {
      icon: Clock,
      title: "سرعة الإنجاز",
      description: "إنجاز المعاملات في أقل وقت ممكن"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من الخبراء الأكاديميين والإداريين"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "التواصل الأولي",
      description: "تواصل معنا عبر واتساب أو الهاتف للاستشارة المجانية"
    },
    {
      step: 2,
      title: "تحليل الوضع",
      description: "نحلل خلفيتك الأكاديمية ونحدد أفضل الخيارات المتاحة"
    },
    {
      step: 3,
      title: "وضع خطة العمل",
      description: "نضع خطة مفصلة للخطوات المطلوبة والجدول الزمني"
    },
    {
      step: 4,
      title: "التنفيذ والمتابعة",
      description: "ننفذ الخطة خطوة بخطوة مع متابعة مستمرة"
    },
    {
      step: 5,
      title: "النجاح والتخرج",
      description: "نستمر معك حتى تحقق هدفك والحصول على الشهادة"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              خدماتنا الدراسية المتكاملة
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              دعم أكاديمي شامل من اختيار التخصص حتى التخرج بنجاح. نحن معك في كل خطوة من رحلتك التعليمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-secondary-gradient" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  ابدأ رحلتك الآن
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/how-to-start">كيف تبدأ؟</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا تختار خدماتنا الدراسية؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم خدمات متميزة تضمن لك تجربة دراسية ناجحة ومريحة
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">تفاصيل خدماتنا الدراسية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              خدمات شاملة ومتخصصة تغطي جميع احتياجاتك الأكاديمية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-reverse space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-reverse space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-sm font-semibold text-foreground">المدة المتوقعة</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">التكلفة</div>
                      <div className="text-sm text-secondary font-semibold">{service.price}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary-gradient" asChild>
                    <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                      اطلب الخدمة
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">كيف نعمل معك؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              خطوات واضحة ومنظمة لضمان نجاح رحلتك الأكاديمية
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              جاهز لبدء رحلتك الأكاديمية؟
            </h2>
            <p className="text-lg text-primary/80">
              احصل على استشارة مجانية الآن واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الأكاديمية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  استشارة مجانية عبر واتساب
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/contact" className="flex items-center space-x-reverse space-x-2">
                  <span>تواصل معنا</span>
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

export default AcademicServices;