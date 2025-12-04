import { useAuth } from "../contexts/FakeAuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // Agar login nahi kiya hai, toh login page par bhej do
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Agar login kiya hai, toh andar jaane do
  return children;
}

export default ProtectedRoute;
