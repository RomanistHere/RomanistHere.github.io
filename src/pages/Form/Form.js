import React, { useState } from "react"
import { Link } from "react-router-dom"

import './Form.css'

import Input from '../../components/Input/Input'
import Typing from '../../components/Typing/Typing'

import content from '../../static/content'
import manage from '../../static/manage'
import { 
	useTimeout,
	removeElem
} from '../../static/functions'

const formInputs = ({ inpFocused, nextLvl }) => content.form__info.map(({
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
					inpFocused={inpFocused}
					nextLvl={nextLvl}
					name={form__lbl} />
				<span className="form__focus"></span>
				<span className={`form__mess ${form__lbl.toLowerCase()}`}>{form__mess}</span>
				<span className={`form__mess ${form__lbl.toLowerCase()}_warn`}>{content.form__mess}</span>
			</div>
})

const formTypings = (shouldShow) => content.form__typings.map((item, index) => {
	return  <Typing
				key={index}
				text={content.form__typings[index]}
				className={`form__typing form__typing_${index + 1}`}
				startDelay={manage[`form__typing_${index + 1}__show_time`]}
				shouldShow={shouldShow === (index + 1) ? true : false}
			/>
})

const Form = () => {
	const onSubmit = (e) => {
		e.preventDefault()

		const form = e.target
	    const data = new FormData(form)
	    const xhr = new XMLHttpRequest()

	    xhr.open(form.method, form.action)
	    xhr.setRequestHeader("Accept", "application/json")
	    xhr.onreadystatechange = () => {
	      if (xhr.readyState !== XMLHttpRequest.DONE) return
	      if (xhr.status === 200) {
	        form.reset()
	      } else {

	      }
	    }
	    console.log(data)
	    // xhr.send(data)
	}

	// 2 user focus second input => display second message and hide first one
	// 3 user uses tab => hide second mess and show third
	// 4 user use shift+tab => hide third and show 4th
	// 5 user focus first textarea => show 5th mess and hide 4th
	// 6 user submits => show last mess

	const {
		form__typing_5__hide_time,
	} = manage
	
	const [shouldShow, setShowTyping] = useState(1)
	const [inpFocusedTimes, changeFocusedTimes] = useState(1)
	const [shownLvl, show] = useState([1, 3, 6])

	const inpFocused = inpName => {
		changeFocusedTimes(inpFocusedTimes => inpFocusedTimes + 1)

		if (inpFocusedTimes === 2)
			nextLvl(2)

		if (inpName === content.form__info[3].form__lbl)
			nextLvl(5)
	}

	const changeShow = arr => {
		show([...new Set(arr)])
	}

	const nextLvl = newLvlNumb => {
		const shownLevels = shownLvl

		if (!shownLvl.includes(newLvlNumb)) {
			changeShow([...shownLevels, newLvlNumb])
			setShowTyping(newLvlNumb)
		}

		if ((newLvlNumb === 2) && !shownLvl.includes(4))
			changeShow(removeElem(shownLevels, 3))

		if ((newLvlNumb === 3) && shownLvl.includes(newLvlNumb))
			changeShow([...shownLevels, 2, 4])

		if (newLvlNumb === 5)
			setTimeout(() => setShowTyping(0), form__typing_5__hide_time)
	}

  	return 	<section className="form_section">
				<form 
					className="form"
			  		action={content.formAction}
				  	method="POST"
				  	autoComplete="off"
				  	onSubmit={onSubmit}
				>
					{formInputs({
						inpFocused,
						nextLvl
					})}

					<button 
						className="form__button"
					>Submit</button>

					{formTypings(shouldShow)}
				</form>

				
		    </section>
}

export default Form

