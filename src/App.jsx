import React, { useState } from 'react'
import Landing from './Components/Welcome/landing'
const App = () => {
    const [secreen, setsecreen] = useState("loading")
  return (
    <div className='font-sans'>
        <Landing/>

    </div>

  )
}

export default App