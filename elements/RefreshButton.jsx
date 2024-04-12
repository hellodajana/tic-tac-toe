import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import RefreshIcon from '../assets/RefreshIcon';
import colors from '../styles/colors';

const RefreshButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <RefreshIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: colors.silver,
  },

  icon: {
    width: 50,
    height: 50,
  },
});

export default RefreshButton;
