import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sofa | Home page</title>
        <meta name="description" content="Shop furniture and sofas" />
        <meta name="keywords" content="sofa, furniture, home, decoration interior" />
      </Head>
      <div className="m-auto text-center lg:m-20">
        <h1 className="font-semibold text-5xl">Our Product List</h1>
      </div>
    </div>
  );
}
