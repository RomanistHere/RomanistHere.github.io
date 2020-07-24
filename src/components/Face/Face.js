import React from "react"

import './Face.css'

const Face = ({ shouldSmile }) => {
  	return 	<div className="face">
	            <span className="hair"></span>
	            <span className={`ears ${shouldSmile ? 'ears-smiling' : ''}`}></span>
	            <div className="face__front">
	                <span className={`eyes ${shouldSmile ? 'eyes-smiling' : ''}`}></span>
	                <span className="nose"></span>
	                <span className={`blush ${shouldSmile ? 'blush-smiling' : ''}`}></span>
	                <span className={`mouth ${shouldSmile ? 'mouth-smiling' : ''}`}></span>
	            </div>
		    </div>
}

export default Face
