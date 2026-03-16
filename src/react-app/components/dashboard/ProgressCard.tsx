import { Progress } from "@/react-app/components/ui/progress";
import { cn } from "@/react-app/lib/utils";

interface ProgressItem {
  label: string;
  current: number;
  target: number;
  color?: string;
}

interface ProgressCardProps {
  title: string;
  items: ProgressItem[];
}

export function ProgressCard({ title, items }: ProgressCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => {
          const percentage = Math.min(
            Math.round((item.current / item.target) * 100),
            100
          );
          return (
            <div key={index}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-foreground font-medium">{item.label}</span>
                <span className="text-muted-foreground">
                  {item.current.toLocaleString("es-CO")} /{" "}
                  {item.target.toLocaleString("es-CO")}
                </span>
              </div>
              <div className="relative">
                <Progress
                  value={percentage}
                  className={cn("h-2.5", item.color)}
                />
                <span className="absolute right-0 -top-5 text-xs font-medium text-muted-foreground">
                  {percentage}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
