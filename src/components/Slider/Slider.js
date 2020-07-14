import React from "react"

import SwiperCore, { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Tilty from "react-tilty"

import content from '../../static/content'
import { useViewport } from '../../static/functions'
import logo1 from '../../images/logo-1.png'
import logo2 from '../../images/logo-2.png'
import logo3 from '../../images/logo-3.png'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
// import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow])

const breakPoint = 1359
const touchBreakPoint = 1024

const covSettings = (width) => {
	const stretch = width < breakPoint ? 10 : 0

	return {
		rotate: 30,
		stretch: stretch,
		depth: 50,
		modifier: 1,
		slideShadows: false,
	}
}

const getLogo = (index)  => {
	const logos = {
		0: logo1,
		1: logo2,
		2: logo3
	}
	return logos[index]
}

const tiltSettings = (width) => {
	const max = width <= touchBreakPoint ? 0 : 35

	return {
		glare: true,
		"max-glare": 0.7,
		gyroscope: false,
		scale: 1,
		max: max
	}
}

const Slider = ({
	classNameSlider,
	classNameItem,
	onSlideChange
}) => {
	const { width } = useViewport()

	return  <Swiper
				spaceBetween={30}
				slidesPerView={3}
				navigation
				loop={true}
				pagination={{ clickable: true }}
				onSlideChange={onSlideChange}
				effect='coverflow'
				centeredSlides={true}
				coverflowEffect={covSettings(width)}
				className={classNameSlider} >
			{
				Object.values(content.apps_page).map(({name, tilt_desc}, index) =>
					<SwiperSlide 
						className={`${classNameSlider}_slide`}
						key={index}>
						<Tilty 
							settings={tiltSettings(width)}
							className={`${classNameItem} ${name}_item tilt`} >
							<div className="tilt__circle tilt__item">
								<img 
									src={getLogo(index)} 
									alt={`${name} logo`} 
									className={`${classNameItem}_img tilt__item`} />
							</div>
					        <h2 className={`${classNameItem}_title tilt__item`}>
					        	{name}
					        </h2>
					        {width > breakPoint ? <div className="tilt__desc">
					        	{ tilt_desc }
					        </div> : null}
					    </Tilty>
					</SwiperSlide>)
			}
			</Swiper>
}

export default Slider