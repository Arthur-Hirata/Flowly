import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import Metrics from './Sections/Metrics'
function App() {

  return (
    <main className='bg-background pt min-h-screen text-text font-poppins w-full border border-border '>
      <Navbar />
      <Hero />
      <Metrics />
    </main>
  )
}

export default App
