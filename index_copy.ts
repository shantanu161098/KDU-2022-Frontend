interface CreatedDOMObject {
            mainContainer : HTMLElement,
            threadLine : HTMLElement,
            threadUpper : HTMLElement,
            DPMid : HTMLElement,
            threadLower : HTMLElement,
            commentText : HTMLElement,
            nameH2 : HTMLElement,
            id : HTMLElement,
            userProfileDiv : HTMLElement,
            commentReactionDiv : HTMLElement,
            commentTextContent : HTMLElement,
            timeOfPost : HTMLElement,
            postText : HTMLElement,
            replytooltip : HTMLElement,
            retweettooltip : HTMLElement,
            retweettipspan : HTMLElement,
            liketooltip : HTMLElement,
            replytipspan  : HTMLElement,
            liketipspan  : HTMLElement,
            replyimg : HTMLElement,
            retweetimg : HTMLElement,
            likeimg : HTMLElement,
            dp  : HTMLElement,
}



function TypeScriptDOMObjectCreator(){
    var createdDOMObject = {
            mainContainer : document.createElement("div"),
            threadLine : document.createElement("div"),
            threadUpper : document.createElement("div"),
            DPMid : document.createElement("div"),
            threadLower : document.createElement("div"),
            commentText : document.createElement("div"),
            nameH2 : document.createElement("p"),
            id : document.createElement("p"),
            userProfileDiv : document.createElement("div"),
            commentReactionDiv : document.createElement("div"),
            commentTextContent : document.createElement("div"),
            timeOfPost : document.createElement("p"),
            postText : document.createElement("p"),
            replytooltip : document.createElement("div"),
            retweettooltip : document.createElement("div"),
            liketooltip : document.createElement("div"),
            replytipspan : document.createElement("span"),
            retweettipspan : document.createElement("span"),
            liketipspan : document.createElement("span"),
            replyimg : document.createElement("img"),
            retweetimg : document.createElement("img"),
            likeimg : document.createElement("img"),
            dp : document.createElement("img"),
    }
        return createdDOMObject;
}

function TypeScriptassignClassToDOMObject(CreatedDOMObject){
    CreatedDOMObject.replytooltip.className = "tooltip";
    CreatedDOMObject.retweettooltip.className = "tooltip";
    CreatedDOMObject.liketooltip.className = "tooltip";
    CreatedDOMObject.replytipspan.className = "tooltiptext";
    CreatedDOMObject.retweettipspan.className = "tooltiptext";
    CreatedDOMObject.liketipspan.className = "tooltiptext";
    CreatedDOMObject.threadLine.className = "thread-line-div";
    CreatedDOMObject.threadUpper.className = "thread-upper";
    CreatedDOMObject.threadLower.className = "thread-lower";
    CreatedDOMObject.userProfileDiv.className = "user-profile-in-thread";
    CreatedDOMObject.DPMid.className = "dp-mid";
    CreatedDOMObject.commentText.className = "comment-text-div";
    CreatedDOMObject.commentReactionDiv.className = "comment-reaction-div";
    CreatedDOMObject.commentTextContent.className = "comment-text-content";
    CreatedDOMObject.mainContainer.className = "single-block-of-comment-mid-div";
}

function TypeScriptstylingDOMObject(CreatedDOMObject){
    CreatedDOMObject.replyimg.height = "20";
    CreatedDOMObject.replyimg.width = "20";
    CreatedDOMObject.retweetimg.height = "20";
    CreatedDOMObject.retweetimg.width = "20";
    CreatedDOMObject.likeimg.height = "20";
    CreatedDOMObject.likeimg.width = "20";
    CreatedDOMObject.dp.style.width = "100%";
    CreatedDOMObject.dp.style.height = "100%";

}

