import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../../data/avatar.jpg';
import { useStateContext } from '../../contexts/ContextProvider';
import UserProfile from "../UserProfile";

interface NavButtonProps {
    title: string;
    customFunc: () => void;
    icon: JSX.Element;
    color: string;
    dotColor?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, customFunc, icon, color, dotColor }) => (
    <div content={title}>
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
      <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
            {icon}
        </button>
    </div>
);

const Navbar: React.FC = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize, setActiveMenu]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className="fixed flex justify-between p-2 md:ml-6 md:mr-6 relative">
            <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
            <div className="flex">
                <div className="relative">
                    <div
                        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick('userProfile')}
                    >
                        <img
                            className="rounded-full w-8 h-8"
                            src={avatar}
                            alt="user-profile"
                        />
                        <p>
                            <span className="text-gray-400 text-14">Hi,</span>{' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </div>
                </div>

                {isClicked.userProfile && (<UserProfile/>)}
            </div>
        </div>
    );
};

export default Navbar;