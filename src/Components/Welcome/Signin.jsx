import React from 'react'
import personImage from '../../assets/Person.png';
const Signin = () => {
  return (
    <div className='w-screen relative h-screen backdrop-blur-xl'>
        <div className='absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
            <div className='p-3 bg-white h-[180px] w-[180px] rounded-full'>
                <img src={personImage} alt="" />
            </div>
            <h1 className='text-white font-sans text-2xl font-semibold'>Muhamamd Saim</h1>
            <button className='text-white w-32 px-2 py-1  hover:outline-1 rounded-sm' style={{
              backgroundColor: "#3753CD"
              
            }}>Sign in </button>
        </div>
    </div>
  )
}

export default Signin