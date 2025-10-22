import React, { useState } from 'react'
import Landing from './Components/Welcome/landing'
import Signin from './Components/Welcome/Signin'
import MainUI from './Components/main/MainUI'
const App = () => {
    const [screen, setscreen] = useState("locked");
    const loadSignInHandler = ()=>{
      setscreen("signin")
    }
    const loadMainHandler = () =>{
      setscreen("mainui")
    }
    if(screen =="signin") return <Signin onSignIn={loadMainHandler}/>
    if (screen=="mainui") return <MainUI/>
  return (
    <div className='w-screen h-screen' onClick={screen=="locked"?loadSignInHandler: ""}>
       <Landing/>
        
    </div>

  )
}

export default App