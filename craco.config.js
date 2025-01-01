const path = require('path');
const fs = require('fs-extra');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Remove the public path from the output configuration
            webpackConfig.output.publicPath = '';

            // Remove the CopyWebpackPlugin instance that copies the public folder
            webpackConfig.plugins = webpackConfig.plugins.filter(
                (plugin) => plugin.constructor.name !== 'CopyPlugin'
            );

            // Remove the HtmlWebpackPlugin instance that generates the index.html file
            webpackConfig.plugins = webpackConfig.plugins.filter(
                (plugin) => plugin.constructor.name !== 'HtmlWebpackPlugin'
            );

            // Adjust the output configuration for a library
            webpackConfig.output = {
                ...webpackConfig.output,
                filename: 'index.ts',
                library: 'spooderComponentLibrary',
                libraryTarget: 'umd',
                globalObject: 'this',
            };

            // Ensure externals are not bundled
            webpackConfig.externals = {
                react: 'react',
                'react-dom': 'react-dom',
            };

            return webpackConfig;
        },
    },
    plugins: [{
        plugin: {
            overrideWebpackConfig: ({ webpackConfig }) => {
                // Remove the public folder from the build output
                fs.removeSync(path.resolve(__dirname, 'build', 'public'));
                return webpackConfig;
            },
        },
    }, ],
};