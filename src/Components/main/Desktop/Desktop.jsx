import React from 'react'
import Taskbar from './Taskbar/Taskbar'

const Desktop = () => {
  return (
    <div className={`relative w-screen h-screen overflow-hidden  bg-cover bg-center bg-no-repeat bg-[url('/Pictures/desktop-bg-1.jpeg')]`}>
      <div className='absolute bottom-0'>

        <Taskbar/>
      </div>
    </div>
  )
}

export default Desktop