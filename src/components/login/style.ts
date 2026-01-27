import styled from 'styled-components'

export const LoginWrapper = styled.div`
width: 100vw; 
height: 100vh;
overflow: hidden !important;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
box-sizing: border-box;
position: relative;
.logo{
    display: flex;
    align-items: center;
    gap: 8px;
    top: 360px;
    right: 320px;
    position: absolute;
    span {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
    line-height: normal;
  }
    
}
.base {
  position: absolute;
  width: 289px;
  height: 260px;
  background-color: white;
  top: 410px;
  left: 980px;
  // 补充：需要 display: flex 才能让 align-items 生效
  display: flex; 
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    color: #999;
    font-size: 14px;
    text-align: center;
  }

  .form {
    padding: 2px;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  // ✅ 关键修复：把边框样式直接写在最外层 .user/.password 上
  .user, .password {
    border: 2px solid #999 !important; // 强制生效（排除其他样式干扰）
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 8px;
    height: 40px;
    box-sizing: border-box; // 边框计入宽高，避免布局偏移
    gap: 8px;
    width: 100%; // 补充：让输入框占满 form 宽度

    img {
      width: 16px;
      height: 16px;
    }

    input {
      border: none;
      outline: none;
      flex: 1;
      font-size: 14px;

      &::placeholder {
        color: #999;
      }
    }
  }
 .btn {
    width: 100%;
    margin-top: 10px;

    // 仅覆盖当前按钮的 Primary 样式
    .ant-btn-primary {
      width: 100%;
      height: 40px;
      background-color: #999 !important; 
      border-color: #999 !important;
      border-radius: 2px !important; // 大圆角
      font-weight: 500;

      &:hover {
        background-color: #85CE61;
        border-color: #67C23A !important;

      }

      &:active {
        background-color: #52C41A !important;
    border-color: #389e0d !important;
      }
    }
  }
  
}
`