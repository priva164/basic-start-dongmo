import Navbar  from './components/Navbar'
import Hero    from './sections/Hero'
import About   from './sections/About'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer  from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
