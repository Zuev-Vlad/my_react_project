const path = require('path');
const defPath = "./src/";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: defPath + 'js/App.js',
        index: defPath + 'js/Index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public_html/'),
        filename: "js/[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                        'svgo',
                        {
                            plugins: [{
                                removeViewBox: false,
                            }, ],
                        },
                    ],
                ],
            },
        }),
    ],
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["transform-regenerator"],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, './build/web/work/style/webpack'),
                        },
                    },
                    "css-loader",
                ]
            },
            {
                test: /\.less$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, './build/web/work/style/webpack'),
                        },
                    },
                    "css-loader",
                    "less-loader",
                ],
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: ["file-loader"]
            // }
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset',
            },
        ]
    },
};