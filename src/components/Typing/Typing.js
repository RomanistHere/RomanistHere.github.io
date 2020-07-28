import { useState, useEffect, useRef } from "preact/hooks"

import './Typing.css'

const Typing = ({ text, className, startDelay = 0, shouldShow }) => {
	const [isShow, setShow] = useState(false)
	const timeout = useRef(false)

	useEffect(() => {
		if (shouldShow)
			timeout.current = setTimeout(() => setShow(true), startDelay)

		return () =>
			clearTimeout(timeout.current)
    }, [shouldShow, startDelay])

  	return <div className={`typing ${className} ${(isShow && shouldShow) ? 'typing-active' : ''}`}>
				<p className="typing__text">
					{text}
				</p>

				<div className="typing__wrap">
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
					<p className="typing__hide">&nbsp;</p>
				</div>
			</div>
}

export default Typing
