import Careers from "./sections/Careers"
import Choose from "./sections/Choose"
import FAQ from "./sections/FAQ"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <main>
      <Header/>
      <Hero/> 
      <Services />
      <Choose />
      <Careers />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
