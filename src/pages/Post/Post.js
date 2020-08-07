import { useEffect } from "preact/hooks"
import ReactHtmlParser from 'react-html-parser'
import IsScrolling from 'react-is-scrolling'

import LinkBack from '../../components/LinkBack/LinkBack'

import posts from '../../static/posts'
import { querySelector, findPostBySlug, addClass, importAll } from '../../static/functions'

import './Post.css'

const images = importAll(require.context('../../assets/posts/', false, /\.(png|jpe?g|svg)$/))

const Post = ({ slug, isScrolling }) => {
    const { image, title, content, desc, posted } = findPostBySlug(posts, slug)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = title

            const hashClass = window.location.hash.split("#", 3)[1]
            if (hashClass) {
                const element = querySelector(hashClass)
                setTimeout(() => {
                    window.scrollTo({
                        behavior: "smooth",
                        top: element.offsetTop
                    })
                    addClass(element, 'post__text-active')
                }, 100)
            } else {
                !isScrolling && window.scrollTo(0, 0)
            }
        }
    }, [title, desc, slug, image])

  	return 	<main className="post">
                <article className="post__article">
                    <h1 className="post__title">{title}</h1>
                    <img className="post__img" src={images[image].default} alt={title} loading="lazy"/>
                    <div className="post__text">{ReactHtmlParser(content)}</div>
                    <p className="post__date">{posted}</p>
                </article>
                <LinkBack className="post__back" />
		    </main>
}

export default IsScrolling(Post)
