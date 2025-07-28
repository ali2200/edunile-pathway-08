import StudentLayout from "@/components/student/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  MessageSquare,
  Calendar,
  Filter
} from "lucide-react";

const StudentUpdates = () => {
  const notifications = [
    {
      id: 1,
      title: "تم قبول طلبك في جامعة القاهرة",
      message: "نبارك لك! تم قبول طلبك في كلية الهندسة - قسم هندسة الحاسوب بجامعة القاهرة. يرجى متابعة الخطوات التالية للتسجيل.",
      type: "success",
      stage: "accepted",
      date: "2024-01-20",
      time: "14:30",
      isRead: false,
      hasAction: true
    },
    {
      id: 2,
      title: "مطلوب مستندات إضافية",
      message: "يرجى رفع شهادة إجادة اللغة الإنجليزية (IELTS أو TOEFL) لاستكمال ملف طلبك. لديك 7 أيام لرفع المستند.",
      type: "warning",
      stage: "documents_required",
      date: "2024-01-18",
      time: "10:15",
      isRead: true,
      hasAction: true
    },
    {
      id: 3,
      title: "تحديث حالة الطلب",
      message: "طلبك الآن قيد المراجعة من قبل لجنة القبول في الجامعة. سيتم إشعارك بالنتيجة خلال 5-7 أيام عمل.",
      type: "info",
      stage: "under_review",
      date: "2024-01-15",
      time: "16:45",
      isRead: true,
      hasAction: false
    },
    {
      id: 4,
      title: "تم استلام طلبك",
      message: "تم استلام طلبك بنجاح ورقم الطلب هو APP-2024-001. سيتم مراجعة المستندات المرفقة خلال 2-3 أيام عمل.",
      type: "info",
      stage: "received",
      date: "2024-01-10",
      time: "09:20",
      isRead: true,
      hasAction: false
    },
    {
      id: 5,
      title: "موعد مقابلة شخصية",
      message: "تم تحديد موعد مقابلة شخصية معك يوم الأحد 25 يناير الساعة 2:00 ظهراً. يرجى الحضور في الموعد المحدد.",
      type: "important",
      stage: "interview",
      date: "2024-01-22",
      time: "11:00",
      isRead: false,
      hasAction: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case "important":
        return <Calendar className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-blue-600" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "success":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">نجح</Badge>;
      case "warning":
        return <Badge variant="destructive">تحذير</Badge>;
      case "important":
        return <Badge variant="destructive" className="bg-red-100 text-red-800">مهم</Badge>;
      default:
        return <Badge variant="secondary">معلومات</Badge>;
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">الإشعارات والتحديثات</h1>
            <p className="text-muted-foreground">جميع التحديثات المتعلقة بطلبك</p>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <Bell className="w-4 h-4 ml-1" />
            {unreadCount} جديد
          </Badge>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="البحث في الإشعارات..."
                  className="pr-10 text-right"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 ml-2" />
                  تصفية
                </Button>
                <Button variant="outline" size="sm">
                  الكل كمقروء
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">الإجمالي</p>
                  <p className="text-2xl font-bold">{notifications.length}</p>
                </div>
                <Bell className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">غير مقروء</p>
                  <p className="text-2xl font-bold text-blue-600">{unreadCount}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">مهم</p>
                  <p className="text-2xl font-bold text-red-600">
                    {notifications.filter(n => n.type === "important").length}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">يتطلب إجراء</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {notifications.filter(n => n.hasAction).length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`transition-all hover:shadow-md ${!notification.isRead ? 'border-primary/30 bg-primary/5' : ''}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getTypeIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{notification.title}</h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {getTypeBadge(notification.type)}
                        <span className="text-sm text-muted-foreground">
                          {notification.date} - {notification.time}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {notification.message}
                    </p>

                    {notification.hasAction && (
                      <div className="flex gap-2 pt-2">
                        <Link to={`/student/notification/${notification.id}`}>
                          <Button size="sm">
                            <FileText className="w-4 h-4 ml-2" />
                            عرض التفاصيل
                          </Button>
                        </Link>
                        {notification.type === "warning" && (
                          <Button size="sm" variant="outline">
                            رفع المستندات
                          </Button>
                        )}
                        {notification.type === "important" && (
                          <Button size="sm" variant="outline">
                            تأكيد الحضور
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">
            تحميل المزيد من الإشعارات
          </Button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentUpdates;