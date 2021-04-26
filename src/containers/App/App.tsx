import React from 'react';
import { Navi } from '../../components/Navi';
import { Routes } from '../Routes/Routes';
import './App.css';

interface Props {}

const App: React.FC<Props> = (props: Props) => {

    return (
        <div className="App">
            <Navi />
            <Routes />
        </div>
    );
}

export default App;
