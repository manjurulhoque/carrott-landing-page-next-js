const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = withImages(
    withCSS({
        cssLoaderOptions: {
            url: false
        }
    })
);

// const withCSS = require("@zeit/next-css");
// const withImages = require("next-images");
// const withPlugins = require("next-compose-plugins");

// module.exports = withPlugins([withCSS, withImages]);
