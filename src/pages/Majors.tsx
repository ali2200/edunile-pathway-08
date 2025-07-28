import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, DollarSign, BookOpen, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Majors = () => {
  const majors = [
    {
      category: "الطب والعلوم الصحية",
      programs: [
        {
          name: "الطب البشري",
          universities: ["جامعة القاهرة", "جامعة الأزهر", "جامعة عين شمس"],
          duration: "6 سنوات",
          fees: "25,000 - 35,000 جنيه/سنة",
          language: "العربية/الإنجليزية",
          requirements: "الثانوية العامة 85%+",
          popular: true
        },
        {
          name: "طب الأسنان",
          universities: ["جامعة القاهرة", "جامعة الأزهر"],
          duration: "5 سنوات",
          fees: "20,000 - 30,000 جنيه/سنة",
          language: "العربية/الإنجليزية",
          requirements: "الثانوية العامة 80%+"
        },
        {
          name: "الصيدلة",
          universities: ["جامعة القاهرة", "جامعة الأزهر", "جامعة حلوان"],
          duration: "5 سنوات",
          fees: "18,000 - 25,000 جنيه/سنة",
          language: "العربية/الإنجليزية",
          requirements: "الثانوية العامة 75%+"
        }
      ]
    },
    {
      category: "الهندسة والتكنولوجيا",
      programs: [
        {
          name: "الهندسة المدنية",
          universities: ["جامعة القاهرة", "جامعة عين شمس", "جامعة الأزهر"],
          duration: "5 سنوات",
          fees: "15,000 - 22,000 جنيه/سنة",
          language: "العربية/الإنجليزية",
          requirements: "الثانوية العامة 70%+",
          popular: true
        },
        {
          name: "هندسة الحاسبات",
          universities: ["جامعة القاهرة", "جامعة عين شمس"],
          duration: "5 سنوات",
          fees: "18,000 - 25,000 جنيه/سنة",
          language: "العربية/الإنجليزية",
          requirements: "الثانوية العامة 75%+"
        },
        {
          name: "الهندسة الكهربائية",
          universities: ["جامعة القاهرة", "جامعة الأزهر", "جامعة حلوان"],
          duration: "5 سنوات",
          fees: "16,000 - 23,000 جنيه/سنة",
          language: "العربية/الإنجليزية",
          requirements: "الثانوية العامة 72%+"
        }
      ]
    },
    {
      category: "إدارة الأعمال والاقتصاد",
      programs: [
        {
          name: "إدارة الأعمال (MBA)",
          universities: ["الجامعة الأمريكية", "جامعة القاهرة", "جامعة عين شمس"],
          duration: "2 سنة",
          fees: "30,000 - 80,000 جنيه/سنة",
          language: "الإنجليزية/العربية",
          requirements: "بكالوريوس + خبرة عملية",
          popular: true
        },
        {
          name: "الاقتصاد",
          universities: ["جامعة القاهرة", "جامعة الأزهر"],
          duration: "4 سنوات",
          fees: "12,000 - 18,000 جنيه/سنة",
          language: "العربية",
          requirements: "الثانوية العامة 65%+"
        },
        {
          name: "المحاسبة",
          universities: ["جامعة القاهرة", "جامعة الأزهر", "جامعة عين شمس"],
          duration: "4 سنوات",
          fees: "10,000 - 16,000 جنيه/سنة",
          language: "العربية",
          requirements: "الثانوية العامة 60%+"
        }
      ]
    },
    {
      category: "العلوم الإنسانية والشرعية",
      programs: [
        {
          name: "الشريعة الإسلامية",
          universities: ["جامعة الأزهر", "جامعة القاهرة"],
          duration: "4 سنوات",
          fees: "8,000 - 12,000 جنيه/سنة",
          language: "العربية",
          requirements: "الثانوية العامة 55%+",
          popular: true
        },
        {
          name: "اللغة العربية وآدابها",
          universities: ["جامعة الأزهر", "جامعة القاهرة", "جامعة عين شمس"],
          duration: "4 سنوات",
          fees: "7,000 - 11,000 جنيه/سنة",
          language: "العربية",
          requirements: "الثانوية العامة 50%+"
        },
        {
          name: "التاريخ الإسلامي",
          universities: ["جامعة الأزهر", "جامعة القاهرة"],
          duration: "4 سنوات",
          fees: "7,500 - 12,000 جنيه/سنة",
          language: "العربية",
          requirements: "الثانوية العامة 50%+"
        }
      ]
    }
  ];

  const universityStats = [
    { name: "جامعة القاهرة", programs: 15, rank: "#1 في مصر" },
    { name: "جامعة الأزهر", programs: 12, rank: "#1 علوم شرعية" },
    { name: "جامعة عين شمس", programs: 10, rank: "#2 في مصر" },
    { name: "الجامعة الأمريكية", programs: 8, rank: "#1 خاصة" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              التخصصات الجامعية المتاحة
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              اكتشف مجموعة واسعة من التخصصات الأكاديمية في أفضل الجامعات المصرية المعتمدة دولياً
            </p>
          </div>
          
          {/* University Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {universityStats.map((uni, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{uni.name}</h3>
                    <div className="text-2xl font-bold text-secondary">{uni.programs}</div>
                    <div className="text-sm opacity-80">تخصص متاح</div>
                    <Badge variant="secondary" className="text-xs">
                      {uni.rank}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Majors Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {majors.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.programs.map((program, programIndex) => (
                  <Card key={programIndex} className={`hover:shadow-elegant transition-smooth ${program.popular ? 'ring-2 ring-secondary' : ''}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-bold text-foreground">
                          {program.name}
                        </CardTitle>
                        {program.popular && (
                          <Badge className="bg-secondary text-primary">
                            <Star className="w-3 h-3 ml-1" />
                            الأكثر طلباً
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Universities */}
                      <div>
                        <div className="flex items-center space-x-reverse space-x-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold">الجامعات المتاحة:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {program.universities.map((uni, uniIndex) => (
                            <Badge key={uniIndex} variant="outline" className="text-xs">
                              {uni}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-reverse space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <div>
                            <div className="font-medium">المدة</div>
                            <div className="text-muted-foreground">{program.duration}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-reverse space-x-2">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <div>
                            <div className="font-medium">الرسوم</div>
                            <div className="text-muted-foreground">{program.fees}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-reverse space-x-2">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <div>
                            <div className="font-medium">لغة الدراسة</div>
                            <div className="text-muted-foreground">{program.language}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-reverse space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <div>
                            <div className="font-medium">متطلبات القبول</div>
                            <div className="text-muted-foreground">{program.requirements}</div>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full ${program.popular ? 'bg-secondary-gradient hover:opacity-90' : 'bg-primary-gradient'}`}
                        asChild
                      >
                        <Link to="/how-to-start">
                          تقدم للبرنامج
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              لم تجد التخصص المناسب؟
            </h2>
            <p className="text-lg text-muted-foreground">
              تواصل معنا للحصول على استشارة مجانية حول أفضل التخصصات المناسبة لخلفيتك الأكاديمية وأهدافك المهنية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-gradient" asChild>
                <Link to="/contact">استشارة مجانية</Link>
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

export default Majors;