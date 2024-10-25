import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import HomeScreen from './screens/client/home_page';
import StartersScreen from './screens/client/starters';
import MainCoursesScreen from './screens/client/main_courses'; 
import DessertsScreen from './screens/client/desserts'; 
import ChefScreen from './screens/chef/chef';
import LoginScreen from './screens/client/login_screen'; 
import menuData, { MenuItem } from './screens/chef/menu'; 
import EditScreen from './screens/chef/edit_screen';

const Stack = createNativeStackNavigator(); 

// Expects array for each screen
type StackParamList = {
  Login: undefined;
  FullMenu: { menu: MenuItem[] };
  Starters: { menu: MenuItem[] }; 
  MainCourses: { menu: MenuItem[] }; 
  Desserts: { menu: MenuItem[] }; 
  ChefScreen: { addMenuItem: (item: MenuItem) => void }; 
  EditScreen: { menu: MenuItem[]; removeMenuItem: (name: string) => void }; // Add this line
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

  // Function to remove a menu item
  const removeMenuItem = (name: string) => {
    setMenu((prevMenu) => prevMenu.filter(item => item.name !== name));
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
        
        <Stack.Screen 
          name='EditScreen' 
          children={({ navigation }) => 
            <EditScreen 
              navigation={navigation} 
              menu={menu} 
              removeMenuItem={removeMenuItem} 
            />} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
