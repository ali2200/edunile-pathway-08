import StudentLayout from "@/components/student/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  FileText,
  Download,
  Eye,
  Phone,
  MessageSquare,
  User,
  Building,
  GraduationCap
} from "lucide-react";

const StudentStatus = () => {
  const applicationData = {
    applicationId: "APP-2024-001",
    submissionDate: "2024-01-10",
    lastUpdate: "2024-01-25",
    currentStage: "under_review",
    progress: 75,
    university: "جامعة القاهرة",
    college: "كلية الهندسة",
    program: "ماجستير في هندسة الحاسوب",
    expectedDecision: "2024-02-15",
    advisor: {
      name: "د. أحمد محمد",
      email: "advisor@edunile.com",
      phone: "+20 123 456 789"
    }
  };

  const stages = [
    {
      id: 1,
      title: "تم إرسال الطلب",
      description: "تم إرسال طلبك بنجاح للمراجعة الأولية",
      status: "completed",
      date: "2024-01-10",
      icon: CheckCircle2,
      color: "text-green-600"
    },
    {
      id: 2,
      title: "تم استلام المستندات",
      description: "تم استلام ومراجعة جميع المستندات المطلوبة",
      status: "completed",
      date: "2024-01-12",
      icon: CheckCircle2,
      color: "text-green-600"
    },
    {
      id: 3,
      title: "قيد المراجعة من الجامعة",
      description: "طلبك حالياً قيد المراجعة من قبل لجنة القبول في الجامعة",
      status: "current",
      date: "2024-01-15",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      id: 4,
      title: "انتظار القرار النهائي",
      description: "في انتظار صدور القرار النهائي من الجامعة",
      status: "pending",
      date: "قريباً",
      icon: Clock,
      color: "text-muted-foreground"
    },
    {
      id: 5,
      title: "إجراءات التسجيل",
      description: "إكمال إجراءات التسجيل النهائية",
      status: "pending",
      date: "قريباً",
      icon: Clock,
      color: "text-muted-foreground"
    }
  ];

  const documents = [
    {
      name: "جواز السفر",
      status: "approved",
      uploadDate: "2024-01-10",
      reviewDate: "2024-01-12"
    },
    {
      name: "الشهادة الجامعية",
      status: "approved",
      uploadDate: "2024-01-10",
      reviewDate: "2024-01-12"
    },
    {
      name: "شهادة اللغة الإنجليزية",
      status: "under_review",
      uploadDate: "2024-01-18",
      reviewDate: null
    },
    {
      name: "الصورة الشخصية",
      status: "approved",
      uploadDate: "2024-01-10",
      reviewDate: "2024-01-11"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "current":
        return <Clock className="w-5 h-5 text-blue-600 animate-pulse" />;
      case "pending":
        return <Clock className="w-5 h-5 text-muted-foreground" />;
      default:
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
    }
  };

  const getDocumentStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">معتمد</Badge>;
      case "under_review":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">قيد المراجعة</Badge>;
      case "rejected":
        return <Badge variant="destructive">مرفوض</Badge>;
      default:
        return <Badge variant="outline">في الانتظار</Badge>;
    }
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">حالة الطلب</h1>
            <p className="text-muted-foreground">تابع تقدم طلبك خطوة بخطوة</p>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            <FileText className="w-4 h-4 ml-1" />
            {applicationData.applicationId}
          </Badge>
        </div>

        {/* Application Overview */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>معلومات الطلب</span>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 ml-2" />
                تحميل التقرير
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-reverse space-x-3">
                <Building className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">الجامعة</p>
                  <p className="text-sm text-muted-foreground">{applicationData.university}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <GraduationCap className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">البرنامج</p>
                  <p className="text-sm text-muted-foreground">{applicationData.program}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">تاريخ التقديم</p>
                  <p className="text-sm text-muted-foreground">{applicationData.submissionDate}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">آخر تحديث</p>
                  <p className="text-sm text-muted-foreground">{applicationData.lastUpdate}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">المستشار</p>
                  <p className="text-sm text-muted-foreground">{applicationData.advisor.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-3">
                <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">التقدم</p>
                  <p className="text-sm text-muted-foreground">{applicationData.progress}%</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">التقدم الإجمالي</span>
                <span className="text-sm text-muted-foreground">{applicationData.progress}%</span>
              </div>
              <Progress value={applicationData.progress} className="w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Application Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>مراحل الطلب</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <div key={stage.id} className="flex items-start space-x-reverse space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      stage.status === "completed" ? "bg-green-100" :
                      stage.status === "current" ? "bg-blue-100" : "bg-muted"
                    }`}>
                      <stage.icon className={`w-5 h-5 ${stage.color}`} />
                    </div>
                    {index < stages.length - 1 && (
                      <div className={`w-0.5 h-12 mx-auto mt-2 ${
                        stage.status === "completed" ? "bg-green-300" : "bg-muted"
                      }`} />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${stage.status === "current" ? "text-blue-600" : ""}`}>
                        {stage.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{stage.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stage.description}</p>
                    
                    {stage.status === "current" && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          🔄 هذه هي المرحلة الحالية. سيتم إشعارك عند حدوث أي تطوير.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Documents Status */}
        <Card>
          <CardHeader>
            <CardTitle>حالة المستندات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        رُفع في: {doc.uploadDate}
                        {doc.reviewDate && ` • تمت المراجعة: ${doc.reviewDate}`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-2">
                    {getDocumentStatusBadge(doc.status)}
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Advisor */}
        <Card>
          <CardHeader>
            <CardTitle>تواصل مع مستشارك</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">{applicationData.advisor.name}</h4>
                  <p className="text-sm text-muted-foreground">مستشار أكاديمي</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 ml-2" />
                  اتصال
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4 ml-2" />
                  رسالة
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expected Timeline */}
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">التوقيت المتوقع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-reverse space-x-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">القرار النهائي متوقع</p>
                <p className="text-sm text-blue-600">{applicationData.expectedDecision}</p>
                <p className="text-xs text-blue-600 mt-1">
                  * التواريخ تقريبية وقد تتغير حسب ظروف الجامعة
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentStatus;