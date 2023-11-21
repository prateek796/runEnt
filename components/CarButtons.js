import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const CarButtons = () => {
    const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center p-4">
      <TouchableOpacity
        style={styles.button}
        className="bg-blue-200 w-20 h-20 rounded-2xl border-2 overflow-hidden justify-between items-center"
         onPress={()=> navigation.push('Booking')}
      >
        <Image source={require("../assets/car.jpeg")} style={styles.image} />
        <Text style={styles.text}>CAB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        className="bg-blue-200 w-20 h-20 rounded-2xl border-2 overflow-hidden justify-evenly items-center"
         onPress={()=> navigation.push('Booking')}
      >
        <Image source={require("../assets/car.jpeg")} style={styles.image} />
        <Text style={styles.text}>PREMIUM</Text>
        <Text style={styles.text}>Cab</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        className="bg-blue-200 w-20 h-20 rounded-2xl border-2 overflow-hidden justify-evenly items-center"
         onPress={()=> navigation.push('Booking')}
      >
        <Image source={require("../assets/car.jpeg")} style={styles.image} />
        <Text style={styles.text}>EV</Text>
        <Text style={styles.text}>CAb</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        className="bg-blue-200 w-20 h-20 rounded-2xl border-2 overflow-hidden justify-between items-center"
        onPress={()=> navigation.push('Booking')}
      >
        <Image source={require("../assets/car.jpeg")} style={styles.image} />
        <Text style={styles.text}>INTERCITY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#000"
  },
  image: {
    width: "100%",
    height: "75%"
  },
  text: {
    fontSize: 10
  },
});

export default CarButtons;
