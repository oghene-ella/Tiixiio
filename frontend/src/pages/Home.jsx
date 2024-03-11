import Header from "./Home/Header";
import About from "./Home/About";
import Events from "./Home/Events";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-bg_color">
      <Header />
      <section className="w-full h-3 border border-t-2 border-red-500 bg-dark_blue"></section>
      <About/>
      <section className="w-full h-3 border border-t-2 border-dark_orange-bg bg-dark_orange-bg"></section>
      <Events />
    </section>
  )
}

export default Home