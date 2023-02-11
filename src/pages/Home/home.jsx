import React from 'react'
import styles from './home.module.css'
import Navbar from '../../components/navbar/nav.jsx'
import Introduction from '../../components/Intro/intro.jsx'
import About from '../../components/about/about.jsx'
import Services from '../../components/services/services.jsx'


const Home = () => {
  return (
    <div className={styles.home} >
        <Navbar /> 
        <Introduction />
        <About />
        <Services />
    </div>
  )
}

export default Home;