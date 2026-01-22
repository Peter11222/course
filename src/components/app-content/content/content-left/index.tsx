import React, { useState, useEffect } from 'react'
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
import { useNavigate, useLocation } from 'react-router-dom'

const LeftContent: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  // 菜单点击事件
  const handleMenuClick = (path: string, panelKey?: string) => {
    navigate(path)
    // 如果点击的是面板外的项（如首页），不展开面板
    // 如果点击的是面板内的子项，且面板未展开，则展开
    if (panelKey && !activeKeys.includes(panelKey)) {
      setActiveKeys((prev) => [...prev, panelKey])
    }
  }
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const panelRouteMap = {
    teach: '/teach/', // 教务中心
    course: '/course/', // 课程管理
    order: '/order/', // 订单管理
    activity: '/activity/', // 活动管理
    team: '/team/', // 团队管理
    product: '/product/', // 商品管理
    organize: '/organize/', // 机构管理
    basic: '/basic/', // 基础管理
    compose: '/compose/' // 综合管理
  }

  // 监听路由变化：通用收起逻辑（离开当前面板路由时自动收起）
  useEffect(() => {
    // 生成新的activeKeys：只保留当前路由匹配的面板key
    const newActiveKeys = Object.entries(panelRouteMap).reduce(
      (acc, [key, pathPrefix]) => {
        // 如果当前路由在该面板的路由范围内，保留key；否则移除
        if (currentPath.includes(pathPrefix)) {
          acc.push(key)
        }
        return acc
      },
      [] as string[]
    )

    // 仅当activeKeys变化时才更新，避免不必要的重渲染
    if (JSON.stringify(newActiveKeys) !== JSON.stringify(activeKeys)) {
      setActiveKeys(newActiveKeys)
    }
  }, [currentPath])
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'teach')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'course')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'order')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'activity')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'team')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'product')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'organize')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'basic')}
            >
              {item.title}
            </div>
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
            <div
              key={index}
              className={currentPath === item.path ? 'active' : ''}
              onClick={() => handleMenuClick(item.path, 'compose')}
            >
              {item.title}
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <ContentWrapper>
      <ContentLeft>
        <div className="menu-icon">
          <div
            className={`menu-icon ${currentPath === '/' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/')}
          >
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
