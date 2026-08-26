import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Metrics from './Sections/Metrics'
import Resources from './Sections/Resources'
import HowWork from './Sections/HowWork'
import Spotlight from './Sections/Spotlight'
import Depoiments from './Sections/Depoiments'
import Price from './Sections/Price'
import FAQ from './Sections/FAQ'
import CTA from './Sections/CTA'
import Footer from './Components/Footer'
function App() {

  return (
    <main className='bg-background pt min-h-screen text-text font-poppins w-full border border-border flex flex-col justify-center items-center '>
      <Navbar />
      <Hero />
      <Metrics />
      <Resources />
      <HowWork/>
      <Spotlight />
      <Depoiments />
      <Price />
      <FAQ />
      <CTA />
      <Footer />  
    </main>
  )
}

export default App
