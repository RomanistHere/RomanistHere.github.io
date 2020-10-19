import { useEffect, useState, useRef } from "preact/hooks"
import { Link } from 'preact-router/match'

import LinkBack from '../../components/LinkBack/LinkBack'

import posts from '../../static/posts'
import content from '../../static/content'
import { importAll } from '../../static/functions'

import './Posts.css'

const images = importAll(require.context('../../assets/posts/', false, /\.(png|jpe?g|svg)$/))

const tags = [...new Set(posts.flatMap(item => item.tags))].sort((a, b) => a.localeCompare(b))

const createItem = ({
    title,
    slug,
    posted,
    image,
    desc
}, index) =>
    <article key={index} className="posts__item">
        <Link className="posts__link" href={`/posts/${slug}/`}>
            <img className="posts__img" src={images[image].default} alt={title} loading="lazy"/>
            <h1 className="posts__title">{title}</h1>
            <p className="posts__text">{desc}</p>
            <span className="posts__capt">{posted}</span>
            <span className="posts__mob">Read more</span>
        </Link>
    </article>

const postsByTags = tag =>
    posts.filter(obj => obj.tags.includes(tag))
const allItems = posts.map(createItem)

const Posts = () => {
    const scrollBox = useRef(null)
    const [curTag, setTag] = useState(tags[0])
    let items = postsByTags(curTag).map(createItem)

    const changeTag = (newItem, e) => {
        e.preventDefault()
        setTag(newItem)
        return false
    }

    const onWheel = e => {
        e.preventDefault()
        const scrollTo = (e.deltaY) + scrollBox.current.scrollTop
        scrollBox.current.scrollTop = scrollTo
    }

    useEffect(() => {
        if (typeof window !== 'undefined')
            document.title = content.titles.posts

        items = postsByTags(curTag).map(createItem)
    }, [curTag])

  	return 	<section onWheel={onWheel} className="main posts">
                <div
                    className="posts__wrap"
                    ref={scrollBox}
                    onWheel={e => e.stopPropagation()}
                >
                    <div className="posts__nav">
                        <span className="posts__nav_item">All articles:</span>
                    </div>
                    {allItems}
                </div>

                <div
                    onWheel={e => e.stopPropagation()}
                    className="posts__wrap posts__wrap-filter">
                    <nav className="posts__nav">
                        { tags.map((item, i) =>
                            <a
                                key={item}
                                href="#"
                                onClick={e => changeTag.call(null, item, e)}
                                className={`posts__nav_item ${curTag === item && 'posts__nav_item-active'}`}>{item}</a>) }
                    </nav>

                    {items}
                </div>

                <LinkBack className="posts__back" />
            </section>
}

export default Posts
