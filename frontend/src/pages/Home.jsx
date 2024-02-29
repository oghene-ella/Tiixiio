import Header from "./Home/Header";
import About from "./Home/About";
import Events from "./Home/Events";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-bg_color">
      <Header />
      <section className="w-full h-3 border border-t-2 border-cyan-600 bg-cyan-600"></section>
      <About/>
      <section className="w-full h-3 border border-t-2 border-orange-600 bg-orange-600"></section>
      <Events />
    </section>
  )
}

export default Home