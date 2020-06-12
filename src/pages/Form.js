import React from "react"

import Input from '../components/Input'

import content from '../static/content'

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

