import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const PrimaryButton = ({ onBtnPress, title, initialColor, activeColor }) => {
  const [buttonColor, setButtonColor] = useState(initialColor);

  const handlePress = () => {
    const newColor = buttonColor === initialColor ? activeColor : initialColor;
    setButtonColor(newColor);
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: buttonColor,
  };
  return (
    <Pressable style={buttonStyle} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 350,
    borderRadius: 15,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.25,
    color: colors.darkNavy,
  },
});

export default PrimaryButton;
