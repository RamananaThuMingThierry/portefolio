import React from 'react';
import Accueil from './Accueil';
import About from './About';
import Footer from './Footer';
import Projets from './Projets';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import '../../../css/app.css';
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Accueil />
      <About />
      <Services/>
      <Skills/>
      <Projets/>
      <Contact/>
      <Footer/>
    </div>
  );
}