import React from 'react'
import { ContentUp } from '@/components/app-content/content/content-right/style'

import { MinusOutlined } from '@ant-design/icons'

import Home from '@/views/home'
const RightContent: React.FC = () => {
  return (
    <div className="right-content">
      <ContentUp>
        <MinusOutlined />
        <Home />
      </ContentUp>
    </div>
  )
}

export default RightContent
