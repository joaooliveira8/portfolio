import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Work from './components/Work'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-acc focus:px-4 focus:py-2 focus:text-acc-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
