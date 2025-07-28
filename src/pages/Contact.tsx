import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+20 101 943 4737",
      link: "https://wa.me/201019434737",
      description: "أسرع طريقة للتواصل - متاح 24/7",
      primary: true
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+20 101 943 4737",
      link: "tel:+201019434737",
      description: "للمكالمات المباشرة",
      primary: false
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@edu-nile.com",
      link: "mailto:info@edu-nile.com",
      description: "للاستفسارات التفصيلية",
      primary: false
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "القاهرة، مصر",
      link: "#",
      description: "يمكنك زيارتنا بموعد مسبق",
      primary: false
    }
  ];

  const workingHours = [
    { day: "السبت - الخميس", hours: "9:00 ص - 6:00 م" },
    { day: "الجمعة", hours: "مغلق" },
    { day: "الطوارئ", hours: "24/7 عبر واتساب" }
  ];

  const socialMedia = [
    { platform: "فيسبوك", icon: Facebook, link: "#", color: "hover:text-blue-600" },
    { platform: "إنستغرام", icon: Instagram, link: "#", color: "hover:text-pink-600" },
    { platform: "تويتر", icon: Twitter, link: "#", color: "hover:text-blue-400" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              تواصل معنا
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في كل خطوة. تواصل معنا بالطريقة التي تناسبك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`hover:shadow-elegant transition-smooth text-center ${method.primary ? 'ring-2 ring-secondary' : ''}`}>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${method.primary ? 'bg-secondary-gradient' : 'bg-primary-gradient'}`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <a 
                      href={method.link} 
                      className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">{method.description}</p>
                  </div>
                  {method.primary && (
                    <Button className="w-full bg-secondary-gradient hover:opacity-90" asChild>
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        تواصل الآن
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">أرسل لنا رسالة</h2>
                    <p className="text-muted-foreground">املأ النموذج وسنتواصل معك في أقرب وقت</p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">الاسم الكامل *</label>
                        <Input placeholder="أدخل اسمك الكامل" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">رقم الهاتف *</label>
                        <Input placeholder="رقم الهاتف مع رمز الدولة" className="w-full" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">البريد الإلكتروني *</label>
                      <Input type="email" placeholder="your@email.com" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">موضوع الرسالة *</label>
                      <Input placeholder="ما موضوع استفسارك؟" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">تفاصيل الرسالة *</label>
                      <Textarea 
                        placeholder="اكتب رسالتك هنا... كلما كانت التفاصيل أكثر، كان بإمكاننا مساعدتك بشكل أفضل"
                        className="w-full min-h-[120px]"
                      />
                    </div>
                    
                    <Button size="lg" className="w-full bg-primary-gradient hover:opacity-90">
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Working Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-reverse space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">ساعات العمل</h3>
                  </div>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">تابعنا على</h3>
                  <div className="flex space-x-reverse space-x-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center transition-colors ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-secondary-gradient">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">تحتاج مساعدة فورية؟</h3>
                  <p className="text-primary/80 mb-4">تواصل معنا عبر واتساب للحصول على رد سريع</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                      واتساب الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">موقعنا</h2>
            <p className="text-lg text-muted-foreground">مكتبنا في قلب القاهرة - يمكنك زيارتنا بموعد مسبق</p>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">EduNile Office</h3>
                    <p className="text-muted-foreground">القاهرة، مصر</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      للحصول على العنوان التفصيلي، يرجى التواصل معنا
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                      احصل على العنوان
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;