import Navbar from "./components/NavBar";
import Features from "./components/features";
import Listings from "./components/Listings";
import Idea from "./components/Idea";
import Email from "./components/Email";
import Footer from "./components/footer";
import Hero2 from "./components/Hero2";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero2/>
      <Features/>
      <Listings />
      <Idea/>
      <Email/> 
      <Footer />
    </div>
  );
}
