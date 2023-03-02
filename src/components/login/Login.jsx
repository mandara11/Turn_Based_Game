import React from 'react'
import { makeStyles } from '@mui/styles';
import { useRef } from 'react';
import { useState } from 'react';
import Lander from '../lander/Lander';




const useStyle = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red',
        height: '60vh',
        width: '50vw',
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        display: 'flex',
        height: '30px',
        width: '40%',
        fontSize: '18px',
        position: 'relative',
        bottom: '20px',
    },
    pwd: {
        display: 'flex',
        height: '30px',
        width: '80%',
        fontSize: '18px',
        position: 'relative',

    },
    login: {
        height: '30px',
        width: '40%',
        position: 'relative',
        top: '15px',
    }
})



function Login() {
    const classes = useStyle()

    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("userName")
    const getPassword = localStorage.getItem("password")
    const Submit = () => {
        if ((email.current.value == "admin" && password.current.value == "admin1234") || (email.current.value == "guest" && password.current.value == "guest1234")) {
            localStorage.setItem("userName", "admin")
            localStorage.setItem("password", "admin1234")
            localStorage.setItem("userName", "guest")
            localStorage.setItem("password", "guest1234")
        }

    }

    return (
        <div className={classes.main}>
            {
                getEmail && getPassword ? <Lander /> :
                    <form onClick={Submit}>
                        <div className={classes.user}>
                            <input type="text" ref={email} />
                        </div>
                        <div className={classes.pwd}>
                            <input type="password" ref={password} />
                        </div>
                        <button className={classes.login}>Login</button>
                    </form>
            }
        </div>
    )
}


export default Login
