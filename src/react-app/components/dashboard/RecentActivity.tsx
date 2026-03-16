import { Calendar, Users, MessageSquare, MapPin } from "lucide-react";
import { cn } from "@/react-app/lib/utils";

interface Activity {
  id: string;
  type: "visita" | "reunion" | "mensaje" | "registro";
  title: string;
  description: string;
  time: string;
  location?: string;
}

const typeConfig = {
  visita: {
    icon: MapPin,
    color: "bg-primary/10 text-primary",
  },
  reunion: {
    icon: Calendar,
    color: "bg-success/10 text-success",
  },
  mensaje: {
    icon: MessageSquare,
    color: "bg-accent text-accent-foreground",
  },
  registro: {
    icon: Users,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
};

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="font-semibold text-foreground mb-4">Actividad Reciente</h3>
      <div className="space-y-3">
        {activities.map((activity) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className={cn("p-2 rounded-lg flex-shrink-0", config.color)}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {activity.description}
                </p>
                {activity.location && (
                  <p className="text-xs text-muted-foreground mt-1">
                    📍 {activity.location}
                  </p>
                )}
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
