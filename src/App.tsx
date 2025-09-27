import './App.css'
import Navbar from './components/navbar'
import ShowcaseSection from './components/hero/showcaseSection'
import KeyFeatures from './components/keyFeatures'
import LoveProgression from './components/loveProgression'
import Testimonials from './components/testimonial/testimonials'
import Footer from './components/footer'
import FAQ from './components/faq/faq'


function App() {

  return (
    <>
      <main className='bg-[#050505] text-white font-redhat w-full min-h-screen overflow-hidden'>
        <Navbar />
        <section className='px-[20px] md:px-[120px]'>
          <ShowcaseSection />
          <KeyFeatures />
          <LoveProgression />
          <Testimonials />
          <FAQ />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
