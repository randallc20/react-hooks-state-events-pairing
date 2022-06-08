import React from 'react'
import Comments from './Comments'

//this is where you make the List elements to display the comments

function CommentList({ comments }) {
    //console.log(comments) //the comments are getting to this point - But I am not sure how

    const commentArray = comments.map((comment) => (
            <Comments 
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
            />
    ))

    return (
        <div className=''>
            <ul>{commentArray}</ul>
        </div>
    )
}

export default CommentList