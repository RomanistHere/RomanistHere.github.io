import React, { useState } from "react"

import { useTimeout } from '../../static/functions'

import './Typing.css'

const Typing = ({ text, className, startDelay, shouldShow }) => {
	const [isShow, setShow] = useState(false);

	useTimeout(() => setShow(true), startDelay)

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