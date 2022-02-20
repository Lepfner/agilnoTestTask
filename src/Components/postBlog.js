//React
import React from 'react'
//scss
import '../scss/postBlog.scss'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function postBlog() {
  return (
    <div className='blogDiv' id="blog">
      <div className='blogHeader'>

      </div>
      <div className='blogContent'>

      </div>
      <div className='blogFooter'>
        <FontAwesomeIcon className='commentPlane' icon={faPaperPlane} />
        <input className="commentInput" placeholder='LEAVE COMMENT' />
      </div>
    </div>
  )
}
