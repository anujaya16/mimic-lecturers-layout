
import { Users, LineChart, AlertTriangle, BookOpen } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";

const Index = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-1">Overview</h2>
        <p className="text-muted-foreground">
          Welcome to your lecturer dashboard
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value="124"
          icon={Users}
          iconColor="text-blue-500"
          iconBg="bg-blue-500/20"
          subtitle="Across all classes"
          change={{
            value: "4.5% from last month",
            positive: true
          }}
        />
        
        <StatsCard
          title="Average Score"
          value="78.5%"
          icon={LineChart}
          iconColor="text-green-500"
          iconBg="bg-green-500/20"
          subtitle="Current term"
          change={{
            value: "1.2% improvement",
            positive: true
          }}
        />
        
        <StatsCard
          title="At-Risk Students"
          value="12"
          icon={AlertTriangle}
          iconColor="text-amber-500"
          iconBg="bg-amber-500/20"
          subtitle="Requiring intervention"
          change={{
            value: "3.8% from last month",
            positive: false
          }}
        />
        
        <StatsCard
          title="Courses Taught"
          value="5"
          icon={BookOpen}
          iconColor="text-purple-500"
          iconBg="bg-purple-500/20"
          subtitle="This semester"
          change={{
            value: "1 more than last term",
            positive: true
          }}
        />
      </div>
      
      <PerformanceChart />
    </div>
  );
};

export default Index;
