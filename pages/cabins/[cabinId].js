import { useRouter } from "next/router";

function Cabin() {
  const router = useRouter();

  return <div>cabin #{router.query.cabinId}</div>;
}

export default Cabin;
