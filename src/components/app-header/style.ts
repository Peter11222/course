import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
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
  transition: color 0.2s;
  .ant-btn {
    left: 10px;
    height: 50px;
    background-color: #464c5b;
    border-color: #464c5b;
  }

  .ant-btn:hover {
    background-color: green !important;
    color: white !important;
    .bell-icon {
      color: white !important;
    }
  }
`
