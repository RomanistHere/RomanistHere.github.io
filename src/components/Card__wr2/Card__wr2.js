import React from "react"
import { Link } from "react-router-dom"

const Card__wr2 = ({ onMouseOver, onMouseLeave }) => {
    return  <ul className="card__wr2">
                <li className="card__item">
                    <Link 
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link" 
                    	to="/offer">Offer me</Link> a job or mentoring 
                </li>
                <li className="card__item">
                    Learn about <Link 
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link" 
                    	to="/apps">my apps</Link>
                </li>
            </ul>
}

export default Card__wr2