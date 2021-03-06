import React from "react";
import { IoIosCut, IoIosArrowDropright } from "react-icons/io";
import { GrCopy, GrAscend, GrDescend } from "react-icons/gr";
import { FaPaste, FaLink } from "react-icons/fa";
import { AiFillFormatPainter } from "react-icons/ai";
import {
  BsFileSpreadsheet,
  BsLayoutThreeColumns,
  BsBoxArrowRight,
  BsBoxArrowInDown,
  BsBoxArrowInUp,
  BsBoxArrowLeft,
  BsArrowUpDown,
} from "react-icons/bs";
import { IconContext } from "react-icons";

export const Items = [
  { id: 0, name: "Cut", icon: <IoIosCut /> },
  { id: 1, name: "Copy", icon: <GrCopy /> },
  {
    id: 2,
    name: "Paste Options",
  },
  {
    id: 3,
    img: [
      <FaPaste id="aa" />,
      <FaPaste id="bb" />,
      <FaPaste id="cc" />,
      <FaPaste id="dd" />,
    ],
  },

  {
    id: 4,
    name: "Insert",
    icon: <IoIosArrowDropright />,
    showSubMenu: false,
    subitems: [
      { id: "a", name: "Sheet Rows", icon: <BsFileSpreadsheet /> },
      { id: "b", name: "Sheet Columns", icon: <BsLayoutThreeColumns /> },
      { id: "c", name: "Cells & Shift Right", icon: <BsBoxArrowRight /> },
      { id: "d", name: "Cells & Shift Down", icon: <BsBoxArrowInDown /> },
    ],
  },
  {
    id: 5,
    name: "Delete",
    icon: <IoIosArrowDropright />,
    showSubMenu: false,
    subitems: [
      { id: "e", name: "Sheet Rows", icon: <BsFileSpreadsheet /> },
      { id: "f", name: "Sheet Columns", icon: <BsLayoutThreeColumns /> },
      { id: "g", name: "Cells & Shift left", icon: <BsBoxArrowLeft /> },
      { id: "h", name: "Cells & Shift Up", icon: <BsBoxArrowInUp /> },
    ],
  },
  { id: 6, name: "Clear Contents" },
  {
    id: 7,
    name: "Sort",
    icon: <IoIosArrowDropright />,
    showSubMenu: false,
    subitems: [
      { id: "i", name: "Sort Ascending", icon: <GrAscend /> },
      { id: "j", name: "Sort Descending", icon: <GrDescend /> },
      { id: "k", name: "Custom Sort", icon: <BsArrowUpDown /> },
    ],
  },
  { id: 8, name: "New Comment" },
  { id: 9, name: "Number Format", icon: <AiFillFormatPainter /> },
  { id: 10, name: "Hyper Link", icon: <FaLink /> },
];
export default Items;
