import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';

const CustomImage = (props) => {
  return(
    <Image
    source={props.gambar}
    style={styles.avatar2}
    />
  );
}

const styles = StyleSheet.create({

avatar2: {
    height: 120,
    width: 170,
    borderRadius: 15,
    marginTop: 10,
 },
});


export default CustomImage;