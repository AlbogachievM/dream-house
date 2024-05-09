import styled from "styled-components";
import {NavLink} from "react-router-dom";


const SidePoints = styled(NavLink)<{style: number}>`
  cursor: pointer;
  position: relative;
  width: 7px;
  height: 7px;
  color: transparent;
  border-radius: 50%;
  background-color: #FFFFFF4D;

  &.active {
    background-color: #FFAC30;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      background-color: transparent;
      border: 1px solid #FFFFFF4D;
      border-radius: 50%;
    }
  }
`

export const S = {
    SidePoints
}