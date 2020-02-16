console.log('Loading env vars ${process.env.TELEGRAM_TOKEN}');
const _ = require('lodash');
const dotenv = require('dotenv');
dotenv.config();
console.log('Loading env vars ${process.env.TELEGRAM_TOKEN}');
console.log('Loading env vars');
_.each([
  'HUBOT_NAME',
  'SPOTIFY_PLAYLIST_USER',
  'SPOTIFY_PLAYLIST_ID',
  'SPOTIFY_CLIENT_ID',
  'SPOTIFY_CLIENT_SECRET',
  'SPOTIFY_REFRESH_TOKEN',
  'TELEGRAM_TOKEN',
  'REDIS_URL',
  'YOUTUBE_API_KEY',
], key => {
  console.log(key, '=', process.env[key]);

  if (!process.env[key]) {
    throw new Error('Environment variable not defined: ' + key);
  }
});
