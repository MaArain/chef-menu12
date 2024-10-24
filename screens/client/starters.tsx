import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { MenuItem } from '../chef/menu'; 

// Navigation props allows screen to navigate through the app.
type StartersScreenProps = {
  navigation: NavigationProp<any>;
  menu: MenuItem[]; 
};

export default function StartersScreen({ navigation, menu }: StartersScreenProps) {
  
  const starters = menu.filter(item => item.courseType === 'starters');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <Image source={require('../../assets/trialPic.png')} style={styles.image} />
          <Text style={styles.title}>Starters</Text>
        </View>

        {/* .map function to look through and find items in array*/}
        <View style={styles.menuContainer}>
          {starters.map((item) => (
            <View key={item.name} style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          ))}
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
  topContainer: {
    height: 200,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '100%',
    padding: 10,
    elevation: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
  },
  bottomContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  scrollContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  menuContainer: {
    width: '100%',
    paddingVertical: 10,
  },
  menuItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 3,
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
  itemImage: {
    width: 100,
    height: 100, 
    borderRadius: 8,
    marginBottom: 5,
  },
});
