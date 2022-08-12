const miniCss = require("mini-css-extract-plugin");
const browserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        "main": ["./src/js/main.js", "./src/scss/main.scss"]
    },
    output: {
        clean: {
            dry: true, // Log the assets that should be removed instead of deleting them.
        },
        //path: __dirname + "/dist/",
        filename: "js/[name].min.js",
        assetModuleFilename: 'images/[name][ext][query]',
        publicPath: '/'
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /(node_modules)/
                },
                {
                    test:/\.(s*)css$/,
                    use: [
                        {
                            loader: miniCss.loader,
                        },
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: '../fonts/'
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    type: 'asset/resource'
            }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: "./src/images", to: "./images" }
            ],
          }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        ,new miniCss({
            filename: "css/[name].min.css"
        })
    ]
};
