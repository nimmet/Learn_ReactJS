import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Home = () => {

    
    const [hideSide,setHideSide] = useState(false)

    const handleShowSide = ()=>{
        setHideSide(!hideSide)
    }

  return <>
    <div>
        <FaBars onClick={handleShowSide} />
        

<Sidebar showSide={hideSide} handleShowSide={handleShowSide}/>

      
    </div>
  </>
}

export default Home