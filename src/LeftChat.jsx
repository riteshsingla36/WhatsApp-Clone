import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./LeftChat.css"

const LeftChat = ({ id, name, newChat }) => {

    const [avatars, setAvatars] = useState("")
    useEffect(() => {
        setAvatars(Math.floor(Math.random() * 5000))
    }, [])

    const addNew = () => {
        const chatNew = prompt("Enter Chat Name")
        if(chatNew) {

        }
        else {
            
        }

    }

    return !newChat ?
        (
            <div className='leftchat'>
                <Avatar src={`https://avatars.dicebear.com/api/adventurer/${avatars}.svg`} />
                <div className="leftchat_inner">
                    <h2>{name}</h2>
                    <p>Last Chat.....</p>
                </div>
            </div>
        ) :
        (<div onClick={addNew} className='leftchat'>

            <h2>Add New Chat</h2>
        </div>)

}

export default LeftChat