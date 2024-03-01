const postcssConfig = require('./postcss.config.js');
const path = require('path');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.tsx',
  },
  builtins: {
    html: [
      {
        template: './public/index.html',
      },
    ],
    // copy: {
    //   patterns: [
    //     {
    //       from: 'public',
    //     },
    //   ],
    // },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: postcssConfig,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port: 3001,
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
};
module.exports = config;
