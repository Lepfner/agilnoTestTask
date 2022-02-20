//React
import React, { useState } from 'react'
//Components
import Post from '../Components/post'
import Search from './search';
//scss
import '../scss/sidebar.scss';
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//Data
import Data from '../data.json'


export default function Sidebar({ setSelectedVal }) {

  const [query, setQuery] = useState('');

  return (
    <div className="mainSide">
      <div className="searchDiv">
        <h1>Image Gallery</h1>
        <div className='divParent'>
          <FontAwesomeIcon className='inputIcon' icon={faSearch} />
          <Search search={(q) => setQuery(q)} />
        </div>
        {Data.filter((val) => {
            if (query === "") {
              return val;
            }
            else if (val.name.toLowerCase().includes(query.toLowerCase())) {
              return val;
            }
          }).map((val, key) => {
            return <Post key={val.id} mapItem={val} setSelectedVal={setSelectedVal} />
          })}
      </div>
    </div>
  )
}
