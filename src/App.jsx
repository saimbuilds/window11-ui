import React, { useState } from 'react'

const App = () => {
    const [secreen, setsecreen] = useState("loading")
  return (
    <div className='font-sans'>
      <Landing/>

    </div>

  )
}

export default App