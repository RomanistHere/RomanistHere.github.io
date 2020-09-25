// import { useEffect } from "preact/hooks"
// import { Link } from 'preact-router/match'
//
// import LinkBack from '../../components/LinkBack/LinkBack'
//
// import posts from '../../static/posts'
// import content from '../../static/content'
// import { importAll } from '../../static/functions'
//
// import './Posts.css'
//
// const images = importAll(require.context('../../assets/posts/', false, /\.(png|jpe?g|svg)$/))
//
// const tags = [...new Set(posts.flatMap(item => item.tags))]
// console.log(tags)
//
// const postsByTags = tag =>
//     posts.filter(obj => obj.tags.includes(tag))
//
// const createItem = ({
//     title,
//     slug,
//     posted,
//     image,
//     desc
// }, index) =>
//     <article key={index} className="posts__item">
//         <Link className="posts__link" href={`/posts/${slug}`}>
//             <img className="posts__img" src={images[image].default} alt={title} loading="lazy"/>
//             <h1 className="posts__title">{title}</h1>
//             <p className="posts__text">{desc}</p>
//             <span className="posts__capt">{posted}</span>
//             <span className="posts__mob">Read more</span>
//         </Link>
//     </article>
//
// const items = postsByTags('PopUpOFF').map(createItem)
// // const allItems = postsByTags('other').map(createItem)
// const allItems = posts.map(createItem)
//
// const Posts = () => {
//     useEffect(() => {
//         if (typeof window !== 'undefined')
//             document.title = content.titles.posts
//     }, [])
//
//   	return 	<section className="main posts">
//                 <div className="posts__wrap">
//                     {allItems}
//                 </div>
//                 <div className="posts__wrap">
//                     {items}
//                 </div>
//                 <LinkBack className="posts__back" />
//             </section>
// }
//
// export default Posts

import { useEffect } from "preact/hooks"
import { Link } from 'preact-router/match'

import LinkBack from '../../components/LinkBack/LinkBack'

import posts from '../../static/posts'
import content from '../../static/content'
import { importAll } from '../../static/functions'

import './Posts.css'

const images = importAll(require.context('../../assets/posts/', false, /\.(png|jpe?g|svg)$/))

const items = posts.map(({
    title,
    slug,
    posted,
    image,
    desc
}, index) =>
    <article key={index} className="posts__item">
        <Link className="posts__link" href={`/posts/${slug}`}>
            <img className="posts__img" src={images[image].default} alt={title} loading="lazy"/>
            <h1 className="posts__title">{title}</h1>
            <p className="posts__text">{desc}</p>
            <span className="posts__capt">{posted}</span>
            <span className="posts__mob">Read more</span>
        </Link>
    </article>)

const Posts = () => {
    useEffect(() => {
        if (typeof window !== 'undefined')
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
