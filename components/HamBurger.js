import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
const HamBurgerIcon = require("../assets/more.png");
const Close = require("../assets/close.png");

const HamBurger = ({ open }) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    isOpen ? toggleMenu() : null;
  };

  return (
    <Pressable
      className="flex justify-between flex-row h-16 bg-yellow-300"
      style={[
        {
            height: isOpen ? 200:64
        }
      ]}
      onPress={closeMenu}
    >
      <View className="flex-row flex-1 justify-between p-2">
        <Text className="font-black text-3xl shadow-sm pt-1">AI TAXIS</Text>
        <Pressable
          className="w-11 h-11 bg-gray-200 rounded-full flex justify-center items-center"
          onPress={toggleMenu}
        >
          {isOpen ? (
            <Image className="h-5 w-5" source={Close} />
          ) : (
            <Image
              className="h-6 w-6"
              source={HamBurgerIcon}
              onPress={toggleMenu}
            />
          )}
        </Pressable>
      </View>
      <View
        className="flex-row container rounded-xl justify-around items-center p-10"
        style={[
          styles.menu,
          {
            transform: [{ translateX: isOpen ? 0 : -200 }],
            opacity: isOpen ? 1 : 0,
          },
        ]}
      >
        <TouchableOpacity
          className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center"
          onPress={() => {
            // This will open the page for the "Item 1" menu item.
            toggleMenu()
            navigation.navigate("Home");
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText} className="">
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center"
          onPress={() => {
            // This will open the page for the "Item 2" menu item.
            navigation.navigate("Login");
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText} >
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center"
          onPress={() => {
            // This will open the page for the "Item 3" menu item.
            navigation.navigate("Home");
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center"
          onPress={() => {
            // This will open the page for the "Item 4" menu item.
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Item</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  hamburger: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 200,
    zIndex: 1000,
    overflow:"visible",
  },
  menuItem: {
    padding: 10,
    color: "#fff",
  },
  menuItemText: {
    fontSize: 12,
  },
});

export default HamBurger;
