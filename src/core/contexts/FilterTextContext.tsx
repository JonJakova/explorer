import React, { useContext, useState } from 'react'

const FilterTextContext = React.createContext<any>(undefined);

export const useFilterText = () => useContext(FilterTextContext);

export const FilerTextProvider: React.FC = ({ children }) => {

    const [filterText, setFilterText] = useState<string>("");

    return (
        <FilterTextContext.Provider value={{ filterText, setFilterText }}>
            {children}
        </FilterTextContext.Provider>
    )
}