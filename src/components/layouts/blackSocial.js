import React from 'react'
import Symb from '../../images/logow.svg'
import Insta from '../../images/inst.svg'
import Behance from '../../images/behance.svg'
import Linkedin from '../../images/linkedin.svg'




const Layout = ({ container, linkAction, children }) => (

    <div className={container + " container"}>
        <img className="symb" src={Symb}></img>
        <div className="linkAction">{linkAction}</div>
        <div className="socialIcons">
            <ul>
                <li><a href="#" target="_blank"><img src={Behance} className="behance" /></a></li>
                <li><a href="#" target="_blank"><img src={Insta} /></a></li>
                <li><a href="#" target="_blank"><img src={Linkedin} /></a></li>
            </ul>
        </div>
        <div className="centralContent">{children}</div>
    </div>

)

export default Layout