import { Link } from 'preact-router/match'

const Card__wr2 = ({ onMouseOver, onMouseLeave }) => {
    return  <ul className="card__wr2">
                <li className="card__item">
                    <Link
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link link"
                    	href="/offer">Offer me</Link> a job or mentoring
                </li>
                <li className="card__item">
                    Learn about <Link
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link link"
                    	href="/apps">my apps</Link>
                </li>
                <li className="card__item">
                    Or read <Link
                    	onMouseOver={onMouseOver}
                    	onMouseLeave={onMouseLeave}
                    	className="card__link link"
                    	href="/posts">articles</Link> I write
                </li>
            </ul>
}

export default Card__wr2
