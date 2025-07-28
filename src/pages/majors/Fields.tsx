import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fieldsData, universitiesData } from '@/data/universitiesData';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Cog, 
  Briefcase, 
  Book,
  Palette,
  Beaker,
  ArrowLeft,
  GraduationCap,
  Users
} from 'lucide-react';

const Fields = () => {
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      heart: Heart,
      cog: Cog,
      briefcase: Briefcase,
      book: Book,
      palette: Palette,
      flask: Beaker
    };
    return icons[iconName] || GraduationCap;
  };

  const getMajorsByField = (fieldId: string) => {
    const results: any[] = [];
    for (const university of universitiesData) {
      for (const college of university.colleges) {
        for (const major of college.majors) {
          // Simple matching based on field type
          let matchesField = false;
          
          switch (fieldId) {
            case 'medical':
              matchesField = major.name.includes('الطب') || major.name.includes('الصيدلة');
              break;
            case 'engineering':
              matchesField = major.name.includes('الهندسة') || major.name.includes('هندسة');
              break;
            case 'business':
              matchesField = major.name.includes('إدارة') || major.name.includes('الاقتصاد') || major.name.includes('المحاسبة');
              break;
            case 'humanities':
              matchesField = major.name.includes('الشريعة') || major.name.includes('العربية') || major.name.includes('التاريخ');
              break;
            default:
              matchesField = false;
          }
          
          if (matchesField) {
            results.push({ major, university, college });
          }
        }
      }
    }
    return results;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold">
              التصفح حسب المجال
            </h1>
            <p className="text-lg md:text-xl font-secondary opacity-90 max-w-3xl mx-auto">
              اكتشف التخصصات المتاحة في كل مجال دراسي واختر المسار الأكاديمي المناسب لميولك وأهدافك المهنية
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  {fieldsData.length}
                </div>
                <div className="text-sm font-secondary opacity-80">مجال دراسي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  45+
                </div>
                <div className="text-sm font-secondary opacity-80">تخصص متنوع</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-primary font-bold text-secondary">
                  4
                </div>
                <div className="text-sm font-secondary opacity-80">جامعات شريكة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fields Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-foreground mb-4">
              المجالات الدراسية المتاحة
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground max-w-2xl mx-auto">
              اختر المجال الذي يناسب اهتماماتك واستكشف التخصصات المتوفرة فيه
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fieldsData.map((field) => {
              const IconComponent = getIconComponent(field.icon);
              const fieldMajors = getMajorsByField(field.id);
              
              return (
                <Card key={field.id} className="hover:shadow-elegant transition-smooth group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-primary font-bold text-foreground group-hover:text-primary transition-colors">
                      {field.name}
                    </CardTitle>
                    <p className="text-sm font-secondary text-muted-foreground">
                      {field.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Available Majors Preview */}
                    <div>
                      <h4 className="font-primary font-semibold text-foreground mb-2 text-sm">
                        التخصصات المتاحة:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {field.majors.slice(0, 3).map((major, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {major}
                          </Badge>
                        ))}
                        {field.majors.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{field.majors.length - 3} المزيد
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-reverse space-x-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="font-secondary">{fieldMajors.length} تخصص متاح</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-secondary">
                          {new Set(fieldMajors.map(fm => fm.university.id)).size} جامعة
                        </span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-primary-gradient" 
                        asChild
                      >
                        <Link to={`/majors?field=${field.id}`}>
                          <ArrowLeft className="w-4 h-4 ml-2" />
                          استكشف التخصصات
                        </Link>
                      </Button>
                      
                      {fieldMajors.length > 0 && (
                        <div className="text-center">
                          <Link 
                            to={`/major/${fieldMajors[0].major.id}`}
                            className="text-sm font-secondary text-primary hover:underline"
                          >
                            شاهد مثال: {fieldMajors[0].major.name}
                          </Link>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Fields */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-foreground mb-4">
              المجالات الأكثر طلباً
            </h2>
            <p className="text-base md:text-lg font-secondary text-muted-foreground max-w-2xl mx-auto">
              المجالات التي يقبل عليها الطلاب العرب أكثر للدراسة في مصر
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['medical', 'engineering', 'business'].map((fieldId) => {
              const field = fieldsData.find(f => f.id === fieldId);
              if (!field) return null;
              
              const IconComponent = getIconComponent(field.icon);
              const fieldMajors = getMajorsByField(field.id);
              
              return (
                <Card key={field.id} className="text-center hover:shadow-lg transition-smooth">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-secondary-gradient rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-primary font-bold text-foreground">
                      {field.name}
                    </h3>
                    <p className="text-sm font-secondary text-muted-foreground">
                      {fieldMajors.length} تخصص متاح في {new Set(fieldMajors.map(fm => fm.university.id)).size} جامعات
                    </p>
                    <Button size="sm" variant="outline-primary" asChild>
                      <Link to={`/majors?field=${field.id}`}>
                        عرض التخصصات
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold text-primary">
              لا تزال محتار في اختيار المجال؟
            </h2>
            <p className="text-base md:text-lg font-secondary text-primary/80">
              احصل على استشارة مجانية من خبراء EduNile لمساعدتك في اختيار المجال والتخصص المناسب لقدراتك وأهدافك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link to="/contact">استشارة مجانية</Link>
              </Button>
              <Button size="lg" variant="outline-primary" asChild>
                <Link to="/majors">تصفح جميع التخصصات</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fields;