import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import { MenuItem } from './menu'; 
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

type ChefScreenProps = {
  navigation: NavigationProp<any>;
  addMenuItem: (item: MenuItem) => void;
};

export default function ChefScreen({ navigation, addMenuItem }: ChefScreenProps) {
  const [courseType, setCourseType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (!courseType || !name || !description || !price || !image) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const newItem: MenuItem = {
      courseType: courseType.toLowerCase(),
      name,
      description,
      price: parseFloat(price),
      image,
    };

    addMenuItem(newItem);

    setCourseType('');
    setName('');
    setDescription('');
    setPrice('');
    setImage('');

    alert(`Course Added:\nType: ${courseType}\nName: ${name}\nDescription: ${description}\nPrice: ${price}`);
  };

  const pickImage = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.bottomContainer}>
          <Text style={styles.title}>Add items</Text>
          <Button title="Edit full menu" onPress={() => navigation.navigate('EditScreen')} />

          <Picker
            selectedValue={courseType}
            onValueChange={(itemValue) => setCourseType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Course Type" value="" />
            <Picker.Item label="Starters" value="starters" />
            <Picker.Item label="Mains" value="mains" />
            <Picker.Item label="Desserts" value="desserts" />
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={pickImage}>
           <Icon name="add-circle" size={50} color="blue" />
          </TouchableOpacity>
          {image ? <Image source={{ uri: image }} style={styles.imagePreview} /> : null}

          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
          <Button title="Add" onPress={handleSubmit} color='black'/>

        </View>
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    gap: 14,
  },
  imagePreview: {
    width: '50%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
    width: '80%',
  },
  picker: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 15,
    fontSize: 16,
  },
});
