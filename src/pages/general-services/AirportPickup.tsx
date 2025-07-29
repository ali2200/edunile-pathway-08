import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  CheckCircle, 
  Clock, 
  Shield, 
  MapPin,
  Phone,
  Car,
  ArrowLeft,
  Users,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const AirportPickup = () => {
  const serviceFeatures = [
    "استقبال شخصي في المطار من ممثل الشركة",
    "المساعدة في إجراءات الجمارك والهجرة",
    "نقل آمن ومريح إلى مكان الإقامة",
    "مرافق يتحدث العربية والإنجليزية",
    "متابعة الرحلة حتى الوصول بأمان",
    "خدمة طوارئ في حالة تأخير الطيران"
  ];

  const faqs = [
    {
      question: "كيف سأعرف مندوب الاستقبال في المطار؟",
      answer: "سيكون المندوب يحمل لافتة باسمك واسم الشركة، وسنرسل لك صورته ورقم هاتفه قبل وصولك."
    },
    {
      question: "ماذا لو تأخر موعد وصول الطائرة؟",
      answer: "نتابع مواعيد الطيران باستمرار، والمندوب سينتظرك حتى وصولك مهما تأخر الموعد."
    },
    {
      question: "هل الخدمة متاحة لجميع المطارات؟",
      answer: "نغطي مطار القاهرة الدولي بشكل أساسي، ويمكننا ترتيب الاستقبال من مطارات أخرى حسب الطلب."
    },
    {
      question: "هل يمكن طلب سيارة أكبر للعائلات؟",
      answer: "نعم، نوفر سيارات مختلفة الأحجام حسب عدد الأشخاص والأمتعة."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-primary-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Airport and travel"
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
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">الاستقبال من المطار</h1>
                <p className="text-lg opacity-90 mt-1">استقبال آمن ومريح فور وصولك لمصر</p>
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
                  الوصول إلى بلد جديد يمكن أن يكون مرهقاً، خاصة بعد رحلة طويلة. خدمة الاستقبال من المطار تضمن لك بداية مريحة وآمنة لرحلتك الدراسية في مصر. نحن نعلم أن أول انطباع مهم، لذلك نحرص على أن تشعر بالأمان والراحة منذ لحظة وصولك.
                </p>
              </div>
              <div className="lg:order-first">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c11dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Journey and arrival"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
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
                  <CardTitle>التوفر</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">24/7</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    متاح طوال أيام الأسبوع في جميع الأوقات
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>التكلفة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-secondary">300-500 جنيه</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    تختلف حسب المسافة ونوع السيارة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>الحجز المسبق</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">مطلوب</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    يُفضل الحجز قبل 24 ساعة من الوصول
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Process Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">كيف تتم الخدمة؟</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تأكيد الحجز</h4>
                      <p className="text-muted-foreground">نتواصل معك لتأكيد تفاصيل الرحلة ومعلومات الوصول</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تتبع الرحلة</h4>
                      <p className="text-muted-foreground">نتابع موعد وصول طائرتك لضمان وجود المندوب في الوقت المناسب</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">الاستقبال</h4>
                      <p className="text-muted-foreground">المندوب سيكون في انتظارك مع لافتة باسمك في صالة الوصول</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">النقل الآمن</h4>
                      <p className="text-muted-foreground">نقلك مباشرة إلى مكان إقامتك مع الحفاظ على راحتك وأمانك</p>
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
                  احجز خدمة الاستقبال الآن
                </h3>
                <p className="text-primary/80 mb-6">
                  ابدأ رحلتك في مصر براحة وأمان مع خدمة الاستقبال المتميزة
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                    احجز الآن عبر واتساب
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

export default AirportPickup;