/* 
// This config will run postcss to compile tailwindcss 
// and will use cssnano to minify the output in production mode.
*/

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
