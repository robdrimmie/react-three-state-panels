const path                = require('path');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
    entry: './src/app.js',
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                }),
            },
        ],
    },

    plugins: [
        extractSass,
    ],
};

module.exports = config;