import { useEffect } from "preact/hooks"

import TextPage from '../../components/TextPage/TextPage'

import posts from '../../static/posts'
import { querySelector, findPostBySlug, addClass, importAll } from '../../static/functions'


const images = importAll(require.context('../../assets/posts/', false, /\.(png|jpe?g|svg)$/))

const Post = ({ slug }) => {
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
                window.scrollTo(0, 0)
            }
        }
    }, [])

  	return 	<TextPage
                title={title}
                content={content}
                image={images[image].default}
                posted={posted}
            />
}

export default Post
