import React, { useState } from "react"
import { Link } from "react-router-dom"

import './Form.css'

import Input from '../../components/Input/Input'
import Typing from '../../components/Typing/Typing'

import content from '../../static/content'
import manage from '../../static/manage'
import { useTimeout } from '../../static/functions'

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
				<span className={`form__mess ${form__lbl.toLowerCase()}_warn`}>{content.form__mess}</span>
			</div>
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

	const [shouldShow, setShowTyping] = useState(true)

	const {
		form__typing_1__show_time,
		form__typing_2__show_time,
		form__typing_3__show_time,
	} = manage

	// user focus second input => display second message and hide first one
	// user uses tab => hide second mess and show third
	// user use shift+tab => hide third
	// user focus first textarea => show 4th mess
	// user submits => show last mess
	
	// useTimeout(() => (shouldShow && setShowTyping(false)), offer_switcher__hide_time)

  	return 	<section className="form_section">
				<form 
					className="form"
			  		action={content.formAction}
				  	method="POST"
				  	autoComplete="off"
				  	onSubmit={onSubmit}
				>
					{formInputs}
					<button 
						className="form__button"
					>Submit</button>

					<Typing 
		  				text={content.form__typing_1}
		  				className='form__typing form__typing_1'
		  				startDelay={form__typing_1__show_time}
		  				shouldShow={shouldShow}
		  			/>

		  			<Typing 
		  				text={content.form__typing_2}
		  				className='form__typing form__typing_2'
		  				startDelay={form__typing_2__show_time}
		  				shouldShow={shouldShow}
		  			/>

		  			<Typing 
		  				text={content.form__typing_3}
		  				className='form__typing form__typing_3'
		  				startDelay={form__typing_3__show_time}
		  				shouldShow={shouldShow}
		  			/>
				</form>

				
		    </section>
}

export default Form

