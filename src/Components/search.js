//React
import React, {useState} from 'react'
//scss
import '../scss/sidebar.scss';

const Search = ({search}) => {
    const[text,setText]= useState('')
    const onSearch = (q)=>{
        setText(q)
        search(q)
    }
    return (
        <div className="Input">
        <input value={text} className="searchInput" type="text" placeholder='Search showcase...' onChange={(e)=>onSearch(e.target.value)}/>
      </div>
    )
}

export default Search