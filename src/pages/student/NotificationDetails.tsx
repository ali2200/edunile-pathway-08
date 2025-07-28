import { useParams, Link } from "react-router-dom";
import StudentLayout from "@/components/student/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  Calendar,
  FileText,
  Phone,
  Download,
  MessageSquare
} from "lucide-react";

const NotificationDetails = () => {
  const { id } = useParams();

  // Mock notification data
  const notification = {
    id: parseInt(id || "1"),
    title: "تم قبول طلبك في جامعة القاهرة",
    message: "نبارك لك! تم قبول طلبك في كلية الهندسة - قسم هندسة الحاسوب بجامعة القاهرة. يرجى متابعة الخطوات التالية للتسجيل.",
    fullMessage: `
      عزيزي الطالب محمد أحمد،

      يسعدنا أن نبلغك بقبول طلبك للدراسة في:
      - الجامعة: جامعة القاهرة
      - الكلية: كلية الهندسة  
      - القسم: هندسة الحاسوب
      - المستوى: ماجستير

      الخطوات التالية المطلوبة:

      1. تأكيد القبول خلال 14 يوم من تاريخ هذا الإشعار
      2. دفع رسوم الحجز المبدئية (500 جنيه مصري)
      3. إكمال إجراءات التسجيل الإلكتروني
      4. حضور جلسة التوجيه للطلاب الجدد

      المستندات المرفقة:
      - خطاب القبول الرسمي
      - دليل الطالب الجديد
      - جدول الرسوم الدراسية

      في حالة وجود أي استفسارات، يرجى التواصل مع مكتب القبول على:
      الهاتف: +20 2 123 456 789
      البريد الإلكتروني: admissions@cu.edu.eg

      تهانينا مرة أخرى، ونتطلع لاستقبالك في الجامعة.

      مع أطيب التحيات،
      مكتب القبول والتسجيل
      جامعة القاهرة
    `,
    type: "success",
    stage: "accepted",
    date: "2024-01-20",
    time: "14:30",
    isRead: false,
    urgency: "high",
    deadline: "2024-02-03",
    attachments: [
      { name: "خطاب القبول الرسمي.pdf", size: "245 KB" },
      { name: "دليل الطالب الجديد.pdf", size: "1.2 MB" },
      { name: "جدول الرسوم الدراسية.pdf", size: "156 KB" }
    ],
    actionRequired: true,
    nextSteps: [
      { title: "تأكيد القبول", deadline: "2024-02-03", status: "pending" },
      { title: "دفع رسوم الحجز", deadline: "2024-02-05", status: "pending" },
      { title: "التسجيل الإلكتروني", deadline: "2024-02-10", status: "pending" },
      { title: "حضور جلسة التوجيه", deadline: "2024-02-15", status: "pending" }
    ]
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-6 h-6 text-green-600" />;
      case "warning":
        return <AlertCircle className="w-6 h-6 text-orange-600" />;
      case "important":
        return <Calendar className="w-6 h-6 text-red-600" />;
      default:
        return <Clock className="w-6 h-6 text-blue-600" />;
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

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-3">
            <Link to="/student/updates">
              <Button variant="ghost" size="sm">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">تفاصيل الإشعار</h1>
              <p className="text-muted-foreground">#{notification.id}</p>
            </div>
          </div>
          {getTypeBadge(notification.type)}
        </div>

        {/* Main Notification Card */}
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {getTypeIcon(notification.type)}
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">{notification.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{notification.date} - {notification.time}</span>
                  {notification.deadline && (
                    <>
                      <span>•</span>
                      <span className="text-red-600">
                        المهلة النهائية: {notification.deadline}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none text-right" style={{ direction: 'rtl' }}>
              <div className="whitespace-pre-line leading-relaxed">
                {notification.fullMessage}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        {notification.nextSteps && notification.nextSteps.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle2 className="w-5 h-5 ml-2" />
                الخطوات المطلوبة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notification.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-reverse space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          المهلة النهائية: {step.deadline}
                        </p>
                      </div>
                    </div>
                    <Badge variant={step.status === "completed" ? "secondary" : "outline"}>
                      {step.status === "completed" ? "مكتمل" : "مطلوب"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Attachments */}
        {notification.attachments && notification.attachments.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 ml-2" />
                المرفقات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notification.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-reverse space-x-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{file.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 ml-2" />
                      تحميل
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notification.actionRequired && (
            <>
              <Button className="w-full">
                <CheckCircle2 className="w-4 h-4 ml-2" />
                تأكيد القبول
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 ml-2" />
                تحديد موعد
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="w-4 h-4 ml-2" />
                رد على الرسالة
              </Button>
            </>
          )}
        </div>

        {/* Contact Information */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="w-5 h-5 ml-2" />
              تحتاج مساعدة؟
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">للاستفسارات الأكاديمية:</p>
                <p className="text-sm text-muted-foreground">
                  الهاتف: +20 2 123 456 789
                  <br />
                  البريد: academic@edunile.com
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">للدعم الفني:</p>
                <p className="text-sm text-muted-foreground">
                  الهاتف: +20 2 987 654 321
                  <br />
                  البريد: support@edunile.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default NotificationDetails;