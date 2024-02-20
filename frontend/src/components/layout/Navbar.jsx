import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="flex justify-center drop-shadow-md py-2 bg-white">
        <div className='w-10/12 flex justify-between items-center font-roboto_font'>
            <section className="flex gap-8">
                <Link to='/' className='font-light text-sm'>
                    Home
                </Link>

                <Link to='/' className='font-light text-sm'>
                    About
                </Link>

                <Link to='/' className='font-light text-sm'>
                    Contact Us
                </Link>
            </section>

            <div className="flex-none px-2 mx-2">
                <Link to='/' className='text-lg font-bold'>
                    <img src={Logo} alt="logo" className="w-20 h-20"/>
                </Link>
            </div>

            <section className="flex gap-6 items-center">
                <Link to='/login' className="px-5 py-2 rounded-md text-gray-800 font-light text-sm">
                    Login
                </Link>

                <Link to='/signup' className="bg-orange-600 px-6 py-2 text-center text-sm rounded-2xl text-white font-medium">
                    Sign Up
                </Link>
            </section>

        </div>
    </nav>

  )
}

export default Navbar