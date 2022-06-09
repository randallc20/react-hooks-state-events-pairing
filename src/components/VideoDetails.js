import React, {useState} from 'react'
import CommentList from './CommentList'
import Search from "./Search.js";
import Sort from "./Sort.js";

//this will have the comments and the likes
function VideoDetails({video}) {
    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownVote] = useState(video.downvotes)
    const [toggleComment, setToggleComment] = useState(true)
    const [allComments, setAllComments] = useState(video.comments)

    function handleDelete(id) {
        //console.log("this is the ID from handleDelete: " + id) //this is getting the correct ID now
        setAllComments(allComments.filter((comment) => {
            if (id === comment.id){
                return false
            }
            else{
                return true
            }
        }))
    }

    function handlesComments() {
        //setToggleComment(!toggleComment)//without callback
        setToggleComment((toggleComment) => !toggleComment)//with callback
    }

    function handlesUpvote() {
        setUpvote(upvote + 1)
    }

    function handlesDownvote() {
        setDownVote(downvote + 1)
    }

  return (
    <div>
          <div className='video-details-container'>
            <h1>{video.title}</h1>
            <h3> Views {video.views} | Uploaded {video.createdAt}</h3>
            <button onClick={handlesUpvote} className="upvotes">
                👍 {upvote}
            </button>
            <button onClick={handlesDownvote} className="downvotes">
                👎 {downvote}
            </button>
            <Search allComments={allComments}/>
            <Sort />
            <button onClick={handlesComments}> {toggleComment ? "Hide Comments" : "Show Comments"} </button>
            <p>------------------------------------------------------------------------------</p>
            <CommentList allComments={allComments} show={toggleComment} handleDelete={handleDelete}/>

          </div>
    </div>
  )
}

export default VideoDetails