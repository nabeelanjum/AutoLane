import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './navigation';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
