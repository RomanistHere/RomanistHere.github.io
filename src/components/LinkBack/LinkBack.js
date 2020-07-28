import { Link } from 'preact-router/match'

import content from '../../static/content'

import './LinkBack.css'

const LinkBack = ({ className }) => {
    return  <>
                <Link className={`${className} link_back`} href='/'>{content.link_back}</Link>
                <div className="link_back__shadow"></div>
            </>
}

export default LinkBack
