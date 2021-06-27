import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from '../../pages/home/Home';
import { Explore } from '../../pages/zone/Explore';

interface Props { }

export const Routes: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Router>
                <Switch>
                    {/* component={props => <Reserve {...props} />}  */}
                    <Route path="/" exact component={Home} />
                    <Route path="/explore/:zone" component={props => <Explore {...props} />} exact />
                </Switch>
            </Router>
        </>
    );
}


// <Route
//   path='/project/:id'
//   render={({ location }) => {
//     const { state } = location;
//     return <ProjectDetails project={state.project} /> 
//   }}
// />
