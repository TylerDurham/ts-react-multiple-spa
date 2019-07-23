const path = require('path');
const sourceBase = './src';
const outputBase = './build';

const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        'index': `${sourceBase}/index.tsx`,
        'onedrive': `${sourceBase}/onedrive/onedrive.tsx`
    },
    output: {
        path: path.join(__dirname, `${outputBase}/js`),
        filename: '[name].bundle.js'
    },
    module: {
        rules: rules
    },
    resolve: { extensions: ['.ts', '.tsx', '.js'] }
}