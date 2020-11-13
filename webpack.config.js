var path = require('path');

module.exports = {
    entry: "./src/index.js",
    mode: 'production',
    output: {
        path: path.resolve('lib'),
        filename: 'main.js',
        library: 'react-konva-helpers',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: [
        'react',
    ],

    /**
     * Determine the array of extensions that should be used to resolve modules.
     */
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
}