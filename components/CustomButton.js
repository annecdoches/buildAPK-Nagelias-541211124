import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, TextInput, ScrollView, TouchableOpacity, onPress } from 'react-native';




const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.loginText}>{props.title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: '#4F709C',
    borderRadius: 25,
    height: 50,
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },

  

})

export default CustomButton;


