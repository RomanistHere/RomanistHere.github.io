import React from "react"
import ReactHtmlParser from 'react-html-parser'
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import posts from '../../static/posts'
import content from '../../static/content'

import './Post.css'

const findPostBySlug = slug =>
    posts.find(item => item.slug === slug)

const Post = () => {
    const { slug } = useParams()
    const post = findPostBySlug(slug)
  	return 	<main className="post">
                <article className="post__article">
                    <h1 className="post__title">{post.title}</h1>
                    <div className="post__text">{ReactHtmlParser(post.content)}</div>
                </article>
                <Link className="post__back link_back" to='/'>{content.link_back}</Link>
		    </main>
}

export default Post
