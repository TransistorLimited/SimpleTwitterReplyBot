# The simplest twitter reply bot I could build.

## How to Use
Clone this repo. cd into the repo.
Install with
```npm install```
Specify the queries you want to listen for, and the replies you want to send in the queries.json

Specify count, which is the number of tweets matching the query that you want to respond to (the newest will always be the first)

Add a .env file with the following config, that you get after regestering your app with the twitter developer API
```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESSTOKEN=
TWITTER_ACCESSTOKEN_SECRET=
```
run with 
```npm start```

You can uncomment the interval in index.js if you want this to run on repeat. Otherwise it'll run once for all the queries you've specified.

Note: this is setup with "That Tech Show" settings, which is the podcast I host, and build this for.