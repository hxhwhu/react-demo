import React from 'react'
import { Button } from 'antd'
import './account.css'

export default function Home() {
  return (
    <div className='P-account'>
      <h1>Account Page</h1>
      <div className='ipt-con'>
        <Button type='primary'>return home</Button>
      </div>
    </div>
  )
}
