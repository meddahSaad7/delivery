import React from 'react'
import Lottie from 'react-lottie';
import { Button, Radio, Space, Divider } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router';
function Login({ setAccessToken }) {
  const navigate=useNavigate()
  const animationData=require('../lotties/9573-analytics.json')
  const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
  const email=React.useRef()
  const password=React.useRef()
  const sumbit=async()=>{
    try{
      const res=await axios.post('server/admin/auth/login',{
        email:email.current.value,
        password:password.current.value
      })
      if(res.data!=='user not found'){
        window.localStorage.setItem('AccessToken',res.data.token)
        setAccessToken(res.data.token)
        navigate('/home/Dashboard')
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='w-[70%] h-[60%] flex'>
        <div className=' w-[30%] flex justify-center items-center'>
          <Lottie options={defaultOptions} width={300} height={300}/>
        </div>
        <div className=' w-[70%] flex flex-col justify-center items-center'>
          <input ref={email} placeholder='email' className=' w-[80%] mb-5 p-2' style={{border:'1px solid gray',outlineColor:'#4378ff'}}/>
          <input ref={password} placeholder='password' type={'password'} className=' w-[80%] mb-5 p-2' style={{border:'1px solid gray',outlineColor:'#4378ff'}}/>
          <Space>
            <Button onClick={sumbit}>Submit</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Login