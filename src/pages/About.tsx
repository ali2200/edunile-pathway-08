import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Award, 
  Globe, 
  Clock,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "الثقة والشفافية",
      description: "نؤمن بأهمية الشفافية في جميع تعاملاتنا ونبني علاقات قائمة على الثقة المتبادلة"
    },
    {
      icon: Heart,
      title: "العناية الشخصية",
      description: "كل طالب لدينا يحصل على اهتمام شخصي ومتابعة دقيقة لضمان نجاحه الأكاديمي"
    },
    {
      icon: Target,
      title: "التركيز على النتائج",
      description: "هدفنا الأساسي هو تحقيق أحلام طلابنا الأكاديمية بأعلى معايير الجودة"
    },
    {
      icon: Lightbulb,
      title: "الابتكار المستمر",
      description: "نطور خدماتنا باستمرار لنواكب تطورات التعليم العالي وتحديثات الجامعات"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      title: "طالب ناجح",
      description: "تخرجوا من الجامعات المصرية بتفوق"
    },
    {
      icon: Award,
      number: "50+",
      title: "جامعة شريكة",
      description: "شراكات قوية مع أفضل الجامعات المصرية"
    },
    {
      icon: Globe,
      number: "15+",
      title: "دولة عربية",
      description: "نخدم الطلاب من جميع أنحاء الوطن العربي"
    },
    {
      icon: Clock,
      number: "10+",
      title: "سنوات خبرة",
      description: "في مجال الخدمات التعليمية والأكاديمية"
    }
  ];

  const team = [
    {
      name: "د. أحمد محمد علي",
      position: "المدير التنفيذي",
      experience: "خبرة 15 عاماً في التعليم العالي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "أ. فاطمة الزهراء",
      position: "مديرة الخدمات الأكاديمية",
      experience: "متخصصة في الدراسات العليا",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "أ. محمد عبدالله",
      position: "مسؤول العلاقات الجامعية",
      experience: "شبكة واسعة من العلاقات الأكاديمية",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "تأسيس الشركة",
      description: "بداية رحلتنا في خدمة الطلاب العرب"
    },
    {
      year: "2016",
      title: "أول 100 طالب",
      description: "تحقيق أول إنجاز مهم في مساعدة الطلاب"
    },
    {
      year: "2018",
      title: "التوسع الإقليمي",
      description: "خدمة طلاب من 10 دول عربية"
    },
    {
      year: "2020",
      title: "الشراكات الجامعية",
      description: "توقيع اتفاقيات مع 30 جامعة مصرية"
    },
    {
      year: "2022",
      title: "خدمات النشر العلمي",
      description: "إضافة خدمات البحث العلمي والنشر"
    },
    {
      year: "2024",
      title: "500+ طالب ناجح",
      description: "تحقيق معلم جديد في عدد الخريجين"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              من نحن؟
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              شركة <span className="text-secondary font-bold">EduNile</span> هي رائدة في مجال دعم الطلاب العرب 
              للدراسة في الجامعات المصرية منذ عام 2014
            </p>
            <div className="flex justify-center space-x-reverse space-x-4 pt-4">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                تواصل معنا
              </Button>
              <Button size="lg" variant="outline-white">
                خدماتنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-elegant transition-smooth">
              <CardContent className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">رؤيتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون الجسر الأكاديمي الأول الذي يربط بين الطلاب العرب والتعليم العالي المتميز في مصر، 
                  ونساهم في بناء جيل من المتخصصين والباحثين القادرين على خدمة أوطانهم وأمتهم.
                </p>
                <div className="space-y-3">
                  {[
                    "كون الخيار الأول للطلاب العرب",
                    "الريادة في الخدمات التعليمية",
                    "التميز في الجودة والاحترافية"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-smooth">
              <CardContent className="space-y-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">رسالتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نقدم خدمات متكاملة ومتخصصة للطلاب العرب الراغبين في الدراسة بالجامعات المصرية، 
                  من خلال فريق محترف وخبرات متراكمة وشراكات استراتيجية مع المؤسسات التعليمية.
                </p>
                <div className="space-y-3">
                  {[
                    "تسهيل إجراءات القبول والتسجيل",
                    "توفير الدعم الأكاديمي والإداري",
                    "ضمان أعلى معايير الجودة والرعاية"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              قيمنا ومبادئنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              المبادئ التي نؤمن بها ونطبقها في كل تعاملاتنا مع طلابنا وشركائنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-smooth">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              إنجازاتنا في أرقام
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              شواهد على نجاحنا والثقة التي وضعها فينا طلابنا وشركاؤنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <achievement.icon className="w-10 h-10 text-secondary" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-secondary">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-sm opacity-90">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              رحلتنا عبر السنين
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              معالم مهمة في تاريخ EduNile وتطور خدماتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-primary/20" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6 hover:shadow-elegant transition-smooth">
                      <CardContent className="space-y-3">
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              فريق العمل
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نخبة من المتخصصين والخبراء في مجال التعليم العالي
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-elegant transition-smooth">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                تواصل معنا
              </h2>
              <p className="text-lg text-primary/80">
                نحن هنا لمساعدتك في تحقيق أحلامك الأكاديمية
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">العنوان</h3>
                  <p className="text-muted-foreground text-sm">
                    القاهرة، مصر<br />
                    منطقة وسط البلد
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">الهاتف</h3>
                  <p className="text-muted-foreground text-sm">
                    +201019434737<br />
                    متاح 24/7
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground text-sm">
                    info@edunile.com<br />
                    support@edunile.com
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link to="/contact">احصل على استشارة مجانية</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;