
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  subtitle?: string;
  change?: {
    value: string;
    positive: boolean;
  };
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBg,
  subtitle,
  change
}: StatsCardProps) => {
  return (
    <div className="stat-card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold">{value}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className={cn("stat-icon", iconBg)}>
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>
      </div>
      
      {change && (
        <div className={change.positive ? "positive-change" : "negative-change"}>
          {change.positive ? "+" : ""}{change.value}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
