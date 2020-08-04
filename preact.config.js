export default (config, env, helpers, options) => {
    const css = helpers.getLoadersByName(config, 'css-loader')[0];
    css.loader.options.modules = false;

    const sass = helpers.getLoadersByName(config, 'proxy-loader')[1];
    sass.loader.options.sourceMap = true;

    const rule = {
        test: /\.(otf|pdf)$/,
        loader: 'file-loader'
    }
	// add a new loader
	config.module.rules.push(rule);
}
