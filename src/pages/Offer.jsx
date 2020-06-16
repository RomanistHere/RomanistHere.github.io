import React from "react"
import { Link } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser'

import content from '../static/content'
import CV from '../images/Roman Smunyov CV.pdf'

import FormIcon from '../images/FormIcon'
import CVIcon from '../images/CVIcon'
import ProjectsIcon from '../images/ProjectsIcon'
import BackIcon from '../images/BackIcon'

const items = content.offer__list.map(({
	offer__low_title,
	offer__text
}, index) => {
    return  <li key={index} className="offer__item">
    			<h4 className="offer__low_title">{offer__low_title}?</h4>
				<p className="offer__text">{ReactHtmlParser(offer__text)}</p>
			</li>
})

const navCopm = {
	CV: CVIcon,
	Form: FormIcon,
	Projects: ProjectsIcon,
	Back: BackIcon
}

const navItems = content.offer__nav.map(({
	text,
	link,
	comp
}, index) => {
	const DynamicComp = navCopm[comp]
	const NewLink = () => link
		? <Link className="link offer__link" to={link}>{text}</Link>
		: <a href={CV} target="_blank" rel="noopener noreferrer" className="link offer__link">{text}</a>

    return  <li key={index} className="offer__nav_item">
    			<DynamicComp className="offer__icon icon" />
  				<NewLink />
    		</li>
})

const Offer = () => {
  	return 	<section className="offer">
  				<h1 className="offer__title">{content.offer__title}</h1>
				<ul className="offer__list">
					{items}					
				</ul>

	  			<nav className="offer__nav">
					<ul className="offer__nav_list">
						{navItems}
					</ul>
	  			</nav>
  			</section>
}

export default Offer