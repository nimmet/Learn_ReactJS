import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  return (
    <>
      <div className=' flex'>
        <div className='text-2xl my-5 mx-5'>
            <Home />
        </div>

        <div className='my-auto flex-1 justify-center'>
            <Modal />
        </div>
      </div>
    </>
  )
}

export default App