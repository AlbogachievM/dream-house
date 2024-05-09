import React, {FC} from 'react';
import {S} from "./Circle_Styles";

type CircleType = {
    circle: 'set-side-point',
    to: string
    style?: any
}

export const Circle: FC<CircleType> = ({circle, to}, style) => {
    return (<>
        {circle === 'set-side-point' ?
            <S.SidePoints to={to} style={style}/> : null}

    </>)
}
