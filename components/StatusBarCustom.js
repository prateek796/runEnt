import React from "react";
import { StatusBar } from "react-native";

const StatusBarCustom = ({ backgroundColor }) => {
  return (
    <StatusBar backgroundColor={backgroundColor} />
  );
};

export default StatusBarCustom;