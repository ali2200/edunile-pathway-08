import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowLeft,
  Calendar,
  Shield,
  Phone,
  BookOpen,
  UserCheck,
  TrendingUp,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const AcademicFollowup = () => {
  const features = [
    "متابعة الأداء الأكاديمي والدرجات",
    "حل المشكلات الإدارية مع الجامعة", 
    "دعم في إعداد الأبحاث والمشاريع",
    "تواصل مستمر مع أساتذة الكليات",
    "إرشاد أكاديمي طوال فترة الدراسة",
    "مساعدة في اختيار المواد الاختيارية"
  ];

  const plans = [
    { 
      name: "الخطة الأساسية", 
      price: "500 جنيه/فصل", 
      features: ["متابعة شهرية", "حل المشاكل الإدارية", "استشارة أكاديمية"] 
    },
    { 
      name: "الخطة الشاملة", 
      price: "800 جنيه/فصل", 
      features: ["متابعة أسبوعية", "دعم في الأبحاث", "تواصل مع الأساتذة", "مراجعة الدرجات"] 
    },
    { 
      name: "الخطة المميزة", 
      price: "1200 جنيه/فصل", 
      features: ["متابعة يومية", "دعم شامل", "مرافقة شخصية", "ضمان النجاح"] 
    }
  ];

  const timeline = [
    { period: "بداية الفصل", task: "وضع خطة دراسية مفصلة" },
    { period: "أسبوعياً", task: "متابعة الحضور والمشاركة" },
    { period: "شهرياً", task: "مراجعة الدرجات والتقييمات" },
    { period: "نهاية الفصل", task: "تقييم الأداء وخطة التحسين" }
  ];

  const supportAreas = [
    { title: "الأداء الأكاديمي", desc: "متابعة الدرجات وتحسين الأداء", icon: TrendingUp },
    { title: "المشاكل الإدارية", desc: "حل القضايا مع إدارة الكلية", icon: UserCheck },
    { title: "الأبحاث والمشاريع", desc: "دعم في إعداد البحوث والتكليفات", icon: BookOpen },
    { title: "التواصل", desc: "تسهيل التواصل مع الأساتذة", icon: MessageCircle }
  ];

  const targetStudents = [
    "الطلاب الجدد في السنة الأولى",
    "من يواجه صعوبات أكاديمية",
    "الطلاب الدوليين",
    "من يحتاج دعماً إضافياً",
    "الطلاب المتفوقون الساعون للتميز"
  ];

  const faqs = [
    {
      question: "هل يمكن إلغاء الخدمة في أي وقت؟",
      answer: "نعم، يمكنك إلغاء الخدمة في نهاية أي فصل دراسي دون التزامات إضافية"
    },
    {
      question: "كيف تتم المتابعة الأكاديمية؟",
      answer: "من خلال تقارير دورية، لقاءات شخصية، ومتابعة إلكترونية عبر النظام الجامعي"
    },
    {
      question: "هل يشمل ذلك مساعدة في الامتحانات؟",
      answer: "نعم، نقدم مراجعة شاملة قبل الامتحانات ونصائح للاستعداد الأمثل"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">الرئيسية</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/academic-services">الخدمات الدراسية</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>المتابعة الأكاديمية المستمرة</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              المتابعة الأكاديمية المستمرة
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              دعم ومتابعة شاملة طوال فترة الدراسة حتى التخرج بنجاح مع فريق متخصص في الإرشاد الأكاديمي
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Service Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">نظرة عامة على الخدمة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    المتابعة الأكاديمية المستمرة خدمة تهدف لضمان نجاحك طوال رحلتك الجامعية. نحن نقف معك من اليوم 
                    الأول وحتى التخرج، نساعدك في التغلب على التحديات وتحقيق التفوق الأكاديمي.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    فريقنا من المستشارين الأكاديميين يتابع تقدمك بانتظام ويقدم الدعم اللازم في جميع جوانب 
                    الحياة الجامعية، من الدراسة والامتحانات إلى البحوث والمشاريع.
                  </p>
                </CardContent>
              </Card>

              {/* Support Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">مجالات الدعم</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {supportAreas.map((area, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-3 p-4 border border-border rounded-lg">
                        <area.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{area.title}</h4>
                          <p className="text-sm text-muted-foreground">{area.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">ما نقدمه لك</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Plans */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">خطط المتابعة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {plans.map((plan, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{plan.name}</h4>
                        <div className="text-lg font-bold text-secondary mb-3">{plan.price}</div>
                        <ul className="space-y-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-reverse space-x-2">
                              <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Calendar className="w-6 h-6" />
                    <span>دورة المتابعة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{item.period}</div>
                          <div className="text-muted-foreground">{item.task}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Target Students */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Users className="w-6 h-6" />
                    <span>من يحتاج هذه الخدمة؟</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {targetStudents.map((student, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{student}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أسئلة شائعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Service Info */}
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl">معلومات الخدمة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">المدة</span>
                    </div>
                    <Badge variant="secondary">طوال الدراسة</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <DollarSign className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">التكلفة</span>
                    </div>
                    <Badge className="bg-secondary text-primary">500+ جنيه/فصل</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">مناسب لـ</span>
                    </div>
                    <span className="text-sm text-muted-foreground">جميع الطلاب</span>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full bg-primary-gradient" asChild>
                      <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                        ابدأ المتابعة الآن
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+201019434737" className="flex items-center justify-center space-x-reverse space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>اتصل بنا</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Success Guarantee */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">ضمان النجاح</h3>
                  <p className="text-sm text-muted-foreground">
                    نضمن تحسن أدائك الأكاديمي خلال الفصل الأول
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicFollowup;