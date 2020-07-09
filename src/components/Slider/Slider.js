import React from "react"

import SwiperCore, { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Tilty from "react-tilty"

import content from '../../static/content'
import logo1 from '../../images/logo-1.png'
import logo2 from '../../images/logo-2.png'
import logo3 from '../../images/logo-3.png'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
// import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow])

const covSettings = {
	rotate: 30,
	stretch: 10,
	depth: 50,
	modifier: 1,
	slideShadows: false,
}

// const covSettings = {
// 	rotate: 50,
// 	stretch: 0,
// 	depth: 100,
// 	modifier: 1,
// 	slideShadows: false,
// }

const tiltSettings = {
	glare: true,
	"max-glare": 0.7,
	gyroscope: false,
	scale: 1.1
}

const Slider = ({
	classNameSlider,
	classNameItem,
	onSlideChange
}) => {
	const getLogo = (index)  => {
		const logos = {
			0: logo1,
			1: logo2,
			2: logo3
		}
		return logos[index]
	}
	return  <Swiper
				spaceBetween={30}
				slidesPerView={3}
				navigation
				loop={true}
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={onSlideChange}
				effect={'coverflow'}
				centeredSlides={true}
				coverflowEffect={covSettings}
				className={classNameSlider} >
			{
				Object.values(content.apps_page).map(({name, card_desc}, index) =>
					<SwiperSlide 
						className={`${classNameSlider}_slide`}
						key={index}>
						<Tilty 
							settings={tiltSettings}
							className={`${classNameItem} ${name}_item tilt`} >
							<img 
								src={getLogo(index)} 
								alt={`${name} logo`} 
								className={`${classNameItem}_img tilt_item`} />
					        <h2 className={`${classNameItem}_img tilt_item`}>
					        	{name}
					        </h2>
					    </Tilty>
					</SwiperSlide>)
			}
			</Swiper>
}

export default Slider