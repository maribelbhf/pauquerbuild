import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

import Body from '../images/body.svg'
import Logo from '../images/logo.svg'
import Symb from '../images/logob.svg'

import '../styles/pages/home.scss'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="home-1 container">
      <img src={Body} className="body" />
      <img src={Logo} className="logo" />
      <img src={Symb} className="symb" />
      <Link to='/menu' className="menu">Menu</Link>
      <Link to='/' className="works">Works</Link>
    </section>

  </>
)

export default IndexPage
