import React, {useState} from 'react'

function Comments({id, user, comment, handleDelete}) {

  const [upvote, setUpvote] = useState(0)
  const [downvote, setDownVote] = useState(0)

  function handlesUpvote() {
    setUpvote(upvote + 1)
  }

function handlesDownvote() {
    setDownVote(downvote + 1)
  }

  function localDelete(){
    //console.log(id)
    handleDelete(id)
  }

  return (
    <li id={id}>
      <h2>{user} : {comment}</h2>
      <button onClick={localDelete}>DELETE</button>
      <button onClick={handlesUpvote} className="upvotes">
          👍 {upvote}
      </button>
      <button onClick={handlesDownvote} className="downvotes">
          👎 {downvote}
      </button>
    </li>
  )
}

export default Comments