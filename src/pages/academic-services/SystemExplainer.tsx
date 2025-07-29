import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowLeft,
  Calendar,
  Shield,
  Phone,
  GraduationCap,
  FileText,
  Target,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const SystemExplainer = () => {
  const features = [
    "شرح مفصل للوائح وقوانين الجامعة",
    "توضيح نظام الساعات المعتمدة", 
    "إرشادات جدولة المواد والامتحانات",
    "نصائح وطرق التفوق الأكاديمي",
    "شرح نظام الدرجات والتقديرات",
    "معلومات عن الأنشطة والخدمات الجامعية"
  ];

  const topics = [
    { 
      title: "نظام الساعات المعتمدة", 
      desc: "كيفية حساب الساعات وتوزيع المواد",
      icon: Clock
    },
    { 
      title: "لوائح الجامعة", 
      desc: "القوانين والقواعد التي تحكم الدراسة",
      icon: FileText
    },
    { 
      title: "نظام الامتحانات", 
      desc: "مواعيد وطرق الامتحانات والتقييم",
      icon: GraduationCap
    },
    { 
      title: "خطة الدراسة", 
      desc: "كيفية وضع خطة دراسية متوازنة",
      icon: Target
    }
  ];

  const universityTypes = [
    "الجامعات الحكومية المصرية",
    "الجامعات الخاصة المصرية",
    "الجامعات الأهلية الجديدة",
    "الجامعات التكنولوجية",
    "المعاهد العليا والمتوسطة"
  ];

  const sessionContent = [
    { phase: "المرحلة الأولى", content: "التعرف على نظام الجامعة وهيكلها الإداري" },
    { phase: "المرحلة الثانية", content: "شرح نظام الساعات المعتمدة والمتطلبات" },
    { phase: "المرحلة الثالثة", content: "توضيح نظام الامتحانات والدرجات" },
    { phase: "المرحلة الأخيرة", content: "نصائح التفوق والاستعداد للحياة الجامعية" }
  ];

  const targetStudents = [
    "الطلاب الجدد في السنة الأولى",
    "المحولون من جامعات أخرى",
    "طلاب الدراسات العليا الجدد",
    "الطلاب الدوليين",
    "من يواجه صعوبة في فهم النظام"
  ];

  const faqs = [
    {
      question: "هل الجلسة مجانية حقاً؟",
      answer: "نعم، نقدم هذه الجلسة مجاناً كخدمة تعريفية للطلاب الجدد"
    },
    {
      question: "كم تستغرق الجلسة؟",
      answer: "عادة من ساعة إلى ساعتين حسب الأسئلة والنقاشات"
    },
    {
      question: "هل يمكن حضور الجلسة أونلاين؟",
      answer: "نعم، نقدم الجلسة حضورياً أو عن بُعد حسب تفضيلك"
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
              <BreadcrumbPage>شرح النظام الدراسي</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              شرح النظام الدراسي
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              توضيح كامل لنظام الدراسة والامتحانات والمتطلبات الأكاديمية في جلسة تعريفية مجانية شاملة
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
                  <CardTitle className="text-2xl">لماذا تحتاج لفهم النظام الدراسي؟</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    فهم النظام الدراسي الجامعي أمر بالغ الأهمية لنجاحك الأكاديمي. كثير من الطلاب يواجهون صعوبات 
                    في بداية رحلتهم الجامعية بسبب عدم فهم قوانين ولوائح الجامعة.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    نحن نقدم لك جلسة تعريفية شاملة ومجانية تساعدك على فهم كل ما تحتاج معرفته لبداية ناجحة في 
                    رحلتك الجامعية.
                  </p>
                </CardContent>
              </Card>

              {/* Topics Covered */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">المواضيع المشمولة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-3 p-4 border border-border rounded-lg">
                        <topic.icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{topic.title}</h4>
                          <p className="text-sm text-muted-foreground">{topic.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">ما ستتعلمه في الجلسة</CardTitle>
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

              {/* Session Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Calendar className="w-6 h-6" />
                    <span>محتوى الجلسة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sessionContent.map((item, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{item.phase}</div>
                          <div className="text-muted-foreground">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* University Types */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أنواع الجامعات المشمولة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {universityTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{type}</span>
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
                    <span>من يستفيد من هذه الجلسة؟</span>
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
                  <CardTitle className="text-xl">معلومات الجلسة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">المدة</span>
                    </div>
                    <Badge variant="secondary">جلسة واحدة</Badge>
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
                    <span className="text-sm text-muted-foreground">الطلاب الجدد</span>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full bg-primary-gradient" asChild>
                      <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                        احجز جلستك المجانية
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
                  <h3 className="font-semibold text-foreground mb-2">جلسة مجانية</h3>
                  <p className="text-sm text-muted-foreground">
                    نقدم هذه الجلسة مجاناً لمساعدة الطلاب على البداية الصحيحة
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

export default SystemExplainer;