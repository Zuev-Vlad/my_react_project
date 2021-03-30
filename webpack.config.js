const path = require('path');
const defPath = "./src/";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
        entry: {
            app: defPath + 'js/App.js'
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, 'build/web/work/js/webpack'),
        },
        plugins: [new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })],
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
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
                    {
                        test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                ]
            }
        };