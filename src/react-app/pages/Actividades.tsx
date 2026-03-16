import { useState } from "react";
import {
  Search,
  Plus,
  Calendar,
  MapPin,
  Users,
  Phone,
  Home,
  GraduationCap,
} from "lucide-react";
import { Input } from "@/react-app/components/ui/input";
import { Button } from "@/react-app/components/ui/button";
import { Badge } from "@/react-app/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/react-app/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/react-app/components/ui/tabs";

// Datos de ejemplo
const mockActividades = [
  {
    id: "1",
    tipo: "reunion",
    titulo: "Reunión con líderes Comuna 13",
    fecha: "2024-03-15",
    hora: "14:00",
    responsable: "Carlos Gómez",
    municipio: "Medellín",
    zona: "Comuna 13 - San Javier",
    objetivo: 50,
    asistentes: 35,
    nuevosSimpatizantes: 12,
    resultado: "exitosa",
    notas: "Se lograron 12 nuevos compromisos de voto",
  },
  {
    id: "2",
    tipo: "puerta_a_puerta",
    titulo: "Puerta a puerta Barrio Laureles",
    fecha: "2024-03-14",
    hora: "09:00",
    responsable: "Andrea Pérez",
    municipio: "Medellín",
    zona: "Laureles - Estadio",
    objetivo: 60,
    asistentes: 45,
    nuevosSimpatizantes: 28,
    resultado: "exitosa",
    notas: "Buena recepción en el sector",
  },
  {
    id: "3",
    tipo: "capacitacion",
    titulo: "Capacitación de testigos electorales",
    fecha: "2024-03-16",
    hora: "10:00",
    responsable: "María López",
    municipio: "Envigado",
    zona: "Centro",
    objetivo: 30,
    asistentes: 25,
    nuevosSimpatizantes: 0,
    resultado: "exitosa",
    notas: "25 testigos capacitados para el día D",
  },
  {
    id: "4",
    tipo: "llamadas",
    titulo: "Jornada de llamadas Bello",
    fecha: "2024-03-13",
    hora: "16:00",
    responsable: "Juan Restrepo",
    municipio: "Bello",
    zona: "Niquia",
    objetivo: 100,
    asistentes: 78,
    nuevosSimpatizantes: 15,
    resultado: "parcial",
    notas: "Muchos números no contestaron",
  },
  {
    id: "5",
    tipo: "microevento",
    titulo: "Café con el candidato - Envigado",
    fecha: "2024-03-17",
    hora: "17:00",
    responsable: "Carlos Gómez",
    municipio: "Envigado",
    zona: "Zona Rosa",
    objetivo: 40,
    asistentes: 0,
    nuevosSimpatizantes: 0,
    resultado: "programada",
    notas: "Evento próximo",
  },
];

const tipoConfig = {
  reunion: { icon: Users, label: "Reunión", color: "bg-primary/10 text-primary" },
  puerta_a_puerta: { icon: Home, label: "Puerta a puerta", color: "bg-success/10 text-success" },
  capacitacion: { icon: GraduationCap, label: "Capacitación", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  llamadas: { icon: Phone, label: "Llamadas", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  microevento: { icon: Calendar, label: "Microevento", color: "bg-accent text-accent-foreground" },
};

const resultadoStyles = {
  exitosa: "bg-success text-success-foreground",
  parcial: "bg-warning text-warning-foreground",
  fallida: "bg-destructive text-destructive-foreground",
  programada: "bg-primary text-primary-foreground",
};

export function Actividades() {
  const [vista, setVista] = useState("lista");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Actividades de Campaña
          </h1>
          <p className="text-muted-foreground mt-1">
            Registra y da seguimiento a reuniones, visitas y eventos
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nueva Actividad
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">156</p>
          <p className="text-sm text-muted-foreground">Total Actividades</p>
        </div>
        <div className="bg-success/10 border border-success/20 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-success">128</p>
          <p className="text-sm text-success/80">Exitosas</p>
        </div>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-warning-foreground">18</p>
          <p className="text-sm text-warning-foreground/80">Parciales</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-primary">10</p>
          <p className="text-sm text-primary/80">Programadas</p>
        </div>
        <div className="bg-accent/30 border border-accent/40 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-accent-foreground">2,450</p>
          <p className="text-sm text-muted-foreground">Contactos realizados</p>
        </div>
      </div>

      {/* Filters & View Toggle */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar actividad..." className="pl-10" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="reunion">Reunión</SelectItem>
                <SelectItem value="puerta_a_puerta">Puerta a puerta</SelectItem>
                <SelectItem value="capacitacion">Capacitación</SelectItem>
                <SelectItem value="llamadas">Llamadas</SelectItem>
                <SelectItem value="microevento">Microevento</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[140px]">
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
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Resultado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="exitosa">Exitosa</SelectItem>
                <SelectItem value="parcial">Parcial</SelectItem>
                <SelectItem value="programada">Programada</SelectItem>
              </SelectContent>
            </Select>
            <Tabs value={vista} onValueChange={setVista}>
              <TabsList>
                <TabsTrigger value="lista">Lista</TabsTrigger>
                <TabsTrigger value="calendario">Calendario</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Activities List */}
      <Tabs value={vista} onValueChange={setVista}>
        <TabsContent value="lista" className="mt-0">
          <div className="space-y-3">
            {mockActividades.map((actividad) => {
              const config =
                tipoConfig[actividad.tipo as keyof typeof tipoConfig];
              const Icon = config.icon;
              const cumplimiento =
                actividad.objetivo > 0
                  ? Math.round((actividad.asistentes / actividad.objetivo) * 100)
                  : 0;

              return (
                <div
                  key={actividad.id}
                  className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl flex-shrink-0 ${config.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {actividad.titulo}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(actividad.fecha).toLocaleDateString(
                                "es-CO",
                                {
                                  weekday: "short",
                                  day: "numeric",
                                  month: "short",
                                }
                              )}{" "}
                              - {actividad.hora}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {actividad.municipio}, {actividad.zona}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5" />
                              {actividad.responsable}
                            </span>
                          </div>
                        </div>
                        <Badge
                          className={
                            resultadoStyles[
                              actividad.resultado as keyof typeof resultadoStyles
                            ]
                          }
                        >
                          {actividad.resultado === "exitosa"
                            ? "✓ Exitosa"
                            : actividad.resultado === "parcial"
                              ? "~ Parcial"
                              : actividad.resultado === "programada"
                                ? "📅 Programada"
                                : "✗ Fallida"}
                        </Badge>
                      </div>

                      {actividad.resultado !== "programada" && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 p-3 bg-muted/50 rounded-lg">
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">
                              {actividad.asistentes}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Asistentes
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">
                              {actividad.objetivo}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Objetivo
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-success">
                              +{actividad.nuevosSimpatizantes}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Nuevos simp.
                            </p>
                          </div>
                          <div className="text-center">
                            <p
                              className={`text-lg font-bold ${cumplimiento >= 80 ? "text-success" : cumplimiento >= 50 ? "text-warning" : "text-destructive"}`}
                            >
                              {cumplimiento}%
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Cumplimiento
                            </p>
                          </div>
                        </div>
                      )}

                      {actividad.notas && (
                        <p className="mt-3 text-sm text-muted-foreground">
                          📝 {actividad.notas}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="calendario" className="mt-0">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground">
              Vista de Calendario
            </h3>
            <p className="text-muted-foreground mt-2">
              Próximamente: visualiza tus actividades en un calendario
              interactivo
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
