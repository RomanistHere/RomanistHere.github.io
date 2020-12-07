import { useState, useEffect } from "preact/hooks"

import LinkBack from '../../components/LinkBack/LinkBack'
import Input from '../../components/Input/Input'
import Typing from '../../components/Typing/Typing'

import content from '../../static/content'
import manage from '../../static/manage'
import { removeElem } from '../../static/functions'

import './Form.css'

const formInputs = ({ inpFocused, nextLvl, saveData }) => content.form__info.map(({
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
					saveData={saveData}
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

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

const Form = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
	        document.title = content.titles.form
	        window.scrollTo(0, 0)
		}
    }, [])

	const onSubmit = (e) => {
		e.preventDefault()

		fetch(content.formAction, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(handleErrors)
	    .then(response => {
			updData({})
			e.target.reset()
			nextLvl(7)
		})
	    .catch(error => {
			console.log(error)
			alert('Something went wrong, sorry')
		})
	}

	// 2 user focus second input => display second message and hide first one
	// 3 user uses tab => hide second mess and show third
	// 4 user use shift+tab => hide third and show 4th
	// 5 user focus first textarea => show 5th mess and hide 4th
	// 6 user focus last textarea => show 6th message
	// 7 user submits => show last mess

	const {
		form__typing_5__hide_time,
		forbidShow_time,
	} = manage

	const [shouldShow, setShowTyping] = useState(1)
	const [inpFocusedTimes, changeFocusedTimes] = useState(1)
	const [shownLvl, show] = useState([1, 3])
	const [showNext, setShowNext] = useState(true)
	const [formData, updData] = useState({})

	const forbidShow = () => {
		setShowNext(false)
		setTimeout(() => (showNext && setShowNext(true)), forbidShow_time)
	}

	const inpFocused = inpName => {
		changeFocusedTimes(inpFocusedTimes => inpFocusedTimes + 1)

		if (inpFocusedTimes === 2)
			nextLvl(2)

		if (inpName === content.form__info[3].form__lbl)
			nextLvl(5)

		if (inpName === content.form__info[6].form__lbl)
			nextLvl(6)
	}

	const changeShow = arr => {
		show([...new Set(arr)])
	}

	const saveData = (inpName, inpText) => {
		updData({ ...formData, [inpName]: inpText })
	}

	const nextLvl = newLvlNumb => {
		if (!showNext)
			return

		const shownLevels = shownLvl

		if ((newLvlNumb === 4) && !shownLvl.includes(3)) {
			changeShow([...shownLevels, 3, 4])
			return
		}

		if (!shownLvl.includes(newLvlNumb)) {
			if ((newLvlNumb === 2) ||
				(newLvlNumb === 3) ||
				(newLvlNumb === 4) ||
				(newLvlNumb === 5) ||
				(newLvlNumb === 6))
				forbidShow()

			changeShow([...shownLevels, newLvlNumb])
			setShowTyping(newLvlNumb)
		}

		if ((newLvlNumb === 2) && !shownLvl.includes(4))
			changeShow(removeElem(shownLevels, 3))

		if ((newLvlNumb === 3) && shownLvl.includes(newLvlNumb))
			changeShow([...shownLevels, 2, 4])

		if ((newLvlNumb === 5) && !shownLvl.includes(newLvlNumb))
			setTimeout(() => nextLvl(0), form__typing_5__hide_time)
	}

  	return 	<section className="form_section main">
				<form
					className="form"
			  		action={content.formAction}
				  	method="POST"
				  	autoComplete="off"
				  	onSubmit={onSubmit}
				>
					{formInputs({
						inpFocused,
						nextLvl,
						saveData
					})}

					<button className="form__button">Submit</button>

					{formTypings(shouldShow)}
				</form>
				<LinkBack className="form__back" />
		    </section>
}

export default Form
