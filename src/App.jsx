import Navbar from "./components/Navbar"
import Bio from "./components/bio";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
// import Projects from "./components/Project";
import Booking from "./components/Booking";

const App = () => {
  return (
    <div >
      <Navbar />
      <Bio />
      <Testimonials />
      <Portfolio />
      {/* <Projects /> */}
      <Booking />
    </div>
  );
};

export default App;