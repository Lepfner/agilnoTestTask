//React
import React, { useState } from 'react'
//Components & pages
import Header from '../Components/header';
import Sidebar from '../Components/sidebar';
import Blog from '../Components/postBlog';
import Selected from '../Components/selected';
//scss
import '../scss/dash.scss';
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {

  const [defaultVal, setDefaultVal] = useState(false);
  const [selectedVal, setSelectedVal] = useState([]);

  function changeBlog() {
    if (defaultVal === false) {
      document.getElementById("blog").style.display = "block";
      //document.getElementById("icon").classList.add('fa-x');
      //document.getElementById("icon").classList.remove('fa-message');
      setDefaultVal(true);
    } else if (defaultVal === true) {
      document.getElementById("blog").style.display = "none";
      //document.getElementById("icon").classList.add('fa-message');
      //document.getElementById("icon").classList.remove('fa-x');
      setDefaultVal(false);
    }
  }

  return (
    <div>
      <Header />
      <div className='pageFix'>
        <Sidebar setSelectedVal={setSelectedVal} />
        <div className='contentDiv'>
          <Selected selectedVal={selectedVal} />
          <Blog selectedVal={selectedVal}/>
          <button onClick={changeBlog} className='contentBtn'><FontAwesomeIcon id="icon" icon={faMessage} /></button>
        </div>
      </div>
    </div>
  )
}
