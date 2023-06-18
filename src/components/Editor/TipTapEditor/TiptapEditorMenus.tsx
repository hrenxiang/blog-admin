import React from "react";
import {AiOutlineBold, AiOutlineItalic, AiOutlineStrikethrough} from "react-icons/ai";
import {FaCode} from "react-icons/fa";
import {LuHeading1, LuHeading2, LuHeading3} from "react-icons/lu";
import {RiFormatClear, RiParkingLine} from "react-icons/ri";
import {MdFormatListBulleted, MdFormatListNumbered, MdOutlineFormatQuote, MdRedo, MdUndo} from "react-icons/md";
import {BiCodeBlock} from "react-icons/bi";
import {VscHorizontalRule} from "react-icons/vsc";
import {BsTextWrap} from "react-icons/bs";
import {Button, Divider, Tooltip} from "antd";

interface MenuBarProps {
    editor: any; // Replace 'any' with the actual type of the editor prop
}

const TiptapEditorMenus: React.FC<MenuBarProps> = ({editor}) => {
    if (!editor) {
        return null
    }

    const items = [
        {
            icon: <AiOutlineBold/>,
            title: "Bold",
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive("bold"),
        },
        {
            icon: <AiOutlineItalic/>,
            title: "Italic",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic"),
        },
        {
            icon: <AiOutlineStrikethrough/>,
            title: "Strike",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike"),
        },
        {
            icon: <FaCode/>,
            title: "Code",
            action: () => editor.chain().focus().toggleCode().run(),
            isActive: () => editor.isActive("code"),
        },
        {
            type: "divider",
        },
        {
            icon: <LuHeading1/>,
            title: "Heading 1",
            action: () => editor.chain().focus().toggleHeading({level: 1}).run(),
            isActive: () => editor.isActive("heading", {level: 1}),
        },
        {
            icon: <LuHeading2/>,
            title: "Heading 2",
            action: () => editor.chain().focus().toggleHeading({level: 2}).run(),
            isActive: () => editor.isActive("heading", {level: 2}),
        },
        {
            icon: <LuHeading3/>,
            title: "Heading 3",
            action: () => editor.chain().focus().toggleHeading({level: 3}).run(),
            isActive: () => editor.isActive("heading", {level: 3}),
        },
        {
            icon: <RiParkingLine/>,
            title: "Paragraph",
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive("paragraph"),
        },
        {
            type: "divider",
        },
        {
            icon: <MdFormatListBulleted/>,
            title: "Bullet List",
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList"),
        },
        {
            icon: <MdFormatListNumbered/>,
            title: "Ordered List",
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderList"),
        },
        {
            icon: <BiCodeBlock/>,
            title: "Code Block",
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive("codeBlock"),
        },
        {
            type: "divider",
        },
        {
            icon: <MdOutlineFormatQuote/>,
            title: "Blockquote",
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive("blockquote"),
        },
        {
            icon: <VscHorizontalRule/>,
            title: "Horizontal Rule",
            action: () => editor.chain().focus().setHorizontalRule().run()
        },
        {
            type: "divider",
        },
        {
            icon: <BsTextWrap/>,
            title: "Hard Break",
            action: () => editor.chain().focus().setHardBreak().run()
        },
        {
            icon: <RiFormatClear/>,
            title: "Clear Format",
            action: () => editor.chain().focus().clearNodes().unsetAllMarks().run()
        },
        {
            type: "divider",
        },
        {
            icon: <MdUndo/>,
            title: "Undo",
            action: () => editor.chain().focus().undo().run()
        },
        {
            icon: <MdRedo/>,
            title: "Redo",
            action: () => editor.chain().focus().clearNodes().redo().run()
        }
    ];

    return (
        <>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.type === 'divider' ? (
                        <Divider type="vertical" className="mx-5"/>
                    ) : (
                        <Tooltip title={item.title} placement="top">
                            <Button
                                className={`${item.isActive ? (item.isActive() ? 'is-active' : '') : ''}`}
                                onClick={item.action}
                                icon={item.icon}
                            >
                            </Button>
                        </Tooltip>
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

export default TiptapEditorMenus;