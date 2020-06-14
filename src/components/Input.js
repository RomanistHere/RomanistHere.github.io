import React from "react"

import content from '../static/content'
import {
	querySelector,
	addClass,
	removeClass,
	ifStringContArr
} from '../static/functions'

const Input = ({
	isInput,
	placeholder,
	name
}) => {
	const showMess = (bool, inpName) => {
		const mess = querySelector(inpName)
		bool ? addClass(mess, 'form__mess-show') : removeClass(mess, 'form__mess-show')
	}

	const showWarn = (inpName) => {
		const warning = querySelector(`${inpName}_warn`)
		addClass(warning, 'form__mess-show')
	}

	const checkInput = (inpText, inpName) => {
		const mehArr = content.mehWords[inpName]
		showMess(ifStringContArr(inpText, mehArr), inpName)
	}

	const leftInput = (inpName, inpText) => {
		const mess = querySelector(inpName)
		removeClass(mess, 'form__mess-show')

		if (inpText.length <= 4)
			showWarn(inpName)
	}

	const focusInput = (inpName) => {
		const warning = querySelector(`${inpName}_warn`)
		const mess = querySelector(inpName)
		removeClass(mess, 'form__mess-show')
		removeClass(warning, 'form__mess-show')
	}

	const onKeyUp = (e) => {
		const inpText = e.target.value
		const inpName = e.target.name
		checkInput(inpText, inpName)
	}

	const onBlur = (e) => {
		const inpText = e.target.value
		const inpName = e.target.name
		leftInput(inpName, inpText)
	}

	const onFocus = (e) => {
		const inpName = e.target.name
		focusInput(inpName)
	}	

    return isInput 
    		? <input 
    			className="form__inp form__data" 
    			type="text" 
    			placeholder={placeholder} 
    			name={name} 
    			onFocus={onFocus}
    			onBlur={onBlur}
    			onKeyUp={onKeyUp}
			/>
    		: <textarea 
    			className="form__txtarea form__data" 
    			placeholder={placeholder} 
    			name={name}
    			onFocus={onFocus}
    			onBlur={onBlur}
			></textarea>
}

export default Input