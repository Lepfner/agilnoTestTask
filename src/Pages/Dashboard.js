import React from 'react'
import Header from '../Components/header';
import Sidebar from '../Components/sidebar';
import '../scss/dash.scss';

export default function Dashboard() {
  return (
    <div>
        <Header/>
        <Sidebar/>
    </div>
  )
}
