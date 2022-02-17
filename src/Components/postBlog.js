import React from 'react'
import '../scss/postBlog.scss'
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
              <FontAwesomeIcon className='commentPlane' icon={faPaperPlane}/>
              <input className="commentInput" placeholder='LEAVE COMMENT'/>
        </div>
    </div>
  )
}
