import SideHeader from "../../components/assets/side_header.svg";

const Header = () => {
    return (
      <section className="w-full bg-orange-50 h-fit">
        <main className="w-10/12 h-fit mx-auto flex lg:flex lg:flex-row gap-10 justify-between items-center flex-col-reverse py-10">
          <section className="w-full flex flex-col gap-4 items-center lg:items-start lg:w-1/2 ">
              <p className="bg-cyan-200 text-gray-900 font-bold px-5 py-2 w-fit rounded-full">Events Community</p>
              <h1 className="text-center lg:text-start font-roboto_font font-medium text-6xl leading-snug text-gray-800 text-wrap">
                  Where your 
                  <b className="text-orange-600 font-medium capitalize"> events </b>
                  <br/>
                  dreams come to 
                  <b className="text-orange-600 font-medium capitalize"> live!</b>
              </h1>
              <p className="text-center lg:text-start text-lg text-zinc-500 font-roboto_font text-wrap">Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest.</p>
              <a href="#" className="bg-cyan-700 py-3 w-fit px-8 text-white rounded-full hover:bg-cyan-900 " >Get Started</a>
            </section>
            <img src={SideHeader} className="hidden sm:block w-1/3" />
        </main>
      </section>
    )
  }
export default Header;
  