import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { universitiesData } from '@/data/universitiesData';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Calendar,
  ExternalLink,
  Building,
  Users
} from 'lucide-react';

const Universities = () => {
  const governmentUniversities = universitiesData.filter(uni => uni.type === 'government');
  const privateUniversities = universitiesData.filter(uni => uni.type === 'private');

  const UniversityCard = ({ university }: { university: any }) => (
    <Card className="hover:shadow-elegant transition-smooth group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-primary font-bold text-foreground group-hover:text-primary transition-colors">
            {university.name}
          </CardTitle>
          <Badge variant={university.type === 'government' ? 'default' : 'secondary'}>
            {university.type === 'government' ? 'حكومية' : 'خاصة'}
          </Badge>
        </div>
        <p className="text-sm font-secondary text-muted-foreground font-medium">
          {university.nameEn}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm font-secondary text-muted-foreground leading-relaxed">
          {university.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-reverse space-x-2">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-secondary">{university.location}</span>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-2">
            <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-secondary">تأسست {university.establishedYear}</span>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-2">
            <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-secondary">{university.totalMajors} تخصص متاح</span>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-2">
            <Building className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-secondary">{university.rank}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1 bg-primary-gradient">
            <Link to={`/majors/universities/${university.id}`}>
              <GraduationCap className="w-4 h-4 ml-2" />
              عرض التخصصات
            </Link>
          </Button>
          
          {university.website && (
            <Button variant="outline" size="sm" asChild>
              <a href={university.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 ml-1" />
                الموقع
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold">
              الجامعات المصرية المتاحة
            </h1>
            <p className="text-lg md:text-xl font-secondary opacity-90 max-w-3xl mx-auto">
              استكشف أفضل الجامعات المصرية المعتمدة دولياً واختر الجامعة المناسبة لتحقيق أهدافك الأكاديمية
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  {universitiesData.length}
                </div>
                <div className="text-sm font-secondary opacity-80">جامعة متاحة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  {governmentUniversities.length}
                </div>
                <div className="text-sm font-secondary opacity-80">جامعة حكومية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  {privateUniversities.length}
                </div>
                <div className="text-sm font-secondary opacity-80">جامعة خاصة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  45+
                </div>
                <div className="text-sm font-secondary opacity-80">تخصص متنوع</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Universities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-foreground mb-4">
              الجامعات الحكومية
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground max-w-2xl mx-auto">
              جامعات معتمدة من وزارة التعليم العالي المصرية بتكلفة مناسبة وجودة عالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {governmentUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        </div>
      </section>

      {/* Private Universities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-foreground mb-4">
              الجامعات الخاصة
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground max-w-2xl mx-auto">
              جامعات خاصة معتمدة دولياً بمناهج متقدمة ومرافق حديثة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {privateUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold text-primary">
              تحتاج مساعدة في اختيار الجامعة المناسبة؟
            </h2>
            <p className="text-base md:text-lg font-secondary text-primary/80">
              فريق خبراء EduNile مستعد لمساعدتك في اختيار الجامعة والتخصص المناسب لأهدافك المهنية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link to="/contact">استشارة مجانية</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link to="/majors">تصفح التخصصات</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;