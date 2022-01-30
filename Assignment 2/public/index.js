loadThread = () => {
    var replyDiv = document.getElementById("reply-div-1");
    replyDiv.style.display = "none";
    
    var response = fetch("/thread/1")
    .then(response => response.json())
    .then(tweets => {
            // console.log(tweets["tweet_1"]["user"]["name"]);
            for(key in tweets){
                var mainContainer = document.createElement("div");
                var threadLine = document.createElement("div");
                var threadUpper = document.createElement("div");
                var DPMid = document.createElement("div");
                var threadLower = document.createElement("div");
                var commentText = document.createElement("div");
                var nameH2 = document.createElement("p");
                var id = document.createElement("p");
                var userProfileDiv = document.createElement("div");
                var commentReactionDiv = document.createElement("div");
                var commentTextContent = document.createElement("div");
                var timeOfPost = document.createElement("p");
                var postText = document.createElement("p");
                var reply = document.createElement("p");
                var reTweet = document.createElement("p");
                var like = document.createElement("p");


                nameH2.innerHTML = tweets[key]["user"]["name"] + " . " + tweets[key]["user"]["twitterID"] + " . " + tweets[key]["time"]["time_of_post"];
                id.innerHTML = tweets[key]["user"]["twitterID"];
                mainContainer.className = "single-block-of-comment-mid-div";
                threadLine.className = "thread-line-div";
                threadUpper.className = "thread-upper";
                threadLower.className = "thread-lower";
                userProfileDiv.className = "user-profile-in-thread";
                DPMid.className = "dp-mid";
                commentText.className = "comment-text-div";
                commentReactionDiv.className = "comment-reaction-div";
                commentTextContent.className = "comment-text-content";



                threadLine.appendChild(threadUpper);
                threadLine.appendChild(DPMid);
                threadLine.appendChild(threadLower);


                mainContainer.appendChild(threadLine);

                userProfileDiv.appendChild(nameH2);
                // userProfileDiv.appendChild(id);
                timeOfPost.innerHTML = tweets[key]["time"]["time_of_post"];
                // userProfileDiv.appendChild(timeOfPost);
                
                commentText.appendChild(userProfileDiv);
                
                postText.innerHTML = tweets[key]["post"]["text"];
                commentTextContent.appendChild(postText);

                commentText.appendChild(commentTextContent);


                reply.innerHTML = "Reply: " + tweets[key]["stats"]["reply"];
                reTweet.innerHTML = "Retweet: " + tweets[key]["stats"]["retweets"];
                like.innerHTML = "Like " + tweets[key]["stats"]["likes"];

                commentReactionDiv.appendChild(reply);
                commentReactionDiv.appendChild(reTweet);
                commentReactionDiv.appendChild(like);


                commentText.appendChild(commentReactionDiv);
                
                mainContainer.appendChild(commentText);

                document.getElementById("thread-block-1").appendChild(mainContainer);

            }
            
        } 
    );        
}