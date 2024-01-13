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
  onPress,
} from 'react-native';

import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

export default function Login({navigation}) {
  const handleChangeText = (text) => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/hana-bank.jpg')}
      />
      <Text style={styles.title}>Halo</Text>
      <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan </Text>
      <CustomInput
        placeholder="Username"
        onChangeText={handleChangeText}
        secureTextEntry={false}
      />

      <CustomInput
        placeholder="Password"
        onChangeText={handleChangeText}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.forgotPasswordBtn}>
        <Text style={styles.forgotPasswordText}>Lupa Password? </Text>
      </TouchableOpacity>``

      <CustomButton title="Masuk" onPress={() => navigation.navigate('porto')}/>
      <Text style={styles.secText}>atau </Text>
      <CustomButton title="Daftar" onPress={() => navigation.navigate('register')}/>

    </View>
    
  );
}

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
    fontSize: 25,
    fontWeight: 'bold',
  },

  avatar: {
    height: 80,
    width: 80,
    marginVertical: 10,
    borderRadius: 25,
  },
  subtitle: {
    color: 'grey',
    marginBottom: 15,
    marginTop: 10,
  },

  forgotPasswordBtn: {
    alignItems: 'flex-end',
    width: '80%',
    marginTop: 10,
  },

  forgotPasswordText: {
    fontSize: 12,
    textAlign: 'right',
  },



  secText: {
    fontSize: 12,
  },
});
