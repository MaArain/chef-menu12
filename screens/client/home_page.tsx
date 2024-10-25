import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { MenuItem } from '../chef/menu'; 

// Navigation props allows screen to navigate through the app
type IndexScreenProps = {
  navigation: NavigationProp<any>;
  menu: MenuItem[]; 
};

export default function IndexScreen({ navigation, menu }: IndexScreenProps) {
  // Filtering array to get different sections
  const starters = menu.filter(item => item.courseType === 'starters');
  const mains = menu.filter(item => item.courseType === 'mains');
  const desserts = menu.filter(item => item.courseType === 'desserts');
  
  const totalItems = menu.length;

  // Function to calculate average price
  const calculateAverage = (items: MenuItem[]) => {
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (total / items.length).toFixed(2);
  };

  const averageStarters = calculateAverage(starters);
  const averageMains = calculateAverage(mains);
  const averageDesserts = calculateAverage(desserts);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <Image source={require('../../assets/chefimage.jpg')} style={styles.image} />
          <Text style={styles.title}>Full Menu</Text>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.sectionTitle}>Starters:</Text>
          {starters.map((item) => (
            <View key={item.name} style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          ))}
          <Text style={styles.averagePrice}>Average Price: R{averageStarters}</Text>

          <Text style={styles.sectionTitle}>Mains:</Text>
          {mains.map((item) => (
            <View key={item.name} style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          ))}
          <Text style={styles.averagePrice}>Average Price: R{averageMains}</Text>

          <Text style={styles.sectionTitle}>Desserts:</Text>
          {desserts.map((item) => (
            <View key={item.name} style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          ))}
          <Text style={styles.averagePrice}>Average Price: R{averageDesserts}</Text>

          <Text style={styles.totalItems}>Total Items in Menu: {totalItems}</Text>
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
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    margin: 5,
  },
  title: {
    fontSize: 24,
    color: 'black',
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
    borderColor: 'orange',
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'orange',
    textDecorationLine: 'underline',
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
});
