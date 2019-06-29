// Basic configuration
const dotenv = require('dotenv');

// Must create a .env.${env} file which saves all your private keys
// example: .env.development which contains all dev configuration

// Load environment dependent configuration

const config = {
  app: {
    name: 'Proyect Name',
    authSecretKey: 'lospinosSecretKey',
  },
  appSettings: {
    publicIp: 'http://0.0.0.0:4000',
    timeZone: 'America/Lima',
  },
  appHost: '0.0.0.0',
  appPort: '4000',
  env: 'development',
  db: {
    host: '0.0.0.0',
    port: '3306',
    database: 'lospinos',
    user: 'root',
    password: '',
    debugMode: false,
  },
};

module.exports = config;
