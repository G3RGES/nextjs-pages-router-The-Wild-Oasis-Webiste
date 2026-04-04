import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
// import { useRouter } from "next/router";

//* DYNAMICALLY GENERATED (SSR)
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);

  return { props: { cabin } };
}

//* SSG getStaticProps + getStaticPaths

function Cabin({ cabin }) {
  // const router = useRouter();
  //* console.log(cabin);

  return (
    <>
      <Head>
        {/* <title>The Wild Oasis - Cabin {router.query.cabinId}</title> */}
        <title>The Wild Oasis - Cabin {cabin.name}</title>
      </Head>

      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
