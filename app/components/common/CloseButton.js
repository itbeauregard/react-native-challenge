import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';


import images from "../../assets/images";

/*
@props:
  onPress: () => void; // function triggered when button is pressed
  containerStyle: ViewStyle;
*/

function CloseButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.containerStyle}>
      <Image style={styles.image} source={images.ic_close}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    margin: -10, // There is a 10px padding on the image asset
  },
});

export default CloseButton;