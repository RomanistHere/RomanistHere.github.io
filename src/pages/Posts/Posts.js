import { useEffect, useState, useRef } from "preact/hooks"
import { Link } from 'preact-router/match'

import LinkBack from '../../components/LinkBack/LinkBack'
import Arrow from '../../components/Arrow/Arrow'

import allPosts from '../../static/posts'
import content from '../../static/content'
import { importAll } from '../../static/functions'

import './Posts.css'

const posts = allPosts.filter(obj => !obj.hide)
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
        {/* <link rel="preload" as="image" href={images[image].default} /> */}
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
    const [curTag, setTag] = useState(tags[1])
    const [shouldShow, setShow] = useState('')

    let items = postsByTags(curTag).map(createItem)

    const changeTag = (newItem, e) => {
        e.preventDefault()
        setTag(newItem)
    }

    const removeArrow = () => {
        if (!shouldShow) {
            setShow('posts__arrow-hiding')
            setTimeout(() => { setShow('posts__arrow-hide') }, 1000)
        }
    }

    const onPrevWheel = e => {
        e.nativeEvent.stopImmediatePropagation()
        removeArrow()
    }

    const onWheel = e => {
        e.preventDefault()
        removeArrow()
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
                    onWheel={onPrevWheel}
                >
                    <div className="posts__nav">
                        <span className="posts__nav_item">All articles:</span>
                    </div>
                    {allItems}
                </div>

                <div
                    onWheel={onPrevWheel}
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

                <Arrow
                    text='Scroll'
                    className={`${shouldShow} posts__arrow`} />

                <LinkBack className="posts__back" />
            </section>
}

export default Posts
