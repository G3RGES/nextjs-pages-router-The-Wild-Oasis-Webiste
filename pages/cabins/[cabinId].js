import Head from "next/head";
import { useRouter } from "next/router";

function Cabin() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>The Wild Oasis - Cabin {router.query.cabinId}</title>
      </Head>

      <div>cabin #{router.query.cabinId}</div>
    </>
  );
}

export default Cabin;
