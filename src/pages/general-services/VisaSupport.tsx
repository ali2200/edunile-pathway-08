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
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/general-services" className="inline-flex items-center space-x-reverse space-x-2 text-white/80 hover:text-white mb-6 transition-smooth">
              <ArrowLeft className="w-4 h-4" />
              <span>العودة للخدمات العامة</span>
            </Link>
            
            <div className="flex items-center space-x-reverse space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold">استخراج التأشيرة</h1>
                <p className="text-xl opacity-90 mt-2">مساعدة كاملة في إجراءات التأشيرة والإقامة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                إجراءات التأشيرة والإقامة من أهم الخطوات للطلاب الدوليين، وقد تكون معقدة ومرهقة. نحن نقدم خدمة شاملة لاستخراج التأشيرة الدراسية وتجديد الإقامة، مع ضمان اتباع جميع الإجراءات القانونية الصحيحة. فريقنا المختص يتابع آخر التحديثات في قوانين الهجرة لضمان نجاح طلبك.
              </p>
            </div>

            {/* Service Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">ما تشمله الخدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>المدة الزمنية</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">2-4 أسابيع</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    تختلف حسب نوع التأشيرة والجنسية
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>التكلفة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-secondary">500-800 جنيه</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    + رسوم الجهات الحكومية
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>التوفر</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">أيام العمل</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    السبت - الخميس من 9 ص إلى 5 م
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center space-x-reverse space-x-3">
                  <FileText className="w-6 h-6 text-secondary" />
                  <span>الوثائق المطلوبة</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {requiredDocuments.map((document, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{document}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>ملحوظة:</strong> قائمة الوثائق قد تختلف حسب الجنسية ونوع التأشيرة. سنقوم بإرسال قائمة مفصلة بالوثائق المطلوبة لحالتك الخاصة بعد التواصل.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">خطوات العمل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تقييم الحالة</h4>
                      <p className="text-muted-foreground">مراجعة أوضاعك والوثائق المتاحة لتحديد أفضل استراتيجية للتقديم</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تجهيز الوثائق</h4>
                      <p className="text-muted-foreground">إعداد وترجمة وتصديق جميع الوثائق المطلوبة للتقديم</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">حجز الموعد</h4>
                      <p className="text-muted-foreground">حجز موعد في السفارة أو القنصلية وتقديم الطلب</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">المتابعة</h4>
                      <p className="text-muted-foreground">متابعة حالة الطلب حتى الحصول على التأشيرة أو الإقامة</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">الأسئلة الشائعة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-secondary-gradient">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ابدأ إجراءات التأشيرة الآن
                </h3>
                <p className="text-primary/80 mb-6">
                  دع خبراءنا يساعدونك في الحصول على التأشيرة بأسرع وقت وأقل مجهود
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
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