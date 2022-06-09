import React, {useState} from 'react'

//make the search bar
//OnChange listener for user input


function Search({ allComments, searchedComments, setSearchedComment}) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(event){
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearchedComment(allComments.filter((comment) => {
            if (searchTerm === comment.user){
                return true
            }
            else{
                return false
            }
        }))
    }

    //console.log(searchedComments)

  return (
    <form action="/" method="get" onSubmit={handleSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Comments:</span>
        </label>
        <input
            onChange={handleSearch}
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default Search