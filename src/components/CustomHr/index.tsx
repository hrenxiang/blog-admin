import React from 'react';
import {useStateContext} from "../../contexts/ContextProvider";

interface CustomHrProps {
    borderColor?: string;
    borderWidth?: number;
    borderStyle: string;
    paddingTop?: string;
    paddingBottom?: string;
    marginTop?: string;
    marginBottom?: string;
}

// 在组件中使用 CustomHrProps
const CustomHr: React.FC<CustomHrProps> = ({
                                               borderColor,
                                               borderWidth,
                                               borderStyle,
                                               paddingTop,
                                               paddingBottom,
                                               marginTop,
                                               marginBottom
                                           }) => {
    const {currentColor} = useStateContext();

    if (!borderColor) {
        borderColor = currentColor;
    }

    const hrStyle: React.CSSProperties = {
        borderColor,
        borderWidth,
        borderStyle,
        paddingTop,
        paddingBottom,
        marginTop,
        marginBottom
    };

    return <hr className="border-1" style={hrStyle}/>;
};

export default CustomHr;