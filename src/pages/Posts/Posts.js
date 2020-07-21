import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import LinkBack from '../../components/LinkBack/LinkBack'

import posts from '../../static/posts'
import content from '../../static/content'
import { importAll } from '../../static/functions'

import './Posts.css'

const images = importAll(require.context('../../media/images/posts/', false, /\.(png|jpe?g|svg)$/))

const items = posts.map(({
    title,
    slug,
    posted,
    image,
    desc
}, index) =>
    <article key={index} className="posts__item">
        <Link className="posts__link" to={`/posts/${slug}`}>
            <img className="posts__img" src={images[image]} alt=""/>
            <h1 className="posts__title">{title}</h1>
            <p className="posts__text">{desc}</p>
            <span className="posts__capt">{posted}</span>
            <span className="posts__mob">Read more</span>
        </Link>
    </article>)

const Posts = () => {
    useEffect(() => {
        document.title = content.titles.posts
    }, [])

  	return 	<section className="main posts">
                <main className="posts__wrap">
                    {items}
                </main>
                <LinkBack className="posts__back" />
            </section>
}

export default Posts
