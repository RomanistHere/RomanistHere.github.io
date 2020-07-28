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

const pages = {
	Card: '/',
	Form: '/form/',
	Apps: '/apps/',
	Offer: '/offer/',
	Post: '/posts/:slug/',
	Posts: '/posts/',
	// NoPage: null
}

const Route = (path, compName) =>
	<AsyncRoute
		path={path}
		getComponent={ () => import(`../pages/${compName}/${compName}`).then(module => module.default) }
		loading={ () => <Preloader /> }
	/>

const Routers = Object.entries(pages).map(([key, value], index) => Route(value, key))

export default () => {

	return (
		<Router>
			{Routers}
			<NoPage default />
		</Router>
	)
}
