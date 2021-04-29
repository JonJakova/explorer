import React from 'react';
import { Navi } from '../../components/Navi';
import { DataLoadedProvider } from '../../core/AreDataLoadedContext';
import { Routes } from '../Routes/Routes';
import './App.css';

interface Props { }

const App: React.FC<Props> = (props: Props) => {

    return (
        <div className="App">
            <DataLoadedProvider>
                <Navi />
                <Routes />
            </DataLoadedProvider>
        </div>
    );
}

export default App;
