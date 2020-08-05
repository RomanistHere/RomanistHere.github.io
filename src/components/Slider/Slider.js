import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper'
import { useRef, useEffect } from 'preact/hooks'

import Tilty from '../Tilty/Tilty'

import content from '../../static/content'
import { useViewport } from '../../static/functions'
import logo1 from '../../media/images/logo-1.png'
import logo2 from '../../media/images/logo-2.png'
import logo3 from '../../media/images/logo-3.png'

// import 'swiper/swiper.scss'
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/effect-coverflow/effect-coverflow.scss'
// import 'swiper/swiper-bundle.css'

import './Slider.css'

Swiper.use([Navigation, Pagination, EffectCoverflow])

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

const sliderSettings = (width) => {
	return {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 3,
		effect: 'coverflow',
		centeredSlides: true,
		slideToClickedSlide: true,
		initialSlide: 3,

		coverflowEffect: covSettings(width),

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	}
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

const slidesWrap = (classNameSlider, classNameItem, width, isSec, numbOfSlides) =>
	Object.values(content.apps_page).map(({name, tilt_desc}, index) =>
		<div
			className={`${classNameSlider}_slide swiper-slide`}
			key={isSec ? index + numbOfSlides : index}>
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
					{ name }
				</h2>
				{width > breakPoint ? <div className="tilt__desc">
					{ tilt_desc }
				</div> : null}
			</Tilty>
		</div>)

const Slider = ({
	classNameSlider,
	classNameItem,
	onSlideChange
}) => {
	const { width } = useViewport()
	const swiper = useRef(false)
	const numbOfSlides = Object.values(content.apps_page).length

	useEffect(() => {
		swiper.current = new Swiper('.swiper-container', sliderSettings(width))
		swiper.current.on('slideChange', onSlideChange)
    }, [])

	return <div className={`${classNameSlider} swiper-container`}>
			    <div className={`swiper-wrapper`}>
			        {
						[...slidesWrap(classNameSlider, classNameItem, width, false, numbOfSlides),
						...slidesWrap(classNameSlider, classNameItem, width, true, numbOfSlides)]
					}
			    </div>

			    <div className="swiper-button-prev"></div>
			    <div className="swiper-button-next"></div>
			</div>
}

export default Slider
