const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new NodemonPlugin()
    ]
}