import styled from "styled-components";
import bg1 from '../assets/images/page1bg.png'
import bg2 from '../assets/images/page2bg.png'
import {Header} from "./header/Header";
import {FC, ReactNode} from "react";
import {Aside} from "./aside/Aside";
import {Sidebar} from "./sidebar/Sidebar";

type WrapperType = {
    valueScroll: number
    children: ReactNode
}

export const Wrapper: FC<WrapperType> = ({children, valueScroll}) => {
    let bg = valueScroll === 0 ? bg1 : bg2
    return (
        <WrapperStyle bg={bg}>
            <Header/>
            <Aside/>
            <div>
                {children}
            </div>
            <Sidebar/>
        </WrapperStyle>
    )
}

const WrapperStyle = styled.div<{ bg: string }>`
  width: 100%;
  min-height: 101vh;
  background-image: url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #00000073;
  background-blend-mode: color;
  padding: 0 115px 44px 65px;
`