import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setInitialRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker coordinate={initialRegion} title="Your Location" />
        </MapView>
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Where to?</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.placeholder} placeholder="Enter your destination" placeholderTextColor="#999" />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <View style={styles.modeButtonContainer}>
              <TouchableOpacity style={styles.modeButton}>
                <Text style={styles.modeButtonText}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modeButton}>
                <Text style={styles.modeButtonText}>Bike</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      <TouchableOpacity style={styles.openModalButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.openModalButtonText}>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputContainer: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholder: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "skyblue",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  modeButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modeButton: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  modeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  closeButton: {
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  openModalButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "skyblue",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  openModalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MapScreen;








