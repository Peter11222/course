import styled from 'styled-components'

export const ContentUp = styled.div`
  position: absolute !important;
  transform: translateZ(0);
  background-color: #f0f2f5;
  display: flex;
  left: 208px;
  right: 8px;
  top: 58px;
  height: 50px;
  z-index: 99999;
  align-items: center;
  box-sizing: border-box !important;
  width: calc(100% - 208px - 8px) !important;
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
  div {
    display: flex;

    align-items: center;
  }
  span {
    font-size: 12px;
    line-height: 50px;
    align-items: center;
    margin-left: -2px !important;
  }
`
