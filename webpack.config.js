const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './bin/www.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new NodemonPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/views", to: "views" },
                { from: "src/public", to: "public" },
            ],
        }),
    ]
}