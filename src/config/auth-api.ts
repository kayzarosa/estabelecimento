export default {
  jwt: {
    secret: process.env.APP_SECRET_API || 'default',
    expiresIn: '1d',
  },
};