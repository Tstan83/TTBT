import Navbar from "./components/navbar";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";
import Booking from "./components/booking";
import FAQ from "./components/FAQ"

const App = () => {
  return (
    <main>
      <Navbar />
      <Bio />
      <Portfolio />
      <FAQ />
      <Booking />
    </main>
  );
};

export default App;