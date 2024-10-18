import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';


import HomeScreen from './screens/home_page';
import StartersScreen from './screens/starters';
import MainCoursesScreen from './screens/main_courses'; 
import DessertsScreen from './screens/desserts'; 
import ChefScreen from './screens/chef';
import LoginScreen from './screens/login_screen'; 
import menuData, { MenuItem } from './screens/menu'; 

const Stack = createNativeStackNavigator(); 

// Expects array for each screen
type StackParamList = {
  Login: undefined;
  FullMenu: { menu: MenuItem[] };
  Starters: { menu: MenuItem[] }; 
  MainCourses: { menu: MenuItem[] }; 
  Desserts: { menu: MenuItem[] }; 
  ChefScreen: { addMenuItem: (item: MenuItem) => void }; 
};


export default function App() {
  // Allows for changes to menu throughout the app
  const [menu, setMenu] = useState<MenuItem[]>(menuData);

  // Function to add new menu item
  const addMenuItem = (item: MenuItem) => {
    setMenu((prevMenu) => {
      const updatedMenu = [...prevMenu, item];
      return updatedMenu;
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen 
          name='Home Page' 
          children={({ navigation }) => <HomeScreen navigation={navigation} menu={menu} />} 
        />
        <Stack.Screen 
          name='Starters' 
          children={({ navigation }) => <StartersScreen navigation={navigation} menu={menu} />} 
        />
        <Stack.Screen 
          name='Main Courses' 
          children={({ navigation }) => <MainCoursesScreen navigation={navigation} menu={menu} />} 
        />
        <Stack.Screen 
          name='Desserts' 
          children={({ navigation }) => <DessertsScreen navigation={navigation} menu={menu} />} 
        />
        <Stack.Screen 
          name='ChefScreen' 
          children={({ navigation }) => 
        <ChefScreen navigation={navigation} addMenuItem={addMenuItem} />} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
