import { 
  LayoutDashboard, 
  Shield, 
  Zap, 
  Calendar, 
  Bell, 
  Settings, 
  LifeBuoy 
} from "lucide-react";

export const sidebarNavItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: Shield },
  { name: "Scans", path: "/scans", icon: Zap },
  { name: "Schedule", path: "/schedule", icon: Calendar },
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Support", path: "/support", icon: LifeBuoy },
];