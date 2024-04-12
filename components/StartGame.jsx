import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import PrimaryButton from '../elements/PrimaryButton';
import colors from '../styles/colors';
import LogoIcon from '../assets/LogoIcon';
import XIcon from '../assets/XIcon';
import XIconOutline from '../assets/XIconOutline';
import OIcon from '../assets/OIcon';
import OIconOutline from '../assets/OIconOutline';

const StartGame = () => {
  const [player1Mark, setPlayer1Mark] = useState('X');
  const position = useRef(new Animated.Value(0)).current;

  const togglePlayerMark = () => {
    setPlayer1Mark((prevMark) => {
      const nextMark = prevMark === 'X' ? 'O' : 'X';
      Animated.spring(position, {
        toValue: nextMark === 'X' ? 0 : 1,
        useNativeDriver: false,
        bounciness: 10,
        speed: 14,
      }).start();
      return nextMark;
    });
  };

  const sliderStyle = {
    position: 'absolute',
    width: '40%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: colors.silver,
    left: position.interpolate({
      inputRange: [0, 1],
      outputRange: ['5%', '55%'],
    }),
  };

  return (
    <View style={styles.container}>
      <LogoIcon />
      <View style={styles.box}>
        <Text style={styles.text}>Pick player 1's mark</Text>
        <View style={styles.iconWrapper}>
          <Animated.View style={sliderStyle} />
          <TouchableOpacity onPress={togglePlayerMark}>
            {player1Mark === 'X' ? (
              <XIconOutline color={colors.silver} />
            ) : (
              <XIcon color={colors.silver} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayerMark}>
            {player1Mark === 'X' ? (
              <OIcon color={colors.silver} />
            ) : (
              <OIconOutline color={colors.silver} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.smallText}>Remember: X goes first</Text>
      </View>
      <PrimaryButton
        title="New Game (VS CPU)"
        onBtnPress={console.log('hello')}
        label="Button 1"
        initialColor={colors.darkYellow}
        activeColor={colors.yellow}
      />
      <PrimaryButton
        title="New Game (VS Player)"
        onBtnPress={console.log('hello')}
        label="Button 1"
        initialColor={colors.darkMint}
        activeColor={colors.mint}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  box: {
    backgroundColor: colors.semiDarkNavy,
    width: 350,
    paddingVertical: 32,
    gap: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: colors.silver,
  },
  smallText: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.88,
    color: colors.silver,
    opacity: 0.5,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    height: 100,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.darkNavy,
  },
});

export default StartGame;
