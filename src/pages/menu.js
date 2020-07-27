import React, { useRef } from 'react'
import Layout from '../components/layouts/blackSocial'
import '../styles/pages/menu.scss'
import { useStaticQuery, graphql } from "gatsby"
import Navbar from '../components/infiniteMenu'
import SEO from "../components/seo"

function Menu() {
  const container = useRef();


  const data = useStaticQuery(
    graphql`
        query {
            allMenuLinksJson {
              nodes {
                key
                name
              }
            }
          }
          
        `
  )



  return (
    <>
      <SEO title="Menu" />
      <Layout container="menu" linkAction="Close" ref={container}>

        {
          <Navbar data={data.allMenuLinksJson.nodes} />
        }
      </Layout>
    </>
  );
}


export default Menu

