import React, {useState} from 'react';
import {MdOutlineCancel} from 'react-icons/md';
import {BsCheck} from 'react-icons/bs';

import {useStateContext} from '../../contexts/ContextProvider';
import CustomHr from "../CustomHr";
import {TbMoon, TbSun} from "react-icons/tb";
import {useLottie} from "lottie-react";
import AdminGithubAnimation from "../../assert/animation/admin-github.json";
import AdminGithubWhiteAnimation from "../../assert/animation/admin-github-white.json";
import {FiThumbsUp} from "react-icons/fi";
import {Link} from "react-router-dom";

export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        color: '#FB9678',
        name: 'orange-theme',
    },
];

const ThemeSettings: React.FC = () => {
    const {setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext();

    const [backgroundColor, setBackgroundColor] = useState<string>('initial');

    const handleMouseOverGithubButton = () => {
        if (currentMode === "Light") {
            setBackgroundColor(`radial-gradient(circle at top left, ${currentColor}, white)`)
        } else {
            setBackgroundColor(`radial-gradient(circle at top left, ${currentColor}, #1b1b1b)`)
        }
    }

    const handleMouseOutGithubButton = () => {
        setBackgroundColor("initial")
    }

    const adminGithubOptions = {
        loop: true,
        autoplay: true,
        animationData: currentMode === "Light" ? AdminGithubAnimation : AdminGithubWhiteAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
        style: {
            width: "75px",
            height: "75px",
        }
    };

    const {View: adminGithubLottie} = useLottie(adminGithubOptions);

    return (
        <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div
                className="float-right h-screen dark:text-gray-200  bg-white dark:bg-main-dark-bg w-400 overflow-y-auto">
                <div className="flex justify-between items-center p-6 ml-4">
                    <p className="font-semibold text-lg">Settings</p>
                    <button
                        type="button"
                        onClick={() => setThemeSettings(false)}
                        style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <MdOutlineCancel/>
                    </button>

                </div>
                <div className="flex-col p-6 ml-4">
                    <p className="font-semibold text-lg ">Theme Option</p>
                    <CustomHr borderStyle="dashed" marginTop="0.8rem" marginBottom="1.5rem"/>

                    <div
                        className="flex justify-between py-2 px-5 border-1 border-solid border-gray-400 border-opacity-40 rounded-lg">
                        <div
                            className={`hover:bg-gray-100 dark:hover:bg-gray-500 flex-grow rounded-lg px-2 py-3 ${currentMode === "Light" ? "bg-gray-200 dark:bg-gray-400" : ""}`}
                            onClick={() => setMode("Light")}>
                            <button className="flex justify-center items-center w-full gap-2">
                                <div>
                                    <TbSun/>
                                </div>
                                <div>
                                    Light
                                </div>
                            </button>
                        </div>
                        <div
                            className={`hover:bg-gray-100 dark:hover:bg-gray-500 flex-grow rounded-lg px-2 py-3 ${currentMode === "Dark" ? "bg-gray-200 dark:bg-gray-400" : ""}`}
                            onClick={() => setMode("Dark")}>
                            <button className="flex justify-center items-center w-full gap-2 ">
                                <div>
                                    <TbMoon/>
                                </div>
                                <div>
                                    Dark
                                </div>
                            </button>
                        </div>
                    </div>

                    {/*<div className="mt-4">*/}
                    {/*    <input*/}
                    {/*        type="radio"*/}
                    {/*        id="light"*/}
                    {/*        name="theme"*/}
                    {/*        value="Light"*/}
                    {/*        className="cursor-pointer"*/}
                    {/*        onChange={setMode}*/}
                    {/*        checked={currentMode === 'Light'}*/}
                    {/*    />*/}
                    {/*    <label htmlFor="light" className="ml-2 text-md cursor-pointer">*/}
                    {/*        Light*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    {/*<div className="mt-2">*/}
                    {/*    <input*/}
                    {/*        type="radio"*/}
                    {/*        id="dark"*/}
                    {/*        name="theme"*/}
                    {/*        value="Dark"*/}
                    {/*        onChange={setMode}*/}
                    {/*        className="cursor-pointer"*/}
                    {/*        checked={currentMode === 'Dark'}*/}
                    {/*    />*/}
                    {/*    <label htmlFor="dark" className="ml-2 text-md cursor-pointer">*/}
                    {/*        Dark*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
                <div className="p-6 ml-4">
                    <p className="font-semibold text-lg ">Theme Colors</p>
                    <CustomHr borderStyle="dashed" marginTop="0.8rem" marginBottom="1.5rem"/>
                    <div className="flex gap-3">
                        {themeColors.map((item, index) => (
                            <div key={index} content={item.name}>
                                <div
                                    className="relative mt-2 cursor-pointer flex gap-5 items-center"
                                    key={item.name}
                                >
                                    <button
                                        type="button"
                                        className="h-8 w-8 rounded-full cursor-pointer"
                                        style={{backgroundColor: item.color}}
                                        onClick={() => setColor(item.color)}
                                    >
                                        <BsCheck
                                            className={`ml-[0.2rem] text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 ml-4">
                    <p className="font-semibold text-lg ">Github Link</p>
                    <CustomHr borderStyle="dashed" marginTop="0.8rem" marginBottom="1.5rem"/>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div>
                                {adminGithubLottie}
                            </div>
                            <div className="flex-grow text-xl font-medium">Huangrx</div>
                        </div>
                        <div className="w-full">
                            <Link to="https://github.com/hrenxiang">
                                <button
                                    className={`w-full py-3 px-2 border-1 border-solid border-gray-400 border-opacity-40 rounded-lg 
                                flex justify-center items-center gap-2`}
                                    onMouseOver={handleMouseOverGithubButton}
                                    onMouseOut={handleMouseOutGithubButton}
                                    style={{background: backgroundColor}}
                                >
                                    <div>
                                        <FiThumbsUp/>
                                    </div>
                                    <div>
                                        Start-Me
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-6 ml-4">
                    <p className="font-semibold text-lg ">Contact Me</p>
                    <CustomHr borderStyle="dashed" marginTop="0.8rem" marginBottom="1.5rem"/>
                    <img src="https://images.huangrx.cn/uploads/2023/05/01/66e7f6b3ed5be545c39ef15a5edae42.jpg"
                         className="border-1 border-solid border-gray-400 border-opacity-40 rounded-lg"
                         alt="wechat - img"/>
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;