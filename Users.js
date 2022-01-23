const casual = require('casual');

const users = [
    {
        
        "name":"Abc",
        "blueTick":casual.coin_flip,
        "id":"@abc",
        "description":"Hi I'm abc",
        "place":casual.city,
        "joining date":casual.date(format='YYYY-MM-DD'),
        "following":casual.integer(from = 0,to = 1000),
        "followers":casual.integer(from = 0,to = 1000),
        
        "tweets":{
            "tweet1": {
                "User": "Abc",
                "id": "@abc",
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            "tweet2": {
                "User": "Abc",
                "id": "@abc",
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
                
            },
            "tweet3": {
                "User": "Abc",
                "id": "@abc",
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            
        },
        "likes":{
            "tweet1": {
                "User": casual.username,
                "id": `@${casual.word}`,
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            "tweet2": {
                "User": casual.username,
                "id": `@${casual.word}`,
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
                
            },
            "tweet3": {
                "User": casual.username,
                "id": `@${casual.word}`,
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            
        },

    },

    {
        
        "name":"def",
        "blueTick":casual.coin_flip,
        "id":"@def",
        "description":"Hi I'm abc",
        "place":casual.city,
        "joining date":casual.date(format='YYYY-MM-DD'),
        "following":casual.integer(from = 0,to = 1000),
        "followers":casual.integer(from = 0,to = 1000),
        
        "tweets":{
            "tweet1": {
                "User": "def",
                "id": "@def",
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            "tweet2": {
                "User": "def",
                "id": "@def",
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
                
            },
            "tweet3": {
                "User": "def",
                "id": "@def",
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            
        },
        "likes":{
            "tweet1": {
                "User": casual.username,
                "id": `@${casual.word}`,
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            "tweet2": {
                "User": casual.username,
                "id": `@${casual.word}`,
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
                
            },
            "tweet3": {
                "User": casual.username,
                "id": `@${casual.word}`,
                "tweetTime":` ${casual.time(format = 'ss')}m`,
                "description":casual.sentence,
                "likes":casual.integer(from = 0,to = 1000),
                "retweet":casual.integer(from = 0,to = 1000),
                'comments':{
                    "comment1":{
                        "user":casual.username,
                        "description":casual.sentence,
                    },
                    "comment2":{
                        "user":casual.username,
                        "description":casual.sentence,
                    }
                },
            },
            
        },

    },


];

module.exports = users