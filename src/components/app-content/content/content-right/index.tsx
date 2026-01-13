import React from 'react'
import { ContentUp } from '@/components/app-content/content/content-right/style'

import { MinusOutlined } from '@ant-design/icons'
import HomeUp from '@/views/content-views/home/home-up'

import HomeDown from '@/views/content-views/home/home-down'
const RightContent: React.FC = () => {
  return (
    <div>
      <ContentUp>
        <MinusOutlined />
        <HomeUp />
        <HomeDown />
      </ContentUp>
    </div>
  )
}

export default RightContent
