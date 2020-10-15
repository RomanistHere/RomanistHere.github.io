// import { Router, Route } from 'preact-router'
// import { Suspense, lazy } from 'preact/compat'
// import prepass from 'preact-ssr-prepass'
//
// import Preloader from "../components/Preloader/Preloader"
//
// const Card = lazy(() => import('./Card/Card'))
// const Apps = lazy(() => import('./Apps/Apps'))
// const Offer = lazy(() => import('./Offer/Offer'))
// const NoPage = lazy(() => import('./NoPage/NoPage'))
//
// // export default () => {
// 	// return (
// const App = (
// 		<Suspense fallback={<Preloader />}>
// 			<Router>
// 				<Route path="/" component={Card} />
// 				<Route path="/apps" component={Apps} />
// 				<Route path="/offer" component={Offer} />
// 				<NoPage default />
// 			</Router>
// 		</Suspense>
// 	// )
// // }
// )
//
// export default App

// prepass(vnode)
//     .then(() => {
//         console.log('heh')
// 		console.log(vnode)
//     })


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
			<Post path="/posts/:slug/" />
			<Posts path="/posts/" />
			<Secrets path="/secrets/" />
			<NoPage default />
		</Router>
	)
}
