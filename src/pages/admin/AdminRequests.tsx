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
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Eye, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const AdminRequests = () => {
  const requests = [
    {
      id: "REQ-001",
      studentName: "أحمد محمد علي",
      email: "ahmed@example.com",
      country: "السعودية",
      phone: "+966501234567",
      program: "ماجستير إدارة أعمال",
      university: "جامعة القاهرة",
      status: "جديد",
      statusColor: "bg-blue-100 text-blue-800",
      submittedDate: "2024-01-15",
      lastUpdate: "2024-01-15"
    },
    {
      id: "REQ-002",
      studentName: "فاطمة الزهراء",
      email: "fatima@example.com",
      country: "المغرب",
      phone: "+212601234567",
      program: "دكتوراه في الطب",
      university: "جامعة عين شمس",
      status: "قيد المراجعة",
      statusColor: "bg-yellow-100 text-yellow-800",
      submittedDate: "2024-01-14",
      lastUpdate: "2024-01-14"
    },
    {
      id: "REQ-003",
      studentName: "محمد عبدالله",
      email: "mohammed@example.com",
      country: "الأردن",
      phone: "+962771234567",
      program: "ماجستير هندسة",
      university: "جامعة الأزهر",
      status: "تم القبول",
      statusColor: "bg-green-100 text-green-800",
      submittedDate: "2024-01-13",
      lastUpdate: "2024-01-16"
    },
    {
      id: "REQ-004",
      studentName: "سارة أحمد",
      email: "sara@example.com",
      country: "الكويت",
      phone: "+965501234567",
      program: "بكالوريوس طب",
      university: "جامعة القاهرة",
      status: "تحتاج مراجعة",
      statusColor: "bg-red-100 text-red-800",
      submittedDate: "2024-01-12",
      lastUpdate: "2024-01-12"
    },
    {
      id: "REQ-005",
      studentName: "عمر حسن",
      email: "omar@example.com",
      country: "العراق",
      phone: "+964771234567",
      program: "ماجستير علوم حاسوب",
      university: "جامعة حلوان",
      status: "مكتمل",
      statusColor: "bg-green-100 text-green-800",
      submittedDate: "2024-01-10",
      lastUpdate: "2024-01-18"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">إدارة الطلبات</h1>
            <p className="text-muted-foreground">إدارة ومتابعة طلبات الطلاب</p>
          </div>
          <Button className="bg-primary-gradient">
            <Download className="w-4 h-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>البحث والتصفية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="بحث بالاسم أو الرقم..."
                  className="pr-10 text-right"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="حالة الطلب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="new">جديد</SelectItem>
                  <SelectItem value="review">قيد المراجعة</SelectItem>
                  <SelectItem value="accepted">تم القبول</SelectItem>
                  <SelectItem value="completed">مكتمل</SelectItem>
                  <SelectItem value="needs-review">تحتاج مراجعة</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="البلد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع البلدان</SelectItem>
                  <SelectItem value="saudi">السعودية</SelectItem>
                  <SelectItem value="egypt">مصر</SelectItem>
                  <SelectItem value="jordan">الأردن</SelectItem>
                  <SelectItem value="kuwait">الكويت</SelectItem>
                  <SelectItem value="morocco">المغرب</SelectItem>
                  <SelectItem value="iraq">العراق</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="الجامعة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الجامعات</SelectItem>
                  <SelectItem value="cairo">جامعة القاهرة</SelectItem>
                  <SelectItem value="ainshams">جامعة عين شمس</SelectItem>
                  <SelectItem value="azhar">جامعة الأزهر</SelectItem>
                  <SelectItem value="helwan">جامعة حلوان</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Requests Table */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة الطلبات ({requests.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم الطلب</TableHead>
                    <TableHead className="text-right">اسم الطالب</TableHead>
                    <TableHead className="text-right">البلد</TableHead>
                    <TableHead className="text-right">البرنامج</TableHead>
                    <TableHead className="text-right">الجامعة</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">تاريخ التقديم</TableHead>
                    <TableHead className="text-right">آخر تحديث</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{request.studentName}</div>
                          <div className="text-sm text-muted-foreground">{request.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{request.country}</TableCell>
                      <TableCell>{request.program}</TableCell>
                      <TableCell>{request.university}</TableCell>
                      <TableCell>
                        <Badge className={request.statusColor}>
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{request.submittedDate}</TableCell>
                      <TableCell>{request.lastUpdate}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-reverse space-x-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/requests/${request.id}`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/update/${request.id}`}>
                              <Mail className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            عرض 1-5 من 5 طلبات
          </div>
          <div className="flex items-center space-x-reverse space-x-2">
            <Button variant="outline" size="sm" disabled>
              السابق
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              التالي
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRequests;