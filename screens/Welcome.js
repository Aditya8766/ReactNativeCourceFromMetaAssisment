import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        <Text>Newsletter</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 27,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 200,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Welcome;
