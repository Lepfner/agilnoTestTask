//React
import React from 'react'
//scss
import '../scss/post.scss'

export default function Post({ mapItem, setSelectedVal }) {

  function selectPost() {
    setSelectedVal(mapItem);
  }

  return (
    <section>
      <div className='postDiv'>
        <img className='postImg' src={mapItem.picture} alt="" />
        <b><p className='postName'>{mapItem.name}</p></b>
      </div>
      <button className='postBtn' onClick={selectPost}>REVIEW -></button>
    </section>
  )
}
