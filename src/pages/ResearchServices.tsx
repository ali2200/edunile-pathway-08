import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  BookOpen, 
  Award, 
  CheckCircle,
  Search,
  PenTool,
  Globe,
  Users,
  Clock,
  Target,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const ResearchServices = () => {
  const services = [
    {
      id: 1,
      icon: Search,
      title: "إعداد خطة البحث",
      description: "مساعدة في وضع خطة بحث علمية متكاملة ومنهجية",
      features: [
        "تحديد مشكلة البحث وأهدافه",
        "مراجعة الأدبيات السابقة",
        "وضع المنهجية المناسبة",
        "تحديد الجدول الزمني للبحث"
      ],
      price: "800-1200 جنيه",
      duration: "2-3 أسابيع",
      popular: true
    },
    {
      id: 2,
      icon: PenTool,
      title: "تنسيق الرسائل العلمية",
      description: "تنسيق احترافي للرسائل العلمية حسب معايير الجامعة",
      features: [
        "تنسيق حسب دليل الجامعة",
        "فهرسة تلقائية للمحتويات",
        "تنسيق المراجع والاقتباسات",
        "مراجعة لغوية وإملائية"
      ],
      price: "500-800 جنيه",
      duration: "1-2 أسبوع"
    },
    {
      id: 3,
      icon: Globe,
      title: "النشر في المجلات العلمية",
      description: "دعم كامل في نشر البحوث في المجلات المحكمة",
      features: [
        "اختيار المجلة المناسبة",
        "إعداد البحث للنشر",
        "التواصل مع المحررين",
        "متابعة عملية المراجعة"
      ],
      price: "1000-1500 جنيه",
      duration: "3-6 أشهر",
      popular: true
    },
    {
      id: 4,
      icon: BookOpen,
      title: "التوثيق والاقتباس العلمي",
      description: "تدريب على أساليب التوثيق والاقتباس المختلفة",
      features: [
        "تطبيق أنظمة APA, MLA, Chicago",
        "استخدام برامج إدارة المراجع",
        "تجنب الانتحال العلمي",
        "ورش تدريبية متخصصة"
      ],
      price: "300-500 جنيه",
      duration: "ورشة واحدة"
    },
    {
      id: 5,
      icon: Users,
      title: "مراجعة الأبحاث العلمية",
      description: "مراجعة شاملة للأبحاث قبل التقديم أو النشر",
      features: [
        "مراجعة المنهجية العلمية",
        "تقييم جودة المحتوى",
        "اقتراح تحسينات",
        "تقرير مفصل بالملاحظات"
      ],
      price: "600-900 جنيه",
      duration: "1-2 أسبوع"
    },
    {
      id: 6,
      icon: Award,
      title: "إعداد العروض التقديمية",
      description: "تصميم عروض تقديمية احترافية للبحوث والرسائل",
      features: [
        "تصميم احترافي وجذاب",
        "تلخيص المحتوى بفعالية",
        "إضافة الرسوم البيانية",
        "تدريب على العرض"
      ],
      price: "400-700 جنيه",
      duration: "3-5 أيام"
    }
  ];

  const researchAreas = [
    {
      field: "العلوم الطبية",
      specializations: ["الطب السريري", "الصحة العامة", "البحوث الدوائية", "الطب الوقائي"],
      journals: 15,
      projects: 45
    },
    {
      field: "الهندسة والتكنولوجيا",
      specializations: ["الهندسة المدنية", "هندسة الحاسوب", "الهندسة الكهربائية", "هندسة البترول"],
      journals: 12,
      projects: 38
    },
    {
      field: "العلوم الإنسانية",
      specializations: ["التاريخ الإسلامي", "اللغة العربية", "الدراسات الإسلامية", "الفلسفة"],
      journals: 18,
      projects: 52
    },
    {
      field: "إدارة الأعمال",
      specializations: ["الإدارة الاستراتيجية", "التسويق", "المالية", "إدارة الموارد البشرية"],
      journals: 10,
      projects: 28
    }
  ];

  const publishingSteps = [
    {
      step: 1,
      title: "تقييم البحث",
      description: "تقييم جودة البحث وجاهزيته للنشر"
    },
    {
      step: 2,
      title: "اختيار المجلة",
      description: "اختيار أفضل مجلة مناسبة لموضوع البحث"
    },
    {
      step: 3,
      title: "إعداد المخطوط",
      description: "تنسيق البحث حسب متطلبات المجلة"
    },
    {
      step: 4,
      title: "التقديم والمتابعة",
      description: "تقديم البحث ومتابعة عملية المراجعة"
    },
    {
      step: 5,
      title: "النشر",
      description: "نشر البحث والحصول على شهادة النشر"
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
              خدمات البحث العلمي والنشر
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              دعم متكامل في البحث العلمي والنشر الأكاديمي من إعداد خطة البحث حتى النشر في المجلات المحكمة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-secondary-gradient" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  استشارة بحثية مجانية
                </a>
              </Button>
              <Button size="lg" variant="outline-white" asChild>
                <Link to="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدماتنا البحثية المتخصصة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم دعماً شاملاً في جميع مراحل البحث العلمي والنشر الأكاديمي
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className={`hover:shadow-elegant transition-smooth ${service.popular ? 'ring-2 ring-secondary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.popular ? 'bg-secondary-gradient' : 'bg-primary-gradient'}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                    {service.popular && (
                      <Badge className="bg-secondary text-primary">
                        الأكثر طلباً
                      </Badge>
                    )}
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
                      <div className="text-sm font-semibold text-foreground">التكلفة</div>
                      <div className="text-sm text-secondary font-semibold">{service.price}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">المدة</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${service.popular ? 'bg-secondary-gradient hover:opacity-90' : 'bg-primary-gradient'}`}
                    asChild
                  >
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

      {/* Research Areas Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">مجالات البحث المتخصصة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم دعماً في مختلف المجالات البحثية والتخصصات الأكاديمية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center text-foreground">
                    {area.field}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-secondary">{area.journals}</div>
                        <div className="text-sm text-muted-foreground">مجلة متاحة</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{area.projects}</div>
                        <div className="text-sm text-muted-foreground">مشروع منجز</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">التخصصات الفرعية:</div>
                    <div className="flex flex-wrap gap-1">
                      {area.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline-primary" className="w-full" asChild>
                    <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                      استفسر عن المجال
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publishing Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خطوات النشر العلمي</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نرافقك في كل خطوة من خطوات النشر العلمي لضمان نجاح بحثك
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {publishingSteps.map((step, index) => (
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

      {/* Benefits Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لماذا تختار خدماتنا البحثية؟</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">خبرة متخصصة</h3>
              <p className="opacity-90">فريق من الباحثين والأكاديميين المتخصصين</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">سرعة في الإنجاز</h3>
              <p className="opacity-90">التزام بالمواعيد المحددة وتسليم في الوقت</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">جودة عالية</h3>
              <p className="opacity-90">معايير أكاديمية عالية ومراجعة دقيقة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              جاهز لبدء مشروعك البحثي؟
            </h2>
            <p className="text-lg text-primary/80">
              احصل على استشارة بحثية مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك البحثية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  استشارة بحثية مجانية
                </a>
              </Button>
              <Button size="lg" variant="outline-primary" asChild>
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

export default ResearchServices;