import { Link } from 'preact-router/match'

const Card__wr2 = ({ onMouseOver, onMouseLeave }) => {
    return  <ul className="card__wr2">
                <li className="card__item">
                    <Link
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link link"
                    	href="/offer/">Check</Link> professional experience
                </li>
                <li className="card__item">
                    Explore <Link
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link link"
                    	href="/apps/">my apps</Link> or read <Link
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link link"
                    	href="/posts/">my blog</Link>
                </li>
            </ul>
}

export default Card__wr2
