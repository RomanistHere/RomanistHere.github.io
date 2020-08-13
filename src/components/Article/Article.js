import './Article.css'

const Article = ({ title = null, content = null, posted = null, image = null, className = null, shouldInherit = null }) =>
    <article className={`article ${className}`}>
        {title && <h1 className={`article__title ${shouldInherit ? shouldInherit + '__title' : ''}`}>{title}</h1>}
        {image && <img className="article__img" src={image} alt={title} loading="lazy"/>}
        {content && <div className="article__text" dangerouslySetInnerHTML={{ __html: content }} />}
        {posted && <p className="article__date">{posted}</p>}
    </article>

export default Article
