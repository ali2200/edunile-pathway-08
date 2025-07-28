import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Users,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  MessageSquare,
  GraduationCap,
  MapPin,
  Calendar,
  FileText,
  Phone,
  Mail
} from "lucide-react";

const AdminStudents = () => {
  const students = [
    {
      id: 1,
      name: "محمد أحمد الكريم",
      email: "mohamed.ahmed@example.com",
      phone: "+962 78 123 4567",
      nationality: "الأردن",
      status: "active",
      applicationStatus: "accepted",
      university: "جامعة القاهرة",
      major: "هندسة الحاسوب",
      registrationDate: "2024-01-10",
      lastLogin: "2024-01-25",
      progress: 85
    },
    {
      id: 2,
      name: "فاطمة علي محمود",
      email: "fatima.ali@example.com",
      phone: "+970 59 876 5432",
      nationality: "فلسطين",
      status: "active",
      applicationStatus: "under_review",
      university: "جامعة عين شمس",
      major: "طب الأسنان",
      registrationDate: "2024-01-15",
      lastLogin: "2024-01-24",
      progress: 60
    },
    {
      id: 3,
      name: "أحمد محمد سالم",
      email: "ahmed.salem@example.com",
      phone: "+963 94 555 1234",
      nationality: "سوريا",
      status: "inactive",
      applicationStatus: "pending",
      university: "جامعة الإسكندرية",
      major: "صيدلة",
      registrationDate: "2024-01-20",
      lastLogin: "2024-01-22",
      progress: 40
    },
    {
      id: 4,
      name: "سارة خالد النجار",
      email: "sara.khalid@example.com",
      phone: "+961 70 333 7890",
      nationality: "لبنان",
      status: "active",
      applicationStatus: "documents_required",
      university: "جامعة حلوان",
      major: "هندسة مدني",
      registrationDate: "2024-01-18",
      lastLogin: "2024-01-25",
      progress: 75
    },
    {
      id: 5,
      name: "يوسف عبدالله الطاهر",
      email: "youssef.abdullah@example.com",
      phone: "+964 77 999 4567",
      nationality: "العراق",
      status: "active",
      applicationStatus: "completed",
      university: "جامعة القاهرة",
      major: "طب بشري",
      registrationDate: "2023-12-05",
      lastLogin: "2024-01-23",
      progress: 100
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">نشط</Badge>;
      case "inactive":
        return <Badge variant="outline">غير نشط</Badge>;
      case "suspended":
        return <Badge variant="destructive">موقوف</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  const getApplicationStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">مكتمل</Badge>;
      case "accepted":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">مقبول</Badge>;
      case "under_review":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">قيد المراجعة</Badge>;
      case "documents_required":
        return <Badge variant="destructive">مستندات مطلوبة</Badge>;
      case "pending":
        return <Badge variant="outline">معلق</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  const stats = {
    total: students.length,
    active: students.filter(s => s.status === "active").length,
    accepted: students.filter(s => s.applicationStatus === "accepted").length,
    pending: students.filter(s => s.applicationStatus === "pending").length
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">إدارة الطلاب</h1>
            <p className="text-muted-foreground">عرض ومتابعة جميع الطلاب المسجلين</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 ml-2" />
              تصدير البيانات
            </Button>
            <Button>
              <Plus className="w-4 h-4 ml-2" />
              إضافة طالب
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الطلاب</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">
                +12% من الشهر الماضي
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الطلاب النشطين</CardTitle>
              <GraduationCap className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.active}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((stats.active / stats.total) * 100)}% من الإجمالي
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المقبولين</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.accepted}</div>
              <p className="text-xs text-muted-foreground">
                +3 هذا الأسبوع
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">في الانتظار</CardTitle>
              <Calendar className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
              <p className="text-xs text-muted-foreground">
                يتطلب متابعة
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="البحث بالاسم، البريد الإلكتروني، أو رقم الهاتف..."
                  className="pr-10 text-right"
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="حالة الطالب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="active">نشط</SelectItem>
                    <SelectItem value="inactive">غير نشط</SelectItem>
                    <SelectItem value="suspended">موقوف</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="حالة الطلب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الطلبات</SelectItem>
                    <SelectItem value="completed">مكتمل</SelectItem>
                    <SelectItem value="accepted">مقبول</SelectItem>
                    <SelectItem value="under_review">قيد المراجعة</SelectItem>
                    <SelectItem value="pending">معلق</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="الجنسية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الدول</SelectItem>
                    <SelectItem value="jordan">الأردن</SelectItem>
                    <SelectItem value="palestine">فلسطين</SelectItem>
                    <SelectItem value="syria">سوريا</SelectItem>
                    <SelectItem value="lebanon">لبنان</SelectItem>
                    <SelectItem value="iraq">العراق</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 ml-2" />
                  تصفية
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة الطلاب</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الطالب</TableHead>
                  <TableHead className="text-right">التواصل</TableHead>
                  <TableHead className="text-right">الجنسية</TableHead>
                  <TableHead className="text-right">الجامعة والتخصص</TableHead>
                  <TableHead className="text-right">حالة الطالب</TableHead>
                  <TableHead className="text-right">حالة الطلب</TableHead>
                  <TableHead className="text-right">التقدم</TableHead>
                  <TableHead className="text-right">آخر دخول</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center space-x-reverse space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">#{student.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-reverse space-x-1">
                          <Mail className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs">{student.email}</span>
                        </div>
                        <div className="flex items-center space-x-reverse space-x-1">
                          <Phone className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs">{student.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm">{student.nationality}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{student.university}</div>
                        <div className="text-xs text-muted-foreground">{student.major}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(student.status)}</TableCell>
                    <TableCell>{getApplicationStatusBadge(student.applicationStatus)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <div className="w-12 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">{student.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{student.lastLogin}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            عرض 1-5 من أصل {students.length} طالب
          </div>
          <div className="flex items-center space-x-reverse space-x-2">
            <Button variant="outline" size="sm" disabled>
              السابق
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              التالي
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminStudents;