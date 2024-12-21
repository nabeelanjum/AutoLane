import React from 'react';
import {FlatList, View} from 'react-native';
import useHome from '../../hooks/queries/useHome';
import styles from './styles';
import CarStatusTile from '../../components/CarStatusTile';

const Home: React.FC = () => {
  const {data = [], isLoading, refetch} = useHome();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({item}) => <CarStatusTile item={item} />}
        keyExtractor={item => item.id}
        onRefresh={refetch}
        refreshing={isLoading}
      />
    </View>
  );
};

export default Home;
