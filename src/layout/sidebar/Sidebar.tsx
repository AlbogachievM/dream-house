import {S} from "./Sidebar_Styles";
import {Circle} from "../../components/circle/Circle";


export const Sidebar = () => {
    const circleElements = [
        {id: 1, to: '/main'},
        {id: 2, to: '/about'},
        {id: 3, to: '/page3'},
        {id: 4, to: '/page4'},
        {id: 5, to: '/page5'},
    ]


    return (
        <S.Sidebar>
            {circleElements.map(cl => <Circle key={cl.id} to={cl.to} circle={'set-side-point'}/>)}
        </S.Sidebar>
    )
}