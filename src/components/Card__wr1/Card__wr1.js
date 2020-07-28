import { useState, useEffect, useRef } from "preact/hooks"

import content from '../../static/content'
import manage from '../../static/manage'
import { isFocused } from '../../static/functions'

import Typing from '../Typing/Typing'

const list = shouldShowTyping =>
	content.card__info.map((value, index) => {
		const { card_fill__delay } = manage

	    return  <li key={index} className="card__string">
	                <span className="card__label">{value.card__label}</span>
	                <div className="card__fill">
	                	<Typing
			  				text={value.card__content}
			  				className='card__typing'
			  				startDelay={index*card_fill__delay}
	                        shouldShow={shouldShowTyping}
			  			/>
	                </div>
	            </li>
	})

const Card__wr1 = () => {
	const [shouldShowTyping, setShowTyping] = useState(false)

	const timeouts = useRef({
        show: null,
    })

	const startAnim = (bool) => {
        if (!isFocused()) {
            timeouts.current.show = setTimeout(() => startAnim(bool), 1000)
        } else {
			setShowTyping(true)
		}
    }

	useEffect(() => {
        startAnim(true)

		return () => {
			clearTimeout(timeouts.current.show)
		}
    }, [])

    return  <ul className="card__wr1">
               {list(shouldShowTyping)}
            </ul>
}

export default Card__wr1
