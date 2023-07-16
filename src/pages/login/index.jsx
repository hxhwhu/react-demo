import React from 'react'
import { Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import './login.css'
import imgLogo from './logo192.png'

export default function Login() {
  // 创建路由钩子
  const navigate = useNavigate()

  return (
    <div className='P-login'>
      <img src={imgLogo} className='logo' alt='' />
      <div className='ipt-con'>
        <Input placeholder='account'></Input>
      </div>
      <div className='ipt-con'>
        <Input.Password placeholder='password' />
      </div>
      <div className='ipt-con'>
        <Button type='primary' block={true} onClick={()=>{navigate('/home')}}>login</Button>
      </div>
    </div>
  )
}
