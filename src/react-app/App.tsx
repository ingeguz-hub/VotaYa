import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { Personas } from "./pages/Personas";
import { Lideres } from "./pages/Lideres";
import { Territorios } from "./pages/Territorios";
import { Actividades } from "./pages/Actividades";
import { DiaD } from "./pages/DiaD";

// Placeholder pages for remaining modules
function Mensajes() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mensajes y WhatsApp</h1>
      <p className="text-muted-foreground">Módulo de comunicaciones - próximamente</p>
    </div>
  );
}

function Configuracion() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Configuración</h1>
      <p className="text-muted-foreground">Panel de configuración - próximamente</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/lideres" element={<Lideres />} />
          <Route path="/territorios" element={<Territorios />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/dia-d" element={<DiaD />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
