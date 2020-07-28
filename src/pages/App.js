import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'

import Preloader from '../components/Preloader/Preloader'

// import Card from '../pages/Card/Card'
// import Offer from '../pages/Offer/Offer'
import Apps from '../pages/Apps/Apps'
import Form from '../pages/Form/Form'
import NoPage from '../pages/NoPage/NoPage'
import Post from '../pages/Post/Post'
import Posts from '../pages/Posts/Posts'

export default () => {

	return (
		<Router>
			<AsyncRoute
				path="/"
				getComponent={ () => import('../pages/Card/Card').then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<AsyncRoute
				path="/offer"
				getComponent={ () => import('../pages/Offer/Offer').then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<Apps path="/apps/" />
			<Form path="/form/" />
			<Post path="/posts/:slug/" />
			<Posts path="/posts/" />
			<NoPage default />
		</Router>
	)
}
