import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Plane,
  ArrowLeft,
  CreditCard,
  Smartphone,
  Bus,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Transportation = () => {
  const serviceFeatures = [
    "سيارات خاصة آمنة ومريحة",
    "خدمة حجز تطبيقات النقل (أوبر، كريم)",
    "بطاقات المواصلات العامة",
    "إرشاد لأفضل الطرق والمسارات",
    "خدمة نقل للمطار عند السفر",
    "أسعار مخفضة خاصة للطلاب"
  ];

  const transportOptions = [
    {
      type: "سيارة خاصة",
      price: "200-300 جنيه/رحلة",
      description: "سيارة مكيفة مع سائق محترف",
      features: ["مكيف", "سائق مجرب", "آمنة ومريحة", "متاحة 24/7"],
      suitable: "الرحلات الفردية والعائلية"
    },
    {
      type: "مواصلات عامة",
      price: "5-20 جنيه/رحلة",
      description: "مترو الأنفاق والحافلات العامة",
      features: ["اقتصادية جداً", "تغطية واسعة", "سريعة في الذروة", "بيئية"],
      suitable: "الرحلات اليومية والقصيرة"
    },
    {
      type: "تطبيقات النقل",
      price: "30-100 جنيه/رحلة",
      description: "أوبر وكريم وتطبيقات أخرى",
      features: ["آمن وموثوق", "تتبع الرحلة", "دفع إلكتروني", "تقييم السائق"],
      suitable: "الرحلات المتوسطة والليلية"
    }
  ];

  const routes = [
    { from: "المطار", to: "وسط القاهرة", time: "45-60 دقيقة", price: "150-250 جنيه" },
    { from: "السكن الطلابي", to: "الجامعة", time: "20-30 دقيقة", price: "30-50 جنيه" },
    { from: "وسط البلد", to: "الأهرامات", time: "30-45 دقيقة", price: "50-80 جنيه" },
    { from: "المعادي", to: "مصر الجديدة", time: "40-50 دقيقة", price: "60-90 جنيه" }
  ];

  const faqs = [
    {
      question: "كيف يمكنني الحصول على بطاقة المترو؟",
      answer: "نساعدك في الحصول على بطاقة المترو من أي محطة، وتعليمك كيفية تعبئتها واستخدامها."
    },
    {
      question: "هل المواصلات آمنة للطلاب الأجانب؟",
      answer: "نعم، المواصلات في القاهرة آمنة عموماً، وسنوضح لك النصائح الأمنية والأوقات الأفضل للتنقل."
    },
    {
      question: "ما هي أفضل تطبيقات النقل في مصر؟",
      answer: "أوبر وكريم هما الأشهر والأكثر أماناً، وسنساعدك في تحميلهما وتفعيل حسابك."
    },
    {
      question: "هل يمكن حجز سيارة للرحلات الطويلة؟",
      answer: "نعم، نوفر سيارات للرحلات بين المدن والرحلات السياحية بأسعار مناسبة."
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
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold">خدمات النقل والمواصلات</h1>
                <p className="text-xl opacity-90 mt-2">تنقل آمن ومريح في جميع أنحاء القاهرة</p>
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
                التنقل في مدينة كبيرة مثل القاهرة قد يكون تحدياً للطلاب الجدد. نحن نقدم حلول نقل شاملة تناسب جميع الاحتياجات والميزانيات، مع التركيز على الأمان والراحة. سواء كنت تحتاج للتنقل اليومي أو رحلات خاصة، لدينا الحل المناسب لك.
              </p>
            </div>

            {/* Service Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">خدمات النقل المتاحة</CardTitle>
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

            {/* Transport Options */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-foreground">خيارات النقل المتاحة</h2>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {transportOptions.map((option, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-secondary-gradient rounded-lg flex items-center justify-center mx-auto">
                          {index === 0 && <Car className="w-6 h-6 text-primary" />}
                          {index === 1 && <Bus className="w-6 h-6 text-primary" />}
                          {index === 2 && <Smartphone className="w-6 h-6 text-primary" />}
                        </div>
                        <CardTitle className="text-xl">{option.type}</CardTitle>
                        <div className="text-lg font-bold text-secondary">{option.price}</div>
                      </div>
                      <p className="text-muted-foreground text-center">{option.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-reverse space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <strong>مناسب لـ:</strong> {option.suitable}
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
                  <CardTitle>التوفر</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">24/7</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    خدمة على مدار الساعة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CreditCard className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>طريقة الدفع</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-lg font-bold text-secondary">نقداً أو كارت</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    طرق دفع متعددة ومرنة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>خصومات</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">للطلاب</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    أسعار خاصة للطلاب الدوليين
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Popular Routes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center space-x-reverse space-x-3">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span>المسارات الشائعة والأسعار</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-right">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 font-semibold text-foreground">من</th>
                        <th className="py-3 px-4 font-semibold text-foreground">إلى</th>
                        <th className="py-3 px-4 font-semibold text-foreground">الوقت المتوقع</th>
                        <th className="py-3 px-4 font-semibold text-foreground">السعر التقريبي</th>
                      </tr>
                    </thead>
                    <tbody>
                      {routes.map((route, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 px-4">{route.from}</td>
                          <td className="py-3 px-4">{route.to}</td>
                          <td className="py-3 px-4 text-muted-foreground">{route.time}</td>
                          <td className="py-3 px-4 text-secondary font-semibold">{route.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>ملحوظة:</strong> الأسعار والأوقات تقريبية وقد تختلف حسب حالة المرور والوقت من اليوم.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">نصائح مهمة للتنقل في القاهرة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center space-x-reverse space-x-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span>أفضل الأوقات للتنقل</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• تجنب ساعات الذروة (7-9 ص، 3-6 م)</li>
                      <li>• النقل الليلي آمن في المناطق الرئيسية</li>
                      <li>• الجمعة صباحاً أفضل وقت للرحلات الطويلة</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center space-x-reverse space-x-2">
                      <Smartphone className="w-5 h-5 text-secondary" />
                      <span>تطبيقات مفيدة</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• أوبر وكريم للتاكسي الآمن</li>
                      <li>• Google Maps للطرق والمواصلات</li>
                      <li>• Moovit لجداول المواصلات العامة</li>
                    </ul>
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
                  احجز خدمة النقل الآن
                </h3>
                <p className="text-primary/80 mb-6">
                  تواصل معنا لحجز سيارة أو للحصول على مساعدة في ترتيب وسائل النقل المناسبة لك
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

export default Transportation;