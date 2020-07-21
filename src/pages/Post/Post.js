import React, { useEffect } from "react"
import ReactHtmlParser from 'react-html-parser'
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import posts from '../../static/posts'
import contPage from '../../static/content'
import { querySelector, findPostBySlug, addClass, importAll } from '../../static/functions'

import './Post.css'

const images = importAll(require.context('../../media/images/posts/', false, /\.(png|jpe?g|svg)$/))

const Post = () => {
    const { slug } = useParams()
    const { image, title, content, desc } = findPostBySlug(posts, slug)

    useEffect(() => {
        document.title = title
        document.querySelector('meta[name="Description"]').setAttribute("content", desc)
        document.querySelector('meta[property=og\\:description]').setAttribute("content", desc)
        document.querySelector('meta[property=og\\:title]').setAttribute("content", title)
        document.querySelector('meta[property=og\\:image]').setAttribute("content", images[image])
        document.querySelector('meta[property=og\\:type]').setAttribute("content", 'blog')
        document.querySelector('meta[property=og\\:url]').setAttribute("content", `https://romanisthere.github.io/#/posts/${slug}`)
        // window.scrollTo(0, 0)

        const hashClass = window.location.hash.split("#", 3)[2]
        const element = querySelector(hashClass)

        if (element) {
            setTimeout(() => {
                window.scrollTo({
                    behavior: "smooth",
                    top: element.offsetTop
                })
                addClass(element, 'post__text-active')
            }, 100)
        }
    }, [])

  	return 	<main className="post">
                <article className="post__article">
                    <h1 className="post__title">{title}</h1>
                    <img className="post__img" src={images[image]} alt=""/>
                    <div className="post__text">{ReactHtmlParser(content)}</div>
                </article>
                <Link className="post__back link_back" to='/'>{contPage.link_back}</Link>
		    </main>
}

export default Post
