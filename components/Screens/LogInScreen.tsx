import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://10.0.2.2:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(data => {
        // Assuming your backend sends a 'success' message upon successful login
        if (data.status == "success") {
          // Navigate to Home screen upon successful login
          navigation.navigate('Home');
        } else {
          // Handle login failure here, maybe show an alert
          Alert.alert('Login Failed', 'Invalid email or password.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any network errors or other errors
        Alert.alert('Error', 'An error occurred. Please try again.');
      });
  };


  const handleSignUp = () => {
    // console.log('Sign Up button pressed');
    navigation.navigate('SignUp');
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-3xl font-bold mb-8`}>Login</Text>
      <TextInput
        style={tw`bg-white w-3/4 p-3 mb-4 rounded-md`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={tw`bg-white w-3/4 p-3 mb-4 rounded-md`}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={tw`bg-blue-500 w-3/4 p-3 rounded-md items-center mb-4`}
        onPress={handleLogin}
      >
        <Text style={tw`text-white font-bold`}>Login</Text>
      </TouchableOpacity>
      <Text style={tw`mt-4`}>Don't have an account?</Text>
      <TouchableOpacity style={tw`mt-4`} onPress={handleSignUp}>
        <Text style={tw`text-blue-500`}> Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
