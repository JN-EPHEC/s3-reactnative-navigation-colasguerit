import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AllCoursesStackParamList } from "../_layout";
 
export const COURSES = [
  {
    id: "1",
    title: "React Native pour les Nuls",
    description:
      "Apprenez les bases de React Native et construisez votre première application mobile. Ce cours couvre les composants, le style, la navigation et la gestion d'état simple.",
  },
  {
    id: "2",
    title: "JavaScript Avancé : L'Odyssée",
    description:
      "Explorez les concepts avancés de JavaScript, y compris les closures, les promesses, async/await, et les prototypes. Devenez un maître du langage.",
  },
  {
    id: "3",
    title: "UI/UX pour Développeurs",
    description:
      "Découvrez les principes fondamentaux du design d'interface et d'expérience utilisateur. Apprenez à créer des applications non seulement fonctionnelles, mais aussi belles et intuitives.",
  },
  {
    id: "4",
    title: "Le Guide Complet de TypeScript",
    description:
      "Maîtrisez TypeScript de A à Z. Ce cours vous apprendra à ajouter des types statiques à vos projets JavaScript pour améliorer la robustesse et la maintenabilité de votre code.",
  },
];
 
type Props = StackScreenProps<AllCoursesStackParamList, "CourseList">;
 
export default function CourseListScreen({ navigation }: Props) {
  return (
<FlatList
      style={styles.list}
      data={COURSES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
<Pressable
          style={styles.item}
          onPress={() => navigation.navigate("CourseDetail", { ...item })}
>
<Text style={styles.itemText}>{item.title}</Text>
</Pressable>
      )}
    />
  );
}
 
const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});