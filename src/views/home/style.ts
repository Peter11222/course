import styled from 'styled-components'
export const Summary = styled.div`
  position: fixed !important;
  display: flex !important;
  top: 100px !important;
  width: 1210px !important;
  height: 160px;
  left: 15px;
  background-color: white;
  border-radius: 5px;

  border: 1px gray solid;
  .anticon-menu {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  span {
    position: absolute;
    top: -5px;
    left: 45px;
    font-size: 14px !important;
  }
  .total {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 50px 0 0 45px;
    border-radius: 5px;
    background-color: #1890ff;
    align-items: center;

    font-size: unset !important;
    .bank-icon {
      position: relative !important;
      color: #ffffff;
      top: 2px;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;
      top: 10px;
      left: 25px;
    }
    p {
      position: relative !important;
      top: 4px;
      color: #ffffff;
      font-size: 24px !important;
      left: 30px;
    }
  }
  .order {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 47px 0 0 45px;
    border-radius: 5px;
    background-color: red;
    align-content: center;
    font-size: unset !important;
    .order-icon {
      position: relative !important;
      top: 2px;
      color: #ffffff;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;
      top: 18px;
      left: 25px;
    }
    p {
      position: relative !important;
      top: 2px;
      color: #ffffff;
      font-size: 24px !important;
      left: 30px;
    }
  }
  .new {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 47px 0 0 45px;
    border-radius: 5px;
    background-color: blue;
    align-content: center;
    font-size: unset !important;
    .new-icon {
      position: relative !important;
      color: #ffffff;
      top: 2px;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;
      top: 18px;
      left: 25px;
    }
    p {
      position: relative !important;

      color: #ffffff;
      font-size: 24px !important;
      left: 30px;
    }
  }
  .user {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 47px 0 0 45px;
    border-radius: 5px;
    background-color: #d4a017;
    align-content: center;
    font-size: unset !important;
    .user-icon {
      position: relative !important;
      top: 2px;
      color: #ffffff;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;
      top: 18px;
      left: 25px;
    }
    p {
      position: relative !important;

      color: #ffffff;
      font-size: 24px !important;
      left: 30px;
    }
  }
`
export const Collect = styled.div`
  position: fixed !important;
  display: flex !important;
  top: 280px !important;
  width: 1210px !important;
  left: 15px;
  height: 193px;
  background-color: white;
  border-radius: 5px;
  border: 1px gray solid;
  .anticon-menu {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  > span {
    position: absolute;
    top: -2px;
    left: 45px;
    font-size: 14px !important;
  }
`
export const TaskAndMessage = styled.div`
  position: fixed !important;
  top: 495px !important;
  width: 1210px !important;
  left: 20px;
  height: 370px;
  border: 1px gray solid;
  border-radius: 2px;
  font-size: unset !important;

  .anticon-calendar {
    position: absolute;
    top: 20px;
    left: 20px;
    font-weight: '20px';
  }
  span {
    position: absolute;
    top: -2px;
    left: 45px;
    font-size: 14px !important;
  }
  .arrow {
    position: absolute;
    height: 50px;
    align-items: center;
    top: 45px;
    width: 300px;
    background-color: #464c5b !important;
  }

  .date-pick {
    width: 360px;
    border: 1px solid #f0f0f0;
    margin-left: 41px;
    margin-top: 95px;
  }

  .calendar-header {
    position: absolute;
    align-items: center;
    border-radius: 2px;
    left: 40px;
    top: 52px;

    .calendar-mode .ant-radio-button-wrapper {
      width: 60px !important;
      height: 32px !important;
    }
    .calendar-mode .ant-radio-button-wrapper-checked {
      width: 60px !important;
      height: 32px !important;
    }

    .year-select {
      margin-right: 2px !important;
      margin-top: -4px !important;
      flex-shrink: 0;
      .ant-select {
        width: 80px !important;
        height: 32px !important;
        .anticon-down {
          margin-top: 8px !important;
          margin-left: 12px !important;
        }

        .ant-select-dropdown {
          width: 90px !important; /* 面板宽度略大于选项宽度，避免滚动条 */
        }
        // .ant-select-content::before {
        //   display: none !important; /* 直接隐藏可能遮挡的伪元素 */
        //   content: none !important;
        // }
        .ant-select-content-value {
          min-width: 40px !important;
          width: auto !important;
          display: block !important; /* 强制块级显示 */
          visibility: visible !important;
          opacity: 1 !important;
          color: #000 !important;
          font-size: 14px !important;
          line-height: 28px !important; /* 与下拉框高度一致，垂直居中 */
          text-align: center !important;
          z-index: 9999 !important; /* 确保在最上层 */
        }

        /* 第三步：移除所有可能遮挡的伪元素/多余样式 */
        .ant-select-content::before,
        .ant-select-content::after {
          display: none !important;
          content: none !important;
        }
      }
    }
    .month-select {
      margin-right: 4px !important;
      margin-top: -4px !important;
      flex-shrink: 0;
      .ant-select {
        left: -2px;
        width: 80px !important;
        height: 32px !important;
        .anticon-down {
          margin-top: 8px !important;
          margin-left: 12px !important;
        }
        .ant-select-content-value {
          min-width: 40px !important;
          width: auto !important;
          display: block !important; /* 强制块级显示 */
          visibility: visible !important;
          opacity: 1 !important;
          color: #000 !important;
          font-size: 14px !important;
          line-height: 28px !important; /* 与下拉框高度一致，垂直居中 */
          text-align: center !important;
          z-index: 9999 !important; /* 确保在最上层 */
        }

        /* 第三步：移除所有可能遮挡的伪元素/多余样式 */
        .ant-select-content::before,
        .ant-select-content::after {
          display: none !important;
          content: none !important;
        }
        .ant-select-input {
          width: 20px !important;
        }
      }
    }

    .ant-radio-button-label {
      box-shadow: none !important;
      top: -15px !important;
      left: 12px !important;
    }
    .ant-picker-content thead th {
      color: #666; /* 表头文字颜色 */
      font-weight: 500; /* 表头字体粗细 */
      padding: 8px 0; /* 表头单元格内边距 */
    }
    .ant-picker-cell {
      margin-left: 5px;
      color: #666; /* 表头文字颜色 */
      font-weight: 500;
      padding: 8px 0; /* 表头字体粗细 */
    }
  }
`
