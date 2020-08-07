import { Fragment, useState, useEffect } from "preact/compat"
import ReactHtmlParser from 'react-html-parser'

import Slider from '../../components/Slider/Slider'
import Typing from '../../components/Typing/Typing'
import LinkBack from '../../components/LinkBack/LinkBack'

import content from '../../static/content'
import manage from '../../static/manage'

import chromeLogo from '../../media/images/chromeLogo.svg'
import firefoxLogo from '../../media/images/firefoxLogo.svg'
import edgeLogo from '../../media/images/edgeLogo.svg'
import gitLogo from '../../media/images/gitLogo.svg'

import './Apps.css'

const { browsers } = manage
const { apps_page, apps_page__links } = content
const logos = {
	0: gitLogo,
	1: chromeLogo,
	2: firefoxLogo,
	3: edgeLogo,
}

const getLogos = (projNumb) => {
	const lgNumb = browsers[projNumb]
	const linksObj = apps_page__links[projNumb]
	const logoLinks = lgNumb.map(item => logos[item])
	return { logoLinks, linksObj }
}

const appsDesc = (projNumb) => Object.keys(apps_page[projNumb].apps__desc).map((item, index) => {
	return  <Fragment key={index}>
				<h2 className="apps__title">
					{item}:
				</h2>
				<p className="apps__text">
					{ReactHtmlParser(apps_page[projNumb].apps__desc[item])}
				</p>
			</Fragment>
})

const Apps = () => {
	const numbOfSlides = Object.values(content.apps_page).length
	const [projNumb, changeProjNumb] = useState(1)
	const { logoLinks, linksObj } = getLogos(projNumb)

	const changeProj = (e) => {
		const newProjNumb = e.realIndex + 1
		const projNumb = newProjNumb - numbOfSlides > 0 ? newProjNumb - numbOfSlides : newProjNumb

		changeProjNumb(projNumb)
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.title = content.titles.apps
			window.scrollTo(0, 0)
		}
	}, [])

  	return	<section className={`${apps_page[projNumb].name} apps main`}>
	  			<header className="apps__head">
		  			<h1 className="apps__head_title">
		  				{apps_page[projNumb].name}
		  			</h1>
	  			</header>

	  			<Slider
	  				onSlideChange={changeProj}
	  				classNameItem='apps__item'
	  				classNameSlider='apps__slider'/>

	  			<article className="apps__desc">
	  				{appsDesc(projNumb)}
	  			</article>

	  			<Typing
					text={`Let's make it all platinum!`}
					className={`apps__typing`}
					startDelay={manage.apps__typing}
					shouldShow={true}
				/>

	  			<footer className="apps__footer">
	  				{
	  					logoLinks.map((item, index) =>
							<a
								key={index}
								aria-label={linksObj[index]}
								rel="noopener noreferrer"
								target="_blank"
								href={linksObj[index]}
								className="apps__logo_link">
								<img
									src={item}
									alt={`${item} link`}
									className={`apps__logo`} />
							</a>)
	  				}
	  			</footer>
				<LinkBack className="apps__back" />
			</section>
}

export default Apps
