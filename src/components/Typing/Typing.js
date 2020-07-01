import React, { useState, useEffect } from "react"

import './Typing.css'

const Typing = ({ text, className, startDelay, shouldShow }) => {
	const [isShow, setShow] = useState(false);

	useEffect(() => {
		const typingTimeID = setTimeout(() => setShow(true), startDelay)

		return () => {
			setShow(false)
			clearTimeout(typingTimeID)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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