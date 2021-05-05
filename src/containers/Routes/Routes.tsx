import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from '../../pages/home/Home';
import { Explore } from '../../pages/zone/Explore';

interface Props {}

export const Routes: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/explore" component={Explore} />
            </Router>
        </>
    );
}