import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from "react-router-dom";
import AboutHeader from "../../components/assets/about.svg";
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-zinc-900 flex flex-col gap-20 py-20" id="about">
        <main className="w-10/12 text-white mx-auto flex flex-col lg:flex-row gap-16 items-center" data-aos="fade-right">
          <img src={AboutHeader} className=""/>
          <section className="flex flex-col gap-5">
              <h1 className="text-4xl text-white font-roboto_font font-semibold text-center lg:text-start">About Tiixiio</h1>
              <p className="text-zinc-300 font-normal text-center lg:text-start">Tiixiio is a powerful developer tool designed to provide detailed geographical information about Nigeria. Our mission is to empower developers with accurate data to build robust applications tailored to Nigeria's diverse regions and localities.</p>
              <Link to='/signup' className="w-full rounded-md lg:w-fit bg-green-600 px-6 py-2 text-center text-sm lg:rounded-3xl text-white font-medium">
                  Get Started
              </Link>
          </section>
        </main>

        <hr className="h-2 bg-zinc-700 border border-zinc-700"/>

        <section className="text-white w-10/12 mx-auto flex flex-col gap-16" data-aos="fade-right">
          <h1 className="text-4xl font-roboto_font">Why Choose Us</h1>
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <section className="flex flex-col gap-5">
              <ConfirmationNumberOutlinedIcon fontSize="large"/>
              <span className="flex flex-col gap-5">
                <h1 className="text-3xl font-my_font">Extensive Geographical Data</h1>
                <p className="font-roboto_font text-base text-justify text-zinc-300">Tiixiio offers extensive coverage of Nigeria's regions, states, and local government areas (LGAs), providing developers with a rich source of information to tailor their applications accurately.</p>
              </span>
            </section>

            <section className="flex flex-col gap-5">
              <SupportAgentOutlinedIcon fontSize="large"/>
              <span className="flex flex-col gap-5">
                <h1 className="text-3xl font-my_font">Developer-Friendly Experience</h1>
                <p className="font-roboto_font text-base text-justify text-zinc-300"> Simplify your workflow with Tiixiio's intuitive APIs, designed to streamline your development process and unleash the full potential of Nigeria's geographical data effortlessly.</p>
              </span>
            </section>

            <section className="flex flex-col gap-5">
              <ShieldOutlinedIcon fontSize="large" />
              <span className="flex flex-col gap-5">
                <h1 className="text-3xl font-my_font">Secure Authentication</h1>
                <p className="font-roboto_font text-base text-justify text-zinc-300">With robust API key authentication, Tiixiio ensures the security of your data, granting peace of mind as you integrate our services into your projects.</p>
              </span>
            </section>
          </main>
        </section>
    </section>
  )
}
export default About