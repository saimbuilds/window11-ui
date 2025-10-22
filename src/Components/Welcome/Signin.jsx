import React from 'react'
import personImage from '../../assets/Person.png';
const Signin = ({onSignIn}) => {
  return (
    <div  className={`
        relative inset-0 w-screen h-screen overflow-hidden re bg-cover bg-center bg-no-repeat bg-[url('/Pictures/window-bloom-blue.jpg')]          
      `}>
        <div className='w-screen h-screen absolute  backdrop-blur-xl left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
        <div className='absolute top-[20%] flex flex-col gap-4 items-center' >
            <div className='p-3 bg-white h-[180px] w-[180px] rounded-full'>
                <img src={personImage} alt="" />
            </div>
            <h1 className='text-white font-sans text-2xl font-semibold'>Muhamamd Saim</h1>
            <button onClick={onSignIn} className='text-white w-32 px-2 py-1  hover:outline-1 rounded-sm' style={{
              backgroundColor: "#3753CD"
              
            }}>Sign in </button>

        </div>
        </div>
    </div>
  )
}

export default Signin