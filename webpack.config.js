const path = require('path')
const webpack = require('webpack')
const bundleOutputDir = './dist'
const libraryName = 'sparky-widget'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { default: postcss } = require('postcss');





module.exports = (env, argv) => {
    const isDevBuild = !(env && env.prod);
    var plugins = [new webpack.SourceMapDevToolPlugin(),], outputFile;

    if (!isDevBuild) {
      plugins.push(new UglifyJsPlugin());
      outputFile = libraryName + '.min.js';
    } else {
      outputFile = libraryName + '.js';
    }

  return {  entry: './src/index.js',
  mode: isDevBuild?'development':'production',
    output: {
        path: path.resolve(bundleOutputDir),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
      },
      module: {
        rules: [{ test: /\.(js|jsx)$/,exclude:/(node_modules)/, loader: 'babel-loader' }, { test: /\.html$/i, use: 'html-loader' },
        { test: /\.css$/i, use: ['style-loader', 'css-loader','postcss-loader']},],
      },
      plugins:plugins
};
};