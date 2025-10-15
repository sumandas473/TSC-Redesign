import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { MainLayout } from "../components/layout/main-layout";
import { WavyBackground } from "../components/ui/wavy-background";


export default function Home() {
 
  
  return (
    <>
    
    <MainLayout>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          TRANSCENDENCE
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          "Great dreams of dreamers are always
          Transcended" - A.P.J Abdul Kalam
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/service"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Our Services
          </a>
          <a 
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </WavyBackground>

      <HeroParallaxDemo />



    
    </MainLayout>


    


  






    </>
  );
}
