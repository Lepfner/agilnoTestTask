import React from 'react'
import '../scss/sidebar.scss';

export default function sidebar() {
  return (
    <div className="mainSide">
        <div className="searchDiv">
            <h1>Image Gallery</h1>
            <input className="searchInput" placeholder='Search showcase...'></input>
        </div>
    </div>
  )
}
