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

const CustomInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 15,
  },
});

export default CustomInput;
