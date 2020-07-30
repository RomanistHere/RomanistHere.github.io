import posts from './src/static/posts'

const dynamic = posts.map(({
    title,
    slug,
    image,
    desc
}, index) => {
    return {
        url: `/posts/${slug}`,
        title: `${title}`,
        description: `${desc}`,
        img: `${image}`
    }
})

const staticData = [
    {
        url: `/`,
        title: `RomanistHere. An independent JavaScript developer.`,
        description: `Hey, I am Roman Smunyov and I am a JavaScript developer. It is time for you to finally meet me. My goal is to make the web better. I develop non-comercial open source projects. Join!`,
        img: `/media/public/preview.png`
    }, {
        url: `/offer/`,
        title: `Let's see who I am`,
        description: `Hey, I am Roman Smunyov and I am a JavaScript developer. It is time for you to finally meet me. My goal is to make the web better. I develop non-comercial open source projects. Join!`,
        img: `/media/public/preview.png`
    },{
        url: `/posts/`,
        title: `Articles I write`,
        description: `Articles I write`,
        img: `/media/public/preview.png`
    },{
        url: `/apps/`,
        title: `Applications I develop`,
        description: `Applications I develop`,
        img: `/media/public/preview.png`
    }
]

export default () => [...staticData, ...dynamic]
