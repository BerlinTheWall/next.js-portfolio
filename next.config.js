/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "hooman",
        mongodb_password: "2qMkgqg6SaJjavZ",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "hooman",
      mongodb_password: "2qMkgqg6SaJjavZ",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};