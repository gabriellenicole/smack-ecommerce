import React, { useState } from 'react'
import Logo from '../components/Logo'
import { useUser } from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import Axios from "axios";

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser()
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(user, password)

    Axios.get(`http://localhost:9999/api/users?username=${user}&?password=${password}`).then(res => {
      if(res.data.length === 1){
        login(res.data[0].id)
        localStorage.setItem('user', user)
        localStorage.setItem('password', password)
        localStorage.setItem('user_id', res.data[0].id)

        navigate('/')
      }
    })

  }

  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className='h-screen w-screen items-center flex justify-center bg-beige'>
      <div className='bg-white flex flex-col items-center justify-center gap-y-5 shadow-md p-10 rounded-lg py-20'>
        <Logo />
        <input
          type='text'
          placeholder='Enter your username'
          className='mt-8 p-3 w-80 bg-gray bg-opacity-10 rounded-lg px-5'
          onChange={handleChangeUser}
          value={user}
        ></input>
        <input
          type='password'
          placeholder='Enter your password'
          className='p-3 w-80 bg-gray bg-opacity-10 rounded-lg px-5'
          onChange={handleChangePassword}
          value={password}
        ></input>
        <button
          onClick={handleClick}
          className='button-class bg-orange text-white w-80 font-semibold'
        >
          Sign in
        </button>
      </div>
    </div>
  )
}
