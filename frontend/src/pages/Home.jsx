import Header from "./Home/Header";
import About from "./Home/About";
import Events from "./Home/Events";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-bg_color">
      <Navbar />
      <Header />
      <section className="w-full h-3 border border-t-2 border-green-900 bg-green-900"></section>
      <About/>
      <section className="w-full h-3 border border-t-2 border-green-900 bg-green-900"></section>
      <Events />
      <Footer />
    </section>
  )
}

export default Home