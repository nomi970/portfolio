import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Skill from './skill'
import Projects from './projects'
import Blogs from './blogs'
import ContactUs from './contactUs'
import '../style.css'


function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      {/* <Blogs /> */}
      <ContactUs />
    </>
  )
}

export default index
