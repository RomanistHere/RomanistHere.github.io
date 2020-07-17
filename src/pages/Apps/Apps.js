import React, { Fragment, useState, useEffect } from "react"
import ReactHtmlParser from 'react-html-parser'
import { Link } from "react-router-dom"

import Slider from '../../components/Slider/Slider'
import Typing from '../../components/Typing/Typing'

import content from '../../static/content'
import manage from '../../static/manage'

import chromeLogo from '../../media/images/chromeLogo.svg'
import firefoxLogo from '../../media/images/firefoxLogo.svg'
import edgeLogo from '../../media/images/edgeLogo.svg'
import gitLogo from '../../media/images/gitLogo.svg'

import './Apps.css'

const logos = {
	0: gitLogo,
	1: chromeLogo,
	2: firefoxLogo,
	3: edgeLogo,
}

const browsers = manage.browsers
const links = content.apps_page__links

const getLogos = (projNumb) => {
	const lgNumb = browsers[projNumb]
	const linksObj = links[projNumb]
	const logoLinks = lgNumb.map(item => logos[item])
	return { logoLinks, linksObj }
}

const { apps_page } = content

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
	const [projNumb, changeProjNumb] = useState(1)

	const changeProj = (e) => {
		const newProjNumb = e.realIndex + 1
		changeProjNumb(newProjNumb)
	}

	const { logoLinks, linksObj } = getLogos(projNumb)

	useEffect(() => {
		document.title = content.titles.apps
		window.scrollTo(0, 0)
	}, [])

  	return	<section className={`${apps_page[projNumb].name} apps`}>
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
					startDelay={2000}
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
	  			<Link className="apps__back link_back" to='/'>{content.link_back}</Link>
			</section>
}

export default Apps
