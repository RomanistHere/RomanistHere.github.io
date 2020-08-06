import Swiper, { Navigation, EffectCoverflow } from 'swiper'
import { useRef, useEffect } from 'preact/hooks'

import Tilty from '../Tilty/Tilty'

import content from '../../static/content'
import { useViewport } from '../../static/functions'
import {
	covSettings,
	tiltSettings,
	sliderSettings,
	getLogo,
    breakPoint,
} from '../../static/sliderConfig'

import logo1 from '../../media/images/logo-1.png'
import logo2 from '../../media/images/logo-2.png'
import logo3 from '../../media/images/logo-3.png'

import './Slider.css'

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
		Swiper.use([Navigation, EffectCoverflow])

		swiper.current = new Swiper('.swiper-container', sliderSettings(width, numbOfSlides))
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
