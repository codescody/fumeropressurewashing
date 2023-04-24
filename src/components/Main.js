import Header from "./Header"
import Home from "../pages/Home"
import Comparison from "../pages/Comparison"
import Contact from "../pages/Contact"
import Quote from "../pages/Quote"
import Footer from "./Footer"

export default function Main() {
    return (
        <div className="App">
      <Header />
      <Home />
      <Comparison />
      <Contact />
      <Quote />
      <Footer />
    </div>
    )
}