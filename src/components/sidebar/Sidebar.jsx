import React from 'react'
import '../../App.css'
import { useState } from 'react'
import chat from '../../assets/chat.png'
import plus from '../../assets/plus.png'
import home from '../../assets/home.png'
import saved from '../../assets/saved.png'
import upgrade from '../../assets/upgrade.png'
import chatgpt from '../../assets/chat-gpt.png'



const Sidebar = () => {

    const[messages,setMessages] = useState([{
        text: "hi,im chatgpt",
        isBot: true,
    }])

const handleQuerry = async(e)=>{
    const text = e.target.value;
    setMessages([
        ...messages,
        {text,isBot: false}
    ])
}

  return (
    <div className='sidebar'>
        <div className="upperSide">
            <div className="upperSideTop">
                <span className='brand'>ChatGPT-Clone</span>
                <button className="midBtn" onClick={()=>{window.location.reload()}}><img src="" alt="" className='addBtn'/>New Chat</button>
                <div className="upperSideBottom">
                    <button className="querry" onClick={handleQuerry} value={'What is programming'}><img src={chat} alt="chat-icon" />What is programming</button>
                    <button className="querry"  onClick={handleQuerry} value={'How to use API'}><img src={chat} alt="chat-icon" />How to use API</button>
                </div>
            </div>
        </div>
        <div className="lowerSide">
            <div className="listItems">
                <img src={home} alt="Home" className="listItemsImg" />Home
            </div>
            <div className="listItems">
                <img src={saved} alt="Saved" className="listItemsImg" />Saved
            </div>
            <div className="listItems">
                <img src={upgrade} alt="Upgrade" className="listItemsImg" />Upgrade
            </div>
        </div>
    </div>
  )
}

export default Sidebar