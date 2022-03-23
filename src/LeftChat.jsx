import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import db from './fire/firebase'
import "./LeftChat.css"

const LeftChat = ({ id, name, newChat }) => {

    const [avatars, setAvatars] = useState("")
    const [msgs, setMsgs] = useState("")
    useEffect(() => {
        setAvatars(Math.floor(Math.random() * 5000))
    }, [])

    useEffect(() => {
        if(id) {
            db.collection("chats").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot=> setMsgs(snapshot.docs.map(doc => doc.data())))

        }
    }, [])

    const addNew = () => {
        const chatNew = prompt("Enter Chat Name")
        if(chatNew) {
            db.collection('chats').add({
                name: chatNew
            })
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
                    <p>{msgs[0]?.message }</p>
                </div>
            </div>
        ) :
        (<div onClick={addNew} className='leftchat'>

            <h2>Add New Chat</h2>
        </div>)

}

export default LeftChat