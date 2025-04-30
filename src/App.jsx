import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Testimonials from "./routes/Testimonials";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="scroll-smooth">
        <ToastContainer />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
