import React from 'react'
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router';
function Header({setAccessToken}) {
  const navigate=useNavigate()
  const logout=()=>{
    window.localStorage.removeItem('AccessToken')
    setAccessToken(null)
    navigate('/login')
  }
  return (
    <div className='h-[10%] flex border-b-2 border-gray-300'>
      <div className='w-[15%] p-5 flex items-center justify-center'>
        <img src="https://mubtakar.com/wp-content/uploads/2019/10/weblogo-1.png" alt="" className=' w-32'/>
      </div>
      <div className='w-[75%] flex justify-center items-center font-bold'>
        Mubtakar agency
      </div>
      <Space className="site-button-ghost-wrapper">
        <Button type="dashed" onClick={logout}>
          Logout
        </Button>
      </Space>
      
    </div>
  )
}

export default Header