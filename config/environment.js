const env = require('env-var');

const isTesting = process.env.NODE_ENV === 'test';

module.exports = {
  // Application
  PORT: env.get('PORT').asPortNumber(!isTesting),
  NODE_ENV: env.get('NODE_ENV').required().asEnum(['production', 'development', 'test']),
  API_URL: env.get('API_URL').required(!isTesting).asString(),

  // Google Tag Manager
  GTM_AUTH_ID: env.get('GTM_AUTH_ID').required(!isTesting).asString(),
  GTM_PREVIEW_ID: env.get('GTM_PREVIEW_ID').required(!isTesting).asString(),

  // SEO
  ROBOTS_VALUE: env.get('ROBOTS_VALUE').required(!isTesting).asEnum(['noindex, nofollow', 'index, follow']),

  // Build Only
  DEVTOOL: env.get('DEVTOOL').required(!isTesting).asEnum(['source-map', 'none'])
};
