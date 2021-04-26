import React from 'react'
import { Router, useHistory } from 'react-router'

interface Props {}

export const Route: React.FC<Props> = (props: Props) => {

    const history = useHistory();

    return (
        <>
            <Router history={history}>
                <Route></Route>
            </Router>
        </>
    );
}