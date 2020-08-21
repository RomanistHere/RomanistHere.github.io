import LinkBack from '../LinkBack/LinkBack'
import Article from '../Article/Article'

import './TextPage.css'

const TextPage = ({ title = null, content = null, posted = null, image = null }) =>
    <section className="post">
        <Article
            title={title}
            content={content}
            posted={posted}
            image={image}
        />
        <LinkBack className="post__back" />
    </section>

export default TextPage
