const express = require('express');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();
const casual = require('casual');
const path = require('path');
const PORT = 4000;
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

let Threads = {
    Thread_1 : {
        tweet_1 : {
            user : {
                name : "Prajjwal Mishra",
                twitterID : "@prajjwal7",
                bluetick : "YES",
                picture : "https://images.com/12345"
            },
            post : {
                text : casual.sentence,
                attachments : ["a1.png", "a2.png"],
                hashTags : ["#beginning"],
                mentions : ['@kickdrum']
            },
            time : {
                time_of_post : "11 : 45 AM IST",
                date : "23 Jan, 2022"
            },
            stats : {
                retweets : casual.integer(from = 0, to = 1000),
                likes : casual.integer(from = 0, to = 1000),
                reply : casual.integer(from = 0, to = 1000)
            },
            previous_tweet_in_thread : null,
            next_tweet_in_thread : "tweet_2"
        },
        tweet_2 : {
            user : {
                name : "Prajjwal Mishra",
                twitterID : "@prajjwal7",
                bluetick : "YES",
                picture : "https://images.com/12345"
            },
            post : {
                text : "My First Tweet",
                attachments : ["a1.png", "a2.png"],
                hashTags : ["#beginning"],
                mentions : ['@kickdrum']
            },
            time : {
                time_of_post : "11 : 45 AM IST",
                date : "23 Jan, 2022"
            },
            stats : {
                retweets : casual.integer(from = 0, to = 1000),
                likes : casual.integer(from = 0, to = 1000),
                reply : casual.integer(from = 0, to = 1000)
            },
            previous_tweet_in_thread : "tweet_1",
            next_tweet_in_thread : "tweet_3"
        },
        tweet_3 : {
            user : {
                name : "Prajjwal Mishra",
                twitterID : "@prajjwal7",
                bluetick : "YES",
                picture : "https://images.com/12345"
            },
            post : {
                text : casual.sentence,
                attachments : ["a1.png", "a2.png"],
                hashTags : ["#beginning"],
                mentions : ['@kickdrum']
            },
            time : {
                time_of_post : "11 : 45 AM IST",
                date : "23 Jan, 2022"
            },
            stats : {
                retweets : casual.integer(from = 0, to = 1000),
                likes : casual.integer(from = 0, to = 1000),
                reply : casual.integer(from = 0, to = 1000)
            },
            previous_tweet_in_thread : "tweet_2",
            next_tweet_in_thread : null
        },
    },
    Thread_2 : {
        tweet_4 : {
            user : {
                name : "Prajjwal Mishra",
                twitterID : "@prajjwal7",
                bluetick : "YES",
                picture : "https://images.com/12345"
            },
            post : {
                text : casual.sentence,
                attachments : ["a1.png", "a2.png"],
                hashTags : ["#beginning"],
                mentions : ['@kickdrum']
            },
            time : {
                time_of_post : "11 : 45 AM IST",
                date : "23 Jan, 2022"
            },
            stats : {
                retweets : casual.integer(from = 0, to = 1000),
                likes : casual.integer(from = 0, to = 1000),
                reply : casual.integer(from = 0, to = 1000)
            },
            previous_tweet_in_thread : null,
            next_tweet_in_thread : "tweet_5"
        },
        tweet_5 : {
            user : {
                name : "Prajjwal Mishra",
                twitterID : "@prajjwal7",
                bluetick : "YES",
                picture : "https://images.com/12345"
            },
            post : {
                text : casual.sentence,
                attachments : ["a1.png", "a2.png"],
                hashTags : ["#beginning"],
                mentions : ['@kickdrum']
            },
            time : {
                time_of_post : "11 : 45 AM IST",
                date : "23 Jan, 2022"
            },
            stats : {
                retweets : casual.integer(from = 0, to = 1000),
                likes : casual.integer(from = 0, to = 1000),
                reply : casual.integer(from = 0, to = 1000)
            },
            previous_tweet_in_thread : "tweet_4",
            next_tweet_in_thread : null
        }
    }
}


app.get('/thread/:threadID', (req, res) => {
    let threadID = "Thread_" + req.params.threadID;
    res.json(Threads[threadID]);
});


app.get('/',(req, res) => {
    res.render('index')
})






app.listen(PORT,console.log(`Server is running on port ${PORT}`));