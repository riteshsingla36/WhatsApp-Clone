import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Left.css"
import LeftChat from './LeftChat'

const Left = () => {
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
        <LeftChat/>
        <LeftChat/>
        <LeftChat/>
        <LeftChat/>
        <LeftChat/>
        <LeftChat/>
      </div>
    </div>
  )
}

export default Left