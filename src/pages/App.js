import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'

import Preloader from '../components/Preloader/Preloader'
import Route from '../components/Route/Route'
import NoPage from '../pages/NoPage/NoPage'

const pages = {
	Card: '/',
	Form: '/form/',
	Apps: '/apps/',
	Offer: '/offer/',
	Post: '/posts/:slug/',
	Posts: '/posts/'
}
const Routers = Object.entries(pages).map(([key, value], index) => Route(value, key))

export default () => {
	return (
		<Router>
			{Routers}
			<NoPage default />
		</Router>
	)
}
