import React from 'react'
import Post from '../Components/post'
import '../scss/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function sidebar() {
  return (
    <div className="mainSide">
        <div className="searchDiv">
            <h1>Image Gallery</h1>
            <div className='divParent'>
              <FontAwesomeIcon className='inputIcon' icon={faSearch}/>
              <input className="searchInput" placeholder='Search showcase...'/>
            </div>
            <Post/>
        </div>
    </div>
  )
}
