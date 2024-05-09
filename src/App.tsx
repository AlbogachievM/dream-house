import React, {useEffect, useState} from 'react';
import './App.css';
import {Main} from "./layout/sections/main/Main";
import {Container} from "./components/Container";
import {Wrapper} from "./layout/Wrapper";
import {Route, Routes} from "react-router";
import {About} from "./layout/sections/about/About";


function App() {
    const routes = [
        {path: '/main', element: <Main/>, id: 0},
        {path: '/about', element: <About/>, id: 1},
    ]
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpScroll = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        <div className="App">
            <Container>
                <Wrapper valueScroll={1}>
                    <Routes>
                        {routes.map(({path, element}) => <Route path={path} element={element}/>)}
                    </Routes>
                </Wrapper>
            </Container>
        </div>
    );
}

export default App;
