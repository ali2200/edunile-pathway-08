import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Image, Video, Save, Upload, Globe, Edit } from "lucide-react";

const AdminContent = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إدارة المحتوى</h1>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <Globe className="w-4 h-4 ml-1" />
            إدارة الموقع
          </Badge>
        </div>

        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pages">صفحات الموقع</TabsTrigger>
            <TabsTrigger value="media">الملفات</TabsTrigger>
            <TabsTrigger value="homepage">الصفحة الرئيسية</TabsTrigger>
            <TabsTrigger value="services">الخدمات</TabsTrigger>
          </TabsList>

          {/* صفحات الموقع */}
          <TabsContent value="pages" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 ml-2" />
                    صفحة من نحن
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="about-title">العنوان الرئيسي</Label>
                    <Input 
                      id="about-title"
                      defaultValue="من نحن - EduNile"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="about-desc">الوصف</Label>
                    <Textarea 
                      id="about-desc"
                      defaultValue="نحن منصة متخصصة في مساعدة الطلاب العرب للحصول على قبولات جامعية في مصر..."
                      rows={4}
                      className="text-right resize-none"
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="w-4 h-4 ml-2" />
                    حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 ml-2" />
                    صفحة التخصصات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="majors-title">العنوان الرئيسي</Label>
                    <Input 
                      id="majors-title"
                      defaultValue="التخصصات المتاحة"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="majors-desc">الوصف</Label>
                    <Textarea 
                      id="majors-desc"
                      defaultValue="اكتشف التخصصات المختلفة المتاحة في الجامعات المصرية..."
                      rows={4}
                      className="text-right resize-none"
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="w-4 h-4 ml-2" />
                    حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 ml-2" />
                    صفحة التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">رقم الهاتف</Label>
                    <Input 
                      id="contact-phone"
                      defaultValue="+20 123 456 7890"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">البريد الإلكتروني</Label>
                    <Input 
                      id="contact-email"
                      defaultValue="info@edunile.com"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-address">العنوان</Label>
                    <Input 
                      id="contact-address"
                      defaultValue="القاهرة، مصر"
                      className="text-right"
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="w-4 h-4 ml-2" />
                    حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 ml-2" />
                    كيفية البدء
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-title">العنوان الرئيسي</Label>
                    <Input 
                      id="start-title"
                      defaultValue="كيفية البدء معنا"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-steps">الخطوات</Label>
                    <Textarea 
                      id="start-steps"
                      defaultValue="1. إنشاء حساب جديد&#10;2. رفع المستندات المطلوبة&#10;3. اختيار التخصص والجامعة..."
                      rows={4}
                      className="text-right resize-none"
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="w-4 h-4 ml-2" />
                    حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* الملفات */}
          <TabsContent value="media" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Image className="w-5 h-5 ml-2" />
                    رفع الصور
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">اسحب الصور هنا أو انقر للرفع</p>
                    <Button variant="outline">اختيار الصور</Button>
                  </div>
                  <div className="space-y-2">
                    <Label>الصور المرفوعة</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <Image className="w-8 h-8 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="w-5 h-5 ml-2" />
                    رفع الفيديوهات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">اسحب الفيديوهات هنا أو انقر للرفع</p>
                    <Button variant="outline">اختيار الفيديوهات</Button>
                  </div>
                  <div className="space-y-2">
                    <Label>الفيديوهات المرفوعة</Label>
                    <div className="space-y-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-reverse space-x-2">
                            <Video className="w-4 h-4" />
                            <span className="text-sm">فيديو_تعريفي_{i}.mp4</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* الصفحة الرئيسية */}
          <TabsContent value="homepage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تحرير الصفحة الرئيسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hero-title">العنوان الرئيسي</Label>
                      <Input 
                        id="hero-title"
                        defaultValue="رحلتك الأكاديمية تبدأ هنا"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hero-subtitle">العنوان الفرعي</Label>
                      <Textarea 
                        id="hero-subtitle"
                        defaultValue="نساعدك في الحصول على قبولات جامعية في أفضل الجامعات المصرية"
                        rows={3}
                        className="text-right resize-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>إحصائيات النجاح</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="عدد الطلاب" defaultValue="1500+" />
                        <Input placeholder="عدد الجامعات" defaultValue="25+" />
                        <Input placeholder="معدل النجاح" defaultValue="95%" />
                        <Input placeholder="سنوات الخبرة" defaultValue="10+" />
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full">
                  <Save className="w-4 h-4 ml-2" />
                  حفظ تغييرات الصفحة الرئيسية
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* الخدمات */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["الخدمات الأكاديمية", "الخدمات العامة", "خدمات البحث العلمي"].map((service, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{service}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>الوصف</Label>
                      <Textarea 
                        placeholder="وصف الخدمة..."
                        rows={3}
                        className="text-right resize-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>السعر</Label>
                      <Input placeholder="السعر..." className="text-right" />
                    </div>
                    <Button className="w-full">
                      <Save className="w-4 h-4 ml-2" />
                      حفظ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminContent;