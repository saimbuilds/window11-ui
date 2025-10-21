import React, { useState } from 'react'
import Landing from './Components/Welcome/landing'
const App = () => {
    const [secreen, setsecreen] = useState("loading")
    
  return (
    <div className='w-screen h-screen'>
        <Landing/>
        
    </div>

  )
}

export default App