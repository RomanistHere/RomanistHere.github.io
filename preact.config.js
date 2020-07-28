export default (config, env, helpers) => {
    const css = helpers.getLoadersByName(config, 'css-loader')[0];
    css.loader.options.modules = false;
}
