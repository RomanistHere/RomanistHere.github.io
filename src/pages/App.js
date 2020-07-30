// import { Router, Route, Switch } from 'preact-router'
// import { Suspense, lazy } from 'preact/compat'
//
// import Preloader from "../components/Preloader/Preloader"
//
// const Card = lazy(() => import('../pages/Card/Card'))
// const Form = lazy(() => import('../pages/Form/Form'))
// const Apps = lazy(() => import('../pages/Apps/Apps'))
// const Offer = lazy(() => import('../pages/Offer/Offer'))
// const Post = lazy(() => import('../pages/Post/Post'))
// const Posts = lazy(() => import('../pages/Posts/Posts'))
// const NoPage = lazy(() => import('../pages/NoPage/NoPage'))
//
// export default () => {
// 	return (
// 		<Suspense fallback={<Preloader />}>
// 			<Router>
// 				<Route path="/" component={Card} />
// 				<Route path="/form" component={Form} />
// 				<Route path="/apps" component={Apps} />
// 				<Route path="/offer" component={Offer} />
// 				<Route path="/posts/:slug" component={Post} />
// 				<Route path="/posts" component={Posts} />
// 				<NoPage default />
// 			</Router>
// 		</Suspense>
// 	)
// }


// BUILD WORKING

import { Router, Route } from 'preact-router'

import Preloader from "../components/Preloader/Preloader"

import Card from '../pages/Card/Card'
import Form from '../pages/Form/Form'
import Apps from '../pages/Apps/Apps'
import Offer from '../pages/Offer/Offer'
import Post from '../pages/Post/Post'
import Posts from '../pages/Posts/Posts'
import NoPage from '../pages/NoPage/NoPage'

export default () => {
	return (
		<Router>
			<Route path="/" component={Card} />
			<Route path="/form" component={Form} />
			<Route path="/apps" component={Apps} />
			<Route path="/offer" component={Offer} />
			<Route path="/posts/:slug" component={Post} />
			<Route path="/posts" component={Posts} />
			<NoPage default />
		</Router>
	)
}
