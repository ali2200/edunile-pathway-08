import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileCheck, 
  CheckCircle, 
  Clock, 
  Shield, 
  Calendar,
  ArrowLeft,
  FileText,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

const VisaSupport = () => {
  const serviceFeatures = [
    "إعداد وتجهيز جميع أوراق التأشيرة المطلوبة",
    "حجز مواعيد في السفارات والقنصليات",
    "مراجعة شاملة للطلبات قبل التقديم",
    "متابعة حالة الطلب مع الجهات المختصة",
    "المساعدة في تجديد الإقامة والتأشيرات",
    "تقديم استشارات قانونية حول متطلبات الإقامة"
  ];

  const requiredDocuments = [
    "جواز السفر ساري المفعول",
    "صور شخصية حديثة",
    "خطاب القبول من الجامعة",
    "كشف حساب بنكي",
    "شهادات طبية مصدقة",
    "وثائق التأمين الصحي"
  ];

  const faqs = [
    {
      question: "كم تستغرق عملية استخراج التأشيرة؟",
      answer: "عادة تستغرق من أسبوعين إلى شهر حسب نوع التأشيرة والجنسية، ونحن نتابع مع السفارة لتسريع العملية."
    },
    {
      question: "ماذا لو تم رفض طلب التأشيرة؟",
      answer: "نقوم بمراجعة أسباب الرفض ونساعدك في إعادة التقديم مع تصحيح أي نواقص في الملف."
    },
    {
      question: "هل تشمل الخدمة تجديد الإقامة؟",
      answer: "نعم، نساعد في تجديد الإقامة السنوية وجميع الإجراءات المتعلقة بها."
    },
    {
      question: "هل يمكن تقديم طلبات التأشيرة لجميع الجنسيات؟",
      answer: "نعم، نتعامل مع جميع الجنسيات ونعرف متطلبات كل دولة على حدة."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-primary-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/general-services" className="inline-flex items-center space-x-reverse space-x-2 text-white/80 hover:text-white mb-4 transition-smooth text-sm">
              <ArrowLeft className="w-4 h-4" />
              <span>العودة للخدمات العامة</span>
            </Link>
            
            <div className="flex items-center space-x-reverse space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">استخراج التأشيرة</h1>
                <p className="text-lg opacity-90 mt-1">مساعدة كاملة في إجراءات التأشيرة والإقامة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction with image */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="prose prose-sm max-w-none text-right">
                <p className="text-base text-muted-foreground leading-relaxed">
                  إجراءات التأشيرة والإقامة من أهم الخطوات للطلاب الدوليين، وقد تكون معقدة ومرهقة. نحن نقدم خدمة شاملة لاستخراج التأشيرة الدراسية وتجديد الإقامة، مع ضمان اتباع جميع الإجراءات القانونية الصحيحة. فريقنا المختص يتابع آخر التحديثات في قوانين الهجرة لضمان نجاح طلبك.
                </p>
              </div>
              <div className="lg:order-first">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students working together"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Service Features */}
            <Card className="shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center">ما تشمله الخدمة</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                  <div className="space-y-3">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="text-center shadow-sm">
                <CardHeader className="pb-3">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-1" />
                  <CardTitle className="text-base">المدة الزمنية</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="text-sm px-3 py-1">2-4 أسابيع</Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    تختلف حسب نوع التأشيرة والجنسية
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-sm">
                <CardHeader className="pb-3">
                  <Shield className="w-6 h-6 text-secondary mx-auto mb-1" />
                  <CardTitle className="text-base">التكلفة</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xl font-bold text-secondary">500-800 جنيه</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    + رسوم الجهات الحكومية
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-sm">
                <CardHeader className="pb-3">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-1" />
                  <CardTitle className="text-base">التوفر</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="outline" className="text-sm px-3 py-1">أيام العمل</Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    السبت - الخميس من 9 ص إلى 5 م
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Required Documents with Image */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center justify-center space-x-reverse space-x-3">
                    <FileText className="w-5 h-5 text-secondary" />
                    <span>الوثائق المطلوبة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-3">
                    {requiredDocuments.map((document, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{document}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>ملحوظة:</strong> قائمة الوثائق قد تختلف حسب الجنسية ونوع التأشيرة. سنقوم بإرسال قائمة مفصلة بالوثائق المطلوبة لحالتك الخاصة بعد التواصل.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Document processing"
                  className="w-full h-full max-h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Process Timeline */}
            <Card className="shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center">خطوات العمل</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-6 h-6 bg-secondary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">تقييم الحالة</h4>
                      <p className="text-xs text-muted-foreground">مراجعة أوضاعك والوثائق المتاحة لتحديد أفضل استراتيجية للتقديم</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-6 h-6 bg-secondary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">تجهيز الوثائق</h4>
                      <p className="text-xs text-muted-foreground">إعداد وترجمة وتصديق جميع الوثائق المطلوبة للتقديم</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-6 h-6 bg-secondary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">حجز الموعد</h4>
                      <p className="text-xs text-muted-foreground">حجز موعد في السفارة أو القنصلية وتقديم الطلب</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-6 h-6 bg-secondary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">المتابعة</h4>
                      <p className="text-xs text-muted-foreground">متابعة حالة الطلب حتى الحصول على التأشيرة أو الإقامة</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center">الأسئلة الشائعة</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-3 last:border-b-0">
                      <h4 className="font-semibold text-sm text-foreground mb-1">{faq.question}</h4>
                      <p className="text-xs text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-secondary-gradient shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">
                  ابدأ إجراءات التأشيرة الآن
                </h3>
                <p className="text-primary/80 mb-4 text-sm">
                  دع خبراءنا يساعدونك في الحصول على التأشيرة بأسرع وقت وأقل مجهود
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-3" asChild>
                  <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                    استشارة مجانية عبر واتساب
                  </a>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisaSupport;