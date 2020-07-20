import React from "react"
import { Link } from "react-router-dom"

import content from '../../static/content'

import './NoPage.css'

const NoPage = () => {
  	return 	<section className="main no_page">
                <span className="no_page__text">{content.no_page__text}</span>
                <Link className="no_page__back link_back" to='/'>{content.link_back}</Link>
		    </section>
}

export default NoPage
