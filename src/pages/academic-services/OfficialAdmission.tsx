import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  Send, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  FileText, 
  ArrowLeft,
  Calendar,
  Shield,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const OfficialAdmission = () => {
  const features = [
    "تقديم إلكتروني رسمي للجامعات",
    "متابعة حالة الطلب يومياً", 
    "التواصل المباشر مع مكاتب القبول",
    "ضمان صحة إدخال البيانات",
    "مراجعة الطلب قبل الإرسال",
    "تحديثات فورية عن حالة التقديم"
  ];

  const timeline = [
    { day: "اليوم الأول", task: "مراجعة الوثائق والبيانات" },
    { day: "اليوم 2-3", task: "تقديم الطلب إلكترونياً" },
    { day: "اليوم 4-7", task: "متابعة مع الجامعات" },
    { day: "اليوم 8-14", task: "الحصول على الرد النهائي" }
  ];

  const requiredDocs = [
    "صورة شخصية حديثة",
    "شهادة الثانوية العامة مترجمة ومصدقة",
    "جواز السفر ساري المفعول",
    "شهادة اللغة الإنجليزية (إن وُجدت)",
    "شهادات دورات إضافية (اختيارية)"
  ];

  const faqs = [
    {
      question: "هل يمكنني التقديم لأكثر من جامعة؟",
      answer: "نعم، يمكنك التقديم لعدة جامعات لزيادة فرص القبول"
    },
    {
      question: "ماذا لو تم رفض طلبي؟",
      answer: "نساعدك في معرفة أسباب الرفض والتقديم لجامعات أخرى مناسبة"
    },
    {
      question: "كم يستغرق الحصول على رد الجامعة؟",
      answer: "عادة من أسبوع إلى أسبوعين حسب نوع الجامعة والتخصص"
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
              <BreadcrumbPage>التقديم الجامعي الرسمي</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              التقديم الجامعي الرسمي
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              نقوم بتقديم مباشر للجامعات الحكومية والخاصة مع متابعة حالة الطالب يومياً وضمان إتمام العملية بنجاح
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
                    خدمة التقديم الجامعي الرسمي هي الخطوة الأولى والأهم في رحلتك الأكاديمية. نحن نتولى عملية التقديم 
                    بالكامل نيابة عنك، مما يضمن تقديم طلبك بالطريقة الصحيحة وفي الوقت المناسب.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    فريقنا المتخصص لديه خبرة واسعة في التعامل مع مختلف الجامعات المصرية، ويضمن إتمام عملية التقديم 
                    وفقاً لمتطلبات كل جامعة على حدة.
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">مميزات الخدمة</CardTitle>
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

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Calendar className="w-6 h-6" />
                    <span>المخطط الزمني للعمل</span>
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
                          <div className="font-semibold text-foreground">{item.day}</div>
                          <div className="text-muted-foreground">{item.task}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <FileText className="w-6 h-6" />
                    <span>الوثائق المطلوبة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {requiredDocs.map((doc, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{doc}</span>
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
                    <Badge className="bg-secondary text-primary">300-500 جنيه</Badge>
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
                        اطلب الخدمة الآن
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

              {/* Guarantee */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">ضمان الخدمة</h3>
                  <p className="text-sm text-muted-foreground">
                    نضمن تقديم طلبك بطريقة صحيحة أو استرداد كامل للمبلغ
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

export default OfficialAdmission;