import React, { useEffect } from "react"
import ReactHtmlParser from 'react-html-parser'
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import posts from '../../static/posts'
import content from '../../static/content'
import { querySelector, findPostBySlug, addClass } from '../../static/functions'

import './Post.css'

const Post = () => {
    useEffect(() => {
        document.title = post.title

        const hashClass = window.location.hash.split("#", 3)[2]
        const element = querySelector(hashClass)

        setTimeout(() => {
            (element && window.scrollTo({
                behavior: "smooth",
                top: element.offsetTop
            }))
            addClass(element, 'post__text-active')
        }, 100)
    }, [])

    const { slug } = useParams()
    const post = findPostBySlug(posts, slug)
  	return 	<main className="post">
                <article className="post__article">
                    <h1 className="post__title">{post.title}</h1>
                    <div className="post__text">{ReactHtmlParser(post.content)}</div>
                </article>
                <Link className="post__back link_back" to='/'>{content.link_back}</Link>
		    </main>
}

export default Post
