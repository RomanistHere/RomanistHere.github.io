import './Article.css'

const imageBlock = (image, imageLink, title) =>
    imageLink ?
    <a
        href={imageLink}
        rel="noreferrer"
        target="_blank"
        className="article__img_link">
        <img className="article__img" src={image} alt={title} loading="lazy"/>
    </a> :
    <img className="article__img" src={image} alt={title} loading="lazy"/>

const Article = ({
        title = null,
        content = null,
        posted = null,
        image = null,
        className = null,
        shouldInherit = null,
        imageLink = null
    }) =>
        <main className={`article ${className ? className : ''}`}>
            {title && <h1 className={`article__title ${shouldInherit ? shouldInherit + '__title' : ''}`}>{title}</h1>}
            {image && imageBlock(image, imageLink, title)}
            {content && <article className="article__text" dangerouslySetInnerHTML={{ __html: content }} />}
            {posted && <p className="article__date">{posted}</p>}
        </main>

export default Article
