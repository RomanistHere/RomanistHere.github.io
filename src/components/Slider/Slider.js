import { useRef, useEffect } from 'preact/hooks'
import Swiper, { Navigation, EffectCoverflow } from 'swiper'
import Tilt from 'preact-tilt'

import content from '../../static/content'
import { useViewport } from '../../static/functions'
import {
	covSettings,
	tiltSettings,
	sliderSettings,
	getLogo,
    breakPoint,
} from '../../static/sliderConfig'

import './Slider.css'

const slidesWrap = (classNameSlider, classNameItem, width, isSec, numbOfSlides) =>
	Object.values(content.apps_page).map(({name, tilt_desc}, index) =>
		<div
			className={`${classNameSlider}_slide swiper-slide`}
			key={isSec ? index + numbOfSlides : index}>
			<Tilt
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
			</Tilt>
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
						// fix for swiper loop: true feature not working properly
						[...slidesWrap(classNameSlider, classNameItem, width, false, numbOfSlides),
						...slidesWrap(classNameSlider, classNameItem, width, true, numbOfSlides)]
					}
			    </div>

			    <div className="swiper-button-prev"></div>
			    <div className="swiper-button-next"></div>
			</div>
}

export default Slider
