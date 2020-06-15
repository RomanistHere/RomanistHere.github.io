import React from "react"
import { Link } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser'

import content from '../static/content'
import iconCV from '../images/iconCV.svg'
import iconForm from '../images/iconForm.svg'
import CV from '../images/Roman Smunyov CV.pdf'

const items = content.offer__list.map(({
	offer__low_title,
	offer__text
}, index) => {
    return  <li key={index} className="offer__item">
    			<h4 className="offer__low_title">{offer__low_title}?</h4>
				<p className="offer__text">{ReactHtmlParser(offer__text)}</p>
			</li>
})

const Offer = () => {
  	return 	<section className="offer">
  				<h1 className="offer__title">{content.offer__title}</h1>
				<ul className="offer__list">
					{items}					
				</ul>
				<img alt="CV icon" src={iconCV} />
				<img alt="CV icon" src={iconForm} />
  				<Link className="card__link" to="/form">Try form</Link>
  				<a href={CV} target="_blank" rel="noopener noreferrer" className="link">Open CV</a>
  			</section>
}

export default Offer