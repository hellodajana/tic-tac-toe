import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const SecondaryButton = ({ onBtnPress, title, initialColor, activeColor }) => {
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: colors.darkNavy,
  },
});

export default SecondaryButton;
