
import { useLocation, NavLink } from "react-router-dom";
import { 
  LayoutGrid,
  Users,
  LineChart,
  BookOpen,
  Calendar,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutGrid, title: "Overview", path: "/" },
    { icon: Users, title: "Students", path: "/students" },
    { icon: LineChart, title: "Analytics", path: "/analytics" },
    { icon: BookOpen, title: "Courses", path: "/courses" },
    { icon: Calendar, title: "Schedules", path: "/schedules" },
  ];
  
  return (
    <aside className="bg-sidebar w-60 min-h-screen text-sidebar-foreground flex flex-col border-r border-sidebar-border">
      <div className="flex items-center gap-2 p-6 border-b border-sidebar-border">
        <GraduationCap className="h-6 w-6 text-blue-400" />
        <h1 className="text-xl font-bold text-blue-400">EduTrack</h1>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-primary font-medium"
                      : "hover:bg-sidebar-accent/50"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground">
          EduTrack Lecturer v1.0
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
