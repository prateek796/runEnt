
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Banner = () => {
  return (
    <View style={styles.container} className="m-[10px]">
      <View style={styles.textContainer}>
        <Text style={styles.title}>Become a captain today!</Text>
        <Text style={styles.subtitle}>Earn instantly with AI TAXI</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up now</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/car.jpeg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    padding: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "skyblue",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 16,
  },
});

export default Banner;