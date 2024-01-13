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

export default function Register({navigation}) {
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
      <Text style={styles.subtitle}>Silahkan mendaftar untuk melanjutkan </Text>
      <CustomInput
        placeholder="Nama Lengkap"
        onChangeText={handleChangeText}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Username/Email"
        onChangeText={handleChangeText}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        onChangeText={handleChangeText}
        secureTextEntry={false}
      />

      <CustomButton title="Daftar" onPress={() => {navigation.navigate('porto')}}/>
      <TouchableOpacity>
             <Text style={styles.forgot1} onPress={() => {navigation.navigate('login')}}>Login</Text>
        </TouchableOpacity>

      
     
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

  forgot1:{
    color:"#CE5A67",
    fontSize:12
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

  
});
