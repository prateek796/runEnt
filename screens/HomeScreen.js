import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import HamBurger from "../components/HamBurger";
import Carousel from "../components/Carousel";
import CarButtons from "../components/CarButtons";
import CabBookingModal from "../components/CabBookingModal";
import Banner from "../components/Banner";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView>
      <Pressable className="flex-1">
        <HamBurger />
        <View className="flex h-64">
          <Carousel />
        </View>
        <CabBookingModal />
        <CarButtons />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </Pressable>
      </ScrollView>
    </ScreenWrapper>
  );
}
