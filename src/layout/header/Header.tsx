import React from 'react';
import {S} from "./Header_Styles";
import {Menu} from "../menu/Menu";

export const Header = React.memo(() => {
    return (
        <S.Header>
            <img src="https://sun9-57.userapi.com/c50/g11144/b_26246baa.jpg?ava=1" width={'50px'} alt="logo"/>
            <S.HeaderPanel>
                <div>
                    <Menu/>
                    <span>+38 (097) 987 78 88</span>
                </div>
                <div>
                    <h4>request for a call</h4>
                    <img src="" alt="icon-call"/>
                </div>
            </S.HeaderPanel>
        </S.Header>
    );
})

