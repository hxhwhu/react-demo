import React from 'react'
import { Button, Input } from 'antd'
import './login.css'
import imgLogo from './logo192.png'

export default function Login() {
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
        <Button type='primary' block={true}>login</Button>
      </div>
    </div>
  )
}
