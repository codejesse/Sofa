import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sofa | Home page</title>
        <meta name="description" content="Shop furniture and sofas" />
        <meta
          name="keywords"
          content="sofa, furniture, home, decoration interior"
        />
      </Head>
      <div className="mx-auto text-center lg:m-20">
        <h1 className="font-semibold text-5xl">Our Product List</h1>
        <p className="text-[16px] text-[#9C9C9C]">
          We provide selling or buying quality and marketable furniture and have
          our own aesthetic in our furniture.
        </p>
        <p className="text-[16px] text-[#9C9C9C]">
          check out our latest furniture listings below
        </p>
      </div>
      {/***********  Product Grid ***********/}
      <div className="border m-5 lg:m-10 md:m-10">
        <ProductCard />
      </div>
    </div>
  );
}
