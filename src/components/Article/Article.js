import ReactHtmlParser from 'react-html-parser'

import './Article.css'

const Article = ({ title = null, content = null, posted = null, image = null, className = null, shouldInherit = null }) =>
    <article className={`article ${className}`}>
        {title && <h1 className={`article__title ${shouldInherit ? shouldInherit + '__title' : ''}`}>{title}</h1>}
        {image && <img className="article__img" src={image} alt={title} loading="lazy"/>}
        {content && <div className="article__text">{ReactHtmlParser(content)}</div>}
        {posted && <p className="article__date">{posted}</p>}
    </article>

export default Article
