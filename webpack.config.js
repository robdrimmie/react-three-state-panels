var path = require('path');

const config = {
    entry: './src/app.js',
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [{
            test: /\.js|jsx$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        }],
    },
};

module.exports = config;