import { useState } from "preact/hooks"

import './Switcher.css'

const Switcher = ({ text, className, toggleHighlighting }) => {
	const [checked, setChecked] = useState(true)

	const onChange = () => {
		setChecked(!checked)
		toggleHighlighting()
	}

  	return  <label className={`${className} switcher`}>
			    <input
			     	checked={checked}
			     	onChange={onChange}
			     	type="checkbox" />
			    <span className="switch-left">On</span>
			    <span className="switch-right">Off</span>
			</label>
}

export default Switcher
