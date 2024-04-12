import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './elements/PrimaryButton';
import SecondaryButton from './elements/SecondaryButton';
import colors from './styles/colors';
import RefreshButton from './elements/RefreshButton';
import StartGame from './components/StartGame';

const App = () => {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkNavy,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
