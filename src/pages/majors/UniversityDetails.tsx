import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getUniversityById } from '@/data/universitiesData';
import { 
  GraduationCap, 
  MapPin, 
  Calendar,
  ExternalLink,
  Building,
  Clock,
  DollarSign,
  BookOpen,
  Users,
  ArrowRight,
  Star
} from 'lucide-react';

const UniversityDetails = () => {
  const { universityId } = useParams<{ universityId: string }>();
  const university = universityId ? getUniversityById(universityId) : null;

  if (!university) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-primary font-bold text-foreground mb-4">
            الجامعة غير موجودة
          </h1>
          <Button asChild>
            <Link to="/majors/universities">العودة لقائمة الجامعات</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

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
              <Link to="/majors/universities" className="hover:underline font-secondary">الجامعات</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="font-secondary">{university.name}</span>
            </nav>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold mb-2">
                    {university.name}
                  </h1>
                  <p className="text-lg md:text-xl font-secondary opacity-90">
                    {university.nameEn}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm">
                    {university.type === 'government' ? 'حكومية' : 'خاصة'}
                  </Badge>
                  <Badge variant="outline" className="text-sm border-white/30 text-white">
                    {university.rank}
                  </Badge>
                </div>
              </div>
              
              <p className="text-lg font-secondary opacity-90 leading-relaxed">
                {university.description}
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-reverse space-x-2">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">{university.location}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">تأسست {university.establishedYear}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <GraduationCap className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-secondary">{university.totalMajors} تخصص</span>
                </div>
                {university.website && (
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Button variant="outline" size="sm" asChild className="border-white/30 text-white hover:bg-white/10">
                      <a href={university.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 ml-1" />
                        الموقع الرسمي
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colleges and Majors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-foreground mb-4">
              الكليات والتخصصات المتاحة
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground max-w-2xl mx-auto">
              اكتشف جميع الكليات والتخصصات المتوفرة في {university.name}
            </p>
          </div>
          
          <div className="space-y-8">
            {university.colleges.map((college) => (
              <Card key={college.id} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="text-xl font-primary font-bold text-foreground">
                    {college.name}
                  </CardTitle>
                  <p className="text-sm font-secondary text-muted-foreground">
                    {college.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {college.majors.map((major) => (
                      <Card key={major.id} className="hover:shadow-lg transition-smooth group">
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="font-primary font-bold text-foreground group-hover:text-primary transition-colors">
                              {major.name}
                            </h3>
                            {major.popular && (
                              <Badge className="bg-secondary text-primary">
                                <Star className="w-3 h-3 ml-1" />
                                شائع
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-sm font-secondary text-muted-foreground line-clamp-2">
                            {major.description}
                          </p>
                          
                          {/* Major Details */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center space-x-reverse space-x-1">
                              <Clock className="w-3 h-3 text-primary" />
                              <span className="font-secondary">{major.duration}</span>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-1">
                              <DollarSign className="w-3 h-3 text-primary" />
                              <span className="font-secondary text-xs">{major.fees.split(' ')[0]}</span>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-1">
                              <BookOpen className="w-3 h-3 text-primary" />
                              <span className="font-secondary">{major.language}</span>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-1">
                              <Users className="w-3 h-3 text-primary" />
                              <span className="font-secondary">{major.requirements}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              className="flex-1 bg-primary-gradient text-xs"
                              asChild
                            >
                              <Link to={`/major/${major.id}`}>
                                التفاصيل
                              </Link>
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-xs"
                              asChild
                            >
                              <Link to="/how-to-start">
                                تقدم الآن
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold text-foreground">
              مهتم بالدراسة في {university.name}؟
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground">
              تواصل معنا للحصول على استشارة مجانية حول إجراءات القبول والتسجيل
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-gradient" asChild>
                <Link to="/contact">استشارة مجانية</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-to-start">ابدأ التقديم</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/201019434737" target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversityDetails;