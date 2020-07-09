import React, { Fragment, useState, useEffect } from "react"
import ReactHtmlParser from 'react-html-parser'

import Slider from '../../components/Slider/Slider'

import content from '../../static/content'

import './Apps.css'

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

	// useEffect(() => {
	// 	setInterval(function() {changeProjNumb(projNumb === 1 ? 2 : 1)}, 2000)
	// }, [])

  	return  <section className={`${apps_page[projNumb].name} apps`}>
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
	  			<footer className="apps__footer">

	  			</footer>
			</section>
}

export default Apps