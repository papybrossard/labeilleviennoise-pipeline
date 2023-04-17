/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerPort: 8000,
  serverBuildTarget: 'netlify',
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.js'
      : undefined,
  ignoredRouteFiles: ['**/.*'],
}
