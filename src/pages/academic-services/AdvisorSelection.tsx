import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  UserCheck, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowLeft,
  Calendar,
  Shield,
  Phone,
  Search,
  Award,
  MessageCircle,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const AdvisorSelection = () => {
  const features = [
    "قاعدة بيانات شاملة للمشرفين الأكاديميين",
    "تحليل تخصصات وخبرات كل مشرف", 
    "ترتيب لقاءات تعارف مبدئية",
    "نصائح للتعامل الفعّال مع المشرف",
    "تقييم مدى توافق المشرف مع بحثك",
    "متابعة العلاقة الأكاديمية"
  ];

  const timeline = [
    { day: "اليوم 1-3", task: "تحديد مجال البحث والتخصص المطلوب" },
    { day: "اليوم 4-7", task: "البحث في قاعدة البيانات وترشيح المشرفين" },
    { day: "اليوم 8-12", task: "ترتيب لقاءات مع المشرفين المرشحين" },
    { day: "اليوم 13-21", task: "التقييم النهائي واختيار المشرف الأنسب" }
  ];

  const selectionCriteria = [
    { title: "التخصص الأكاديمي", desc: "مدى تطابق تخصص المشرف مع مجال بحثك" },
    { title: "الخبرة البحثية", desc: "عدد الأبحاث المنشورة والمشاريع المنجزة" },
    { title: "أسلوب الإشراف", desc: "طريقة تعامل المشرف مع الطلاب" },
    { title: "التوافق الشخصي", desc: "مدى انسجامك مع شخصية المشرف" }
  ];

  const advisorTypes = [
    "أساتذة الدراسات العليا (ماجستير ودكتوراه)",
    "أساتذة المشاريع والتخرج",
    "مشرفين الأبحاث الجامعية",
    "أساتذة التدريب الميداني",
    "مشرفين الرسائل العلمية"
  ];

  const targetStudents = [
    "طلاب الدراسات العليا الجدد",
    "طلاب السنة النهائية (مشروع التخرج)",
    "الباحثون في المراحل المبكرة",
    "من يرغب في تغيير المشرف",
    "طلاب البحوث والمنح الدراسية"
  ];

  const researchFields = [
    "العلوم الطبية والصحية",
    "الهندسة والتكنولوجيا",
    "العلوم التطبيقية والأساسية",
    "العلوم الاجتماعية والإنسانية",
    "الاقتصاد والإدارة",
    "الفنون والتصميم"
  ];

  const faqs = [
    {
      question: "كيف تتم عملية اختيار المشرف؟",
      answer: "نبدأ بتحليل اهتماماتك البحثية ثم نبحث عن المشرفين المناسبين ونرتب لقاءات تعريفية"
    },
    {
      question: "هل يمكن تغيير المشرف لاحقاً؟",
      answer: "نعم، يمكن تغيير المشرف وفقاً للوائح الجامعة، ونساعدك في هذه العملية إذا لزم الأمر"
    },
    {
      question: "ما هي التكلفة النهائية للخدمة؟",
      answer: "التكلفة تحدد حسب مستوى الدراسة ونوع الإشراف المطلوب، سنقدم لك عرض سعر مفصل"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">الرئيسية</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/academic-services">الخدمات الدراسية</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>اختيار المشرف الأكاديمي</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              اختيار المشرف الأكاديمي
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              مساعدتك في اختيار أفضل مشرف أكاديمي يناسب تخصصك ومجال بحثك لضمان نجاح رحلتك الأكاديمية
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Service Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أهمية اختيار المشرف المناسب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    اختيار المشرف الأكاديمي المناسب هو قرار حاسم في مسيرتك التعليمية والبحثية. المشرف الجيد 
                    يمكن أن يكون الفرق بين النجاح والفشل في رحلتك الأكاديمية.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    نحن نساعدك في هذا القرار المهم من خلال قاعدة بيانات شاملة للمشرفين وتحليل دقيق للتوافق 
                    بين اهتماماتك البحثية وخبرات المشرفين المتاحين.
                  </p>
                </CardContent>
              </Card>

              {/* Selection Criteria */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">معايير الاختيار</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectionCriteria.map((criteria, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{criteria.title}</h4>
                        <p className="text-sm text-muted-foreground">{criteria.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">خدماتنا في اختيار المشرف</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Calendar className="w-6 h-6" />
                    <span>خطوات العمل</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{item.day}</div>
                          <div className="text-muted-foreground">{item.task}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Fields */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <BookOpen className="w-6 h-6" />
                    <span>التخصصات المشمولة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {researchFields.map((field, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{field}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Advisor Types */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أنواع المشرفين</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {advisorTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{type}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Target Students */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-reverse space-x-2">
                    <Users className="w-6 h-6" />
                    <span>من يحتاج هذه الخدمة؟</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {targetStudents.map((student, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{student}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أسئلة شائعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Service Info */}
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl">معلومات الخدمة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">المدة</span>
                    </div>
                    <Badge variant="secondary">1-3 أسابيع</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <DollarSign className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">التكلفة</span>
                    </div>
                    <Badge className="bg-secondary text-primary">يُحدد لاحقاً</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">مناسب لـ</span>
                    </div>
                    <span className="text-sm text-muted-foreground">طلاب البحث</span>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full bg-primary-gradient" asChild>
                      <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                        ابدأ البحث عن مشرف
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+201019434737" className="flex items-center justify-center space-x-reverse space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>اتصل بنا</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Help */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">خبرة متخصصة</h3>
                  <p className="text-sm text-muted-foreground">
                    فريقنا لديه خبرة واسعة في مجال الإشراف الأكاديمي
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvisorSelection;