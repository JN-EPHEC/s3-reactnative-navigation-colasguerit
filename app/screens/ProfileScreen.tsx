import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileCard from "../../components/ProfileCard";
 
export default function ProfileScreen() {
  return (
<View style={styles.container}>
<ProfileCard
        name="Alex Dubois"
        jobTitle="Développeur React Native"
        imageUrl="https://i.pravatar.cc/150?u=alexdubois"
      />
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
});