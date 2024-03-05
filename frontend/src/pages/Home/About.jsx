import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from "react-router-dom";
import AboutHeader from "../../components/assets/about1.svg";
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-900 flex flex-col gap-20 py-20" id="about">
        <main className="w-10/12 text-white mx-auto flex flex-col lg:flex-row gap-16 items-center" data-aos="fade-right">
          <img src={AboutHeader} className=""/>
          <section className="flex flex-col gap-5">
              <h1 className="text-4xl text-white font-roboto_font font-semibold text-center lg:text-start">About Tiixiio</h1>
              <p className="text-gray-300 font-normal text-center lg:text-start">Tiixiio is more than just a ticketing platform; it’s your passport to a world of unforgettable moments. From pulsating concerts to captivating theater performances, and thrilling sports events to enlightening cultural gatherings, we curate a diverse array of experiences that cater to every taste and passion.</p>
              <Link to='/signup' className="w-full rounded-md lg:w-fit bg-cyan-600 px-6 py-2 text-center text-sm lg:rounded-3xl text-white font-medium">
                  Get Started
              </Link>
          </section>
        </main>

        <hr className="h-2 bg-gray-700 border border-gray-700"/>

        <section className="text-white w-10/12 mx-auto flex flex-col gap-16" data-aos="fade-right">
          <h1 className="text-4xl font-roboto_font">Why Choose Us</h1>
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <section className="flex flex-col gap-5">
              <ConfirmationNumberOutlinedIcon fontSize="large"/>
              <span className="flex flex-col gap-5">
                <h1 className="text-3xl font-my_font">Ticketing Experience</h1>
                <p className="font-roboto_font text-base text-justify text-gray-300">Tiixiio offers a seamless ticketing experience for both event organizers and attendees. With our intuitive platform, you can effortlessly create and manage events, while attendees can easily discover, purchase, and access tickets with just a few clicks.</p>
              </span>
            </section>

            <section className="flex flex-col gap-5">
              <SupportAgentOutlinedIcon fontSize="large"/>
              <span className="flex flex-col gap-5">
                <h1 className="text-3xl font-my_font">Customer Support</h1>
                <p className="font-roboto_font text-base text-justify text-gray-300">At Tiixiio, we are committed to providing exceptional customer support every step of the way. Our dedicated team is here to assist you with any questions or issues you may encounter, ensuring a hassle-free experience for both organizers and attendees.</p>
              </span>
            </section>

            <section className="flex flex-col gap-5">
              <ShieldOutlinedIcon fontSize="large" />
              <span className="flex flex-col gap-5">
                <h1 className="text-3xl font-my_font">Secure and Reliable</h1>
                <p className="font-roboto_font text-base text-justify text-gray-300">We prioritize the security and reliability of our platform. Rest assured that your data and transactions are protected with advanced security measures and encryption protocols. Our reliable infrastructure ensures that your event runs smoothly without any downtime or interruptions</p>
              </span>
            </section>
          </main>
        </section>
    </section>
  )
}
export default About