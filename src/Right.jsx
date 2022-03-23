import React, { useEffect, useState } from 'react'
import "./Right.css"
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import db from './fire/firebase'
import { useSelector } from 'react-redux'
import firebase from 'firebase'
import ReactScrollableFeed from "react-scrollable-feed"

const Right = () => {
  const { id } = useParams()
  const [msg, setMsg] = useState("");
  const [avatars, setAvatars] = useState("")
  const [messages, setMessages] = useState([])
  const user = useSelector(store => store.user)

  const [chatName, setChatName] = useState("")
  useEffect(() => {
    setAvatars(Math.floor(Math.random() * 5000))
  }, [id])

  useEffect(() => {
    db.collection("chats").doc(id).onSnapshot(snapshot => {
      setChatName(snapshot.data().name)
    })

    db.collection("chats").doc(id).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => setMessages(snapshot.docs.map(
      doc => doc.data()
    )))
  }, [id])

  function sendMessage(e) {
    e.preventDefault()
    db.collection('chats').doc(id).collection("messages").add({
      message:msg,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMsg("")
  }
  return (
    <div className='right'>
      <div className="header">
        <Avatar src={`https://avatars.dicebear.com/api/adventurer/${avatars}.svg`} />

        <div className="header_details">
          <h3>{chatName}</h3>
          <p> last seen {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
        </div>


        <div className="header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="right_body">
        <ReactScrollableFeed>
        <div style={{padding: "30px 30px 0 30px"}}>
        {messages.map(message => (
     
            <p className={`right_body_sender ${message.name === user.displayName? "right_body_receiver": ""}`}>
              <span className='message_name'>{message.name}</span>
              {message.message}
              <span className='message_time'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
            </p>
        ))}
        </div>
        </ReactScrollableFeed>

      </div>

      <div className="footer">
        <InsertEmoticon />
        <form action="" onSubmit={sendMessage}>
          <input type="text" placeholder='Type A Message' value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button type="submit" >Send</button>
        </form>
        <Mic />
      </div>

    </div>
  )
}

export default Right