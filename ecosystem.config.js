module.exports = {
  apps: [
    {
      name: 'strapi_poc', // Your project name
      cwd: '/home/ubuntu/strapi_poc', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: process.env.API_KEYS || '81ad8380d49a9396272d81f71edab74a69bd12291a70d70e425021291b82cd44', // can be generated using the command: openssl rand -hex 32
        API_TOKEN_SALT: process.env.API_TOKEN_SALT || 'N2qLQKM4G/ZJGF9Hw6zQ/g==', //can be created using "node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"."
        ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET || '6db6a03bc6340e6597f347dc8baf003144fed4ce1071399bc0b054fb8ae3deb5', // can be generated using the command: openssl rand -hex 32 
        JWT_SECRET: process.env.JWT_SECRET || '475c7df3f32486962ebba7a0138036ff9b0e4e12411c3e6e3b8a574a5ec3a3f8',  // can be generated using the command: openssl rand -hex 32 
        NODE_ENV: 'development',
        DATABASE_HOST: process.env.DATABASE_HOST, // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_NAME: process.env.DATABASE_NAME, // DB name under 'Configuration' tab
        DATABASE_USERNAME: process.env.DATABASE_USERNAME, // default username
        DATABASE_PASSWORD:  process.env.DATABASE_PASSWORD,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_ACCESS_SECRET: process.env.AWS_ACCESS_SECRET, 
        AWS_REGION: 'us-east-1'
      },
    },
