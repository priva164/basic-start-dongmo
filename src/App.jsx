import Navbar  from './components/Navbar'
import Hero    from './sections/Hero'
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
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
