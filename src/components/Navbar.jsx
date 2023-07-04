import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100">
      <Logo />
      <ul className="flex justify-around">
        <li><a href="#about">Biography </a></li>
        <li><a href="#testimonials">Testimonials </a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#project">Project</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;