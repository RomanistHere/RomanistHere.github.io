const Route = (path, compName) =>
	<AsyncRoute
		path={path}
		getComponent={ () => import(`../pages/${compName}/${compName}`).then(module => module.default) }
		loading={ () => <Preloader /> }
	/>

export default Route
