import React from 'react'
import SEO from "../components/seo"
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Navbar from '../components/infiniteMenu'
import '../styles/pages/works.scss'

function Works() {

    const data = useStaticQuery(
        graphql`
          query {
              allProjectsJson {
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
            <SEO title="Works" />
            <div className="works container">
                <Link to='/menu' className="projects">Projects</Link>
                <Link to='/menu' className="playlistA">Playlist of Artcovers</Link>
                <Link to='/menu' className="menu">Menu</Link>

                {
                    <Navbar data={data.allProjectsJson.nodes} />
                }
            </div>
        </>
    );
}


export default Works
