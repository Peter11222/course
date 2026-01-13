import { Collapse } from 'antd'
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  background-color: #f0f2f5;
  width: 200px;
  height: 100vh;
  min-height: 100vh;
  cursor: pointer;
  overflow-y: auto !important; /* 🔥 外层显示滚动条 */
  overflow-x: hidden !important; /* 隐藏水平滚动条 */
  box-sizing: border-box !important;
  padding-right: 6px !important;
  border-right: 1px solid gray !important;
  &::-webkit-scrollbar {
    width: 6px !important; /* 滚动条宽度（默认较窄，可调大） */
  }
  &::-webkit-scrollbar-track {
    background: #f0f2f5 !important; /* 轨道背景和侧边栏一致，避免断层 */
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc !important; /* 滑块颜色（浅灰，更柔和） */
    border-radius: 3px !important; /* 滑块圆角，更美观 */
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bbb !important; /*  hover时加深颜色 */
  }
  scrollbar-width: thin !important;
  scrollbar-color: #ccc #f0f2f5 !important;
`
export const ContentLeft = styled.div`
  .menu-icon {
    height: 100%;

    > div {
      display: flex;
      align-items: center;
      height: 50px;
      width: 200px;
      border-bottom: 1px gray solid;

      > :first-child {
        margin: 0 8px 0 30px;
      }
    }

    > div:first-child {
      color: green;
    }
  }
`

export const CollapseContent = styled(Collapse)`
  .ant-collapse {
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
    cursor: pointer;
  }

  .ant-collapse-header {
    border-bottom: 1px solid gray !important;
    display: flex !important; /* 必须是flex布局 */
    align-items: center !important; /* 🔥 实现内容上下居中 */

    padding-left: 20px !important;
    height: 50px !important;
    box-sizing: border-box !important;
  }

  // 5. 隐藏左侧图标
  .ant-collapse-header > div > .anticon {
    display: none !important;
  }
  /* 子菜单容器（.ant-collapse-body） */
  .ant-collapse-body {
    justify-content: center;

    padding: 0 !important; /* 清除默认内边距 */
    border: none !important; /* 清除默认边框 */
  }
  .ant-collapse-item {
    width: 200px !important; /* 统一宽度 */
  }

  /* 子菜单内容容器（包裹所有子项的div） */
  .ant-collapse-body > div {
    border: 1px solid #ddd !important; /* 子菜单边框（与一级主题边框样式一致） */
    border-top: none !important; /* 去掉顶部边框（避免与一级主题边框重叠） */
    padding: 0 !important; /* 清除内容容器内边距 */
    width: 200px !important; /* 宽度与一级主题一致 */
    box-sizing: border-box !important; /* 边框不影响宽度 */
  }
  .ant-collapse-header > span.ant-collapse-title > div {
    justify-content: center;
    align-items: center;
  }
  .ant-collapse-header > span.ant-collapse-title > div > span:first-child {
    margin-left: 2px;
  }
  .ant-collapse-header > span.ant-collapse-title > div > span:nth-of-type(2) {
    margin: 0 20px 0 10px;
  }

  .ant-collapse-panel .ant-collapse-body > div > div {
    display: flex !important;
    height: 50px !important;
    width: 100% !important;
    align-items: center;
    border-bottom: 1px gray solid;
    padding-left: 46px !important;
    box-sizing: border-box !important;
  }

  .collapse-arrow {
    transition: transform 0.2s ease;
    transform: rotate(0deg);
    margin-left: auto;
  }
  .arrow-active {
    transform: rotate(180deg);
  }

 }
`
