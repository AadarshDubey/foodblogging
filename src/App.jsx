import React from 'react'
import Header from './components/Header'
import About from './components/About'
import LatestArticles from './components/LatestArticles'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <About />
      <LatestArticles />
      <Footer />
    </main>
  )
}

export default App
