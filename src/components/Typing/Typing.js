import React from "react"

import './Typing.css'

const Typing = ({text, className}) => {
  	return <div className={`typing ${className}`}>
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