import styled from "styled-components";


const Menu = styled.menu`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    display: block;
    height: 2px;
    width: 25px;
    background-color: #fff;
    &:nth-child(2){
      width: 13px;
    }
    &:nth-child(3){
      width: 30px;
    }
  }

`


export const S = {
    Menu
}