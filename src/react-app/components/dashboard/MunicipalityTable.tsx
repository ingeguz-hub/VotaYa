import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/react-app/components/ui/table";
import { Progress } from "@/react-app/components/ui/progress";
import { Badge } from "@/react-app/components/ui/badge";

interface Municipality {
  id: string;
  name: string;
  department: string;
  voters: number;
  sympathizers: number;
  leaders: number;
  targetVotes: number;
  currentVotes: number;
}

interface MunicipalityTableProps {
  municipalities: Municipality[];
}

export function MunicipalityTable({ municipalities }: MunicipalityTableProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-5 border-b border-border">
        <h3 className="font-semibold text-foreground">Avance por Municipio</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Municipio</TableHead>
              <TableHead className="text-right">Registrados</TableHead>
              <TableHead className="text-right">Simpatizantes</TableHead>
              <TableHead className="text-right">Líderes</TableHead>
              <TableHead>Avance Meta</TableHead>
              <TableHead className="text-right">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {municipalities.map((muni) => {
              const percentage = Math.round(
                (muni.currentVotes / muni.targetVotes) * 100
              );
              return (
                <TableRow key={muni.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{muni.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {muni.department}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {muni.voters.toLocaleString("es-CO")}
                  </TableCell>
                  <TableCell className="text-right">
                    {muni.sympathizers.toLocaleString("es-CO")}
                  </TableCell>
                  <TableCell className="text-right">{muni.leaders}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={percentage} className="w-20 h-2" />
                      <span className="text-xs text-muted-foreground w-10">
                        {percentage}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        percentage >= 80
                          ? "default"
                          : percentage >= 50
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        percentage >= 80
                          ? "bg-success text-success-foreground"
                          : percentage >= 50
                            ? "bg-warning text-warning-foreground"
                            : ""
                      }
                    >
                      {percentage >= 80
                        ? "Cumpliendo"
                        : percentage >= 50
                          ? "En progreso"
                          : "Bajo"}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
