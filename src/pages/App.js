import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'

import Preloader from '../components/Preloader/Preloader'
import NoPage from '../pages/NoPage/NoPage'

export default () => {
	return (
		<Router>
			<AsyncRoute
				path='/'
				getComponent={ () => import(`../pages/Card/Card`).then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<AsyncRoute
				path='/offer/'
				getComponent={ () => import(`../pages/Offer/Offer`).then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<AsyncRoute
				path='/apps/'
				getComponent={ () => import(`../pages/Apps/Apps`).then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<AsyncRoute
				path='/form/'
				getComponent={ () => import(`../pages/Form/Form`).then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<AsyncRoute
				path='/posts/'
				getComponent={ () => import(`../pages/Posts/Posts`).then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<AsyncRoute
				path='/posts/:slug/'
				getComponent={ () => import(`../pages/Post/Post`).then(module => module.default) }
				loading={ () => <Preloader /> }
			/>
			<NoPage default />
		</Router>
	)
}
