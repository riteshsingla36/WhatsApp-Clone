import React, { useState } from 'react'
import "./Right.css"
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'

const Right = () => {

  const [msg, setMsg] = useState("");

  function sendMessage(e) {
    e.preventDefault()
  }
  return (
    <div className='right'>
      <div className="header">
        <Avatar src="https://avatars.dicebear.com/api/adventurer/hum.svg" />

        <div className="header_details">
          <h3>Chat Name</h3>
          <p>Last Seen ....</p>
        </div>


        <div className="header_right">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>

      <div className="right_body">
        <p className="right_body_sender right_body_receiver">
          <span className='message_name'>Aman Goyal</span>
          hello
          <span className='message_time'>7:30pm</span>
        </p>
        <p className="right_body_sender right_body_receiver">
          <span className='message_name'>Nikki</span>
          hey
          <span className='message_time'>7:30pm</span>
        </p>
      </div>

      <div className="footer">
        <InsertEmoticon/>
        <form action="" onSubmit={sendMessage}>
          <input type="text" placeholder='Type A Message' value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button type="submit" >Send</button>
        </form>
        <Mic/>
      </div>

    </div>
  )
}

export default Right