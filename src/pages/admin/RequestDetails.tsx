import { useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  FileText,
  Download,
  Send,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const RequestDetails = () => {
  const { id } = useParams();

  // Mock data - في التطبيق الحقيقي سيتم جلب البيانات من API
  const request = {
    id: "REQ-001",
    studentName: "أحمد محمد علي",
    email: "ahmed@example.com",
    phone: "+966501234567",
    country: "السعودية",
    city: "الرياض",
    dateOfBirth: "1995-03-15",
    nationalId: "1234567890",
    program: "ماجستير إدارة أعمال",
    university: "جامعة القاهرة",
    faculty: "كلية التجارة",
    preferredStartDate: "سبتمبر 2024",
    status: "قيد المراجعة",
    statusColor: "bg-yellow-100 text-yellow-800",
    submittedDate: "2024-01-15",
    lastUpdate: "2024-01-16",
    notes: "الطالب متفوق ولديه خبرة عملية مناسبة. يحتاج إلى ترجمة معتمدة للشهادات."
  };

  const documents = [
    {
      name: "جواز السفر",
      type: "PDF",
      size: "2.3 MB",
      uploaded: "2024-01-15",
      status: "تم التحقق"
    },
    {
      name: "شهادة البكالوريوس",
      type: "PDF",
      size: "1.8 MB",
      uploaded: "2024-01-15",
      status: "تحتاج ترجمة"
    },
    {
      name: "كشف الدرجات",
      type: "PDF",
      size: "1.2 MB",
      uploaded: "2024-01-15",
      status: "تم التحقق"
    },
    {
      name: "الصورة الشخصية",
      type: "JPG",
      size: "0.5 MB",
      uploaded: "2024-01-15",
      status: "تم التحقق"
    }
  ];

  const timeline = [
    {
      status: "تم الإرسال",
      date: "2024-01-15",
      description: "تم إرسال الطلب بنجاح",
      completed: true
    },
    {
      status: "قيد المراجعة الأولية",
      date: "2024-01-16",
      description: "تم البدء في مراجعة المستندات",
      completed: true
    },
    {
      status: "مراجعة المستندات",
      date: "2024-01-17",
      description: "مراجعة تفصيلية للمستندات المرفقة",
      completed: false
    },
    {
      status: "إرسال للجامعة",
      date: "متوقع 2024-01-20",
      description: "إرسال الطلب للجامعة للمراجعة النهائية",
      completed: false
    },
    {
      status: "القبول النهائي",
      date: "متوقع 2024-01-25",
      description: "الحصول على القبول النهائي من الجامعة",
      completed: false
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              تفاصيل الطلب {request.id}
            </h1>
            <p className="text-muted-foreground">
              طلب {request.studentName} - {request.program}
            </p>
          </div>
          <div className="flex items-center space-x-reverse space-x-4">
            <Badge className={request.statusColor}>
              {request.status}
            </Badge>
            <Button asChild>
              <Link to={`/admin/update/${request.id}`}>
                <Send className="w-4 h-4 ml-2" />
                إرسال تحديث
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Student Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 ml-2" />
                  المعلومات الشخصية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">الاسم الكامل</label>
                    <p className="text-lg font-medium">{request.studentName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">تاريخ الميلاد</label>
                    <p className="text-lg">{request.dateOfBirth}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">رقم الهوية</label>
                    <p className="text-lg">{request.nationalId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">الجنسية</label>
                    <p className="text-lg">{request.country}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{request.email}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{request.phone}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{request.city}, {request.country}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 ml-2" />
                  المعلومات الأكاديمية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">البرنامج المطلوب</label>
                    <p className="text-lg font-medium">{request.program}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">الجامعة</label>
                    <p className="text-lg">{request.university}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">الكلية</label>
                    <p className="text-lg">{request.faculty}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">تاريخ البدء المفضل</label>
                    <p className="text-lg">{request.preferredStartDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 ml-2" />
                  المستندات المرفقة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doc.type} • {doc.size} • تم الرفع: {doc.uploaded}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <Badge variant={doc.status === "تم التحقق" ? "default" : "secondary"}>
                          {doc.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>ملاحظات المراجع</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {request.notes}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Request Status */}
            <Card>
              <CardHeader>
                <CardTitle>حالة الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge className={`${request.statusColor} text-lg px-4 py-2`}>
                    {request.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">تاريخ التقديم:</span>
                    <span>{request.submittedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">آخر تحديث:</span>
                    <span>{request.lastUpdate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>مراحل الطلب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((step, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.completed 
                          ? 'bg-green-100 text-green-600' 
                          : index === 2 
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.completed ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : index === 2 ? (
                          <Clock className="w-4 h-4" />
                        ) : (
                          <AlertCircle className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${step.completed ? 'text-green-600' : 'text-muted-foreground'}`}>
                          {step.status}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        <p className="text-xs text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>إجراءات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" asChild>
                  <Link to={`/admin/update/${request.id}`}>
                    إرسال تحديث للطالب
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  طلب مستندات إضافية
                </Button>
                <Button variant="outline" className="w-full">
                  تحديث حالة الطلب
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default RequestDetails;