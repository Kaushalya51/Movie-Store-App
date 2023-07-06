import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image, ImageBackground } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Perform your registration validation here
    if (email && username && password && confirmPassword && password === confirmPassword) {
      // Registration is successful
      // You can store the user's details in a database or perform any other necessary actions
      navigation.navigate('Login');
    } else {
      // Display an error message or handle failed registration
      console.log('Invalid registration details');
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <ImageBackground
        source={require('../assets/line.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.title}>
          <Text style={styles.text1}>Join To Explore,</Text>
          <Text style={styles.text2}>Create your own account</Text>
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
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#fff"
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
      </View>
      <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
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
    top:45,
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
    top:150,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    color:'#fff',
  },
  inputcontainer:{
    width: '100%',
    alignItems: 'center',
    top:120,
  },
  button: {
    width: '80%',
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
  signInText: {
    marginTop: 20,
    color: '#fff',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    top:150,
  },
});

export default RegisterScreen;
