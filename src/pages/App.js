// import { Router, Route } from 'preact-router'
// import { Suspense, lazy } from 'preact/compat'
//
// import Preloader from "../components/Preloader/Preloader"
//
// const Card = lazy(() => import('./Card/Card'))
// const Form = lazy(() => import('./Form/Form'))
// const Apps = lazy(() => import('./Apps/Apps'))
// const Offer = lazy(() => import('./Offer/Offer'))
// const Post = lazy(() => import('./Post/Post'))
// const Posts = lazy(() => import('./Posts/Posts'))
// const NoPage = lazy(() => import('./NoPage/NoPage'))
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

import { Router } from 'preact-router'

import Card from './Card/Card'
import Form from './Form/Form'
import Apps from './Apps/Apps'
import Post from './Post/Post'
import Offer from './Offer/Offer'
import Posts from './Posts/Posts'
import NoPage from './NoPage/NoPage'
import Policy from './Policy/Policy'
import Secrets from './Secrets/Secrets'
import Updates from './Updates/Updates'

export default () => {
	return (
		<Router>
			<Card path="/" />
			<Form path="/form/" />
			<Apps path="/apps/" />
			<Policy path="/apps/policy/" />
			<Updates path="/apps/popupoff/updates/" />
			<Offer path="/offer/" />
			<Post path="/posts/:slug" />
			<Posts path="/posts/" />
			<Secrets path="/secrets/" />
			<NoPage default />
		</Router>
	)
}
