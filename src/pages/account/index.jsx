import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './account.css'

export default function Account() {// 创建路由钩子
  const navigate = useNavigate()

  return (
    <div className='P-account'>
      <h1>Account Page</h1>
      <div className='ipt-con'>
        <Button type='primary' onClick={()=>{navigate('/home')}}>return home</Button>
      </div>
    </div>
  )
}
