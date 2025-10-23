import React, { useEffect, useRef, useState } from "react";
import search from "../../../../assets/Logos/Search.png";
import home from "../../../../assets/Logos/home.png";
import spotify from "../../../../assets/Logos/spotify.png";
import widget from "../../../../assets/Logos/widget.png";
import settings from "../../../../assets/Logos/Settings.png";
import explorer from "../../../../assets/Logos/explorer.png";
import edge from "../../../../assets/Logos/edge.png";
import wifi from "../../../../assets/Logos/wifi.png";
import bluetooth from "../../../../assets/Logos/bluetooth.png";
import airplane from "../../../../assets/Logos/airplane.png";
import darkMode from "../../../../assets/Logos/nightlight.png";
import moon from "../../../../assets/Logos/moon.png";
import saver from "../../../../assets/Logos/saver.png";
import audio3 from "../../../../assets/Logos/audio3.png";
import dropdown from "../../../../assets/Logos/dropdownup.svg";
import terminal from "../../../../assets/Logos/terminal.png";
import notepad from "../../../../assets/Logos/notepad.png";
const Taskbar = () => {
  const [currentDateTime, setcurrentDateTime] = useState(new Date());
  const [isHide, setisHide] = useState(false);
  const [isPanelOpen, setisPanelOpen] = useState(false);
  useEffect(() => {
    const timerId = setInterval(() => {
      setcurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timerId);
  }, []);

  const time = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // Ensure AM/PM format
  });

  // 3. Formatting the Date (e.g., "Tuesday, October 21")
  const fullDate = currentDateTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const toggleHiddenIcons = () => {
    setisHide((prev) => !prev);
  };

  const toggleTaskbarPanel = () =>{
    setisPanelOpen((prev) => !prev)
  }

  const iconClass = `w-9 h-9 object-cover cursor-pointer p-[2px] hover:scale-110 transition duration-150 hover:bg-white/20 hover:rounded-lg
    `;
  const taskBarClass = `hover: transition duration-150 hover:bg-white/20 rounded-lg p-2  h-[5vh]`;

  const [panelItemActive, setpanelItemActive] = useState({
    wifi: false,      
    bluetooth: false, 
    airplane: false,  
    saver: false,     
    moon: false,      
    darkMode: false,  
  })
const taskBarPanelSettings = [
  { id: 'wifi', image: wifi, name: 'WiFi' },
  { id: 'bluetooth', image: bluetooth, name: 'Bluetooth' },
  { id: 'airplane', image: airplane, name: 'Flight Mode' },
  { id: 'saver', image: saver, name: 'Battery Saver' },
  { id: 'moon', image: moon, name: 'Theme' },
  { id: 'darkMode', image: darkMode, name: 'Night Light' },
];

  const activatePanelItem = (id) =>{
    setpanelItemActive(prev=> ({
      ...prev, [id]: !prev[id]
    }))
  }


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
        <div className="hover:bg-white/20 rounded-lg p-2 relative">
          <img
            onClick={toggleHiddenIcons}
            src={dropdown}
            className={`w-6 h-6 invert object-fit ${
              isHide ? "rotate-180" : ""
            }    `}
            alt=""
          />
          {
            <div
              className={`absolute bottom-[160%] p-2 flex  flex-wrap gap-2 items-center justify-between left-[-85%] w-25 rounded-lg h-25 bg-[#242424] transition-all duration-500 ease-in-out ${
                isHide
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="hover:bg-white/20 p-1 rounded-md h-fit cursor-pointer" >
              <img src={spotify} className="w-6.5 h-6.5" alt="" />
              </div>
              <div  className="hover:bg-white/20 p-1 rounded-md h-fit cursor-pointer">

              <img src={terminal} className="w-6.5 h-6.5" alt="" />
              </div>
              <div className="hover:bg-white/20 p-1 rounded-md h-fit cursor-pointer"> 
              <img src={notepad} className="w-6.5 h-6.5" alt="" />
              </div>
            </div>
          }
        </div>
        <div className={`flex items-center gap-3 realtive ${taskBarClass}` }  onClick={toggleTaskbarPanel}>
          <img className="w-5 h-5 object-fit invert" src={wifi} alt="" />
          <img className="w-5 h-5 object-fit invert" src={audio3} alt="" />
          
           <div className={`w-[20vw] h-[28vh] bg-[#242424] rounded-xl p-4 absolute bottom-[125%] right-[2%]  transition-all duration-300 ease-in-out ${isPanelOpen?"opacity-100": "opacity-0 overflow-hidden"}`}>
            <div className="flex justify-between  gap-2 shrink-0 flex-wrap ">
              {taskBarPanelSettings.map((item)=>{
                return <div key={item.id} className="  w-[31%] flex flex-col items-center ">
                  <div onClick={()=>activatePanelItem(item.id)} className={`bg-[#313131] cursor-pointer px-8 py-4 w-full rounded-lg ${panelItemActive?"bg-amber-200": "bg-amber-950"}`}>
                  <img src={item.image} className="w-4 h-4 relative left-1/2 -translate-x-1/2 invert" alt="" />
                  </div>
                  <button className="text-sm">{item.name}</button>
                </div>
              })}
            </div>
             <div>Volume and brightness</div>  
             <div>Settings</div>
            </div>
          
        </div>
        <div className={`flex flex-col text-sm ${taskBarClass}`} >
          <h3 className="text-right">{time}</h3>
          <h3>{fullDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
