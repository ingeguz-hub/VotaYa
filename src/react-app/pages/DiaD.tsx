import {
  Vote,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Users,
  MapPin,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/react-app/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/react-app/components/ui/tabs";

// Datos de ejemplo para el Día D
const mockResumen = {
  mesasTotal: 856,
  mesasInstaladas: 720,
  mesasConTestigo: 680,
  novedadesReportadas: 15,
  votantesMovilizados: 4250,
  metaVotos: 15000,
};

const mockMesasRecientes = [
  {
    id: "1",
    numero: "025",
    puesto: "I.E. INEM José Félix de Restrepo",
    municipio: "Medellín",
    instalada: true,
    horaInstalacion: "07:15",
    testigo: "María García",
    testigoContacto: "300 123 4567",
    votosReportados: 145,
    votosNuestros: 52,
    estado: "activa",
  },
  {
    id: "2",
    numero: "018",
    puesto: "I.E. Javiera Londoño",
    municipio: "Medellín",
    instalada: true,
    horaInstalacion: "07:05",
    testigo: "Carlos Restrepo",
    testigoContacto: "311 987 6543",
    votosReportados: null,
    votosNuestros: null,
    estado: "activa",
  },
  {
    id: "3",
    numero: "012",
    puesto: "Parque Principal Envigado",
    municipio: "Envigado",
    instalada: false,
    horaInstalacion: null,
    testigo: "Andrea López",
    testigoContacto: "320 456 7890",
    votosReportados: null,
    votosNuestros: null,
    estado: "pendiente",
  },
  {
    id: "4",
    numero: "007",
    puesto: "Coliseo Tulio Ospina",
    municipio: "Bello",
    instalada: true,
    horaInstalacion: "07:30",
    testigo: "Sin asignar",
    testigoContacto: null,
    votosReportados: null,
    votosNuestros: null,
    estado: "sin_testigo",
  },
];

const mockNovedades = [
  {
    id: "1",
    tipo: "ausencia_jurado",
    mesa: "015",
    puesto: "I.E. INEM",
    hora: "08:45",
    descripcion: "Faltó jurado suplente, esperando reemplazo",
    reportadoPor: "María García",
    estado: "resuelto",
  },
  {
    id: "2",
    tipo: "cambio_mesa",
    mesa: "022",
    puesto: "Unicentro",
    hora: "07:20",
    descripcion: "Mesa reubicada al segundo piso por espacio",
    reportadoPor: "Juan Pérez",
    estado: "informativo",
  },
  {
    id: "3",
    tipo: "seguridad",
    mesa: "008",
    puesto: "Coliseo Tulio Ospina",
    hora: "09:15",
    descripcion: "Aglomeración en la entrada, se solicitó apoyo policial",
    reportadoPor: "Andrea López",
    estado: "pendiente",
  },
];

const estadoMesaStyles = {
  activa: "bg-success text-success-foreground",
  pendiente: "bg-warning text-warning-foreground",
  sin_testigo: "bg-destructive text-destructive-foreground",
  cerrada: "bg-muted text-muted-foreground",
};

export function DiaD() {
  const porcentajeInstalacion = Math.round(
    (mockResumen.mesasInstaladas / mockResumen.mesasTotal) * 100
  );
  const porcentajeTestigos = Math.round(
    (mockResumen.mesasConTestigo / mockResumen.mesasTotal) * 100
  );

  return (
    <div className="space-y-6">
      {/* Header con estado en vivo */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-primary-foreground">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Vote className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                Módulo Día D - Jornada Electoral
              </h1>
              <p className="text-primary-foreground/80 mt-1">
                Seguimiento en tiempo real de la jornada electoral
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="font-medium">EN VIVO</span>
            </div>
            <Button
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-primary-foreground"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>
      </div>

      {/* Stats principales */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Mesas Instaladas</p>
              <p className="text-2xl font-bold text-foreground">
                {mockResumen.mesasInstaladas} / {mockResumen.mesasTotal}
              </p>
            </div>
            <div
              className={`p-2 rounded-lg ${porcentajeInstalacion >= 80 ? "bg-success/10" : "bg-warning/10"}`}
            >
              <CheckCircle2
                className={`w-5 h-5 ${porcentajeInstalacion >= 80 ? "text-success" : "text-warning"}`}
              />
            </div>
          </div>
          <Progress value={porcentajeInstalacion} className="mt-3 h-2" />
          <p className="text-xs text-muted-foreground mt-1">
            {porcentajeInstalacion}% instaladas
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Con Testigo</p>
              <p className="text-2xl font-bold text-foreground">
                {mockResumen.mesasConTestigo}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="w-5 h-5 text-primary" />
            </div>
          </div>
          <Progress value={porcentajeTestigos} className="mt-3 h-2" />
          <p className="text-xs text-muted-foreground mt-1">
            {porcentajeTestigos}% cobertura
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Novedades</p>
              <p className="text-2xl font-bold text-foreground">
                {mockResumen.novedadesReportadas}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-warning/10">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            3 pendientes de resolver
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Votantes Movilizados
              </p>
              <p className="text-2xl font-bold text-foreground">
                {mockResumen.votantesMovilizados.toLocaleString("es-CO")}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-accent">
              <TrendingUp className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Meta: {mockResumen.metaVotos.toLocaleString("es-CO")}
          </p>
        </div>
      </div>

      {/* Tabs de contenido */}
      <Tabs defaultValue="mesas">
        <TabsList className="w-full lg:w-auto">
          <TabsTrigger value="mesas" className="flex-1 lg:flex-none">
            Estado de Mesas
          </TabsTrigger>
          <TabsTrigger value="novedades" className="flex-1 lg:flex-none">
            Novedades ({mockNovedades.length})
          </TabsTrigger>
          <TabsTrigger value="resultados" className="flex-1 lg:flex-none">
            Resultados
          </TabsTrigger>
          <TabsTrigger value="testigos" className="flex-1 lg:flex-none">
            Testigos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mesas" className="mt-4">
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 mb-4">
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
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="activa">Activa</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="sin_testigo">Sin testigo</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Ver mapa
            </Button>
          </div>

          {/* Tabla de mesas */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mesa</TableHead>
                  <TableHead>Puesto / Municipio</TableHead>
                  <TableHead>Instalación</TableHead>
                  <TableHead>Testigo</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMesasRecientes.map((mesa) => (
                  <TableRow key={mesa.id}>
                    <TableCell className="font-mono font-bold">
                      #{mesa.numero}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{mesa.puesto}</p>
                        <p className="text-xs text-muted-foreground">
                          {mesa.municipio}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {mesa.instalada ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                          <span className="text-sm">{mesa.horaInstalacion}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-warning" />
                          <span className="text-sm text-muted-foreground">
                            Pendiente
                          </span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {mesa.testigo !== "Sin asignar" ? (
                        <div>
                          <p className="text-sm font-medium">{mesa.testigo}</p>
                          <p className="text-xs text-muted-foreground">
                            {mesa.testigoContacto}
                          </p>
                        </div>
                      ) : (
                        <span className="text-sm text-destructive">
                          Sin asignar
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          estadoMesaStyles[
                            mesa.estado as keyof typeof estadoMesaStyles
                          ]
                        }
                      >
                        {mesa.estado === "activa"
                          ? "Activa"
                          : mesa.estado === "pendiente"
                            ? "Pendiente"
                            : mesa.estado === "sin_testigo"
                              ? "Sin testigo"
                              : "Cerrada"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Registrar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="novedades" className="mt-4">
          <div className="space-y-3">
            {mockNovedades.map((novedad) => (
              <div
                key={novedad.id}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${novedad.estado === "pendiente" ? "bg-destructive/10" : novedad.estado === "resuelto" ? "bg-success/10" : "bg-muted"}`}
                    >
                      <AlertTriangle
                        className={`w-4 h-4 ${novedad.estado === "pendiente" ? "text-destructive" : novedad.estado === "resuelto" ? "text-success" : "text-muted-foreground"}`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">
                          Mesa #{novedad.mesa} - {novedad.puesto}
                        </p>
                        <Badge
                          variant="outline"
                          className={
                            novedad.estado === "pendiente"
                              ? "border-destructive text-destructive"
                              : novedad.estado === "resuelto"
                                ? "border-success text-success"
                                : ""
                          }
                        >
                          {novedad.estado === "pendiente"
                            ? "Pendiente"
                            : novedad.estado === "resuelto"
                              ? "Resuelto"
                              : "Informativo"}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground mt-1">
                        {novedad.descripcion}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Reportado por {novedad.reportadoPor} a las {novedad.hora}
                      </p>
                    </div>
                  </div>
                  {novedad.estado === "pendiente" && (
                    <Button size="sm">Marcar resuelto</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resultados" className="mt-4">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <Vote className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground">
              Registro de Resultados
            </h3>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              El registro de resultados estará disponible una vez cierren las
              mesas de votación. Podrás ingresar los votos por candidato
              directamente desde el E-14.
            </p>
            <Button className="mt-4" disabled>
              Registrar Resultados
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="testigos" className="mt-4">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground">
              Listado de Testigos
            </h3>
            <p className="text-muted-foreground mt-2">
              Consulta y gestiona la asignación de testigos por mesa
            </p>
            <Button className="mt-4">Ver listado completo</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
