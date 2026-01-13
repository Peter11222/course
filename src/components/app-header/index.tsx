import React from 'react'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from '@/components/app-header/style'
import { Badge, Button } from 'antd'
import { BellOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons'

const AppHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <img src={require('@/assets/img/logo.png')} alt="logo" />
        <span>在线课程管理系统</span>
      </HeaderLeft>
      <HeaderRight>
        <Button>
          <Badge
            count={5}
            style={{
              width: '14px',
              height: '14px',
              minWidth: '14px',
              fontSize: '8px',
              lineHeight: '14px',
              borderRadius: '50%'
            }}
          >
            <BellOutlined className="bell-icon" style={{ fontSize: '20px' }} />
          </Badge>
        </Button>
        <Button icon={<UserOutlined style={{ fontSize: '20px' }} />}>
          账户设置
        </Button>
        <Button icon={<PoweroffOutlined style={{ fontSize: '20px' }} />}>
          退出登录
        </Button>
      </HeaderRight>
    </HeaderWrapper>
  )
}

export default AppHeader
