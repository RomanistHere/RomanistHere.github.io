import AsyncRoute from 'preact-async-route'

import Preloader from '../Preloader/Preloader'

const Route = (path, compName) =>
	<AsyncRoute
		path={path}
		getComponent={ () => import(`../../pages/${compName}/${compName}`).then(module => module.default) }
		loading={ () => <Preloader /> }
	/>

export default Route
