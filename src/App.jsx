
import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Header from './header/Header.jsx'
import Nav from './components/Nav.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'



function App() {

  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/> 
        <Contact/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>   
    </>
  )
}

export default App



