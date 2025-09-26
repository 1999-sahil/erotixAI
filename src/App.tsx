import './App.css'
import Navbar from './components/navbar'
import ShowcaseSection from './components/hero/showcaseSection'

function App() {

  return (
    <>
      <div className='bg-black w-full min-h-screen overflow-hidden'>
        <Navbar />
        <section className='px-[10px] md:px-[120px]'>
          <ShowcaseSection />
        </section>
      </div>
    </>
  )
}

export default App
