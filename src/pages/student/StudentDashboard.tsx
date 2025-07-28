import StudentLayout from "@/components/student/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Upload,
  Bell,
  FileText,
  Calendar,
  GraduationCap,
  MapPin,
  Phone
} from "lucide-react";

const StudentDashboard = () => {
  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">مرحباً محمد أحمد</h1>
            <p className="text-muted-foreground">آخر دخول: اليوم الساعة 10:30 صباحاً</p>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <GraduationCap className="w-4 h-4 ml-1" />
            طالب نشط
          </Badge>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">حالة الطلب</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">قيد المراجعة</div>
              <p className="text-xs text-muted-foreground">
                جامعة القاهرة - كلية الهندسة
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التقدم</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <Progress value={75} className="mt-2" />
              <p className="text-xs text-muted-foreground">
                3 من 4 مراحل مكتملة
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الإشعارات</CardTitle>
              <Bell className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                إشعارات جديدة
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Current Application Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 ml-2" />
              تفاصيل الطلب الحالي
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Application Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">رقم الطلب:</span>
                  <Badge variant="outline">APP-2024-001</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">الجامعة:</span>
                  <span>جامعة القاهرة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">الكلية:</span>
                  <span>كلية الهندسة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">التخصص:</span>
                  <span>هندسة حاسوب</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">تاريخ التقديم:</span>
                  <span>15 يناير 2024</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4">
                <h4 className="font-medium">مراحل التقديم</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-sm">تم إرسال الطلب</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-sm">تم استلام المستندات</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">قيد المراجعة من الجامعة</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">انتظار القرار النهائي</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Recent Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>إجراءات سريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Upload className="w-4 h-4 ml-2" />
                رفع مستندات إضافية
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Bell className="w-4 h-4 ml-2" />
                عرض الإشعارات
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="w-4 h-4 ml-2" />
                تحميل تقرير الطلب
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Phone className="w-4 h-4 ml-2" />
                التواصل مع المستشار
              </Button>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle>آخر التحديثات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">تم قبول المستندات</p>
                  <p className="text-xs text-muted-foreground">
                    تم قبول جميع المستندات المرسلة - منذ 3 أيام
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">تحديث من الجامعة</p>
                  <p className="text-xs text-muted-foreground">
                    الطلب قيد المراجعة النهائية - منذ أسبوع
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">طلب مستندات إضافية</p>
                  <p className="text-xs text-muted-foreground">
                    مطلوب شهادة إجادة اللغة الإنجليزية - منذ أسبوعين
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Info Summary */}
        <Card>
          <CardHeader>
            <CardTitle>معلومات شخصية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-reverse space-x-3">
                <GraduationCap className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">المؤهل</p>
                  <p className="text-sm text-muted-foreground">بكالوريوس علوم حاسوب</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">الجنسية</p>
                  <p className="text-sm text-muted-foreground">الأردن</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">تاريخ التسجيل</p>
                  <p className="text-sm text-muted-foreground">10 يناير 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;