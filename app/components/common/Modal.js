import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from "./Button";
import CloseButton from "./CloseButton";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";

/**
* @props:
*  headerText: string;
*  body: string;
*  onCancel: () => void;
*  confirmText?: string;
*  cancelText?: string;
*  onConfirm?: () => void;
**/


function Modal(props) {
  return (
    <View style={styles.underlay} onPress={props.onCancel}>
      <View style={styles.container}>
        <CloseButton onPress={props.onCancel} containerStyle={styles.closeButton} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{props.headerText.toUpperCase()}</Text>
          <Text style={styles.body}>{props.body}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {props.cancelText && <Button onPress={props.onCancel} text="No" color={styles.white} /> }
          <View style={styles.separator}/>
          {props.confirmText && <Button onPress={props.onConfirm} text="Yes" color={styles.cyan} /> }
        </View>
      </View>
    </View>
  );
}

const TEXT_STYLE = {
  fontFamily: fonts.bold, // Not sure why but the bold font is not appearing bold
  fontWeight: "bold",
  fontSize: 20,
}

const styles = StyleSheet.create({
  underlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    height: 200, // This doesn't scale well but suits the current needs
    width: '90%',
    backgroundColor: colors.yellow,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 15,
  },

  closeButton: {
    alignSelf: "flex-end",
  },

  textContainer: {
    flex: 1,
    alignSelf: "flex-start",
    paddingTop: 20,
  },

  heading: {
    ...TEXT_STYLE,
    textDecorationLine: "underline",
  },

  body: TEXT_STYLE,

  buttonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },

  cyan: {
    backgroundColor: colors.cyan
  },

  white: {
    backgroundColor: colors.white
  },

  separator: {
    width: 10
  }
});

export default Modal;