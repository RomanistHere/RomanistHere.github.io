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
		? 	<Link className="offer__link" to={link}>
				<DynamicComp className="offer__icon icon" />
				<span className="offer__link_text">{text}</span>
			</Link>
		: 	<a href={CV} target="_blank" rel="noopener noreferrer" className="offer__link">
				<DynamicComp className="offer__icon icon" />
				<span className="offer__link_text">{text}</span>
			</a>

    return  <li key={index} className="offer__nav_item">
  				<NewLink />
    		</li>
})

const Offer = () => {
  	return 	<section className="offer">
  				<nav className="offer__nav">
					<ul className="offer__nav_list">
						{navItems}
					</ul>
	  			</nav>

	  			<div className="offer__wrap">
	  				<h1 className="offer__title">{content.offer__title}</h1>
					<ul className="offer__list">
						{items}					
					</ul>
	  			</div>
  			</section>
}

export default Offer