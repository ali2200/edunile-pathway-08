import StudentLayout from "@/components/student/StudentLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Lock, Bell, GraduationCap, Save, Edit, Camera, MapPin, Phone, Mail } from "lucide-react";

const StudentProfile = () => {
  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">الملف الشخصي</h1>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <User className="w-4 h-4 ml-1" />
            طالب نشط
          </Badge>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">البيانات الشخصية</TabsTrigger>
            <TabsTrigger value="academic">البيانات الأكاديمية</TabsTrigger>
            <TabsTrigger value="preferences">التفضيلات</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
          </TabsList>

          {/* البيانات الشخصية */}
          <TabsContent value="personal" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 ml-2" />
                    المعلومات الأساسية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">الاسم الأول</Label>
                      <Input 
                        id="first-name"
                        defaultValue="محمد"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">الاسم الأخير</Label>
                      <Input 
                        id="last-name"
                        defaultValue="أحمد"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input 
                        id="email"
                        type="email"
                        defaultValue="mohamed.ahmed@example.com"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input 
                        id="phone"
                        defaultValue="+962 78 123 4567"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nationality">الجنسية</Label>
                      <Select defaultValue="jordan">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jordan">الأردن</SelectItem>
                          <SelectItem value="palestine">فلسطين</SelectItem>
                          <SelectItem value="syria">سوريا</SelectItem>
                          <SelectItem value="lebanon">لبنان</SelectItem>
                          <SelectItem value="iraq">العراق</SelectItem>
                          <SelectItem value="other">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birth-date">تاريخ الميلاد</Label>
                      <Input 
                        id="birth-date"
                        type="date"
                        defaultValue="1995-06-15"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">العنوان</Label>
                    <Textarea 
                      id="address"
                      defaultValue="عمان، الأردن"
                      rows={3}
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
                  <CardTitle>الصورة الشخصية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-white" />
                    </div>
                    <Button variant="outline" className="w-full">
                      <Camera className="w-4 h-4 ml-2" />
                      تغيير الصورة
                    </Button>
                    <Button variant="ghost" size="sm">
                      إزالة الصورة
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">mohamed.ahmed@example.com</span>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">+962 78 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">عمان، الأردن</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* البيانات الأكاديمية */}
          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 ml-2" />
                    المؤهلات الأكاديمية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="degree">آخر مؤهل حصلت عليه</Label>
                    <Select defaultValue="bachelor">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">الثانوية العامة</SelectItem>
                        <SelectItem value="diploma">دبلوم</SelectItem>
                        <SelectItem value="bachelor">بكالوريوس</SelectItem>
                        <SelectItem value="master">ماجستير</SelectItem>
                        <SelectItem value="phd">دكتوراه</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="major">التخصص</Label>
                    <Input 
                      id="major"
                      defaultValue="علوم الحاسوب"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="university">الجامعة</Label>
                    <Input 
                      id="university"
                      defaultValue="الجامعة الأردنية"
                      className="text-right"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="graduation-year">سنة التخرج</Label>
                      <Input 
                        id="graduation-year"
                        defaultValue="2020"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gpa">المعدل التراكمي</Label>
                      <Input 
                        id="gpa"
                        defaultValue="3.8"
                        className="text-right"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>البرنامج المطلوب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="desired-degree">الدرجة المطلوبة</Label>
                    <Select defaultValue="master">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">بكالوريوس</SelectItem>
                        <SelectItem value="master">ماجستير</SelectItem>
                        <SelectItem value="phd">دكتوراه</SelectItem>
                        <SelectItem value="diploma">دبلوم</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="desired-major">التخصص المطلوب</Label>
                    <Input 
                      id="desired-major"
                      defaultValue="هندسة الحاسوب"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-university">الجامعة المفضلة</Label>
                    <Select defaultValue="cairo">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cairo">جامعة القاهرة</SelectItem>
                        <SelectItem value="ain-shams">جامعة عين شمس</SelectItem>
                        <SelectItem value="alexandria">جامعة الإسكندرية</SelectItem>
                        <SelectItem value="helwan">جامعة حلوان</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="study-type">نوع الدراسة</Label>
                    <Select defaultValue="full-time">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">دوام كامل</SelectItem>
                        <SelectItem value="part-time">دوام جزئي</SelectItem>
                        <SelectItem value="online">دراسة عن بعد</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* اللغات والمهارات */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>اللغات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>العربية</Label>
                      <Select defaultValue="native">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">أساسي</SelectItem>
                          <SelectItem value="intermediate">متوسط</SelectItem>
                          <SelectItem value="advanced">متقدم</SelectItem>
                          <SelectItem value="native">لغة أم</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>الإنجليزية</Label>
                      <Select defaultValue="advanced">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">أساسي</SelectItem>
                          <SelectItem value="intermediate">متوسط</SelectItem>
                          <SelectItem value="advanced">متقدم</SelectItem>
                          <SelectItem value="native">لغة أم</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="english-score">درجة اختبار اللغة الإنجليزية</Label>
                    <Input 
                      id="english-score"
                      placeholder="IELTS: 7.0 أو TOEFL: 95"
                      className="text-right"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>المهارات والخبرات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="skills">المهارات</Label>
                    <Textarea 
                      id="skills"
                      placeholder="البرمجة، إدارة المشاريع، التصميم..."
                      rows={3}
                      className="text-right resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">الخبرة العملية</Label>
                    <Textarea 
                      id="experience"
                      placeholder="اذكر خبراتك العملية السابقة..."
                      rows={3}
                      className="text-right resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button className="w-full">
              <Save className="w-4 h-4 ml-2" />
              حفظ البيانات الأكاديمية
            </Button>
          </TabsContent>

          {/* التفضيلات */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 ml-2" />
                  تفضيلات الإشعارات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>تحديثات الطلب</Label>
                      <p className="text-sm text-muted-foreground">
                        إشعارات عند تحديث حالة الطلب
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>رسائل من المستشار</Label>
                      <p className="text-sm text-muted-foreground">
                        رسائل ونصائح من المستشار الأكاديمي
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>مواعيد مهمة</Label>
                      <p className="text-sm text-muted-foreground">
                        تذكير بالمواعيد النهائية والمقابلات
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>نصائح أكاديمية</Label>
                      <p className="text-sm text-muted-foreground">
                        نصائح ومقالات حول الدراسة في مصر
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">طرق التواصل</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Switch defaultChecked />
                      <Label>البريد الإلكتروني</Label>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Switch defaultChecked />
                      <Label>إشعارات المتصفح</Label>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Switch />
                      <Label>رسائل SMS</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Save className="w-4 h-4 ml-2" />
                  حفظ التفضيلات
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* الأمان */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 ml-2" />
                  تغيير كلمة المرور
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                  <Input 
                    id="current-password"
                    type="password"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                  <Input 
                    id="new-password"
                    type="password"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                  <Input 
                    id="confirm-password"
                    type="password"
                    className="text-right"
                  />
                </div>
                <Button className="w-full">
                  <Lock className="w-4 h-4 ml-2" />
                  تحديث كلمة المرور
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>إعدادات الأمان</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>تسجيل الخروج التلقائي</Label>
                    <p className="text-sm text-muted-foreground">
                      بعد 30 دقيقة من عدم النشاط
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>إشعارات تسجيل الدخول</Label>
                    <p className="text-sm text-muted-foreground">
                      تنبيه عند تسجيل دخول من جهاز جديد
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button className="w-full" variant="outline">
                  <Save className="w-4 h-4 ml-2" />
                  حفظ إعدادات الأمان
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  );
};

export default StudentProfile;