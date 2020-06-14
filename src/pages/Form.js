import React from "react"

import Input from '../components/Input'

import content from '../static/content'
import {
	querySelector,
	addClass,
	removeClass,
	ifStringContArr
} from '../static/functions'

const formInputs = content.form__info.map(({
	form__lbl,
	isInput,
	placeholder,
	form__mess
}, index) => {
    return  <div key={index} className="form__grp">
				<label className="form__lbl">{form__lbl}:</label>
				<Input 
					isInput={isInput} 
					placeholder={placeholder} 
					name={form__lbl} />
				<span className="form__focus"></span>
				<span className={`form__mess ${form__lbl.toLowerCase()}`}>{form__mess}</span>
				<span className={`form__mess ${form__lbl.toLowerCase()}_warn`}>content.form__mess</span>
			</div>
})

const Form = () => {
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
		const inpText = e.target.value
		const inpName = e.target.name
		focusInput(inpName)
	}	

	// inputs.forEach(item => {
	// 	item.addEventListener('keyup', (e) => {
	// 		const inpText = e.target.value
	// 		const inpName = e.target.name
	// 		checkInput(inpText, inpName)
	// 	})
	// })

	// textInputs.forEach(item => {
	// 	item.addEventListener('blur', (e) => {
	// 		const inpText = e.target.value
	// 		const inpName = e.target.name
	// 		leftInput(inpName, inpText)
	// 	})
	// 	item.addEventListener('focus', (e) => {
	// 		const inpText = e.target.value
	// 		const inpName = e.target.name
	// 		focusInput(inpName)
	// 	})
	// })

  	return 	<section>
				<form 
					className="form"
			  		action="https://formspree.io/xdowzzgv"
				  	method="POST"
				  	autoComplete="off"
				>
					{formInputs}
					<button className="form__button">Submit</button>
				</form>
		    </section>
}

export default Form

