import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({onPress, children, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 9,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 9,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.6,
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});

export default Button;
