import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import {useStateContext} from "./contexts/ContextProvider";
import {FiSettings} from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import ThemeSettings from "./components/ThemeSettings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
    Article,
    BubbleChart, Categories,
    DoughnutChart,
    LineChart, Nav, Palette,
    PieChart,
    PolarAreaChart,
    RadarChart,
    ScatterChart,
    Timeline,
    WordCloudChart
} from "./pages";
import Editor from "./pages/Editor";

const App: React.FC = () => {

    const {
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        activeMenu,
        themeSettings,
        setThemeSettings
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, [setCurrentColor, setCurrentMode]);

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-3 bottom-10" style={{zIndex: '1000'}}>
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{background: currentColor, borderRadius: '50%'}}
                            className="text-[1rem] text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings/>
                        </button>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )}
                    <div
                        className={
                            activeMenu
                                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 admin-content '
                                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                        }
                    >
                        <div className={activeMenu ? "fixed bg-main-bg dark:bg-main-dark-bg navbar admin-content" : "fixed bg-main-bg dark:bg-main-dark-bg navbar w-full"}>
                            <Navbar/>
                        </div>
                        <div className="m-2 md:m-10 mt-24 py-2 px-1 md:py-4 md:px-1">
                            {themeSettings && (<ThemeSettings/>)}

                            <Routes>
                                <Route path="/article" element={(<Article/>)}/>
                                <Route path="/timeline" element={(<Timeline/>)}/>
                                <Route path="/categories" element={(<Categories/>)}/>
                                <Route path="/nav" element={(<Nav/>)}/>
                                <Route path="/palette" element={(<Palette/>)}/>
                                <Route path="/chat/bubble" element={(<BubbleChart/>)}/>
                                <Route path="/chat/doughnut" element={(<DoughnutChart/>)}/>
                                <Route path="/chat/line" element={(<LineChart/>)}/>
                                <Route path="/chat/pie" element={(<PieChart/>)}/>
                                <Route path="/chat/polar" element={(<PolarAreaChart/>)}/>
                                <Route path="/chat/radar" element={(<RadarChart/>)}/>
                                <Route path="/chat/scatter" element={(<ScatterChart/>)}/>
                                <Route path="/chat/word_cloud" element={(<WordCloudChart/>)}/>
                                <Route path="/editor" element={(<Editor/>)}/>
                            </Routes>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
