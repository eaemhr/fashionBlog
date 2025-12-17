import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Reviews from "./components/Reviews";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Featured />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}
