require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"]
});

module.exports = require('./prerender-urls-es6.mjs');
