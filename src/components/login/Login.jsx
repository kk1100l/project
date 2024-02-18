import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'


const Login = () => {

  //state
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const clickLogin = async () => {

    try {
      const url = "https://workshop-react-api.vercel.app/login"
      const res = await axios.post(url, { username, password })


      const decode = jwtDecode(res.data.token)

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user_id', decode.user_id)

      setTimeout(() => {
        window.location.reload()
      }, 1500);
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className='  h-screen flex justify-center items-center'>
      <div className=' bg-green-700  px-40 py-10 rounded-lg shadow-lg '>
        <h2 className=' text-2xl' >Login</h2>

        username: {username} <br />
        password: {password}


        <div className='flex flex-col'>

          <input onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type='text'
            className='border border-gray-400 rounded-lg mt-7 px-4 py-2'></input>

          <input onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type='password'
            className='border border-gray-300 rounded-lg mt-7 px-4 py-2'></input>

          <button onClick={clickLogin} className=' bg-yellow-400 text-white rounded-lg mt-7 px-4 py-2'> เข้าสู่ระบบ </button>

        </div>

      </div>
    </div>
  )
}

export default Login