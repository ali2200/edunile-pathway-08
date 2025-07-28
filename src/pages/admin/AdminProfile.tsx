import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Lock, Bell, Shield, Save, Edit, Camera } from "lucide-react";

const AdminProfile = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إعدادات الحساب</h1>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <User className="w-4 h-4 ml-1" />
            الملف الشخصي
          </Badge>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">البيانات الشخصية</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
            <TabsTrigger value="system">إعدادات النظام</TabsTrigger>
          </TabsList>

          {/* البيانات الشخصية */}
          <TabsContent value="profile" className="space-y-6">
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
                        defaultValue="أحمد"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">الاسم الأخير</Label>
                      <Input 
                        id="last-name"
                        defaultValue="المدير"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input 
                      id="email"
                      type="email"
                      defaultValue="admin@edunile.com"
                      className="text-right"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input 
                        id="phone"
                        defaultValue="+20 123 456 7890"
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">المنصب</Label>
                      <Input 
                        id="role"
                        defaultValue="مدير النظام"
                        className="text-right"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">نبذة شخصية</Label>
                    <Textarea 
                      id="bio"
                      placeholder="اكتب نبذة مختصرة عنك..."
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
                  <CardTitle>الصورة الشخصية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <Button variant="outline" className="w-full">
                      <Camera className="w-4 h-4 ml-2" />
                      تغيير الصورة
                    </Button>
                    <Button variant="ghost" size="sm">
                      إزالة الصورة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* الأمان */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 ml-2" />
                    إعدادات الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>التحقق بخطوتين</Label>
                      <p className="text-sm text-muted-foreground">
                        حماية إضافية لحسابك
                      </p>
                    </div>
                    <Switch />
                  </div>
                  
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
                        تنبيه عند تسجيل دخول جديد
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="pt-4">
                    <h4 className="font-medium mb-2">الجلسات النشطة</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">Chrome - القاهرة</p>
                          <p className="text-xs text-muted-foreground">آخر نشاط: الآن</p>
                        </div>
                        <Badge variant="secondary">الحالية</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* الإشعارات */}
          <TabsContent value="notifications" className="space-y-6">
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
                      <Label>طلبات جديدة</Label>
                      <p className="text-sm text-muted-foreground">
                        تنبيه عند وصول طلب جديد
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>تحديثات الطلبات</Label>
                      <p className="text-sm text-muted-foreground">
                        تنبيه عند تحديث حالة الطلب
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>رسائل الطلاب</Label>
                      <p className="text-sm text-muted-foreground">
                        تنبيه عند وصول رسالة من طالب
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>تقارير النظام</Label>
                      <p className="text-sm text-muted-foreground">
                        تقارير يومية وأسبوعية
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>تحديثات الأمان</Label>
                      <p className="text-sm text-muted-foreground">
                        تنبيهات أمنية مهمة
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">طرق الإشعار</h4>
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
                  حفظ إعدادات الإشعارات
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* إعدادات النظام */}
          <TabsContent value="system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات عامة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>الوضع المظلم</Label>
                      <p className="text-sm text-muted-foreground">
                        تفعيل المظهر المظلم للنظام
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>حفظ تلقائي</Label>
                      <p className="text-sm text-muted-foreground">
                        حفظ التغييرات تلقائياً
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>النسخ الاحتياطي</Label>
                      <p className="text-sm text-muted-foreground">
                        نسخ احتياطي يومي للبيانات
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">إعدادات اللغة والمنطقة</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>اللغة</Label>
                      <Input value="العربية" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>المنطقة الزمنية</Label>
                      <Input value="توقيت القاهرة (GMT+2)" disabled />
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Save className="w-4 h-4 ml-2" />
                  حفظ إعدادات النظام
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;