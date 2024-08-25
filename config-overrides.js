const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@atoms': path.resolve(__dirname, 'src/components/UI/atoms'),
    '@molecules': path.resolve(__dirname, 'src/components/UI/molecules'),
    '@organisms': path.resolve(__dirname, 'src/components/UI/organisms'),
    '@icons': path.resolve(__dirname, 'src/static/icons'),
    "@hooks": path.resolve(__dirname, 'src/hooks')
  })
);