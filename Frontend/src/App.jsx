import { useState, useEffect } from "react"
import Chatbot from "./components/Chatbot"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import IntroLoader from "./components/IntroLoader"

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "light"
  )

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const cycleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }

  if (loading) {
    return <IntroLoader onFinish={() => setLoading(false)} />
  }

  return (
    <>
      <Navbar theme={theme} onThemeChange={cycleTheme} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
