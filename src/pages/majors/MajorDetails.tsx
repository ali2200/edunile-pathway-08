import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getMajorById } from '@/data/universitiesData';
import { 
  GraduationCap, 
  MapPin, 
  Clock,
  DollarSign,
  BookOpen,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  FileText,
  Briefcase,
  Award,
  ExternalLink
} from 'lucide-react';

const MajorDetails = () => {
  const { majorId } = useParams<{ majorId: string }>();
  const result = majorId ? getMajorById(majorId) : null;

  if (!result) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-primary font-bold text-foreground mb-4">
            التخصص غير موجود
          </h1>
          <Button asChild>
            <Link to="/majors">العودة للتخصصات</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const { major, university, college } = result;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-reverse space-x-2 text-sm opacity-80 mb-6">
              <Link to="/majors" className="hover:underline font-secondary">التخصصات</Link>
              <ArrowRight className="w-4 h-4" />
              <Link to={`/majors/universities/${university.id}`} className="hover:underline font-secondary">
                {university.name}
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="font-secondary">{major.name}</span>
            </nav>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold mb-2">
                    {major.name}
                  </h1>
                  <p className="text-lg md:text-xl font-secondary opacity-90">
                    {college.name} - {university.name}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {major.popular && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      الأكثر طلباً
                    </Badge>
                  )}
                  {major.availableForInternational && (
                    <Badge variant="outline" className="border-white/30 text-white">
                      متاح للطلاب الدوليين
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-lg font-secondary opacity-90 leading-relaxed">
                {major.description}
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-reverse space-x-2">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">{major.duration}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <DollarSign className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">{major.fees}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <BookOpen className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">{major.language}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">{major.requirements}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90" asChild>
                  <Link to="/how-to-start">ابدأ التقديم الآن</Link>
                </Button>
                <Button size="lg" variant="outline-white" asChild>
                  <Link to="/contact">استشارة مجانية</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Career Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-reverse space-x-2 font-primary">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span>فرص العمل بعد التخرج</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {major.careerOpportunities.map((opportunity, index) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-secondary">{opportunity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-reverse space-x-2 font-primary">
                    <FileText className="w-5 h-5 text-primary" />
                    <span>المستندات المطلوبة للتقديم</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* مستندات البكالوريوس */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary font-primary">البكالوريوس</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {major.requiredDocuments.bachelor.map((document, index) => (
                          <div key={index} className="flex items-center space-x-reverse space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="font-secondary text-sm">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* مستندات الماجستير */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary font-primary">الماجستير</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {major.requiredDocuments.master.map((document, index) => (
                          <div key={index} className="flex items-center space-x-reverse space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="font-secondary text-sm">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* مستندات الدكتوراه */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary font-primary">الدكتوراه</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {major.requiredDocuments.doctorate.map((document, index) => (
                          <div key={index} className="flex items-center space-x-reverse space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="font-secondary text-sm">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-reverse space-x-2 font-primary">
                    <Award className="w-5 h-5 text-primary" />
                    <span>أسئلة شائعة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {major.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-right font-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="font-secondary text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* University Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-primary text-lg">معلومات الجامعة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-primary font-semibold text-foreground">{university.name}</h4>
                    <p className="text-sm font-secondary text-muted-foreground">{university.nameEn}</p>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-secondary">{university.location}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-secondary">{university.rank}</span>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm" asChild>
                      <Link to={`/majors/universities/${university.id}`}>
                        تفاصيل الجامعة
                      </Link>
                    </Button>
                    {university.website && (
                      <Button variant="outline-primary" size="sm" className="w-full" asChild>
                        <a href={university.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 ml-1" />
                          الموقع الرسمي
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action */}
              <Card className="bg-secondary-gradient">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-primary font-bold text-primary text-lg">
                    مستعد للتقديم؟
                  </h3>
                  <p className="text-sm font-secondary text-primary/80">
                    فريق EduNile مستعد لمساعدتك في جميع إجراءات التقديم والقبول
                  </p>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-primary text-white" asChild>
                      <Link to="/how-to-start">ابدأ الآن</Link>
                    </Button>
                    <Button size="sm" variant="outline-primary" className="w-full" asChild>
                      <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                        تواصل واتساب
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Majors */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-primary text-lg">تخصصات ذات صلة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {college.majors
                    .filter(m => m.id !== major.id)
                    .slice(0, 3)
                    .map((relatedMajor) => (
                      <Link
                        key={relatedMajor.id}
                        to={`/major/${relatedMajor.id}`}
                        className="block p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <h4 className="font-primary font-semibold text-sm">{relatedMajor.name}</h4>
                        <p className="text-xs font-secondary text-muted-foreground">
                          {relatedMajor.duration} • {relatedMajor.language}
                        </p>
                      </Link>
                    ))}
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

export default MajorDetails;