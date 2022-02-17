import React from 'react'
import '../scss/post.scss'

export default function post() {
  return (
    <section>
        <div className='postDiv'>
            <p>Image</p>
            <b><p>Post title</p></b>
        </div>
        <button className='postBtn'>REVIEW -></button>
    </section>
  )
}
