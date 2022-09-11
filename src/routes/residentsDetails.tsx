import { Navigate, useParams } from "react-router";

export default function ResidentRedirect() {
  const { id } = useParams();
  return <Navigate to={`/characters/${id}`} replace />;
}
