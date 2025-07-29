import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  Search, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowLeft,
  Calendar,
  Shield,
  Phone,
  Target,
  BookOpen,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const MajorSelection = () => {
  const features = [
    "تحليل شامل للخلفية الأكاديمية والمهنية",
    "مقارنة مفصلة بين الجامعات والتخصصات", 
    "توضيح فرص العمل المستقبلية لكل تخصص",
    "استشارة مع خبراء أكاديميين متخصصين",
    "تقييم سوق العمل والرواتب المتوقعة",
    "خطة دراسية مقترحة للتخصص المختار"
  ];

  const process = [
    { step: "تحليل الملف", desc: "دراسة شهاداتك وخبراتك السابقة" },
    { step: "تحديد الميول", desc: "فهم اهتماماتك وأهدافك المهنية" },
    { step: "بحث التخصصات", desc: "استكشاف الخيارات المتاحة" },
    { step: "مقارنة الجامعات", desc: "تقييم أفضل الجامعات للتخصص" },
    { step: "التوصية النهائية", desc: "تقديم التوصية المناسبة لك" }
  ];

  const targetStudents = [
    "خريجو الثانوية العامة الجدد",
    "الطلاب الراغبون في تغيير التخصص",
    "الطلاب المترددون بين تخصصات متعددة",
    "من يريد دراسة في جامعة معينة",
    "الباحثون عن أفضل فرص العمل"
  ];

  const consultationAreas = [
    { title: "التخصصات الطبية", desc: "طب، صيدلة، طب أسنان، العلاج الطبيعي" },
    { title: "التخصصات الهندسية", desc: "جميع فروع الهندسة والتكنولوجيا" },
    { title: "العلوم التطبيقية", desc: "علوم الحاسوب، الفيزياء، الكيمياء" },
    { title: "التجارة والاقتصاد", desc: "إدارة أعمال، محاسبة، اقتصاد" },
    { title: "العلوم الإنسانية", desc: "آداب، حقوق، إعلام، ترجمة" },
    { title: "الفنون والتصميم", desc: "فنون جميلة، تطبيقية، تصميم" }
  ];

  const faqs = [
    {
      question: "هل الاستشارة مجانية فعلاً؟",
      answer: "نعم، نقدم استشارة مجانية كاملة لمساعدتك في اختيار التخصص والجامعة المناسبة"
    },
    {
      question: "كم يستغرق الحصول على التوصية؟",
      answer: "عادة من أسبوع إلى أسبوعين، حسب التعقيد وعدد الخيارات المطلوب مقارنتها"
    },
    {
      question: "هل يمكنكم مساعدتي لو كنت خارج مصر؟",
      answer: "نعم، نقدم الاستشارة عن بُعد عبر الفيديو كول أو الواتساب"
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
              <BreadcrumbPage>اختيار التخصص والجامعة</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              اختيار التخصص والجامعة
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              نساعدك في اختيار أفضل تخصص وجامعة حسب خلفيتك الأكاديمية وأهدافك المهنية مع استشارة مجانية شاملة
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
                  <CardTitle className="text-2xl">لماذا اختيار التخصص مهم؟</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    اختيار التخصص الجامعي قرار مصيري يؤثر على مستقبلك المهني والشخصي. لذلك نقدم لك استشارة 
                    متخصصة مجانية لمساعدتك في اتخاذ القرار الصحيح بناءً على تحليل دقيق لقدراتك وميولك.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    فريقنا من المستشارين الأكاديميين لديه خبرة واسعة في سوق العمل المصري والعربي، مما يضمن 
                    حصولك على توصية مدروسة ومبنية على معطيات حقيقية.
                  </p>
                </CardContent>
              </Card>

              {/* Consultation Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">مجالات الاستشارة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {consultationAreas.map((area, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{area.title}</h4>
                        <p className="text-sm text-muted-foreground">{area.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">ما نقدمه لك في الاستشارة</CardTitle>
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

              {/* Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Target className="w-6 h-6" />
                    <span>خطوات الاستشارة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {process.map((item, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{item.step}</div>
                          <div className="text-muted-foreground">{item.desc}</div>
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
                    <span>من يستفيد من هذه الخدمة؟</span>
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
                    <Badge variant="secondary">1-2 أسبوع</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <DollarSign className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">التكلفة</span>
                    </div>
                    <Badge className="bg-green-500 text-white">مجاني</Badge>
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
                        احجز استشارة مجانية
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

              {/* Free Service */}
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">خدمة مجانية</h3>
                  <p className="text-sm text-muted-foreground">
                    نقدم هذه الاستشارة مجاناً كمساهمة في مستقبل الطلاب
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

export default MajorSelection;