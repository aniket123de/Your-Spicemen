import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Proud from "./components/ProudProducts";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <Cart />
      <div className="px-6 space-y-16 max-w-screen-xl m-auto">
        <Hero />
        <Proud />
        <Banner
          title="Authentic Spice Heritage"
          content="Handpicked masalas and premium spices sourced directly from Indian farms. Each blend carries centuries of culinary tradition."
          img="/images/banner/img-1.jpg"
        />
        <Trending />
        <Banner
          imgFirst
          title="Premium Tea Collection"
          content="From the gardens of Darjeeling to the hills of Assam, discover teas that awaken your senses with every sip."
          img="/images/banner/img-2.jpg"
        />
      </div>
      <Footer />
    </main>
  );
}
