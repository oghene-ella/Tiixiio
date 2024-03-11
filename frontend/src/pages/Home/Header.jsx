import SideHeader from "../../components/assets/side_header.svg";

const Header = () => {
    return (
      <section className="w-full bg-light_orange-bg h-fit">
        <main className="w-10/12 h-fit mx-auto flex lg:flex lg:flex-row gap-10 justify-between items-center flex-col-reverse py-10">
          <section className="w-full flex flex-col gap-4 items-center lg:items-start lg:w-1/2 ">
              <p className="bg-cyan-200 text-gray-900 font-bold px-5 py-2 w-fit rounded-full">Discover</p>
              <h1 className="text-center lg:text-start font-roboto_font font-medium text-6xl leading-snug text-gray-800 text-wrap">
                  Unlock
                  <b className="text-dark_orange-bg font-medium capitalize"> Nigeria's </b>
                  <br/>
                  Geographical Potential
                  <b className="text-dark_orange-bg font-medium capitalize"> with Tiixiio!</b>
              </h1>
              <p className="text-center lg:text-start text-lg text-light_gray font-roboto_font text-wrap">With our comprehensive API, you can access detailed information about Nigeria's regions, states, and local government areas (LGAs). Whether you're building applications for Nigeria's vast population or conducting research, Locale has you covered.</p>
              <a href="#" className="bg-dark_blue py-3 w-fit px-8 text-white_bg rounded-full hover:opacity-55 " >Get Started</a>
            </section>
            <img src={SideHeader} className="hidden sm:block w-1/3" />
        </main>
      </section>
    )
  }
export default Header;
  