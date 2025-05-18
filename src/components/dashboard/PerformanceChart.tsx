
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";

// Sample data for the chart
const data = [
  { month: 'Jan', actual: 65, predicted: 60 },
  { month: 'Feb', actual: 72, predicted: 68 },
  { month: 'Mar', actual: 68, predicted: 72 },
  { month: 'Apr', actual: 78, predicted: 77 },
  { month: 'May', actual: 82, predicted: 80 },
  { month: 'Jun', actual: 80, predicted: 84 },
  { month: 'Jul', actual: 0, predicted: 88 },
  { month: 'Aug', actual: 0, predicted: 92 },
];

const PerformanceChart = () => {
  return (
    <div className="chart-container">
      <h3 className="text-xl font-semibold mb-6">Class Performance Trend</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888' }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888' }} 
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              borderColor: '#374151',
              borderRadius: '0.375rem',
            }} 
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 4, fill: '#3B82F6', strokeWidth: 0 }}
            activeDot={{ r: 6, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
            name="Actual"
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ r: 4, fill: '#10B981', strokeWidth: 0 }}
            activeDot={{ r: 6, fill: '#10B981', stroke: '#fff', strokeWidth: 2 }}
            name="Predicted"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
