import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Booking from "./components/Booking";

const App = () => {
  return (
    <main className= "bg-green-600 text-gray-100">
      <Navbar />
      <Bio />
      <Testimonials />
      <Portfolio />
      <Booking />
    </main>
  );
};

export default App;