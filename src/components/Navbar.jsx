import Logo from "./Logo"

const Navbar = () => {
  return (
    <header className="md:sticky top-0 " >
    <nav className="bg-black text-gray-100 h-12 align-bottom">
      
      <ul className="flex justify-around ">
        <Logo />      
        <li><a href="/">Biography </a></li>
        <li><a href="#portfolio">Tattoo Portfolio</a></li>
        <li><a href="#booking">Booking</a></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;