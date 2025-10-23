import React, { useEffect, useState } from "react";
import search from "../../../../assets/Logos/Search.png";
import home from "../../../../assets/Logos/home.png";
import spotify from "../../../../assets/Logos/spotify.png";
import widget from "../../../../assets/Logos/widget.png";
import settings from "../../../../assets/Logos/Settings.png";
import explorer from "../../../../assets/Logos/explorer.png";
import edge from "../../../../assets/Logos/edge.png";
import wifi from "../../../../assets/Logos/wifi.png";
import audio3 from "../../../../assets/Logos/audio3.png";
import dropdown from "../../../../assets/Logos/dropdownup.svg";
const Taskbar = () => {


  const [currentDateTime, setcurrentDateTime] = useState(new Date());
      const [isLocked, setisLocked] = useState(true)
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
        day: '2-digit',    
    month: '2-digit',   
    year: 'numeric',
      });
  
      
      const showHiddenIcons = () =>{
        
      }







  const iconClass = `w-9 h-9 object-cover cursor-pointer p-[2px] hover:scale-110 transition duration-150 hover:bg-white/20 hover:rounded-lg
  `
  const taskBarClass = `hover: transition duration-150 hover:bg-white/20 rounded-lg p-2  h-[5vh]`
  return (
    <div className="w-screen h-[6vh] bg-linear-to-r from-black/70 via-black/0 to-black/70 backdrop-blur-sm  top-[90%] flex items-center px-5 justify-between">
      <div className="flex items-center justify-between w-[60%]">
        <img className={iconClass} src={widget} alt="" />
        <div className="flex gap-4">
          <img className={iconClass} src={home} alt="" />
          <img className={iconClass} src={search} alt="" />
          <img className={iconClass} src={settings} alt="" />
          <img className={iconClass} src={explorer} alt="" />
          <img className={iconClass} src={edge} alt="" />
          <img className={iconClass} src={spotify} alt="" />
        </div>
      </div>
      <div className="text-white w-fit  flex items-center gap-3">
        <div className="hover:bg-white/20 rounded-lg p-2">
        <img onClick={showHiddenIcons} src={dropdown} className={`w-6 h-6 invert object-fit rotate-180   `}alt="" />
        </div>
        <div className={`flex items-center gap-3 ${taskBarClass}`}>
          <img className="w-5 h-5 object-fit invert" src={wifi} alt="" />
          <img className="w-5 h-5 object-fit invert" src={audio3} alt="" />
        </div>
        <div className={`flex flex-col text-sm ${taskBarClass}`}>
          <h3 className="text-right">{time}</h3>
          <h3>{fullDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
