import React from 'react';
import {useStateContext} from "../../contexts/ContextProvider";
import {Link, NavLink} from "react-router-dom";
import {MdOutlineCancel, MdOutlineViewSidebar, MdTimeline} from "react-icons/md";
import {FiNavigation} from "react-icons/fi";
import {BsCloud, BsFillWrenchAdjustableCircleFill} from "react-icons/bs";
import {RiArticleLine, RiBubbleChartLine, RiEditBoxLine, RiPaletteLine} from "react-icons/ri";
import {LuPanelLeft, LuUsers} from "react-icons/lu";
import {TbCategory} from "react-icons/tb";
import {BiColorFill, BiDoughnutChart} from "react-icons/bi";
import {HiOutlineChartPie} from "react-icons/hi";
import {HiOutlineArrowTrendingUp} from "react-icons/hi2";
import {AiOutlineRadarChart} from "react-icons/ai";
import {VscGraphScatter} from "react-icons/vsc";
import {GiRadarCrossSection} from "react-icons/gi";

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'panel',
                path: 'panel',
                icon: <LuPanelLeft />,
            },
        ],
    },

    {
        title: 'Blog Data',
        links: [
            {
                name: 'article',
                path: 'article',
                icon: <RiArticleLine />,
            },
            {
                name: 'categories',
                path: 'categories',
                icon: <TbCategory />,
            },
            {
                name: 'timeline',
                path: 'timeline',
                icon: <MdTimeline />,
            },
            {
                name: 'nav',
                path: 'nav',
                icon: <FiNavigation />,
            },
            {
                name: 'palette',
                path: 'palette',
                icon: <RiPaletteLine />,
            },
            {
                name: 'employees',
                path: 'employees',
                icon: <LuUsers />,
            },
        ],
    },
    {
        title: 'Page Data',
        links: [
            {
                name: 'Sidebar',
                path: 'sidebar',
                icon: <MdOutlineViewSidebar />,
            },
            {
                name: 'Theme color',
                path: 'theme-color',
                icon: <BiColorFill />,
            }
        ],
    },
    {
        title: 'Function Page',
        links: [
            {
                name: 'Editor',
                path: 'editor',
                icon: <RiEditBoxLine />,
            }
        ],
    },
    {
        title: 'Chart Data',
        links: [
            {
                name: 'Bubble Chart',
                path: 'chat/bubble',
                icon: <RiBubbleChartLine />,
            },
            {
                name: 'Doughnut Chart',
                path: 'chat/doughnut',
                icon: <BiDoughnutChart />,
            },
            {
                name: 'Line Chart',
                path: 'chat/line',
                icon: <HiOutlineArrowTrendingUp />,
            },
            {
                name: 'Pie Chart',
                path: 'chat/pie',
                icon: <HiOutlineChartPie />,
            },
            {
                name: 'Polar Area Chart',
                path: 'chat/polar',
                icon: <GiRadarCrossSection />,
            },
            {
                name: 'Radar Chart',
                path: 'chat/radar',
                icon: <AiOutlineRadarChart />,
            },
            {
                name: 'Scatter Chart',
                path: 'chat/scatter',
                icon: <VscGraphScatter />,
            },
            {
                name: 'WordCloud Chart',
                path: 'chat/word_cloud',
                icon: <BsCloud />,
            }
        ],
    }
];

const Sidebar: React.FC = () => {

    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <>
            <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
                {activeMenu && (
                    <>
                        <div className="flex justify-between items-center">
                            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                                <BsFillWrenchAdjustableCircleFill /> <span>Huangrx</span>
                            </Link>
                            <div className="flex justify-between items-center">
                                <div className="e-control e-tooltip e-lib">
                                <button
                                    type="button"
                                    onClick={() => setActiveMenu(!activeMenu)}
                                    style={{ color: currentColor }}
                                    className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                                >
                                    <MdOutlineCancel />
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 ">
                            {links.map((item) => (
                                <div key={item.title}>
                                    <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                        {item.title}
                                    </p>
                                    {item.links.map((link) => (
                                        <NavLink
                                            to={`/${link.path}`}
                                            key={link.path}
                                            onClick={handleCloseSideBar}
                                            style={({ isActive }) => ({
                                                backgroundColor: isActive ? currentColor : '',
                                            })}
                                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                        >
                                            {link.icon}
                                            <span className="capitalize ">{link.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Sidebar;