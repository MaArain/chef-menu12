import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { MenuItem } from '../chef/menu'; 
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

type EditScreenProps = {
  navigation: NavigationProp<any>;
  menu: MenuItem[]; 
  removeMenuItem: (name: string) => void;
};

export default function EditScreen({ navigation, menu, removeMenuItem }: EditScreenProps) {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const filteredMenu = selectedCourse === 'all' ? menu : menu.filter(item => item.courseType === selectedCourse);

  const calculateAverage = (items: MenuItem[]) => {
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (total / items.length).toFixed(2);
  };

  const averagePrice = calculateAverage(filteredMenu);

  const handleDelete = (itemName: string, removeMenuItem: (name: string) => void) => {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${itemName}?`,
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          onPress: () => removeMenuItem(itemName),
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Remove items</Text>

        <Picker
          selectedValue={selectedCourse}
          onValueChange={(itemValue) => setSelectedCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Full menu" value="all" />
          <Picker.Item label="Starters" value="starters" />
          <Picker.Item label="Mains" value="mains" />
          <Picker.Item label="Desserts" value="desserts" />
        </Picker>

        <View style={styles.menuContainer}>
          {filteredMenu.map((item) => (
            <View key={item.name} style={styles.menuItem}>

              <TouchableOpacity onPress={() => handleDelete(item.name, removeMenuItem)} style={styles.deleteIcon}>
                <Icon name="trash-bin-outline" size={40} color="red" />
              </TouchableOpacity>
              
              
              
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          ))}
          <Text style={styles.averagePrice}>Average Price: R{averagePrice}</Text>
          <Text style={styles.totalItems}>Total Items in Menu: {filteredMenu.length}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Button 
          title='Back' 
          onPress={() => navigation.navigate('Login')} 
          color="black"
        />
      </View>
    </View>
  );
}


// Styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 20,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    textDecorationLine: 'underline',
  },
  scrollContainer: {
    width: '100%',
  },
  menuContainer: {
    width: '100%',
    paddingVertical: 10,
  },
  menuItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    width: '100%',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  averagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
  totalItems: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
  itemImage: {
    width: 100,
    height: 100, 
    borderRadius: 8,
    marginBottom: 5,
  },
  pickerContainer: {
    borderRadius: 8, 
    marginBottom: 10,
  },
  picker: {
    height: 80,
    width: '100%',
    color: 'black',
    backgroundColor: 'white',
  },
  deleteIcon: {
    color: 'black',
    marginLeft: 250,
    marginTop: 10,
    marginBottom: -50,
  },
});