function TypeScriptputtingValuesInDOMObject(CreatedDOMObject,tweets,key){
    CreatedDOMObject.replyimg.src = "reply.png";
    CreatedDOMObject.retweetimg.src = "retweet.png";
    CreatedDOMObject.likeimg.src = "like.png";
    CreatedDOMObject.nameH2.innerHTML = tweets[key]["user"]["name"] + " . " + tweets[key]["user"]["twitterID"] + " . " + tweets[key]["time"]["time_of_post"];
    CreatedDOMObject.id.innerHTML = tweets[key]["user"]["twitterID"];
    CreatedDOMObject.dp.src = "dp.png";
    CreatedDOMObject.postText.innerHTML = tweets[key]["post"]["text"];
    CreatedDOMObject.replytipspan.innerHTML = "Reply: " + tweets[key]["stats"]["reply"];
    CreatedDOMObject.retweettipspan.innerHTML = "Retweet: " + tweets[key]["stats"]["retweets"];
    CreatedDOMObject.liketipspan.innerHTML = "Like " + tweets[key]["stats"]["likes"];
    CreatedDOMObject.timeOfPost.innerHTML = tweets[key]["time"]["time_of_post"];
}

function TypeScriptappendingChildInProperOrder(CreatedDOMObject){
    CreatedDOMObject.threadLine.appendChild(CreatedDOMObject.threadUpper);
            CreatedDOMObject.DPMid.appendChild(CreatedDOMObject.dp);
            CreatedDOMObject.threadLine.appendChild(CreatedDOMObject.DPMid);
            CreatedDOMObject.threadLine.appendChild(CreatedDOMObject.threadLower);
            CreatedDOMObject.mainContainer.appendChild(CreatedDOMObject.threadLine);

            CreatedDOMObject.userProfileDiv.appendChild(CreatedDOMObject.nameH2);
            
            
            CreatedDOMObject.commentText.appendChild(CreatedDOMObject.userProfileDiv);
            
            CreatedDOMObject.commentTextContent.appendChild(CreatedDOMObject.postText);
            CreatedDOMObject.commentText.appendChild(CreatedDOMObject.commentTextContent);
            CreatedDOMObject.replytooltip.appendChild(CreatedDOMObject.replyimg);
            CreatedDOMObject.retweettooltip.appendChild(CreatedDOMObject.retweetimg);
            CreatedDOMObject.liketooltip.appendChild(CreatedDOMObject.likeimg);
            CreatedDOMObject.replytooltip.appendChild(CreatedDOMObject.replytipspan);
            CreatedDOMObject.retweettooltip.appendChild(CreatedDOMObject.retweettipspan);
            CreatedDOMObject.liketooltip.appendChild(CreatedDOMObject.liketipspan);
            CreatedDOMObject.commentReactionDiv.appendChild(CreatedDOMObject.replytooltip);
            CreatedDOMObject.commentReactionDiv.appendChild(CreatedDOMObject.retweettooltip);
            CreatedDOMObject.commentReactionDiv.appendChild(CreatedDOMObject.liketooltip);
            CreatedDOMObject.commentText.appendChild(CreatedDOMObject.commentReactionDiv);
            CreatedDOMObject.mainContainer.appendChild(CreatedDOMObject.commentText);
            document.getElementById("thread-block-1").appendChild(CreatedDOMObject.mainContainer);
    
}

function loadThread() {
    var replyDiv = document.getElementById("reply-div-1");
    replyDiv.style.display = "none";
    var key : any;
    var response = fetch("/thread/1")
    .then(response => response.json())
    .then(tweets => {
            for(key in tweets){
                var createdDOMObject : CreatedDOMObject
                createdDOMObject = TypeScriptDOMObjectCreator();
                TypeScriptassignClassToDOMObject(createdDOMObject);
                TypeScriptstylingDOMObject(createdDOMObject);
                TypeScriptputtingValuesInDOMObject(createdDOMObject,tweets,key);
                TypeScriptappendingChildInProperOrder(createdDOMObject);   
            }
        } 
    );        
}

