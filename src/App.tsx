import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './navigation';
import QueryProvider from './api/QueryProvider';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <QueryProvider>
        <RootNavigation />
      </QueryProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
