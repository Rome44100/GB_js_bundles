const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "src", "main.js"),
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                // порядок лоадеров имеет значение и выполняется справа на лево
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    outputPath: "img",
                }
            },
            {
                test: /\.(mp3)$/i,
                loader: "file-loader",
                options: {
                    outputPath: "media",
                }
            },
            {
                test: /\.(ico)$/i,
                loader: "file-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        //new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "media", to: "media" },
                { from: "favicon.ico", to: "favicon.ico" }
            ]
        }),
    ],
}