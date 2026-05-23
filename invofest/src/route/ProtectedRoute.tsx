import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // TODO: Fix login logic later
  // Bypass authentication untuk testing
  return <Outlet />;
}
