import styled from 'styled-components'
export const Summary = styled.div`
  position: relative;
  top: 130px !important;
  width: 1210px !important;
  height: 160px;
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
    top: 2px;
    left: 45px;
    font-size: 14px !important;
  }
  .total {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 35px 0 0 45px;
    border-radius: 5px;
    background-color: #1890ff;
    align-content: center;
    font-size: unset !important;
    .bank-icon {
      position: relative !important;
      color: #ffffff;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;

      left: 25px;
    }
    p {
      position: relative !important;

      color: #ffffff;
      font-size: 24px !important;
      left: 30px;
    }
  }
  .order {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 35px 0 0 45px;
    border-radius: 5px;
    background-color: red;
    align-content: center;
    font-size: unset !important;
    .order-icon {
      position: relative !important;
      color: #ffffff;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;

      left: 25px;
    }
    p {
      position: relative !important;

      color: #ffffff;
      font-size: 24px !important;
      left: 30px;
    }
  }
  .new {
    display: flex !important;
    width: 250px;
    height: 80px;
    margin: 35px 0 0 45px;
    border-radius: 5px;
    background-color: blue;
    align-content: center;
    font-size: unset !important;
    .new-icon {
      position: relative !important;
      color: #ffffff;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;

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
    margin: 35px 0 0 45px;
    border-radius: 5px;
    background-color: #d4a017;
    align-content: center;
    font-size: unset !important;
    .user-icon {
      position: relative !important;
      color: #ffffff;
      font-size: 32px !important;
      left: 15px;
    }
    span {
      position: relative !important;
      color: #ffffff;

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
  top: 260px !important;
  width: 1210px !important;
  left: 30px;
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
    top: 2px;
    left: 45px;
    font-size: 14px !important;
  }
`
export const TaskAndMessage = styled.div`
  position: fixed !important;
  top: 475px !important;
  width: 1210px !important;
  height: 200px;
  border: 1px gray solid;
  .task {
    position: absolute;
    width: 636px;
    height: 336;
    background-color: blue;
  }
`
