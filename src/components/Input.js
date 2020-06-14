import React from "react"

const Input = ({
	isInput,
	placeholder,
	name
}) => {
    return isInput 
    		? <input className="form__inp form__data" type="text" placeholder={placeholder} name={name} />
    		: <textarea className="form__txtarea form__data" placeholder={placeholder} name={name}></textarea>
}

export default Input