module.exports = config => {
  config.entry = ['@babel/polyfill', config.entry] // eslint-disable-line no-param-reassign
}
