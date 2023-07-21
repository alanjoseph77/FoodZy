import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SplashPage = ({ navigation }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Perform any asynchronous tasks or initialization here

    // Simulate a delay for the splash screen
    const splashTimeout = setTimeout(() => {
      setShowButton(true);
    }, 2000); // 2000 milliseconds (2 seconds)

    return () => clearTimeout(splashTimeout);
  }, []);

  const handleButtonPress = () => {
    // Navigate to the main app screen or any other desired screen
    // Example: navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/recipes/biri.png')}
        style={styles.logo}
      />
      <Text style={styles.appName}>FOodZy</Text>
      {showButton && (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashPage;
