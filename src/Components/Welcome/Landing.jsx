import React, { useEffect, useState } from 'react'

const Landing = () => {
  const [currentDateTime, setcurrentDateTime] = useState(new Date());
  useEffect(()=>{
    const timerId  = setInterval(() => {
      setcurrentDateTime(new Date())
    }, 60000);
    
    return ()=> clearInterval(timerId)

  }, [])
  
  
  const time = currentDateTime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true // Ensure AM/PM format
  });

  // 3. Formatting the Date (e.g., "Tuesday, October 21")
  const fullDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className={`relative w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/Pictures/window-bloom-blue.jpg')]`}>
        <div className='absolute top-[25%] z-10 text-white left-1/2 -translate-x-1/2'>
          <h1 className='text-center text-7xl font-sans font-semibold'>{time}</h1>
          <h3 className='text-center text-xl font-semibold'>{fullDate}</h3>
        </div>
        
      
      
    </div>
  )
}

export default Landing