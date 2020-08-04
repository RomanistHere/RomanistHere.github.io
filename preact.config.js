export default (config, env, helpers, options) => {
    const css = helpers.getLoadersByName(config, 'css-loader')[0];
    css.loader.options.modules = false;

    // console.log(css.loader.options)

    const sass = helpers.getLoadersByName(config, 'proxy-loader')[1];
    sass.loader.options.sourceMap = true;

    // console.log(sass.loader.options)
    // console.log(sass.loader.options.options.sassOptions)

    const rule = {
        test: /\.(otf|pdf)$/,
        loader: 'file-loader'
    }
    // console.log(config.module.rules)
	// add a new loader
	config.module.rules.push(rule);
}
