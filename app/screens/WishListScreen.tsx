import React from "react";
import { StyleSheet, Text, View } from "react-native";
 
export default function WishlistScreen() {
  return (
<View style={styles.container}>
<Text>Votre liste de souhaits est vide.</Text>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});