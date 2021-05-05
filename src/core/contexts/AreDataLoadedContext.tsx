import React, { useContext, useState } from 'react'

const AreDataLoadedContext = React.createContext<any>(undefined);

export const useDataLoaded = () => useContext(AreDataLoadedContext);

export const DataLoadedProvider: React.FC = ({ children }) => {

    const [areDataLoaded, setAreDataLoaded] = useState(false);

    return (
        <AreDataLoadedContext.Provider value={{ areDataLoaded, setAreDataLoaded }}>
            {children}
        </AreDataLoadedContext.Provider>
    )
}
