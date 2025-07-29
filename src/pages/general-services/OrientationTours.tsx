import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  CheckCircle, 
  Clock, 
  Users, 
  Calendar,
  ArrowLeft,
  Camera,
  Building,
  GraduationCap,
  Landmark
} from "lucide-react";
import { Link } from "react-router-dom";

const OrientationTours = () => {
  const serviceFeatures = [
    "جولة شاملة في حرم الجامعة ومرافقها",
    "زيارة الأماكن التاريخية والسياحية المهمة",
    "التعرف على المرافق العامة والخدمات الضرورية",
    "شرح وسائل المواصلات وأفضل الطرق",
    "نصائح عملية للتكيف مع الحياة في مصر",
    "دليل للأماكن المفيدة للطلاب الدوليين"
  ];

  const tourTypes = [
    {
      type: "جولة الجامعة",
      duration: "2-3 ساعات",
      description: "تعرف على حرم جامعتك ومرافقها",
      highlights: ["مباني الكليات", "المكتبة", "المطاعم", "مكاتب الخدمات الطلابية", "أماكن الترفيه"]
    },
    {
      type: "جولة المدينة",
      duration: "4-5 ساعات",
      description: "استكشف المعالم الرئيسية للقاهرة",
      highlights: ["الأهرامات", "الأزهر الشريف", "خان الخليلي", "نهر النيل", "قلعة صلاح الدين"]
    },
    {
      type: "جولة الخدمات",
      duration: "3-4 ساعات",
      description: "تعرف على الخدمات الضرورية في المنطقة",
      highlights: ["البنوك", "المستشفيات", "محلات البقالة", "الصيدليات", "مراكز التسوق"]
    }
  ];

  const practicalTips = [
    "كيفية استخدام المواصلات العامة",
    "أفضل الأوقات لتجنب الزحام",
    "التعامل مع الثقافة المصرية",
    "أماكن الطعام الحلال للطلاب المسلمين",
    "نصائح للحفاظ على الأمان الشخصي",
    "تطبيقات مفيدة للحياة في مصر"
  ];

  const faqs = [
    {
      question: "هل الجولات تتم بالمجان؟",
      answer: "تختلف أسعار الجولات حسب النوع والمدة، مع خصومات خاصة للطلاب الجدد والمجموعات."
    },
    {
      question: "متى أفضل وقت للقيام بالجولة؟",
      answer: "يُفضل القيام بجولة الجامعة في الأسبوع الأول من الوصول، وجولة المدينة في نهاية الأسبوع."
    },
    {
      question: "هل يمكن تخصيص الجولة حسب اهتماماتي؟",
      answer: "نعم، يمكننا تخصيص برنامج الجولة حسب اهتماماتك الشخصية والأماكن التي تريد زيارتها."
    },
    {
      question: "هل تشمل الجولة وسائل النقل؟",
      answer: "نعم، تشمل الجولة وسائل النقل المريحة والمرشد السياحي المتخصص."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-primary-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Fun and exploration"
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
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">جولات تعريفية</h1>
                <p className="text-lg opacity-90 mt-1">اكتشف مصر وتعرف على جامعتك ومدينتك الجديدة</p>
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
                التعرف على بيئتك الجديدة خطوة مهمة لنجاح تجربتك الدراسية في مصر. نقدم جولات تعريفية شاملة تساعدك على الاستقرار السريع والتأقلم مع الحياة الجديدة. جولاتنا تجمع بين الجانب التعليمي والثقافي لتحصل على فهم عميق لمجتمعك الجديد.
              </p>
            </div>

            {/* Service Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">ما تشمله الجولات</CardTitle>
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

            {/* Tour Types */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-foreground">أنواع الجولات المتاحة</h2>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {tourTypes.map((tour, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-secondary-gradient rounded-lg flex items-center justify-center mx-auto">
                          {index === 0 && <GraduationCap className="w-6 h-6 text-primary" />}
                          {index === 1 && <Landmark className="w-6 h-6 text-primary" />}
                          {index === 2 && <Building className="w-6 h-6 text-primary" />}
                        </div>
                        <CardTitle className="text-xl">{tour.type}</CardTitle>
                        <Badge variant="secondary">{tour.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground text-center">{tour.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {tour.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-reverse space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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
                  <CardTitle>التوقيت</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">بالتنسيق</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    حسب جدولك ووقت فراغك
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>التكلفة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-secondary">200-300 جنيه</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    خصومات للمجموعات
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>الحجز</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">مسبق</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    قبل 24 ساعة على الأقل
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Practical Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center space-x-reverse space-x-3">
                  <Camera className="w-6 h-6 text-secondary" />
                  <span>نصائح عملية تتعلمها</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {practicalTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">برنامج يوم نموذجي - جولة شاملة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-16 h-8 bg-secondary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">9:00</div>
                    <div>
                      <h4 className="font-semibold text-foreground">البداية من السكن</h4>
                      <p className="text-muted-foreground">استلام من مكان الإقامة والانطلاق للجولة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-16 h-8 bg-secondary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">10:00</div>
                    <div>
                      <h4 className="font-semibold text-foreground">جولة الجامعة</h4>
                      <p className="text-muted-foreground">زيارة المباني والمرافق والتعرف على الخدمات</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-16 h-8 bg-secondary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">12:00</div>
                    <div>
                      <h4 className="font-semibold text-foreground">استراحة غداء</h4>
                      <p className="text-muted-foreground">تجربة الطعام المحلي في أحد المطاعم المميزة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-16 h-8 bg-secondary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">14:00</div>
                    <div>
                      <h4 className="font-semibold text-foreground">المعالم التاريخية</h4>
                      <p className="text-muted-foreground">زيارة أهم المعالم التاريخية والثقافية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-16 h-8 bg-secondary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">16:00</div>
                    <div>
                      <h4 className="font-semibold text-foreground">الخدمات العملية</h4>
                      <p className="text-muted-foreground">التعرف على البنوك والمحلات والخدمات المهمة</p>
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
                  احجز جولتك التعريفية الآن
                </h3>
                <p className="text-primary/80 mb-6">
                  ابدأ رحلة استكشاف مصر وتعرف على بيئتك الجديدة مع مرشدين محترفين
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                    احجز جولتك عبر واتساب
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

export default OrientationTours;