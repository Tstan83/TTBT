import Logo from "./Logo"

const Navbar = () => {
  return (
    <header className="md:sticky top-0 section" >
    <nav className="bg-black text-gray-100">
      <Logo />
      <ul className="flex justify-around">
        <li><a href="/">Biography </a></li>
        <li><a href="#testimonials">Testimonials </a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#booking">Booking</a></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;