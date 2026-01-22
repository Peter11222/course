import React from 'react'
import { RightMainContent } from '@/components/app-content/content/content-right/style'

import { MinusOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'

const RightContent: React.FC = () => {
  return (
    <div className="right-content">
      <RightMainContent>
        <MinusOutlined />
        <Outlet />
      </RightMainContent>
    </div>
  )
}

export default RightContent
