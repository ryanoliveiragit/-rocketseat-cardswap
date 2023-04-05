import { Routes, Route } from 'react-router-dom'
import { Form } from "../pages/home/components/form";
import { History } from "../pages/history";

export function Router() {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/history" element={<History />} />
  </Routes>
  );
}