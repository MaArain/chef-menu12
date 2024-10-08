import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Modal } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Navigation props allows screen to navigate through the app.
type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.topContainer}>
        <Image source={require('../assets/trialPic.png')} style={styles.image} />
        
        <Button 
          title='Chef Login' 
          onPress={() => navigation.navigate('ChefScreen')} 
          color="black">
        </Button>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Menu Sections:</Text>
        
        <View style={styles.buttonContainer}> 
          <Button title='Full Menu' onPress={() => navigation.navigate('Home Page')} color="black"></Button>
          <Button title='Starters' onPress={() => navigation.navigate('Starters')} color="black"></Button>
          <Button title='Main Courses' onPress={() => navigation.navigate('Main Courses')} color="black"></Button>
          <Button title='Desserts' onPress={() => navigation.navigate('Desserts')} color="black"></Button>
          <Button title='Add item' onPress={() => navigation.navigate('ChefScreen')} color="black"></Button>
        </View>
      </View>

      <View style={styles.backButtonContainer}>
        <Button title='Back' onPress={() => navigation.navigate('Login')} color="black"></Button>
      </View>

    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 20,
  },
  topContainer: {
    flex: 2,
    backgroundColor: '#F5F5F5', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '100%',
    padding: 10,
    elevation: 5,
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 3,
  },
  bottomContainer: {
    flex: 3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 3,
  },
  backButtonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: '60%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 20,
  },
});
