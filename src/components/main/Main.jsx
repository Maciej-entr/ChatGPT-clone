import React, { useEffect, useRef, useState } from 'react'
import { sendMsgToOpenAI } from '../../OpenAI'
import send from '../../assets/send.png'
import user from '../../assets/user.png'
import chatgpt from '../../assets/chat-gpt.png'
const Main = () => {
const msgEnd = useRef(null)
const[input,setInput] = useState("")

const[messages,setMessages] = useState([{
    text: "Hi, im chatgpt",
    isBot: true,
}])

useEffect(()=> {
msgEnd.current.scrollIntoView()
},[messages])

    const handleSend = async() =>{
        const text = input;
        setInput('')
        setMessages([
            ...messages,
            {text, isBot:false}
        ])
        const res = await sendMsgToOpenAI(text)
        setMessages([
            ...messages,
        {text, isBot:false},
        {text: res, isBot: true}
        ])
    }

    const handleEnter = async(e) =>{
        if(e.key=='Enter') await handleSend()
    }

  return (
    <div className='main'>
        <div className="chats">
            <div className="chat">
                <img className='chatImg' src={user} alt="userIcon" />
                <p className="txt">Who are you</p>
            </div>
            {messages.map((message,i)=>{
                return(
                <div key={i} className={message.isBot?"chat bot":"chat"}>
                <img className={message.isBot?chatgpt&&'chatImg':user&&'chatImg'} src={chatgpt} alt="GTPlogo" />
                <p className="txt">{message.text}</p>
            </div>)
            })}
            <div ref={msgEnd}></div>
        </div>
        <div className="chatFooter">
            <div className="inp">
                <input type="text" placeholder='Send a message' value={input}onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/>
                <button className="send" onClick={handleSend}><img src={send} alt="sendBtn" className='sendImg'/></button>
            </div>
            <p>ChatGPT may provide inaccurate information</p>
        </div>
    </div>
  )
}

export default Main