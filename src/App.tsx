import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Metrics from './Sections/Metrics'
import Resources from './Sections/Resources'
import HowWork from './Sections/HowWork'
import Spotlight from './Sections/Spotlight'
import Depoiments from './Sections/Depoiments'
import Price from './Sections/Price'
function App() {

  return (
    <main className='bg-background pt min-h-screen text-text font-poppins w-full border border-border '>
      <Navbar />
      <Hero />
      <Metrics />
      <Resources />
      <HowWork/>
      <Spotlight />
      <Depoiments />
      <Price />
    </main>
  )
}

export default App
