import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Send, Users, User, Bell } from "lucide-react";

const AdminNotifications = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">إرسال الإشعارات</h1>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <Bell className="w-4 h-4 ml-1" />
            نظام الإشعارات
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* نموذج إرسال الإشعار */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 ml-2" />
                  إنشاء إشعار جديد
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">المرسل إليه</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المستلم" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">جميع الطلاب</SelectItem>
                        <SelectItem value="pending">الطلبات المعلقة</SelectItem>
                        <SelectItem value="active">الطلبات النشطة</SelectItem>
                        <SelectItem value="specific">طالب محدد</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stage">المرحلة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المرحلة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="documents_received">تم استلام المستندات</SelectItem>
                        <SelectItem value="under_review">قيد المراجعة</SelectItem>
                        <SelectItem value="university_contact">تم التواصل مع الجامعة</SelectItem>
                        <SelectItem value="accepted">تم القبول</SelectItem>
                        <SelectItem value="registration">مرحلة التسجيل</SelectItem>
                        <SelectItem value="completed">مكتمل</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">عنوان الإشعار</Label>
                  <Input 
                    id="title"
                    placeholder="عنوان الإشعار..."
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">نص الرسالة</Label>
                  <Textarea 
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    className="text-right resize-none"
                  />
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Send className="w-4 h-4 ml-2" />
                    إرسال الإشعار
                  </Button>
                  <Button variant="outline">
                    حفظ كمسودة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* إحصائيات الإشعارات */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 ml-2" />
                  إحصائيات الإرسال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>إجمالي الطلاب</span>
                  <Badge variant="secondary">247</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>الطلبات النشطة</span>
                  <Badge variant="default">89</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>الطلبات المعلقة</span>
                  <Badge variant="destructive">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>الطلبات المكتملة</span>
                  <Badge variant="secondary">146</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>قوالب الرسائل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  قبول الطلب
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  طلب مستندات إضافية
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  تحديث المرحلة
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  موعد المقابلة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* آخر الإشعارات المرسلة */}
        <Card>
          <CardHeader>
            <CardTitle>آخر الإشعارات المرسلة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">تحديث حالة الطلب</p>
                      <p className="text-sm text-muted-foreground">أحمد محمد - منذ {i} ساعة</p>
                    </div>
                  </div>
                  <Badge variant="secondary">تم الإرسال</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminNotifications;