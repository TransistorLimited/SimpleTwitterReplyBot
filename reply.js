const config=require('./config')
const twit=require('twit')
const T=new twit(config)
const queries=require(`./queries.json`)

const reply = () => {

queries.forEach(params=> {
    T.get('search/tweets',params,(err,data)=>{
        let tweets=data.statuses
        let tweet=params.res
        console.log(tweet)
        sendTweet(err,tweet,tweets);
        })
})

const sendTweet = (err,tweet, tweets) => {
    if (!err)
    {            
    for(let data of tweets)
    {
        let tweetId = data.id_str
        let text = data.text;
        let handle = data.user.screen_name

        T.post(`statuses/update`, {in_reply_to_status_id: tweetId, status: `@${handle} ${tweet}`}, (err, data, response) => {
        if (response) 
            console.log(`replied to ${tweetId} @${handle} - ${text}`)
        if (err) 
            console.log(`Duplication? ${err}`)
        }
        )
    }
    }
}

}
module.exports = reply