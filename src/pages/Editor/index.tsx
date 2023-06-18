import React from 'react';
import {MdRtEditor, TipTapEditor} from "../../components/Editor";
import CustomHr from "../../components/CustomHr";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";

const Editor = () => {
    return (
        <div className="my-10">
            <CustomBreadcrumb items={[{title: "home"}, {title: "article"}]} separator="/"/>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
                <div className="bg-light-gray border-1 border-solid border-gray-400 border-opacity-40 rounded-xl p-6 2xl:p-10 pb-24 2xl:pb-32">
                    <h1 className="text-3xl font-bold">Tiptop</h1>
                    <CustomHr borderStyle="solid" borderColor="rgb(107 114 128)" marginTop="1.5rem" marginBottom="1rem"/>
                    <TipTapEditor/>
                </div>
                <div className="bg-light-gray border-1 border-solid border-gray-400 border-opacity-40 rounded-xl p-6 2xl:p-10 pb-24 2xl:pb-32">
                    <h1 className="text-3xl font-bold">MdEditor</h1>
                    <CustomHr borderStyle="solid" borderColor="rgb(107 114 128)" marginTop="1.5rem" marginBottom="1rem"/>
                    <MdRtEditor/>
                </div>
            </div>
        </div>
    );
};

export default Editor;