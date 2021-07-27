import React from "react";
import { RiAlarmLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";

const iconSize = 28;

const countData = [
  {
    icon: <RiAlarmLine size={iconSize} />,
    place: "London",
    count: 135,
  },
  {
    icon: <BiFoodMenu size={iconSize} />,
    place: "Turkey",
    count: 75,
  },
  {
    icon: <FiTruck size={iconSize} />,
    place: "Paris",
    count: 150,
  },
  {
    icon: <FaRegMap size={iconSize} />,
    place: "Thailand",
    count: 85,
  },
];

export default countData;
