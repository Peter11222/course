import styled from 'styled-components'
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 1000 !important;
  background-color: #464c5b;
`
export const HeaderLeft = styled.div`
  display: flex;

  img {
    margin: 0 8px 0 20px;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-align: center;
    line-height: normal;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  /* 核心：确保容器在最上层，避免被遮挡 */
  position: relative;
  z-index: 1000 !important; /* 提升层级，防止被其他元素覆盖 */
  /* 确保容器宽度足够，按钮不被挤压 */
  width: fit-content;
  padding: 0 10px; /* 预留左右空间，避免按钮边缘被截断 */
  margin-right: 40px;
  /* 按钮样式：强制扩大可交互区域 */
  .header-btn {
    background-color: #464c5b !important;
    border-color: #464c5b !important;
    height: 50px !important;
    width: auto !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    /* 强制按钮在容器内的层级 */
    position: relative;
    z-index: 1;
  }
  .header-btn:hover {
    background-color: green !important;
    border-color: green !important;
    color: white !important;
    .bell-icon {
      color: white !important;
    }
  }
`
