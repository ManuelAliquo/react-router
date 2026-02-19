import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return <h1>Dettagli di {id}</h1>;
}
