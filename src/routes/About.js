import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/bridge1.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
