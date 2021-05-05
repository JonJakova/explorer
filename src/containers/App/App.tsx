import React from 'react';
import { Navi } from '../../components/navi/Navi';
import { DataLoadedProvider } from '../../core/contexts/AreDataLoadedContext';
import { FilerTextProvider } from '../../core/contexts/FilterTextContext';
import { Routes } from '../Routes/Routes';
import './App.css';

interface Props { }

const App: React.FC<Props> = (props: Props) => {

    return (
        <div className="App">
            <DataLoadedProvider>
                <FilerTextProvider>
                    <Navi />
                    <Routes />
                </FilerTextProvider>
            </DataLoadedProvider>
        </div>
    );
}

export default App;
