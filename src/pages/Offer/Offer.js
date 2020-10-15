import { useState, useEffect } from "preact/hooks"
import { Link } from 'preact-router/match'

import content from '../../static/content'
import manage from '../../static/manage'
import CV from '../../assets/Roman Smunyov CV.pdf'
import {
	querySelectorAll,
	toggleClass,
	useTimeout
} from '../../static/functions'

import FormIcon from '../../media/images/FormIcon'
import CVIcon from '../../media/images/CVIcon'
import ProjectsIcon from '../../media/images/ProjectsIcon'
import BackIcon from '../../media/images/BackIcon'

import Typing from '../../components/Typing/Typing'
import Switcher from '../../components/Switcher/Switcher'
import Article from '../../components/Article/Article'
import Draw from '../../components/Draw/Draw'

import './Offer.css'

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
		? 	<Link className="offer__link link" href={`${link}/`}>
				<DynamicComp className="offer__icon icon" />
				<span className="offer__link_text">{text}</span>
			</Link>
		: 	<a href={CV} target="_blank" rel="noopener noreferrer" className="offer__link link">
				<DynamicComp className="offer__icon icon" />
				<span className="offer__link_text">{text}</span>
			</a>

    return  <li key={index} className="offer__nav_item">
  				<NewLink />
    		</li>
})

const Offer = () => {
	const [keyWords, setKeyWords] = useState(null)
	const [shouldShow, setShowTyping] = useState(typeof window !== 'undefined' ?
		(JSON.parse(localStorage.getItem('showOfferTyping')) === false ? false : true) : false)
	const {
		offer_switcher__hide_time,
		offer_switcher__show_time,
	} = manage

	const toggleClassAll = items =>
		items.map(item => toggleClass(item, 'offer__word-hide'))

	const toggleHighlighting = () => {
		if (!keyWords && (typeof window !== 'undefined')) {
			const links = Array.from(querySelectorAll('offer__word'))
			toggleClassAll(links)
			setKeyWords(links)
			setShowTyping(false)
			localStorage.setItem('showOfferTyping', JSON.stringify(false))
		} else
			toggleClassAll(keyWords)
	}

	useEffect(() => {
		if (typeof window !== 'undefined')
        	document.title = content.titles.offer
    }, [])

	useTimeout(() => (shouldShow && setShowTyping(false)), offer_switcher__hide_time)

    return  <section className="offer main">
				<Draw />

				<Article
		            className="offer__article"
		            title={content.offer__title}
		            content={content.offer__content}
					shouldInherit='offer'
		        />

  				<nav className="offer__nav">
					<ul className="offer__nav_list">
						{navItems}
					</ul>

		  			<Switcher
		  				toggleHighlighting={toggleHighlighting}
		  				className='offer__switcher'
		  			/>
	  			</nav>

				<Typing
					text={content.offer__typing}
					className='offer__typing'
					startDelay={offer_switcher__show_time}
					shouldShow={shouldShow}
				/>
  			</section>
}

export default Offer
