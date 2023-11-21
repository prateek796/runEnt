
import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CabBookingModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Book a ride</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.placeholderContainer}>
          <View style={styles.dot} />
          <TextInput
            style={styles.placeholder}
            placeholder="Enter your destination"
            placeholderTextColor="#999"
          />
          <Ionicons name="search" size={24} color="#999" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Select Dropoff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    padding: 16,
    marginHorizontal:10,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 16,
  },
  placeholderContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "blue",
    marginRight: 8,
  },
  placeholder: {
    flex: 1,
    fontSize: 16,
    color: "#000",
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
});

export default CabBookingModal;