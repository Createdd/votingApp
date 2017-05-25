if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const devConfig = {
  MONGO_URL: `mongodb://${
		process.env.DB_USER
		}:${
		process.env.DB_PASS
		}@ds141368.mlab.com:41368/votingapp`,
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/votingAppDb-test',
};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost/votingAppDb-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
