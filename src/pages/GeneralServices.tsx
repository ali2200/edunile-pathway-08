import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Home, 
  FileCheck, 
  Car,
  Phone,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const GeneralServices = () => {
  const services = [
    {
      id: 1,
      icon: Plane,
      title: "الاستقبال من المطار",
      description: "نستقبلك فور وصولك لمطار القاهرة ونساعدك للوصول لمكان إقامتك بأمان",
      features: [
        "استقبال شخصي في المطار",
        "مساعدة في إجراءات الجمارك",
        "نقل آمن ومريح للسكن",
        "مرافق يتحدث العربية"
      ],
      price: "300-500 جنيه",
      availability: "24/7"
    },
    {
      id: 2,
      icon: FileCheck,
      title: "استخراج التأشيرة",
      description: "مساعدة كاملة في استخراج التأشيرة الدراسية وتجديد الإقامة",
      features: [
        "إعداد أوراق التأشيرة",
        "حجز مواعيد في السفارة",
        "مراجعة الطلبات",
        "متابعة حتى الحصول على التأشيرة"
      ],
      price: "500-800 جنيه",
      availability: "أيام العمل"
    },
    {
      id: 3,
      icon: Home,
      title: "توفير السكن المناسب",
      description: "نساعدك في إيجاد سكن مناسب لاحتياجاتك وميزانيتك",
      features: [
        "سكن طلابي مشترك",
        "شقق عائلية مفروشة",
        "قرب من الجامعات",
        "أسعار مناسبة ومعقولة"
      ],
      price: "1500-4000 جنيه/شهر",
      availability: "حسب التوفر"
    },
    {
      id: 4,
      icon: Car,
      title: "خدمات النقل والمواصلات",
      description: "توفير وسائل نقل مريحة وآمنة داخل القاهرة",
      features: [
        "نقل يومي للجامعة",
        "رحلات للمناطق السياحية",
        "نقل للمطار عند السفر",
        "أسعار مخفضة للطلاب"
      ],
      price: "200-400 جنيه/رحلة",
      availability: "حسب الطلب"
    },
    {
      id: 5,
      icon: Phone,
      title: "الدعم والمساعدة العامة",
      description: "دعم مستمر في جميع الأمور غير الأكاديمية طوال فترة الإقامة",
      features: [
        "مساعدة في فتح حساب بنكي",
        "إرشاد للأماكن المهمة",
        "ترجمة وتواصل مع الجهات",
        "حل المشاكل اليومية"
      ],
      price: "مجاني للعملاء",
      availability: "24/7"
    },
    {
      id: 6,
      icon: MapPin,
      title: "جولات تعريفية",
      description: "جولات في القاهرة للتعرف على المدينة والأماكن المهمة",
      features: [
        "جولة في حرم الجامعة",
        "زيارة الأماكن التاريخية",
        "التعرف على المرافق العامة",
        "نصائح للعيش في مصر"
      ],
      price: "200-300 جنيه",
      availability: "بالتنسيق المسبق"
    }
  ];

  const accommodationTypes = [
    {
      type: "سكن طلابي مشترك",
      price: "1500-2500 جنيه/شهر",
      features: ["غرف مشتركة", "مطبخ مشترك", "إنترنت مجاني", "أمان 24/7"],
      suitable: "الطلاب المنفردين"
    },
    {
      type: "شقة خاصة مفروشة",
      price: "3000-5000 جنيه/شهر",
      features: ["غرفة خاصة", "حمام خاص", "مطبخ مجهز", "تكييف"],
      suitable: "الطلاب والعائلات"
    },
    {
      type: "سكن عائلي",
      price: "4000-7000 جنيه/شهر",
      features: ["شقة كاملة", "غرف متعددة", "مرافق كاملة", "موقع متميز"],
      suitable: "العائلات"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              خدماتنا العامة للطلاب الوافدين
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              دعم شامل للحياة اليومية في مصر - من الوصول للمطار حتى الاستقرار والتأقلم مع البيئة الجديدة
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدماتنا الشاملة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم جميع الخدمات التي تحتاجها لحياة مريحة ومستقرة في مصر
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-reverse space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-reverse space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-sm font-semibold text-foreground">التكلفة</div>
                      <div className="text-sm text-secondary font-semibold">{service.price}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">التوفر</div>
                      <div className="text-sm text-muted-foreground">{service.availability}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary-gradient" asChild>
                    <Link to={`/general-services/${
                      service.id === 1 ? 'airport-pickup' :
                      service.id === 2 ? 'visa-support' :
                      service.id === 3 ? 'housing' :
                      service.id === 4 ? 'transportation' :
                      service.id === 5 ? 'general-assistance' :
                      'orientation-tours'
                    }`}>
                      اطلب الخدمة
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خيارات السكن المتاحة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نوفر مجموعة متنوعة من خيارات السكن لتناسب جميع الاحتياجات والميزانيات
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accommodationTypes.map((accommodation, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center text-foreground">
                    {accommodation.type}
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{accommodation.price}</div>
                    <div className="text-sm text-muted-foreground">مناسب لـ {accommodation.suitable}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {accommodation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-reverse space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-primary-gradient" asChild>
                    <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                      استفسر عن التوفر
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">كيف نساعدك منذ الوصول؟</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">الوصول</h3>
              <p className="text-sm text-muted-foreground">استقبالك من المطار ونقلك بأمان</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">السكن</h3>
              <p className="text-sm text-muted-foreground">توفير سكن مناسب وآمن</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">الأوراق</h3>
              <p className="text-sm text-muted-foreground">إنجاز جميع المعاملات الرسمية</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">الدعم المستمر</h3>
              <p className="text-sm text-muted-foreground">مساعدة في جميع الأمور اليومية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              اجعل إقامتك في مصر مريحة ومستقرة
            </h2>
            <p className="text-lg text-primary/80">
              تواصل معنا الآن لمعرفة المزيد عن خدماتنا العامة وكيف يمكننا مساعدتك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/contact" className="flex items-center space-x-reverse space-x-2">
                  <span>تواصل معنا</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralServices;