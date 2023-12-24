import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from '../Pages/Login'
import Register from '../Pages/Register'


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="*" element={<Navigate to="/entrar" />} />
      </Routes>
    </BrowserRouter>
  )
}