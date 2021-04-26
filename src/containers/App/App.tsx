import React from 'react';
import { Nav } from '../../components/Nav';
import { Route } from '../Routes/Route';
import './App.css';

interface Props {}

const App: React.FC<Props> = (props: Props) => {

    return (
        <div className="App">
            <Nav/>
            <Route/>
        </div>
    );
}

export default App;
