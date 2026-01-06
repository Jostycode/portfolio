import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './composants/menu'
import bg from './assets/accueil.png'
import Accueil from './composants/accueil'
import Apropos from './composants/apropos'
import Competences from './composants/competences'
import Contact from './composants/contact'
import Projet from './composants/projet'

function App() {


  return (
    <>
      <Menu />
      <div style={{ minHeight: '2000px' }}>
        <section id="home" style={{ background: `url(${bg}) center/cover`, minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
          <Accueil />
        </section>
        <section id="about" style={{ minHeight: 'auto', backgroundColor: '#e4e4e4' }}>
          <Apropos />
        </section>
        <section id="projects" style={{ minHeight: 'auto', backgroundColor: '#d4d4d4' }}>
          <Projet />
        </section>
        <section id="skills" style={{ minHeight: 'auto', backgroundColor: '#c4c4c4' }}>
          <Competences />
        </section>
        <section id="contact" style={{ minHeight: 'auto', backgroundColor: '#b4b4b4' }}>
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
