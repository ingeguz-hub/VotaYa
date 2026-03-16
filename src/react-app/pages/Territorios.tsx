import { Search, MapPin, Building2, Vote, ChevronRight } from "lucide-react";
import { Input } from "@/react-app/components/ui/input";
import { Button } from "@/react-app/components/ui/button";
import { Badge } from "@/react-app/components/ui/badge";
import { Progress } from "@/react-app/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/react-app/components/ui/accordion";

// Datos de ejemplo
const mockTerritorios = [
  {
    id: "1",
    departamento: "Antioquia",
    municipios: [
      {
        id: "m1",
        nombre: "Medellín",
        codigoDane: "05001",
        poblacionElectoral: 1850000,
        personasRegistradas: 4520,
        lideresActivos: 45,
        puestos: [
          {
            id: "p1",
            nombre: "I.E. INEM José Félix de Restrepo",
            direccion: "Cra 48 # 54-127",
            mesas: 25,
            testigosAsignados: 20,
            votantesPropios: 850,
          },
          {
            id: "p2",
            nombre: "I.E. Javiera Londoño",
            direccion: "Calle 56 # 47-20",
            mesas: 18,
            testigosAsignados: 15,
            votantesPropios: 620,
          },
          {
            id: "p3",
            nombre: "Centro Comercial Unicentro",
            direccion: "Cra 66B # 34A-76",
            mesas: 30,
            testigosAsignados: 28,
            votantesPropios: 1200,
          },
        ],
        metaVotos: 5000,
        proyeccion: 4100,
      },
      {
        id: "m2",
        nombre: "Envigado",
        codigoDane: "05266",
        poblacionElectoral: 180000,
        personasRegistradas: 2180,
        lideresActivos: 28,
        puestos: [
          {
            id: "p4",
            nombre: "Parque Principal Envigado",
            direccion: "Cra 43 # 38 Sur",
            mesas: 15,
            testigosAsignados: 12,
            votantesPropios: 480,
          },
        ],
        metaVotos: 2500,
        proyeccion: 1800,
      },
      {
        id: "m3",
        nombre: "Bello",
        codigoDane: "05088",
        poblacionElectoral: 450000,
        personasRegistradas: 3250,
        lideresActivos: 35,
        puestos: [
          {
            id: "p5",
            nombre: "Coliseo Tulio Ospina",
            direccion: "Cra 50 # 52-17",
            mesas: 22,
            testigosAsignados: 18,
            votantesPropios: 720,
          },
        ],
        metaVotos: 4000,
        proyeccion: 2600,
      },
    ],
  },
];

export function Territorios() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Territorios y Puestos de Votación
          </h1>
          <p className="text-muted-foreground mt-1">
            Estructura geográfica electoral: municipios, puestos y mesas
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <MapPin className="w-4 h-4 mr-2" />
            Ver Mapa
          </Button>
          <Button>
            <Building2 className="w-4 h-4 mr-2" />
            Agregar Puesto
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-foreground">5</p>
          <p className="text-sm text-muted-foreground">Municipios</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-foreground">48</p>
          <p className="text-sm text-muted-foreground">Puestos de Votación</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-foreground">856</p>
          <p className="text-sm text-muted-foreground">Mesas Totales</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-primary">89</p>
          <p className="text-sm text-muted-foreground">Testigos Asignados</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar municipio, puesto o dirección..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Territories Accordion */}
      <div className="space-y-4">
        {mockTerritorios.map((depto) => (
          <div
            key={depto.id}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="bg-primary/5 p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {depto.departamento}
                </h2>
                <Badge variant="outline">
                  {depto.municipios.length} municipios
                </Badge>
              </div>
            </div>

            <Accordion type="multiple" className="w-full">
              {depto.municipios.map((municipio) => {
                const avance = Math.round(
                  (municipio.proyeccion / municipio.metaVotos) * 100
                );
                return (
                  <AccordionItem key={municipio.id} value={municipio.id}>
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="flex items-center gap-3">
                          <Building2 className="w-4 h-4 text-muted-foreground" />
                          <div className="text-left">
                            <p className="font-medium">{municipio.nombre}</p>
                            <p className="text-xs text-muted-foreground">
                              Código DANE: {municipio.codigoDane}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-right">
                            <p className="font-medium">
                              {municipio.personasRegistradas.toLocaleString(
                                "es-CO"
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              registrados
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              {municipio.lideresActivos}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              líderes
                            </p>
                          </div>
                          <div className="w-24">
                            <Progress value={avance} className="h-2" />
                            <p className="text-xs text-center mt-1 text-muted-foreground">
                              {avance}% meta
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-3 pt-2">
                        <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <Vote className="w-4 h-4" />
                          Puestos de Votación ({municipio.puestos.length})
                        </h4>
                        {municipio.puestos.map((puesto) => (
                          <div
                            key={puesto.id}
                            className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-foreground">
                                  {puesto.nombre}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  📍 {puesto.direccion}
                                </p>
                                <div className="flex items-center gap-4 mt-2 text-sm">
                                  <span className="text-muted-foreground">
                                    <strong>{puesto.mesas}</strong> mesas
                                  </span>
                                  <span className="text-muted-foreground">
                                    <strong>{puesto.testigosAsignados}</strong>{" "}
                                    testigos
                                  </span>
                                  <span className="text-primary font-medium">
                                    <strong>{puesto.votantesPropios}</strong>{" "}
                                    votantes propios
                                  </span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" className="w-full">
                          Ver todas las mesas de {municipio.nombre}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
