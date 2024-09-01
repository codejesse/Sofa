import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroImage from "./hero.png";
import { Button } from "@/components/ui/button";

const ProductList = dynamic(() => import("../components/ProductList"), {
  //👨🏿‍💻 Add a custom loader
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="pt-24 overflow-hidden">
      <Head>
        <title>Sofa | Home page</title>
        <meta name="description" content="Shop furniture and sofas" />
        <meta
          name="keywords"
          content="sofa, furniture, home, decoration interior"
        />
      </Head>
      <div className="absolute inset-0 -z-10 h-[600px] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="flex flex-col lg:flex-row gap-4 mx-auto text-center lg:m-20">
        <div className="flex flex-col mx-8 lg:mx-auto">
          <h1 className="font-semibold text-5xl lg:text-left">
            Our Product List
          </h1>
          <p className="text-[16px] text-[#9C9C9C] lg:text-left">
            We provide selling or buying quality and marketable furniture and
            have our own aesthetic in our furniture.
          </p>
          <p className="text-[16px] text-[#9C9C9C] lg:text-left">
            check out our latest furniture listings below
          </p>
          <Button className="mt-4 lg:w-8/12">Get started</Button>
        </div>
        <Image
          className="w-full h-fit lg:mt-[-50px] mr-[-300px] lg:ml-20"
          src={HeroImage}
          width={800}
          height={600}
          alt="hero-image"
        />
      </div>
      {/***********  Product Grid ***********/}
      <div className="m-5 lg:m-10 md:m-10">
        <ProductList />
      </div>
    </div>
  );
}
