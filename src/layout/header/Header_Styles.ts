import styled from "styled-components";


const Header = styled.header`
    display: flex;
`
const HeaderPanel = styled.div`
  margin-left: 60px;
  padding: 49px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  border-bottom: 1px solid #FFFFFF40;
  width: 100%;
  menu{
    margin-right: 127px;
  }
  div{
    display: flex;
    align-items: center;
    color: #fff;
  }
`

export const S = {
    Header,
    HeaderPanel

}