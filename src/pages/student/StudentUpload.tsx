import StudentLayout from "@/components/student/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  FileText,
  Image,
  CheckCircle2,
  AlertCircle,
  Download,
  Trash2,
  Eye
} from "lucide-react";

const StudentUpload = () => {
  const requiredDocuments = [
    {
      id: 1,
      name: "جواز السفر",
      description: "صورة واضحة من جواز السفر ساري المفعول",
      status: "uploaded",
      file: "passport.pdf",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      name: "الشهادة الجامعية",
      description: "شهادة البكالوريوس مع كشف الدرجات",
      status: "uploaded",
      file: "bachelor_degree.pdf",
      uploadDate: "2024-01-15"
    },
    {
      id: 3,
      name: "شهادة اللغة الإنجليزية",
      description: "IELTS, TOEFL أو ما يعادلها",
      status: "pending",
      file: null,
      uploadDate: null
    },
    {
      id: 4,
      name: "الصورة الشخصية",
      description: "صورة شخصية حديثة بخلفية بيضاء",
      status: "uploaded",
      file: "personal_photo.jpg",
      uploadDate: "2024-01-16"
    },
    {
      id: 5,
      name: "خطاب الدافع",
      description: "خطاب توضيح أسباب اختيار التخصص",
      status: "pending",
      file: null,
      uploadDate: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "uploaded":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "uploaded":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">تم الرفع</Badge>;
      case "pending":
        return <Badge variant="destructive">مطلوب</Badge>;
      default:
        return <Badge variant="outline">غير مطلوب</Badge>;
    }
  };

  const uploadedCount = requiredDocuments.filter(doc => doc.status === "uploaded").length;
  const totalCount = requiredDocuments.length;
  const progressPercentage = (uploadedCount / totalCount) * 100;

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">رفع المستندات</h1>
            <p className="text-muted-foreground">تأكد من رفع جميع المستندات المطلوبة</p>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <Upload className="w-4 h-4 ml-1" />
            {uploadedCount} من {totalCount}
          </Badge>
        </div>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              تقدم رفع المستندات
              <span className="text-lg font-bold">{Math.round(progressPercentage)}%</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>تم رفع {uploadedCount} مستند</span>
              <span>متبقي {totalCount - uploadedCount} مستند</span>
            </div>
          </CardContent>
        </Card>

        {/* Upload Area */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="w-5 h-5 ml-2" />
              رفع مستند جديد
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">اسحب الملفات هنا أو انقر للرفع</h3>
              <p className="text-muted-foreground mb-4">
                أنواع الملفات المدعومة: PDF, JPG, PNG (حجم أقصى: 10MB)
              </p>
              <Button>
                <Upload className="w-4 h-4 ml-2" />
                اختيار الملفات
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <CardTitle>المستندات المطلوبة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requiredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-reverse space-x-4">
                    {getStatusIcon(doc.status)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-reverse space-x-2 mb-1">
                        <h4 className="font-medium">{doc.name}</h4>
                        {getStatusBadge(doc.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                      {doc.file && (
                        <div className="flex items-center space-x-reverse space-x-2 mt-2">
                          <FileText className="w-3 h-3" />
                          <span className="text-xs text-muted-foreground">
                            {doc.file} - تم الرفع في {doc.uploadDate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-reverse space-x-2">
                    {doc.status === "uploaded" ? (
                      <>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </>
                    ) : (
                      <Button size="sm">
                        <Upload className="w-4 h-4 ml-2" />
                        رفع
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Documents */}
        <Card>
          <CardHeader>
            <CardTitle>مستندات إضافية (اختيارية)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">خطابات التوصية</h4>
                  <p className="text-sm text-muted-foreground">خطابات من أساتذة أو مدراء سابقين</p>
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 ml-2" />
                  رفع
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">شهادات إضافية</h4>
                  <p className="text-sm text-muted-foreground">دورات، ورش عمل، أو شهادات مهنية</p>
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 ml-2" />
                  رفع
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Portfolio</h4>
                  <p className="text-sm text-muted-foreground">أعمال سابقة أو مشاريع (للتخصصات الفنية)</p>
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 ml-2" />
                  رفع
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="flex-1" disabled={progressPercentage < 100}>
            إرسال الطلب للمراجعة
          </Button>
          <Button variant="outline" className="flex-1">
            حفظ كمسودة
          </Button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentUpload;