import Header from "./Home/Header";
import About from "./Home/About";
import Contact from "./Home/Contact";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-16 bg-bg_color">
      <Header />
      <section className="w-full h-1 border border-t-2 border-gray-200 bg-gray-200"></section>
      <About/>
      <Contact />
    </section>
  )
}

export default Home