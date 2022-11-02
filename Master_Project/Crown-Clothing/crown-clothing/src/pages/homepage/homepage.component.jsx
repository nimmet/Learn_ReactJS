import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directoy.component'
import { Outlet } from 'react-router-dom'

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    <Outlet/>
    </div>
  )


export default HomePage