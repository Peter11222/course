import styled from 'styled-components'

export const ContentUp = styled.div`
  position: relative;
  transform: translateZ(0);
  background-color: #f0f2f5;
  display: flex;
  left: 200px;
  right: 8px;
  top: 44px;
  height: 56px;

  align-items: center;
  box-sizing: border-box !important;
  width: 100% !important;
  .anticon-minus {
    color: #4c068aff;
    transform: rotate(90deg) !important;
    display: inline-block !important;
    margin-left: -18px !important;

    svg {
      filter: contrast(3);
      font-size: 25px !important;
    }
  }
  .home-title {
    display: flex;
    width: 100%;
    align-items: center;
  }
  span {
    font-size: 12px;
    line-height: 60px;
    align-items: center;
    margin-left: -2px !important;
  }
`
