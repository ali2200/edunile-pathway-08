import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  CheckCircle, 
  MapPin, 
  Shield, 
  Users,
  ArrowLeft,
  Wifi,
  Car,
  Shield as Security,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Housing = () => {
  const serviceFeatures = [
    "اقتراح سكن طلابي أو عائلي حسب الاحتياجات",
    "ترتيب العقود والتأمينات القانونية",
    "فحص السكن قبل التوصية به",
    "مساكن موثوقة وقريبة من الجامعات",
    "مساعدة في التفاوض على الأسعار",
    "متابعة ما بعد السكن لحل أي مشاكل"
  ];

  const housingTypes = [
    {
      type: "سكن طلابي مشترك",
      price: "1500-2500 جنيه/شهر",
      features: ["غرف مشتركة", "مطبخ مشترك", "إنترنت مجاني", "أمان 24/7", "قرب من الجامعات"],
      suitable: "الطلاب المنفردين الباحثين عن بيئة اجتماعية"
    },
    {
      type: "شقة خاصة مفروشة",
      price: "3000-5000 جنيه/شهر",
      features: ["غرفة خاصة", "حمام خاص", "مطبخ مجهز", "تكييف", "أثاث كامل"],
      suitable: "الطلاب الذين يفضلون الخصوصية"
    },
    {
      type: "سكن عائلي",
      price: "4000-7000 جنيه/شهر",
      features: ["شقة كاملة", "غرف متعددة", "مرافق كاملة", "موقع متميز", "مناسب للعائلات"],
      suitable: "الطلاب المتزوجين والعائلات"
    }
  ];

  const locations = [
    { name: "مصر الجديدة", description: "قريب من جامعة الأزهر وجامعة عين شمس" },
    { name: "المعادي", description: "منطقة راقية قريبة من الجامعة الأمريكية" },
    { name: "الدقي", description: "قريب من جامعة القاهرة ووسط البلد" },
    { name: "العاصمة الإدارية", description: "منطقة حديثة مع جامعات جديدة" }
  ];

  const faqs = [
    {
      question: "كيف تضمنون جودة وأمان السكن؟",
      answer: "نقوم بزيارة شخصية لكل سكن قبل التوصية به، ونتأكد من توفر جميع المرافق الأساسية ومعايير الأمان."
    },
    {
      question: "هل يمكن تغيير السكن إذا لم يعجبني؟",
      answer: "نعم، نوفر فترة تجريبية ونساعدك في إيجاد بديل مناسب إذا لم تكن راضياً عن السكن الحالي."
    },
    {
      question: "ما هي المصاريف الإضافية للسكن؟",
      answer: "قد تشمل فواتير الكهرباء والمياه والغاز والإنترنت، وسنوضح لك كل التفاصيل قبل التوقيع."
    },
    {
      question: "هل تساعدون في إجراءات العقد؟",
      answer: "نعم، نساعد في مراجعة العقد والتأكد من شروطه العادلة والقانونية."
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
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold">توفير السكن المناسب</h1>
                <p className="text-xl opacity-90 mt-2">سكن آمن ومريح قريب من جامعتك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                إيجاد السكن المناسب من أهم التحديات التي تواجه الطلاب الدوليين. نحن نساعدك في العثور على سكن آمن ومريح يناسب احتياجاتك وميزانيتك. لدينا شبكة واسعة من الشراكات مع مالكي العقارات الموثوقين لضمان حصولك على أفضل الخيارات المتاحة.
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

            {/* Housing Types */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-foreground">أنواع السكن المتاحة</h2>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {housingTypes.map((housing, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <CardTitle className="text-xl text-center">{housing.type}</CardTitle>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">{housing.price}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {housing.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-reverse space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <strong>مناسب لـ:</strong> {housing.suitable}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>وقت الإيجاد</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">3-7 أيام</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    حسب نوع السكن المطلوب والمنطقة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>رسوم الخدمة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-secondary">مجانية</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    لا نتقاضى رسوم على الخدمة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Security className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>الضمان</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">سكن مضمون</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    نضمن جودة وأمان السكن المُوصى به
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Popular Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center space-x-reverse space-x-3">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span>المناطق المتاحة</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {locations.map((location, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">{location.name}</h4>
                      <p className="text-sm text-muted-foreground">{location.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">كيف نساعدك في إيجاد السكن؟</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تحديد الاحتياجات</h4>
                      <p className="text-muted-foreground">نناقش معك احتياجاتك وميزانيتك والمنطقة المفضلة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">البحث والفحص</h4>
                      <p className="text-muted-foreground">نبحث عن الخيارات المناسبة ونفحصها شخصياً</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">العرض والزيارة</h4>
                      <p className="text-muted-foreground">نعرض عليك أفضل الخيارات ونرتب لك زيارات للمعاينة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">إتمام الإجراءات</h4>
                      <p className="text-muted-foreground">نساعد في التوقيع على العقد وإنهاء جميع الإجراءات</p>
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
                  ابحث عن سكنك المثالي الآن
                </h3>
                <p className="text-primary/80 mb-6">
                  دع خبراءنا يساعدونك في إيجاد السكن المناسب لاحتياجاتك وميزانيتك
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                    ابدأ البحث عن السكن
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

export default Housing;