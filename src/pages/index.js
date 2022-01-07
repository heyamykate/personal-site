import * as React from "react"
import About from "../components/About"
import Brands from "../components/Brands"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Layout from '../components/Layout'
import Specialities from "../components/Specialties"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Header />
      <About />
      <Specialities />
      <Brands />
      <Contact />
    </Layout>
  )
}

export default IndexPage
