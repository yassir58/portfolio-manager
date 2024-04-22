'use client'
import { createContext } from "react";
import {Toaster} from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GlobalContextType {

}
const GlobalContext = createContext<GlobalContextType> ({})



const GlobalProvider = ({children}: {children: React.ReactNode}) => {

    return (
        <GlobalContext.Provider value={{}}>
            {children}
            <Toaster />
        </GlobalContext.Provider>
    )
}

export default GlobalProvider