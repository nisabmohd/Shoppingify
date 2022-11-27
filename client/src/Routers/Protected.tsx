import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Protected({ children }: any) {
  const auth = useAuth();
  return auth.isAuth ? <>{children}</> : <Navigate to="/login" />;
}
