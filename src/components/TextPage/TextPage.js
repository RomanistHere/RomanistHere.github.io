import ReactHtmlParser from 'react-html-parser'

import LinkBack from '../../components/LinkBack/LinkBack'

import './TextPage.css'

const TextPage = ({ title = null, content = null, posted = null, image = null }) =>
    <main className="post">
        <article className="post__article">
            {title && <h1 className="post__title">{title}</h1>}
            {image && <img className="post__img" src={image} alt={title} loading="lazy"/>}
            {content && <div className="post__text">{ReactHtmlParser(content)}</div>}
            {posted && <p className="post__date">{posted}</p>}
        </article>
        <LinkBack className="post__back" />
    </main>

export default TextPage
