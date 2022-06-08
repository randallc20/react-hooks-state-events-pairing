import React, {useState} from 'react'
import CommentList from './CommentList'

//this will have the comments and the likes
function VideoDetails({video}) {
    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownVote] = useState(video.downvotes)

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
            <button>Hide Comments</button>
            <p>------------------------------------------------------------------------------</p>
            <CommentList comments={video.comments}/>

          </div>
    </div>
  )
}

export default VideoDetails