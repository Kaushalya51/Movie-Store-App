import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground,Image,Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'rusirukavinda630@gmail.com' && password === 'Abc@123') {
      Alert.alert('successfully loggin');
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Invalid login credentials');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/line.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.title}>
          <Text style={styles.text1}>WelCome Back,</Text>
          <Text style={styles.text2}>Sign in to your account</Text>
        </View>
        <Image 
        source={require('../assets/loginlogo.png')}
        style={styles.logoImage}
        />
        
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            onChangeText={text => setEmail('rusirukavinda630@gmail.com')}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            onChangeText={text => setPassword('Abc@123')}
            value={password}
            secureTextEntry
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpText}>Dont have an account? Sign up </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09212e',
  },
  title:{
    position:'absolute',
    top:110,
  },
  text1: {
    fontFamily: 'Arial',
    fontSize:40,
    fontWeight: 'bold',
    color: '#f0a105',
  },
  text2: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#fff',
  },
  logoImage:{
    position:'absolute',
    width:250,
    height:200,
    alignItems:'center',
    top:220,
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    color: '#fff',
  },
  inputcontainer: {
    width: '100%',
    alignItems: 'center',
    top: 125,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#f0a105',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpText: {
    marginTop: 20,
    color: '#fff',
  },
  bottomContainer: {
    width: '80%',
    alignItems: 'center',
    top: 145,
  },
});

export default LoginScreen;
