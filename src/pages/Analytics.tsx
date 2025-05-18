
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const gradeDistribution = [
  { grade: "A", count: 25, color: "#10B981" },
  { grade: "B", count: 32, color: "#3B82F6" },
  { grade: "C", count: 18, color: "#F59E0B" },
  { grade: "D", count: 7, color: "#EF4444" },
  { grade: "F", count: 3, color: "#7C3AED" }
];

const attendanceData = [
  { month: "Aug", attendance: 92 },
  { month: "Sep", attendance: 88 },
  { month: "Oct", attendance: 94 },
  { month: "Nov", attendance: 85 },
  { month: "Dec", attendance: 78 }
];

const classPerformance = [
  { subject: "Programming", average: 85 },
  { subject: "Databases", average: 72 },
  { subject: "Algorithms", average: 68 },
  { subject: "Web Dev", average: 90 },
  { subject: "Networks", average: 77 }
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#7C3AED"];

const Analytics = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-1">Analytics</h2>
        <p className="text-muted-foreground">
          View insights about your classes and students
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={3}
                  dataKey="count"
                  label={({ grade, count }) => `${grade}: ${count}`}
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name, props) => [value, "Students"]} 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Class Attendance (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#888' }} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888' }} 
                  domain={[0, 100]}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, "Attendance"]} 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                />
                <Bar 
                  dataKey="attendance" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Class Performance by Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={true} vertical={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 100]} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888' }}
                />
                <YAxis 
                  dataKey="subject" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888' }} 
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, "Average Score"]} 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                />
                <Bar 
                  dataKey="average" 
                  radius={[0, 4, 4, 0]}
                  maxBarSize={50}
                >
                  {classPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
