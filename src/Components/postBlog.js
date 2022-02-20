//React
import React from 'react'
//scss
import '../scss/postBlog.scss'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function postBlog({ selectedVal }) {
  return (
    <div className='blogDiv' id="blog">
      <div className='blogHeader'>
        <p className='headerText'><b>{selectedVal.name}</b></p>
      </div>
      <div className='blogContent'>
        <img className='selectedBlogPic' src={selectedVal.picture} alt=""/>
        <p>{selectedVal.comment}</p>
      </div>
      <div className='blogFooter'>
        <FontAwesomeIcon className='commentPlane' icon={faPaperPlane} />
        <input className="commentInput" placeholder='  LEAVE COMMENT' />
      </div>
    </div>
  )
}
