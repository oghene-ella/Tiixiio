import { Link } from "react-router-dom";
import AboutHeader from "../../components/assets/about.svg";

const About = () => {
  return (
    <section className="w-10/12 flex flex-col lg:flex-row gap-16 items-center" id="about">
        <img src={AboutHeader} />
        <section className="flex flex-col gap-5">
            <h1 className="text-4xl text-gray-800 font-roboto_font font-semibold text-center lg:text-start">About Tiixiio</h1>
            <p className="text-gray-500 font-normal text-center lg:text-start">Tiixiio is more than just a ticketing platform; it’s your passport to a world of unforgettable moments. From pulsating concerts to captivating theater performances, and thrilling sports events to enlightening cultural gatherings, we curate a diverse array of experiences that cater to every taste and passion.</p>
            <Link to='/signup' className="w-full rounded-md lg:w-fit bg-cyan-600 px-6 py-2 text-center text-sm lg:rounded-3xl text-white font-medium">
                Get Started
            </Link>
        </section>
    </section>
  )
}
export default About