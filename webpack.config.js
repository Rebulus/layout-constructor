const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelLoader = {
    test: /(\.jsx|\.js)?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        'presets': ['react', 'es2015'],
        'plugins': ['transform-object-assign']
    }
};
const styleLoader = {
    test: /\.styl/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: './dist/'
    },
    module: {
        loaders: [ babelLoader, styleLoader ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    externals: [
        {
            'react': 'var React',
            'react-dom': 'var ReactDOM'
        }
    ]
};
