import React from "react";
import { IoIosCut, IoIosArrowDropright } from "react-icons/io";
import { GrCopy } from "react-icons/gr";
import { FaPaste, FaRegCommentAlt, FaLink } from "react-icons/fa";
import { AiFillFormatPainter } from "react-icons/ai";
import { IconContext } from "react-icons";

export const Items = [
  { id: 1, name: "Cut", icon: <IoIosCut /> },
  { id: 2, name: "Copy", icon: <GrCopy /> },
  {
    id: 3,
    name: "Paste Options",
  },
  { id: 4, img: [<FaPaste />, <FaPaste />, <FaPaste />, <FaPaste />] },

  {
    id: 5,
    name: "Insert",
    icon: <IoIosArrowDropright />,
    subitems: [
      { id: 6, name: "Sheet Rows", icon: <IoIosCut /> },
      { id: 7, name: "Sheet Columns", icon: <IoIosCut /> },
      { id: 8, name: "Cells & Shift Right", icon: <IoIosCut /> },
      { id: 9, name: "Cells & Shift Down", icon: <IoIosCut /> },
    ],
  },
  {
    id: 10,
    name: "Delete",
    icon: <IoIosArrowDropright />,
    subitems: [
      { id: 6, name: "Sheet Rows", icon: <IoIosCut /> },
      { id: 7, name: "Sheet Columns", icon: <IoIosCut /> },
      { id: 8, name: "Cells & Shift left", icon: <IoIosCut /> },
      { id: 9, name: "Cells & Shift Up", icon: <IoIosCut /> },
    ],
  },
  { id: 9, name: "Clear Contents" },
  {
    id: 10,
    name: "Sort",
    icon: <IoIosArrowDropright />,
    subitems: [
      { id: 6, name: "Sort Ascending", icon: <IoIosCut /> },
      { id: 7, name: "Sort Descending", icon: <IoIosCut /> },
      { id: 8, name: "Custom Sort", icon: <IoIosCut /> },
    ],
  },
  { id: 11, name: "New Comment" },
  { id: 12, name: "Number Format", icon: <AiFillFormatPainter /> },
  { id: 13, name: "Hyper Link", icon: <FaLink /> },
];
export default Items;
