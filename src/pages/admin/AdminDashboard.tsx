import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  ClipboardList,
  FileCheck,
  AlertCircle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      icon: Users,
      title: "إجمالي الطلاب",
      value: "1,247",
      change: "+12%",
      changeType: "increase",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: ClipboardList,
      title: "الطلبات الجديدة",
      value: "23",
      change: "+5%",
      changeType: "increase",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: FileCheck,
      title: "طلبات مكتملة",
      value: "156",
      change: "+8%",
      changeType: "increase",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: AlertCircle,
      title: "طلبات معلقة",
      value: "12",
      change: "-3%",
      changeType: "decrease",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const recentRequests = [
    {
      id: "REQ-001",
      studentName: "أحمد محمد علي",
      country: "السعودية",
      program: "ماجستير إدارة أعمال",
      status: "جديد",
      statusColor: "bg-blue-100 text-blue-800",
      date: "2024-01-15"
    },
    {
      id: "REQ-002",
      studentName: "فاطمة الزهراء",
      country: "المغرب",
      program: "دكتوراه في الطب",
      status: "قيد المراجعة",
      statusColor: "bg-yellow-100 text-yellow-800",
      date: "2024-01-14"
    },
    {
      id: "REQ-003",
      studentName: "محمد عبدالله",
      country: "الأردن",
      program: "ماجستير هندسة",
      status: "تم القبول",
      statusColor: "bg-green-100 text-green-800",
      date: "2024-01-13"
    },
    {
      id: "REQ-004",
      studentName: "سارة أحمد",
      country: "الكويت",
      program: "بكالوريوس طب",
      status: "تحتاج مراجعة",
      statusColor: "bg-red-100 text-red-800",
      date: "2024-01-12"
    }
  ];

  const todayTasks = [
    {
      id: 1,
      task: "مراجعة طلب أحمد محمد",
      priority: "عالية",
      completed: false
    },
    {
      id: 2,
      task: "إرسال تحديث لطلاب جامعة القاهرة",
      priority: "متوسطة",
      completed: true
    },
    {
      id: 3,
      task: "مكالمة مع جامعة الأزهر",
      priority: "عالية",
      completed: false
    },
    {
      id: 4,
      task: "تحديث قائمة التخصصات المتاحة",
      priority: "منخفضة",
      completed: false
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">لوحة التحكم</h1>
            <p className="text-muted-foreground">مرحباً بك، أحمد المدير</p>
          </div>
          <div className="text-sm text-muted-foreground">
            آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} من الشهر الماضي
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Requests */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>الطلبات الحديثة</CardTitle>
              <Button variant="outline" size="sm">
                عرض الكل
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{request.studentName}</h4>
                      <p className="text-sm text-muted-foreground">{request.country} • {request.program}</p>
                      <p className="text-xs text-muted-foreground">{request.date}</p>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${request.statusColor}`}>
                        {request.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        عرض
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>مهام اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayTasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-reverse space-x-3 p-2 hover:bg-muted/50 rounded-lg">
                    <button className="flex-shrink-0">
                      {task.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.task}
                      </p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        task.priority === 'عالية' ? 'bg-red-100 text-red-800' :
                        task.priority === 'متوسطة' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>إجراءات سريعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-16 bg-primary-gradient">
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">إضافة طالب جديد</span>
                </div>
              </Button>
              <Button variant="outline" className="h-16">
                <div className="text-center">
                  <ClipboardList className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">إنشاء تقرير</span>
                </div>
              </Button>
              <Button variant="outline" className="h-16">
                <div className="text-center">
                  <AlertCircle className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">إرسال إشعار عام</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;