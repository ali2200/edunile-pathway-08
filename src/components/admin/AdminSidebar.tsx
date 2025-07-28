import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Users,
  ClipboardList,
  MessageSquare,
  FileText,
  Settings,
  Home,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      icon: Home,
      label: "الصفحة الرئيسية",
      href: "/admin/dashboard"
    },
    {
      icon: ClipboardList,
      label: "إدارة الطلبات",
      href: "/admin/requests"
    },
    {
      icon: Bell,
      label: "إرسال إشعار",
      href: "/admin/notifications"
    },
    {
      icon: FileText,
      label: "إدارة المحتوى",
      href: "/admin/content"
    },
    {
      icon: Users,
      label: "إدارة الطلاب",
      href: "/admin/students"
    },
    {
      icon: Settings,
      label: "إعدادات الحساب",
      href: "/admin/profile"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={cn(
        "bg-white border-l border-border h-screen flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="text-xl font-bold text-primary">
            EduNile Admin
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg hover:bg-muted transition-colors"
        >
          {collapsed ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={cn(
                  "flex items-center p-3 rounded-lg transition-colors",
                  "hover:bg-muted",
                  isActive(item.href)
                    ? "bg-primary text-white"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="mr-3 text-sm font-medium">
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <button
          className={cn(
            "flex items-center p-3 rounded-lg transition-colors w-full",
            "hover:bg-red-50 text-red-600"
          )}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && (
            <span className="mr-3 text-sm font-medium">تسجيل الخروج</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;