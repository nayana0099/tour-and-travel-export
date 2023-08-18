import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  //multiple components in return use<></>/div
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Love Your Journey"
        text="Choose Where You Wanna Head Out "
        btnClass="show"
        buttonText="Travel Plan"
        url="/"
      />
      <Content />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
