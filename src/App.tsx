import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Majors from "./pages/Majors";
import Universities from "./pages/majors/Universities";
import UniversityDetails from "./pages/majors/UniversityDetails";
import Fields from "./pages/majors/Fields";
import MajorDetails from "./pages/majors/MajorDetails";
import AcademicServices from "./pages/AcademicServices";
import GeneralServices from "./pages/GeneralServices";
import ResearchServices from "./pages/ResearchServices";
import HowToStart from "./pages/HowToStart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRequests from "./pages/admin/AdminRequests";
import RequestDetails from "./pages/admin/RequestDetails";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminContent from "./pages/admin/AdminContent";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminStudents from "./pages/admin/AdminStudents";

// Student Pages
import StudentLogin from "./pages/student/StudentLogin";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentUpload from "./pages/student/StudentUpload";
import StudentUpdates from "./pages/student/StudentUpdates";
import StudentProfile from "./pages/student/StudentProfile";
import StudentStatus from "./pages/student/StudentStatus";
import NotificationDetails from "./pages/student/NotificationDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/majors" element={<Majors />} />
          <Route path="/majors/universities" element={<Universities />} />
          <Route path="/majors/universities/:universityId" element={<UniversityDetails />} />
          <Route path="/majors/fields" element={<Fields />} />
          <Route path="/major/:majorId" element={<MajorDetails />} />
          <Route path="/academic-services" element={<AcademicServices />} />
          <Route path="/general-services" element={<GeneralServices />} />
          <Route path="/research-services" element={<ResearchServices />} />
          <Route path="/how-to-start" element={<HowToStart />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/requests" element={<AdminRequests />} />
          <Route path="/admin/requests/:id" element={<RequestDetails />} />
          <Route path="/admin/notifications" element={<AdminNotifications />} />
          <Route path="/admin/content" element={<AdminContent />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          
          {/* Student Routes */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/upload" element={<StudentUpload />} />
          <Route path="/student/updates" element={<StudentUpdates />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/status" element={<StudentStatus />} />
          <Route path="/student/notification/:id" element={<NotificationDetails />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
