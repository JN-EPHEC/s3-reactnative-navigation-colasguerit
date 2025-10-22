import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AllCoursesStackParamList } from "../_layout";
 
type Props = StackScreenProps<AllCoursesStackParamList, "CourseDetail">;
 
export default function CourseDetailScreen({ route }: Props) {
  const { title, description } = route.params;
 
  return (
<ScrollView style={styles.container}>
<View style={styles.content}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.body}>{description}</Text>
</View>
</ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});