import SideHeader from "../../components/assets/side_header.svg";

const Header = () => {
    return (
      <section className="w-10/12 h-fit flex lg:flex lg:flex-row gap-10 justify-between items-center flex-col-reverse py-10">
          <section className="flex flex-col gap-4">
            <h1 className="text-center lg:text-start font-roboto_font font-medium text-6xl leading-snug text-gray-800 text-wrap">
                Where your <b className="text-orange-600 font-medium capitalize underline decoration-wavy  decoration-cyan-700"> events </b>
                <br/>
                dreams come to 
                <b className="text-orange-600 font-medium capitalize underline decoration-wavy decoration-cyan-700"> live!</b>
            </h1>
            <p className="text-center lg:text-start text-base text-zinc-500 font-roboto_font text-wrap">Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest.</p>
          </section>
          <img src={SideHeader} />
      </section>
    )
  }
export default Header;
  