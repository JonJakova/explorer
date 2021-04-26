import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from '../../pages/home/Home';

interface Props {}

export const Routes: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Router>
                <Route path="/" exact component={Home} />
            </Router>
        </>
    );
}