import { Navigate } from "react-router-dom";
import { isAuthenticated, isAdminUser } from "../../isAuthenticated";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdminUser()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
