import LinkBack from '../LinkBack/LinkBack'
import Article from '../Article/Article'
import Draw from '../Draw/Draw'

import './TextPage.css'

const TextPage = ({ title = null, content = null, posted = null, image = null, imageLink = null }) =>
    <section className="post">
        <Draw />
        <Article
            title={title}
            content={content}
            posted={posted}
            image={image}
            imageLink={imageLink}
        />
        <LinkBack className="post__back" />
    </section>

export default TextPage
