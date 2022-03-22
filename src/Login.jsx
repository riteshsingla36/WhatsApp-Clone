import { Button } from '@material-ui/core'
import { auth, provider } from './fire/firebase'
import React from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { update_user } from './Redux/actions'

const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => dispatch(update_user(result)))
        .catch(err => alert(err.message))
    }
    return (
        <div className='login'>
            <div className="login_container">
                <img src="https://www.howtogeek.com/wp-content/uploads/2021/06/whatsapp-logo-hero.jpeg?height=200p&trim=2,2,2,2" alt="" />

                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>Sign in with google</Button>
            </div>

        </div>
    )
}

export default Login