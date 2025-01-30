import { About } from "@/components/About";
import { FloatingContact } from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";


export default function Home() {
  return (
    <div className="relative">
      <Header/>
      <FloatingContact />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
   
  );
}
