import React, {createContext, useContext, useState} from 'react';

interface StateContextProps {
    currentColor: string;
    currentMode: string;
    activeMenu: boolean;
    screenSize: any;
    setScreenSize: (size: any) => void;
    handleClick: (clicked: string) => void;
    isClicked: any;
    initialState: any;
    setIsClicked: (state: any) => void;
    setActiveMenu: (active: boolean) => void;
    setCurrentColor: (color: string) => void;
    setCurrentMode: (mode: string) => void;
    setMode: (mode: string) => void;
    setColor: (color: string) => void;
    themeSettings: boolean;
    setThemeSettings: (settings: boolean) => void;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

interface ContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({children}) => {
    const [screenSize, setScreenSize] = useState<any>(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (mode: string) => {
        setCurrentMode(mode);
        localStorage.setItem('themeMode', mode);
    };

    const setColor = (color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked: string) => setIsClicked({...initialState, [clicked]: true});

    return (
        <StateContext.Provider
            value={{
                currentColor,
                currentMode,
                activeMenu,
                screenSize,
                setScreenSize,
                handleClick,
                isClicked,
                initialState,
                setIsClicked,
                setActiveMenu,
                setCurrentColor,
                setCurrentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextProps => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a ContextProvider');
    }
    return context;
};
