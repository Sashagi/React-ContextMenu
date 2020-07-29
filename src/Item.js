import React from "react";
import { IoIosCut, IoIosArrowDropright } from "react-icons/io";
import { GrCopy, GrAscend, GrDescend } from "react-icons/gr";
import { FaPaste, FaRegCommentAlt, FaLink } from "react-icons/fa";
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
      { id: 6, name: "Sheet Rows", icon: <BsFileSpreadsheet /> },
      { id: 7, name: "Sheet Columns", icon: <BsLayoutThreeColumns /> },
      { id: 8, name: "Cells & Shift Right", icon: <BsBoxArrowRight /> },
      { id: 9, name: "Cells & Shift Down", icon: <BsBoxArrowInDown /> },
    ],
  },
  {
    id: 10,
    name: "Delete",
    icon: <IoIosArrowDropright />,
    subitems: [
      { id: 11, name: "Sheet Rows", icon: <BsFileSpreadsheet /> },
      { id: 12, name: "Sheet Columns", icon: <BsLayoutThreeColumns /> },
      { id: 13, name: "Cells & Shift left", icon: <BsBoxArrowLeft /> },
      { id: 14, name: "Cells & Shift Up", icon: <BsBoxArrowInUp /> },
    ],
  },
  { id: 15, name: "Clear Contents" },
  {
    id: 16,
    name: "Sort",
    icon: <IoIosArrowDropright />,
    subitems: [
      { id: 17, name: "Sort Ascending", icon: <GrAscend /> },
      { id: 18, name: "Sort Descending", icon: <GrDescend /> },
      { id: 19, name: "Custom Sort", icon: <BsArrowUpDown /> },
    ],
  },
  { id: 20, name: "New Comment" },
  { id: 21, name: "Number Format", icon: <AiFillFormatPainter /> },
  { id: 22, name: "Hyper Link", icon: <FaLink /> },
];
export default Items;
