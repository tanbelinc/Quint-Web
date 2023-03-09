module.exports = {
    images: {
      loader: 'akamai',
      path: '/',
    },
    target: "serverless",
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  };
  