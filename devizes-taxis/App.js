import React, { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

import * as Font from "expo-font";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    // You may want to render a loading indicator or an empty view until the font is loaded
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const phoneNumber = "07493 030761";
  const handlePhonePress = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          console.log("Phone number not supported");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const white = "#ffffff";
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/p/AF1QipO8mnhUlXaa0MK4vuRDZ0wxF4qAUABH9J1qHP2O=s3840-w3840-h1888-rw",
        }}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      ></Image>

      <View
        style={{
          backgroundColor: white + "CC",
          width: "250px",
          height: "60%",
          position: "absolute",
          borderRadius: "20px",
          padding: 20, // Adjust padding as needed
          paddingLeft: 30, // Adjust padding as needed
          elevation: 5, // Set the elevation to create a shadow effect
          margin: 20, // Adjust margin as needed
          shadowColor: "#000",
          shadowOffset: { width: 5, height: 5 },
          shadowRadius: 10,
        }}
      >
        <h1 style={{ fontFamily: "Roboto_700Bold" }}>
          Devizes<br></br>Taxi<br></br>Daily
        </h1>
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "flex-start",
              marginTop: "10%",
            },
          ]}
        >
          <Text style={[styles.text, styles.icon]}>🕑</Text>
          <View style={styles.tableContainer}>
            <View style={styles.row}>
              <Text style={styles.day}>Sunday</Text>
              <Text style={styles.time}>8am–7pm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.day}>Monday</Text>
              <Text style={styles.time}>7am–11pm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.day}>Tuesday</Text>
              <Text style={styles.time}>7am–11pm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.day}>Wednesday</Text>
              <Text style={styles.time}>7am–11pm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.day}>Thursday</Text>
              <Text style={styles.time}>7:30am–11pm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.day}>Friday</Text>
              <Text style={styles.time}>Open 24 hours</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.day}>Saturday</Text>
              <Text style={styles.time}>Open 24 hours</Text>
            </View>
          </View>
        </View>
        <View style={[{ flexDirection: "row", marginTop: "15%" }]}>
          <Text style={[styles.text, styles.icon]}>📞</Text>
          <Pressable onPress={handlePhonePress}>
            <Text
              style={[
                styles.text,
                {
                  color: "blue",
                  textDecorationLine: "underline",
                  fontFamily: "Roboto_700Bold",
                  fontSize: "1.3rem",
                },
              ]}
            >
              {phoneNumber}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  tableContainer: {
    flex: 1,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    lineHeight: "150%",
    fontSize: "1rem",
  },
  icon: {
    left: "-5%",
    fontSize: "2rem",
    top: "-4%",
  },
  title: {
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    textAlign: "auto",
    width: "100%",
  },
  day: {
    fontFamily: "Roboto_700Bold",
  },
  time: {
    fontFamily: "Roboto_500Medium",
  },
});
