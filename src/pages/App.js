import { Router, Route } from 'preact-router'
import {Suspense} from "preact/compat/src/suspense";

import NoPage from '../pages/NoPage/NoPage'
import Preloader from "../components/Preloader/Preloader";

import Card from 'async!./Card/Card';
import Form from 'async!./Form/Form';
import Apps from 'async!./Apps/Apps';
import Offer from 'async!./Offer/Offer';
import Post from 'async!./Post/Post';
import Posts from 'async!./Posts/Posts';

export default () => {
	return (
		<Router>
			<Suspense fallback={<Preloader />}>
				<Route path="/" component={Card} />
				<Route path="/form" component={Form} />
				<Route path="/apps" component={Apps} />
				<Route path="/offer" component={Offer} />
				<Route path="/posts/:slug" component={Post} />
				<Route path="/posts" component={Posts} />
				<NoPage default />
			</Suspense>
		</Router>
	)
}
