const miniCss = require("mini-css-extract-plugin");
const browserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        "main": ["./src/js/main.js", "./src/scss/main.scss"]
    },
    output: {
        path: __dirname + "/dist/js/",
        filename: "[name].min.js",
        assetModuleFilename: '[name][ext][query]'
    },
   // watch: true,
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules)/
                },
                {
                    test:/\.(s*)css$/,
                    use: [
                        {
                            loader: miniCss.loader,
                            options: {
                                publicPath: '../../images'
                            }
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
        new miniCss({
            filename: "../css/[name].min.css"
        })
        // ,new browserSyncPlugin({
        //     host: 'localhost',
        //     port: 3000,
        //     files: ['*.html'], // => files to watch
        //     server: {
        //         baseDir: [__dirname]
        //     },
        //     // proxy: 'http://localhost:8000/', => your local url
        // })
    ]
};
