import ReactHtmlParser from 'react-html-parser'

import LinkBack from '../LinkBack/LinkBack'
import Article from '../Article/Article'

import './TextPage.css'

const TextPage = ({ title = null, content = null, posted = null, image = null }) =>
    <main className="post">
        <Article
            title={title}
            content={content}
            posted={posted}
            image={image}
        />
        <LinkBack className="post__back" />
    </main>

export default TextPage
