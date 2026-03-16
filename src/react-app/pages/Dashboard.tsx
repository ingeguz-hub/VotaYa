import {
  Users,
  UserCheck,
  Target,
  TrendingUp,
  Vote,
  CalendarDays,
} from "lucide-react";
import { StatCard } from "@/react-app/components/dashboard/StatCard";
import { ProgressCard } from "@/react-app/components/dashboard/ProgressCard";
import { RecentActivity } from "@/react-app/components/dashboard/RecentActivity";
import { MunicipalityTable } from "@/react-app/components/dashboard/MunicipalityTable";

// Datos de ejemplo para visualización
const mockStats = {
  totalPersonas: 12458,
  simpatizantes: 8234,
  indecisos: 3124,
  opositores: 1100,
  lideresActivos: 156,
  testigosInscritos: 89,
  metaVotos: 15000,
  votosProyectados: 11250,
};

const mockMunicipalities = [
  {
    id: "1",
    name: "Medellín",
    department: "Antioquia",
    voters: 4520,
    sympathizers: 3100,
    leaders: 45,
    targetVotes: 5000,
    currentVotes: 4100,
  },
  {
    id: "2",
    name: "Envigado",
    department: "Antioquia",
    voters: 2180,
    sympathizers: 1450,
    leaders: 28,
    targetVotes: 2500,
    currentVotes: 1800,
  },
  {
    id: "3",
    name: "Bello",
    department: "Antioquia",
    voters: 3250,
    sympathizers: 2100,
    leaders: 35,
    targetVotes: 4000,
    currentVotes: 2600,
  },
  {
    id: "4",
    name: "Itagüí",
    department: "Antioquia",
    voters: 1890,
    sympathizers: 1200,
    leaders: 22,
    targetVotes: 2200,
    currentVotes: 1450,
  },
  {
    id: "5",
    name: "Sabaneta",
    department: "Antioquia",
    voters: 618,
    sympathizers: 384,
    leaders: 12,
    targetVotes: 800,
    currentVotes: 520,
  },
];

const mockActivities = [
  {
    id: "1",
    type: "reunion" as const,
    title: "Reunión con líderes Comuna 13",
    description: "35 asistentes, 12 nuevos compromisos",
    time: "Hace 2h",
    location: "Medellín",
  },
  {
    id: "2",
    type: "registro" as const,
    title: "Nuevos registros masivos",
    description: "184 personas agregadas vía formulario",
    time: "Hace 3h",
  },
  {
    id: "3",
    type: "mensaje" as const,
    title: "Envío masivo WhatsApp",
    description: "Recordatorio evento sábado - 2,450 enviados",
    time: "Hace 5h",
  },
  {
    id: "4",
    type: "visita" as const,
    title: "Puerta a puerta Barrio Laureles",
    description: "45 casas visitadas, 28 simpatizantes",
    time: "Ayer",
    location: "Medellín",
  },
];

const mockLeaderProgress = [
  { label: "María López", current: 180, target: 200 },
  { label: "Carlos Gómez", current: 145, target: 200 },
  { label: "Andrea Restrepo", current: 120, target: 150 },
  { label: "Juan Pérez", current: 85, target: 150 },
];

export function Dashboard() {
  const daysToElection = 45; // Ejemplo

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Dashboard de Campaña
          </h1>
          <p className="text-muted-foreground mt-1">
            Vista general del estado de tu campaña electoral
          </p>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl">
          <CalendarDays className="w-5 h-5" />
          <span className="font-semibold">{daysToElection} días</span>
          <span className="text-primary/70">para la elección</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Personas"
          value={mockStats.totalPersonas}
          icon={Users}
          trend={{ value: 12, label: "esta semana" }}
          variant="default"
        />
        <StatCard
          title="Simpatizantes"
          value={mockStats.simpatizantes}
          subtitle={`${Math.round((mockStats.simpatizantes / mockStats.totalPersonas) * 100)}% del total`}
          icon={UserCheck}
          variant="success"
        />
        <StatCard
          title="Líderes Activos"
          value={mockStats.lideresActivos}
          subtitle={`${mockStats.testigosInscritos} testigos inscritos`}
          icon={Target}
          variant="primary"
        />
        <StatCard
          title="Proyección Votos"
          value={mockStats.votosProyectados}
          subtitle={`Meta: ${mockStats.metaVotos.toLocaleString("es-CO")}`}
          icon={Vote}
          trend={{ value: 8, label: "vs semana pasada" }}
          variant="accent"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">
            {mockStats.simpatizantes.toLocaleString("es-CO")}
          </p>
          <p className="text-sm text-success font-medium">Simpatizantes</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">
            {mockStats.indecisos.toLocaleString("es-CO")}
          </p>
          <p className="text-sm text-warning font-medium">Indecisos</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">
            {mockStats.opositores.toLocaleString("es-CO")}
          </p>
          <p className="text-sm text-destructive font-medium">Opositores</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="lg:col-span-1">
          <ProgressCard
            title="Top Líderes - Avance Metas"
            items={mockLeaderProgress}
          />
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity activities={mockActivities} />
        </div>
      </div>

      {/* Municipality Table */}
      <MunicipalityTable municipalities={mockMunicipalities} />

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
            <Users className="w-4 h-4" />
            <span>Nueva Persona</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-card border border-border px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium">
            <UserCheck className="w-4 h-4" />
            <span>Nuevo Líder</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-card border border-border px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Registrar Actividad</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg hover:bg-accent/80 transition-colors font-medium">
            <Vote className="w-4 h-4" />
            <span>Módulo Día D</span>
          </button>
        </div>
      </div>
    </div>
  );
}
