import React from 'react'
import Comments from './Comments'

//this is where you make the List elements to display the comments

function CommentList({ allComments, show, handleDelete, searchedComments }) {


    //display the searched comment but have it show the rest when nothing is searched
    const commentArray = allComments.map((comment) => (
            <Comments 
                key={comment.id}
                id={comment.id}
                user={comment.user}
                comment={comment.comment}
                handleDelete={handleDelete}
            />
    ))

    return (
        <div className=''>
            <ul>{show ? commentArray : null}</ul>
        </div>
    )
}

export default CommentList