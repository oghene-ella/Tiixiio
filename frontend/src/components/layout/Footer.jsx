const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <nav className="flex flex-wrap justify-center md:justify-end mb-4">
          <a href="/" className="mr-4 hover:text-gray-400">Home</a>
          <a href="#about" className="mr-4 hover:text-gray-400">About</a>
          <a href="#regions" className="hover:text-gray-400">Regions</a>
        </nav>
        <div className="flex items-center mb-1 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl">&copy; Tiixiio. All rights reserved.</span>
        </div>
      </div>
      <section className="w-full h-3 border border-t-2 border-green-600 bg-green-600"></section>
    </footer>
  )
}

export default Footer;