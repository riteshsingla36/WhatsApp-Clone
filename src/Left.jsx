import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Left.css"
import LeftChat from './LeftChat'
import db from "./fire/firebase"
import { Link } from 'react-router-dom'

const Left = () => {

  const [chats, setChats] = useState([])

  useEffect(() => {
    db.collection("chats").onSnapshot(snapshot => (
      setChats(snapshot.docs.map(doc => 
        (
          {
            id: doc.id,
            data: doc.data() 
          }
        )))
    ))
  }, [])

  return (
    <div className='left'>
      <div className="header">
        <Avatar src='' />
        <div className="header_inner">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="search">
        <div className="search_inner">
          <SearchOutlined />
          <input type="text" placeholder='Enter Chat Name Here' />
        </div>
      </div>


      <div className="chats">
        <LeftChat newChat/>
        {chats.map(chat => (
          <Link to={`/chat/${chat.id}`} >
          <LeftChat key={chat.id} id={chat.id} name={chat.data.name} />
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default Left