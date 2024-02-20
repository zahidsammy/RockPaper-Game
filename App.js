import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RockPaper from './components/RockPaper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <RockPaper/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
