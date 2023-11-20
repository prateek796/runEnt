import { View, Text, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import HamBurger from "../components/HamBurger";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Pressable className="bg-red-400 flex-1">
        <HamBurger />
        <Text className="h-48 ">Banner</Text>
      </Pressable>
    </ScreenWrapper>
  );
}
