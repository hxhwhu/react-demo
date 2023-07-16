import React from 'react'
import { Button } from 'antd'
import './home.css'

export default function Home() {
  return (
    <div className='P-home'>
      <h1>Home Page</h1>
      <div className='ipt-con'>
        <Button type='primary'>return login</Button>
      </div>
    </div>
  )
}
