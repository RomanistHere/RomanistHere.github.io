import React from "react"
import { Link } from "react-router-dom"

import content from '../../static/content'

import './LinkBack.css'

const LinkBack = ({ className }) => {
    return  <>
                <Link className={`${className} link_back`} to='/'>{content.link_back}</Link>
                <div className="link_back__shadow"></div>
            </>
}

export default LinkBack
