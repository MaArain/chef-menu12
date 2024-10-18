import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import { MenuItem } from './menu'; 
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

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
    if (!courseType || !name || !description || !price) {
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

    // Reset the fields
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
      setImage(pickerResult.assets[0].uri); // Use the first selected image
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <Image source={require('../assets/trialPic.png')} style={styles.image} />
          <Text style={styles.title}>Chef's Editing Page</Text>
        </View>

        <View style={styles.bottomContainer}>
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

          <Button title="Pick an image from gallery" onPress={pickImage} />
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
  topContainer: {
    height: 250,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '100%',
    padding: 10,
    elevation: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
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
    borderColor: 'orange',
    borderWidth: 3,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    marginBottom: 10,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  input: {
    height: 40,
    borderColor: 'orange',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 15,
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
