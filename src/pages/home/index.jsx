import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './home.css'

export default function Home() {
  // 创建路由钩子
  const navigate = useNavigate()

  return (
    <div className='P-home'>
      <h1>Home Page</h1>
      <div className='ipt-con'>
        <Button type='primary' onClick={()=>{navigate('/account')}}>goto account</Button>
      </div>
      <div className='ipt-con'>
        <Button type='primary' onClick={()=>{navigate('/login')}}>return login</Button>
      </div>
    </div>
  )
}
