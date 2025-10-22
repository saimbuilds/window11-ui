import React from 'react'
import search from '../../../../assets/Logos/Search.png'
import home from '../../../../assets/Logos/home.png'
import spotify from '../../../../assets/Logos/spotify.png'
import widget from '../../../../assets/Logos/widget.png'
import settings from '../../../../assets/Logos/Settings.png'
import explorer from '../../../../assets/Logos/explorer.png'
import edge from '../../../../assets/Logos/edge.png'
const Taskbar = () => {
  return (
    <div className='w-screen h-[6vh] bg-transparent backdrop-blur-sm  top-[90%] flex justify-between items-center px-5'>
        <img className='w-8 h-8 object-cover' src={widget} alt="" />
      <div className='flex gap-4'>
        <img className='w-8 h-8 object-cover' src={home} alt="" />
         <img className='w-8 h-8 object-cover' src={search} alt="" />
          <img className='w-8 h-8 object-cover' src={settings} alt="" />
          <img className='w-8 h-8 object-cover' src={explorer} alt="" />
          <img className='w-8 h-8 object-cover' src={edge} alt="" />
          <img className='w-8 h-8 object-cover' src={spotify} alt="" />
      </div>
      <div>s</div>
    </div>
  )
}

export default Taskbar