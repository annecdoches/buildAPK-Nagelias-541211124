import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import CustomImage from './CustomImage'

export default function App({navigation}) {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikePress = () => {
    setLikes(likes + 1);
  };

  const handleDislikePress = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('../assets/porto-nagel.png')}
        />
        <Text style={styles.title}>Nagelia Salbila</Text>
        <Text style={styles.subTitle}>
          Saya adalah anak pertama dari 2 bersaudara yang sedari lahir hingga
          sekarang tinggal di Purbalingga. Saya memiliki minat dan hobi di
          bidang menulis, menggambar, dan bermain musik
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Halo, selamat datang!')}>
          <Text style={styles.contactText}>Contact Me</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {navigation.navigate('login')}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {navigation.navigate('register')}}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

        <Text style={styles.title2}>My Recent Project</Text>
        <CustomImage gambar={require('../assets/porto1.png')} />
        <Text style={styles.title3}>Mockup Designs</Text>

        <Text style={styles.textl}>Likes: {likes}</Text>
        <Text style={styles.textl}>Dislikes: {dislikes}</Text>
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLikePress}>
        <Image style={styles.iconlike} source={require('../assets/like.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDislikePress}>
        <Image style={styles.iconlike} source={require('../assets/dislike.png')} />
        </TouchableOpacity>
      </View>
      
        <CustomImage gambar={require('../assets/porto2.png')} />
        <Text style={styles.title3}>Logo Designs</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => Alert.alert('Coming Soon!')}>
          <Text style={styles.buttonText}>View Project</Text>
        </TouchableOpacity>
        <CustomImage gambar={require('../assets/porto3.png')} />
        <Text style={styles.title3}>Custom Designs</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => Alert.alert('Coming Soon!')}>
          <Text style={styles.buttonText}>View Project</Text>
        </TouchableOpacity>
        <CustomImage gambar={require('../assets/porto4.png')} />
        <Text style={styles.title3}>Custom Designs</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => Alert.alert('Coming Soon!')}>
          <Text style={styles.buttonText}>View Project</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  subTitle: {
    color: 'grey',
    marginBottom: 30,
    textAlign: 'center',
  },
  avatar: {
    height: 120,
    width: 120,
    marginVertical: 20,
    borderRadius: 50,
  },
  button: {
    backgroundColor: '#4F709C',
    borderRadius: 25,
    height: 40,
    width: '55%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactText: {
    fontWeight: 'bold',
    color: 'white',
  },

  title2: {
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 30,
    fontSize: 20,
  },



  title3: {
    fontWeight: 'bold',
    paddingTop: 15,
    fontSize: 17,
  },

  button2: {
    backgroundColor: '#4F709C',
    borderRadius: 25,
    height: 20,
    width: '40%',
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

    button3: {
    backgroundColor: '#4F709C',
    borderRadius: 25,
    height: 50,
    width: '50%',
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },

  textl: {
    height: 15,
    width: '80%',
    marginTop: 2,
    marginBottom: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 30,
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginTop: 5,
  },

  iconlike: {
    height: 30,
    width: 30,
  },
  
});

