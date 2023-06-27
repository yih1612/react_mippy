import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  // user가 아니면 // (user가 Admin이 아니고 requiredAdmin이라는 프로티를 전달 받으면)
  if (user === undefined) {
    return <>Loading.. 🚀</>;
  } else if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  } else return children;
}
