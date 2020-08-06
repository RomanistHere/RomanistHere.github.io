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

const sliderSettings = (width, numbOfSlides) => {
	return {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 3,
		effect: 'coverflow',
		centeredSlides: true,
		slideToClickedSlide: true,
		initialSlide: numbOfSlides,

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

export {
	covSettings,
	tiltSettings,
	sliderSettings,
	getLogo,
    breakPoint,
}
