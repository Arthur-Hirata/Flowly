import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Metrics from './Sections/Metrics'
import Resources from './Sections/Resources'
import HowWork from './Sections/HowWork'
function App() {

  return (
    <main className='bg-background pt min-h-screen text-text font-poppins w-full border border-border '>
      <Navbar />
      <Hero />
      <Metrics />
      <Resources />
      <HowWork/>
    </main>
  )
}

export default App
