
const Navbar = () => {
  return (
    <header className="md:sticky top-0 " >
    <nav className="bg-black text-gray-100">
      <ul className="flex justify-around underline text-4xl">

        <li><a href="/">Travis Stanley</a></li>
        <li><a href="#portfolio">Tattoo Portfolio</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#booking">Booking</a></li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;