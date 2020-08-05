export default (config, env, helpers, options) => {
    const css = helpers.getLoadersByName(config, 'css-loader')[0];
    css.loader.options.modules = false;

    const rule = {
        test: /\.(otf|pdf)$/,
        loader: 'file-loader'
    };
	// add a loader for pdf and otf
    config.module.rules.push(rule);
}
