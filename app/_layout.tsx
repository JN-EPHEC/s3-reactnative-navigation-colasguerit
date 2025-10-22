import "react-native-reanimated";
import { DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
 
import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Pressable } from "react-native";
 
export type AllCoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};
 
const Stack = createStackNavigator<AllCoursesStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
 
function HamburgerIcon({
  navigation,
}: {
  navigation: StackScreenProps<any>["navigation"];
}) {
  return (
<Pressable
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{ marginLeft: 15 }}
>
<Ionicons name="menu" size={24} color="black" />
</Pressable>
  );
}
 
function AllCoursesNavigator() {
  return (
<Stack.Navigator>
<Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={({ navigation }) => ({
          title: "Tous les cours",
          headerLeft: () => <HamburgerIcon navigation={navigation} />,
        })}
      />
<Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
</Stack.Navigator>
  );
}
 
function CoursesTabNavigator() {
  return (
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="AllCourses" component={AllCoursesNavigator} />
<Tab.Screen name="MyWishlist" component={WishlistScreen} />
</Tab.Navigator>
  );
}
 
export default function RootLayout() {
  return (
<Drawer.Navigator>
<Drawer.Screen
        name="Courses"
        component={CoursesTabNavigator}
        options={{ headerShown: false }}
      />
<Drawer.Screen name="My Profile" component={ProfileScreen} />
</Drawer.Navigator>
  );
}