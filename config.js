require('dotenv').config()
module.exports = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret:process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESSTOKEN,
    access_token_secret:process.env.TWITTER_ACCESSTOKEN_SECRET
    }