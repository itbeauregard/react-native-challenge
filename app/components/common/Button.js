import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from "../../assets/colors";
import fonts from "../../assets/fonts";

/*
@props:
  onPress: function triggered when button is pressed
  text: text on the button
  color: color of the button
  disabled: determines whether button is pressable
*/

function Button(props) {
  const disabledStyle = props.disabled && styles.buttonDisabled;

  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.container, props.color, disabledStyle]}>
      <Text style={styles.text}>{props.text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70, 
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 3,
  },

  buttonDisabled: {
    backgroundColor: colors.white
  },

  text: {
    fontFamily: fonts.medium,
    alignSelf: "center"
  }
});

export default Button;