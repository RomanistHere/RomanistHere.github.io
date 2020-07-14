import React from "react"

import RHIcon from '../../media/images/RHIcon'

import './Preloader.css'

const Preloader = () => {
  	return 	<div className="preloader">
	            <div className="preloader__cube">
	            	<RHIcon className="preloader__surface" />
	            </div>
		    </div>
}

export default Preloader