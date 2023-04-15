module.exports = {
    client: {
      service: {
        name: "spacex-production-schema",
        url: "https://spacex-production.up.railway.app",
        skipSSLValidation: true,
      },
      excludes: ['node_modules//*'],
      includes: ['/*.ts', '**/*.graphql'],
    },
};
