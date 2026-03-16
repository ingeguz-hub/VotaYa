import { Search, Filter, Plus, Download, Upload } from "lucide-react";
import { Input } from "@/react-app/components/ui/input";
import { Button } from "@/react-app/components/ui/button";
import { Badge } from "@/react-app/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/react-app/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/react-app/components/ui/select";

// Datos de ejemplo
const mockPersonas = [
  {
    id: "1",
    nombre: "María García López",
    cedula: "43.567.890",
    celular: "300 123 4567",
    whatsapp: true,
    municipio: "Medellín",
    barrio: "Laureles",
    estado: "simpatizante",
    lider: "Carlos Gómez",
  },
  {
    id: "2",
    nombre: "Juan Carlos Restrepo",
    cedula: "71.234.567",
    celular: "311 987 6543",
    whatsapp: true,
    municipio: "Envigado",
    barrio: "Zona Centro",
    estado: "indeciso",
    lider: "Andrea Pérez",
  },
  {
    id: "3",
    nombre: "Ana María Vélez",
    cedula: "32.456.789",
    celular: "320 456 7890",
    whatsapp: false,
    municipio: "Bello",
    barrio: "Niquia",
    estado: "simpatizante",
    lider: "María López",
  },
  {
    id: "4",
    nombre: "Pedro Rodríguez",
    cedula: "8.901.234",
    celular: "315 678 9012",
    whatsapp: true,
    municipio: "Medellín",
    barrio: "El Poblado",
    estado: "opositor",
    lider: "Sin asignar",
  },
  {
    id: "5",
    nombre: "Luisa Fernanda Martínez",
    cedula: "43.789.012",
    celular: "304 321 0987",
    whatsapp: true,
    municipio: "Itagüí",
    barrio: "Santa María",
    estado: "simpatizante",
    lider: "Carlos Gómez",
  },
];

const estadoStyles = {
  simpatizante: "bg-success/10 text-success border-success/30",
  indeciso: "bg-warning/10 text-warning-foreground border-warning/30",
  opositor: "bg-destructive/10 text-destructive border-destructive/30",
  "no ubicable": "bg-muted text-muted-foreground border-muted",
};

const estadoLabels = {
  simpatizante: "Simpatizante",
  indeciso: "Indeciso",
  opositor: "Opositor",
  "no ubicable": "No ubicable",
};

export function Personas() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Base de Datos de Personas
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestiona votantes, voluntarios y contactos de la campaña
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Importar CSV
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Persona
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, cédula o celular..."
              className="pl-10"
            />
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
                <SelectItem value="itagui">Itagüí</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="simpatizante">Simpatizante</SelectItem>
                <SelectItem value="indeciso">Indeciso</SelectItem>
                <SelectItem value="opositor">Opositor</SelectItem>
                <SelectItem value="no ubicable">No ubicable</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Líder" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="carlos">Carlos Gómez</SelectItem>
                <SelectItem value="andrea">Andrea Pérez</SelectItem>
                <SelectItem value="maria">María López</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="bg-card border border-border rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-foreground">12,458</p>
          <p className="text-xs text-muted-foreground">Total</p>
        </div>
        <div className="bg-success/10 border border-success/20 rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-success">8,234</p>
          <p className="text-xs text-success/80">Simpatizantes</p>
        </div>
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-warning-foreground">3,124</p>
          <p className="text-xs text-warning-foreground/80">Indecisos</p>
        </div>
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-destructive">1,100</p>
          <p className="text-xs text-destructive/80">Opositores</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-primary">9,845</p>
          <p className="text-xs text-primary/80">Con WhatsApp</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Cédula</TableHead>
                <TableHead>Celular</TableHead>
                <TableHead>Municipio</TableHead>
                <TableHead>Barrio</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Líder</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPersonas.map((persona) => (
                <TableRow key={persona.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                        {persona.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <span className="font-medium">{persona.nombre}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {persona.cedula}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>{persona.celular}</span>
                      {persona.whatsapp && (
                        <span className="text-success text-xs">✓ WA</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{persona.municipio}</TableCell>
                  <TableCell>{persona.barrio}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        estadoStyles[
                          persona.estado as keyof typeof estadoStyles
                        ]
                      }
                    >
                      {
                        estadoLabels[
                          persona.estado as keyof typeof estadoLabels
                        ]
                      }
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {persona.lider}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Mostrando 1-5 de 12,458 personas
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="outline" size="sm">
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
