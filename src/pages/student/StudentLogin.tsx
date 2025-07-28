import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, Eye, EyeOff, Mail, Lock } from "lucide-react";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-reverse space-x-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EduNile</span>
          </Link>
          <p className="text-muted-foreground mt-2">منصة الطلاب</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
            <CardDescription>
              ادخل بياناتك للوصول إلى حسابك
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني أو رقم الطالب</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="email"
                  type="text"
                  placeholder="student@example.com أو ST2024001"
                  className="pr-10 text-right"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  className="pr-10 pl-10 text-right"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-reverse space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  تذكرني
                </Label>
              </div>
              <Link
                to="/student/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            <Button className="w-full" size="lg">
              تسجيل الدخول
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link to="/student/register" className="text-primary hover:underline">
                إنشاء حساب جديد
              </Link>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                العودة إلى الموقع الرئيسي
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Help */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            تحتاج مساعدة؟{" "}
            <Link to="/contact" className="text-primary hover:underline">
              تواصل معنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;