import React from 'react'

function Comments({key, user, comments }) {
  return (
    <li id={key}>
      <h2>{user}</h2>
      <h3>{comments}</h3>
    </li>
  )
}

export default Comments