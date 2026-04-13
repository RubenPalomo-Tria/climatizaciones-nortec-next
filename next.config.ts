// next.config.js
const { NEXT_PUBLIC_BASE_PATH } = process.env;

module.exports = {
  basePath: NEXT_PUBLIC_BASE_PATH || '/climatizaciones-nortec-next',
  // other configurations...
};