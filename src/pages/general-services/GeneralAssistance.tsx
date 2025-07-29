import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  Heart, 
  CreditCard,
  ArrowLeft,
  FileText,
  Building,
  Users,
  MapPin,
  Languages,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const GeneralAssistance = () => {
  const serviceFeatures = [
    "مساعدة في فتح حساب بنكي",
    "إرشاد للأماكن المهمة والخدمات",
    "ترجمة وتواصل مع الجهات الرسمية",
    "حل المشاكل اليومية والطارئة",
    "مساعدة في تفعيل شرائح الهاتف",
    "إرشاد لأفضل المحلات والأسواق"
  ];

  const assistanceTypes = [
    {
      category: "الخدمات المصرفية",
      icon: CreditCard,
      services: ["فتح حساب بنكي", "استخراج بطاقة ائتمان", "تحويلات مالية", "صرف العملات"],
      description: "مساعدة كاملة في جميع الإجراءات المصرفية"
    },
    {
      category: "الخدمات الحكومية",
      icon: Building,
      services: ["استخراج بطاقة رقم قومي للأجانب", "تجديد الإقامة", "معاملات الضرائب", "تصديق الوثائق"],
      description: "مرافقة في الجهات الحكومية وإنجاز المعاملات"
    },
    {
      category: "الخدمات الطبية",
      icon: Heart,
      services: ["التأمين الصحي", "حجز مواعيد الأطباء", "ترجمة التقارير الطبية", "صيدليات ومستشفيات"],
      description: "دعم في جميع الأمور المتعلقة بالرعاية الصحية"
    },
    {
      category: "الخدمات التقنية",
      icon: Phone,
      services: ["تفعيل شريحة الهاتف", "اشتراك الإنترنت", "إعداد التطبيقات", "حل مشاكل تقنية"],
      description: "مساعدة في جميع الأمور التقنية والرقمية"
    }
  ];

  const emergencyServices = [
    "مساعدة طوارئ على مدار الساعة",
    "ترجمة فورية عند الحاجة",
    "التواصل مع الأهل في الطوارئ",
    "مرافقة للمستشفى عند الضرورة",
    "حل المشاكل القانونية البسيطة",
    "دعم نفسي ومعنوي"
  ];

  const faqs = [
    {
      question: "هل الخدمة متاحة باللغة الإنجليزية؟",
      answer: "نعم، فريقنا يتحدث العربية والإنجليزية بطلاقة، ويمكننا التواصل بكلا اللغتين."
    },
    {
      question: "كم تكلف المرافقة للجهات الحكومية؟",
      answer: "الخدمة مجانية لعملائنا الحاليين، ورسوم رمزية للخدمات الفردية حسب المدة والمسافة."
    },
    {
      question: "هل يمكن الحصول على مساعدة في عطلة نهاية الأسبوع؟",
      answer: "نعم، خدمة الطوارئ متاحة على مدار الساعة، وأغلب الخدمات العادية متاحة بمواعيد مرنة."
    },
    {
      question: "كيف يمكنني طلب المساعدة بسرعة؟",
      answer: "يمكنك التواصل معنا عبر واتساب أو الهاتف، وسنرد خلال دقائق في أوقات العمل."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-primary-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Support and collaboration"
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
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">الدعم والمساعدة العامة</h1>
                <p className="text-lg opacity-90 mt-1">دعم شامل في جميع أمور الحياة اليومية</p>
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
                الحياة في بلد جديد تحمل تحديات يومية قد تبدو بسيطة لكنها مهمة جداً. نحن هنا لنكون سندك في جميع الأمور غير الأكاديمية، من فتح حساب بنكي إلى حل أي مشكلة طارئة قد تواجهها. فريقنا متاح دائماً لتقديم المساعدة والدعم اللازم لتشعر بالراحة والأمان في بيئتك الجديدة.
              </p>
            </div>

            {/* Service Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">الخدمات الأساسية</CardTitle>
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

            {/* Assistance Categories */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-foreground">مجالات المساعدة</h2>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {assistanceTypes.map((type, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <div className="flex items-center space-x-reverse space-x-4">
                        <div className="w-12 h-12 bg-secondary-gradient rounded-lg flex items-center justify-center">
                          <type.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{type.category}</CardTitle>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center space-x-reverse space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{service}</span>
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
                  <CardTitle>التوفر</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">24/7</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    دعم الطوارئ على مدار الساعة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>التكلفة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-secondary">مجانية</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    للعملاء الحاليين + رسوم رمزية للآخرين
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Languages className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <CardTitle>اللغات</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-4 py-2">عربية/إنجليزية</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    تواصل بلغتك المفضلة
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Services */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center space-x-reverse space-x-3 text-orange-800">
                  <Phone className="w-6 h-6" />
                  <span>خدمات الطوارئ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-orange-800">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>للطوارئ:</strong> اتصل على <span className="font-bold">+201019434737</span> في أي وقت وسنرد فوراً
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step by Step Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">كيف نساعدك؟</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تواصل معنا</h4>
                      <p className="text-muted-foreground">اتصل أو أرسل رسالة واتساب بوصف المشكلة أو نوع المساعدة المطلوبة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تقييم الحالة</h4>
                      <p className="text-muted-foreground">نقيم الموقف ونحدد أفضل طريقة لمساعدتك والوقت المطلوب</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">تنفيذ المساعدة</h4>
                      <p className="text-muted-foreground">نقوم بالمساعدة العملية أو المرافقة حسب طبيعة المطلوب</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4">
                    <div className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">المتابعة</h4>
                      <p className="text-muted-foreground">نتابع معك للتأكد من حل المشكلة وتقديم أي دعم إضافي</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Scenarios */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">مواقف شائعة نساعد فيها</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center space-x-reverse space-x-2">
                      <CreditCard className="w-5 h-5 text-secondary" />
                      <span>الأمور المالية</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• فتح حساب بنكي للمرة الأولى</li>
                      <li>• مشاكل في التحويلات المالية</li>
                      <li>• ضياع بطاقة البنك</li>
                      <li>• مشاكل في الصرافة الآلية</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center space-x-reverse space-x-2">
                      <Building className="w-5 h-5 text-secondary" />
                      <span>الإجراءات الرسمية</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• تجديد الإقامة</li>
                      <li>• استخراج وثائق رسمية</li>
                      <li>• التعامل مع المصالح الحكومية</li>
                      <li>• ترجمة الوثائق</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center space-x-reverse space-x-2">
                      <Heart className="w-5 h-5 text-secondary" />
                      <span>الطوارئ الطبية</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• ترجمة في المستشفى</li>
                      <li>• حجز مواعيد طبية عاجلة</li>
                      <li>• التواصل مع الأهل</li>
                      <li>• مرافقة للعلاج</li>
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
                  نحن هنا لمساعدتك
                </h3>
                <p className="text-primary/80 mb-6">
                  لا تتردد في التواصل معنا لأي مساعدة تحتاجها، نحن مستعدون لدعمك في أي وقت
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                      مساعدة فورية - واتساب
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                    <a href="tel:+201019434737">
                      اتصال مباشر
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralAssistance;