import Image from "next/image";
import Hero from "./components/Hero";
import ShopByCategory from "./components/ShopByCategory";
import Newsletter from "./components/Newsletter";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ShopByCategory />
      <Feature />
      <Newsletter />
    </main>
  );
}
