const querySelector = name => 
	document.querySelector(`.${name?.toLowerCase()}`)

const addClass = (selector, className) => 
	selector?.classList.add(className)

const removeClass = (selector, className) => 
	selector?.classList.remove(className)

const ifStringContArr = (string, arr) => 
	arr.some(item => string.toLowerCase().includes(item))

export {
	querySelector,
	addClass,
	removeClass,
	ifStringContArr,
}