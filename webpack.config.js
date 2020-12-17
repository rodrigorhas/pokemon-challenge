const project = require('./package.json')

const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require("copy-webpack-plugin");
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin');

const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

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
                { from: path.resolve(__dirname, pathToSwaggerUi), to: "api-docs" },
            ],
        }),
        new SwaggerJSDocWebpackPlugin({
            swaggerDefinition: {
                openapi: '3.0.0',
                info: {
                    title: 'Pokemon API',
                    version: project.version,
                    description: project.description,
                },
            },
            apis: ['./src/routes/**/*.js'],
        }),

    ]
}