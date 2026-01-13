import React, { useState } from 'react'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import {
  HomeOutlined,
  LayoutOutlined,
  TableOutlined,
  FileTextOutlined,
  GiftOutlined,
  TeamOutlined,
  DownOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  BookOutlined
} from '@ant-design/icons'
import {
  ContentWrapper,
  ContentLeft,
  CollapseContent
} from '@/components/app-content/content/content-left/style'
import {
  teachData,
  courseData,
  orderData,
  activityData,
  teamData,
  productData,
  orgData,
  baseData,
  composeData
} from '@/assets/data/content-data'
const LeftContent: React.FC = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const handleCollapseChange: CollapseProps['onChange'] = (keys) => {
    setActiveKeys(keys as string[])
  }

  const collapseItems: CollapseProps['items'] = [
    {
      key: 'teach',
      label: (
        <div>
          <LayoutOutlined />
          <span>教务中心</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('teach') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {teachData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'course',
      label: (
        <div>
          <TableOutlined />
          <span>课程管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('course') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {courseData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'order',
      label: (
        <div>
          <FileTextOutlined />
          <span>订单管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('order') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {orderData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'activity',
      label: (
        <div>
          <GiftOutlined />
          <span>活动管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('activity') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {activityData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'team',
      label: (
        <div>
          <TeamOutlined />
          <span>团队管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('team') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {teamData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'product',
      label: (
        <div>
          <ShoppingCartOutlined />
          <span>商品管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('product') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {productData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'organize',
      label: (
        <div>
          <BookOutlined />
          <span>机构管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('organize') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {orgData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'basic',
      label: (
        <div>
          <BookOutlined />
          <span>基础管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('basic') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {baseData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    },
    {
      key: 'compose',
      label: (
        <div>
          <SettingOutlined />
          <span>综合管理</span>
          <DownOutlined
            className={`collapse-arrow ${activeKeys.includes('compose') ? 'arrow-active' : ''}`}
          />
        </div>
      ),
      children: (
        <div>
          {composeData.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
      )
    }
  ]

  return (
    <ContentWrapper>
      <ContentLeft>
        <div className="menu-icon">
          <div>
            <HomeOutlined />
            <span>首页</span>
          </div>
        </div>
      </ContentLeft>
      <CollapseContent>
        <Collapse
          items={collapseItems} // 配置所有折叠面板
          activeKey={activeKeys} // 绑定展开状态
          onChange={handleCollapseChange} // 绑定展开/收起事件
          bordered={false} // 隐藏默认边框，适配自定义样式
          expandIcon={() => <></>} // 隐藏Collapse原生箭头，用自定义的DownOutlined
        />
      </CollapseContent>
    </ContentWrapper>
  )
}

export default LeftContent
