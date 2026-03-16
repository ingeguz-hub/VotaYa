import { Search, Plus, Target, Users, TrendingUp } from "lucide-react";
import { Input } from "@/react-app/components/ui/input";
import { Button } from "@/react-app/components/ui/button";
import { Badge } from "@/react-app/components/ui/badge";
import { Progress } from "@/react-app/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/react-app/components/ui/select";

// Datos de ejemplo
const mockLideres = [
  {
    id: "1",
    nombre: "Carlos Andrés Gómez",
    cedula: "71.345.678",
    celular: "300 111 2222",
    municipio: "Medellín",
    zona: "Comuna 11 - Laureles",
    tipoLider: "Barrio",
    metaVotos: 200,
    votantesAsociados: 180,
    simpatizantesConfirmados: 145,
    estado: "cumpliendo",
  },
  {
    id: "2",
    nombre: "Andrea María Pérez",
    cedula: "43.567.123",
    celular: "311 333 4444",
    municipio: "Envigado",
    zona: "Zona Centro",
    tipoLider: "Comunal",
    metaVotos: 150,
    votantesAsociados: 120,
    simpatizantesConfirmados: 98,
    estado: "en progreso",
  },
  {
    id: "3",
    nombre: "María del Carmen López",
    cedula: "32.890.456",
    celular: "320 555 6666",
    municipio: "Bello",
    zona: "Niquia - París",
    tipoLider: "Rural",
    metaVotos: 100,
    votantesAsociados: 85,
    simpatizantesConfirmados: 72,
    estado: "cumpliendo",
  },
  {
    id: "4",
    nombre: "Juan Pablo Restrepo",
    cedula: "8.234.567",
    celular: "315 777 8888",
    municipio: "Medellín",
    zona: "Comuna 14 - El Poblado",
    tipoLider: "Juvenil",
    metaVotos: 150,
    votantesAsociados: 65,
    simpatizantesConfirmados: 45,
    estado: "bajo",
  },
  {
    id: "5",
    nombre: "Luz Marina Cardona",
    cedula: "43.123.789",
    celular: "304 999 0000",
    municipio: "Itagüí",
    zona: "Santa María",
    tipoLider: "Barrio",
    metaVotos: 120,
    votantesAsociados: 95,
    simpatizantesConfirmados: 88,
    estado: "cumpliendo",
  },
];

const tipoLiderColors = {
  Barrio: "bg-primary/10 text-primary border-primary/30",
  Comunal: "bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900/30 dark:text-purple-400",
  Rural: "bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-400",
  Juvenil: "bg-orange-100 text-orange-700 border-orange-300 dark:bg-orange-900/30 dark:text-orange-400",
};

const estadoColors = {
  cumpliendo: "bg-success text-success-foreground",
  "en progreso": "bg-warning text-warning-foreground",
  bajo: "bg-destructive text-destructive-foreground",
};

export function Lideres() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Estructura de Líderes
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestiona la red de líderes y sus metas de votos
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Líder
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Líderes Activos</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-success/10">
              <Target className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">15,000</p>
              <p className="text-sm text-muted-foreground">Meta Total Votos</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent">
              <TrendingUp className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">11,250</p>
              <p className="text-sm text-muted-foreground">Votos Proyectados</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-muted">
              <Users className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">75%</p>
              <p className="text-sm text-muted-foreground">Avance General</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar líder..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Municipio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="medellin">Medellín</SelectItem>
                <SelectItem value="envigado">Envigado</SelectItem>
                <SelectItem value="bello">Bello</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Tipo Líder" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="barrio">Barrio</SelectItem>
                <SelectItem value="comunal">Comunal</SelectItem>
                <SelectItem value="rural">Rural</SelectItem>
                <SelectItem value="juvenil">Juvenil</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="cumpliendo">Cumpliendo</SelectItem>
                <SelectItem value="en progreso">En progreso</SelectItem>
                <SelectItem value="bajo">Bajo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Leaders Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockLideres.map((lider) => {
          const porcentaje = Math.round(
            (lider.simpatizantesConfirmados / lider.metaVotos) * 100
          );
          return (
            <div
              key={lider.id}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {lider.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {lider.nombre}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {lider.municipio}
                    </p>
                  </div>
                </div>
                <Badge
                  className={
                    estadoColors[lider.estado as keyof typeof estadoColors]
                  }
                >
                  {lider.estado === "cumpliendo"
                    ? "✓ Cumpliendo"
                    : lider.estado === "en progreso"
                      ? "En progreso"
                      : "⚠ Bajo"}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Zona:</span>
                  <span className="font-medium">{lider.zona}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tipo:</span>
                  <Badge
                    variant="outline"
                    className={
                      tipoLiderColors[
                        lider.tipoLider as keyof typeof tipoLiderColors
                      ]
                    }
                  >
                    {lider.tipoLider}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Celular:</span>
                  <span className="font-mono">{lider.celular}</span>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      Meta de votos:
                    </span>
                    <span className="font-semibold">
                      {lider.simpatizantesConfirmados} / {lider.metaVotos}
                    </span>
                  </div>
                  <Progress value={porcentaje} className="h-2" />
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-muted-foreground">
                      {lider.votantesAsociados} votantes asociados
                    </span>
                    <span className="font-medium text-primary">
                      {porcentaje}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver detalle
                </Button>
                <Button size="sm" className="flex-1">
                  Ver votantes
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
