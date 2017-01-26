const path = require('path');

module.exports = {
    entry: {
        Index: ['./src/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/static'),
        publicPath: 'static/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            {
                
            }
        ]
    }
}