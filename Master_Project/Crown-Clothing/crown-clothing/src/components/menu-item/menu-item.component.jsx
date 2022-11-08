
import React from 'react'
import './menu-item.styles.scss'
import { useNavigate } from 'react-router-dom'
const MenuItem= ({title,imageUrl,size,linkUrl}) => {
  const navigate = useNavigate();
  const onNavigateHandler = ()=> navigate(linkUrl)
  return (
    <div className={`${size} menu-item`}>

    <div className='background-image' style={{
        backgroundImage:`url(${imageUrl})` }} onClick={onNavigateHandler}/>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
  )
}

export default MenuItem