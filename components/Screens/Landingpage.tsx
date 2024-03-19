import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LandingPage = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to the login screen
    // console.log('Login button pressed');

    navigation.navigate('Login')
  };

  const handleSignUp = () => {
    // Navigate to the signup screen
    console.log('Sign Up button pressed');
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/random/800x600' }} // You can replace this with your own image
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={tw`text-white text-4xl font-bold mb-8`}>
          Learning made easy with our AI assistant
        </Text>
        <Text style={tw`text-white text-lg mb-8`}>
          Learning has never been easier with our personalized AI assistant. You can ask any question and get a complete roadmap on how to learn something.
        </Text>
        <View style={tw`flex-row justify-center`}>
          <TouchableOpacity
            style={tw`bg-blue-500 w-1/3 p-4 rounded-md mr-4 items-center`}
            onPress={handleLogin}
          >
            <Text style={tw`text-white font-bold`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-green-500 w-1/3 p-4 rounded-md items-center`}
            onPress={handleSignUp}
          >
            <Text style={tw`text-white font-bold`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingPage;
